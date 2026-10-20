Hi Tom,

Great news that it was only the wire, and good thinking to order a spare E4.

Your idea was a good one, so I've added it to the Configurator anyway: when the board is FYSETC E4, the Controller tab now has a "motor driver assignment" box. You choose which of the four onboard drivers (X, Y, Z, E0) runs Axis1 (RA) and Axis2 (Dec). The leftover drivers go to the focuser/rotator axes (Axis4 first). The TMC UART addresses follow the physical driver, so TMC2209 drivers keep working. If you pick anything other than X/Y, Config.h uses `PINMAP OFF` with the E4 pin map written inline (the stock pin file can't be overridden from Config.h). I tested the generated pin lines, but not on real hardware, so please read the generated Config.h before flashing if you ever use it.

On the library question: the build service compiles OnStepX main with PlatformIO, so there is nothing to match in the Arduino IDE. If you do build it yourself, I'd start from the PlatformIO setup in the build-service folder of the repository rather than the Arduino IDE.

Clear skies,
Bogdan
