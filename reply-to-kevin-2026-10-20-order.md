Hi Kevin,

Thanks, that's very useful. You found a real bug: "Apply FYSETC E4 defaults" loads the E4 reference Config.h and was resetting the DEBUG setting to OFF, so the debug lines you added in the Controller tab were lost. I've fixed that. The button now keeps your DEBUG choice (and sets the debug baud to 9600).

Order of steps (after the fix is live, hard-refresh the page with Ctrl+F5):
1. Select the FYSETC E4 board and click "Apply FYSETC E4 defaults".
2. Fill in your mount (Calculator tab) and the other tabs.
3. In the Controller tab, set DEBUG to ON (or VERBOSE).
4. Generate / check the Config.h shown in Output. It should contain `#define DEBUG ON`.
5. Compile & Flash with ref=main (or E4).

Until the fix is live, do the steps in this order and make sure the Output shows your DEBUG line before compiling. If the button is clicked after setting DEBUG, the line is lost.

About the error with ref=main: the new line in your log is the clue:
  WRN: Pec::init(), bufferSize exceeds PEC partition size - PEC disabled
That appears only on main. My guess is that the PEC buffer size (computed from PEC_STEPS_PER_WORM_ROTATION in the Calculator tab) is too big for main's PEC storage. Could you send me the values of PEC_STEPS_PER_WORM_ROTATION, PEC_BUFFER_SIZE_LIMIT and your worm/gear numbers? As a test, set PEC_BUFFER_SIZE_LIMIT lower (e.g. 240) and see if the WRN and the NV error go away.

Bogdan
