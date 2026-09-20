/* ---------------------------------------------------------------------------------------------------------------------------------
 * Configuration for OnStepX
 *
 *          For more information on setting OnStep up see http://www.stellarjourney.com/index.php?r=site/equipment_onstep
 *                      and join the OnStep Groups.io at https://groups.io/g/onstep
 *
 *           *** Read the compiler warnings and errors, they are there to help guard against invalid configurations ***
 *
 * ---------------------------------------------------------------------------------------------------------------------------------
 * ADJUST THE FOLLOWING TO CONFIGURE YOUR CONTROLLER FEATURES ----------------------------------------------------------------------
 * <-Req'd = always must set, <-Often = usually must set, Option = optional, Adjust = adjust as req'd, Infreq = infrequently changed
*/
//      Parameter Name              Value   Default  Notes                                                                      Hint

// =================================================================================================================================
// CONTROLLER ======================================================================================================================
#define HOST_NAME                         "ONSTEP" // "nStep" Hostname for this device up to 16 chars.                                 Adjust

// PINMAP ------------------------------------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Controller#PINMAP
#define PINMAP                            OFF      // OFF,    Choose from: MiniPCB, MiniPCB2, MaxPCB4, MaxESP3, MaxESP4, MaxSTM3,     <-Req'd
                                          //         MaxSTM3I, FYSETC_E4, BTT_SKR_PRO, CNC3 (WeMos R32, deprecated), etc.
                                          //         Other boards and more info. in ~/src/Constants.h
                                          //         OFF here = user pin defs in Config.h. This build targets the
                                          //         Terrans Industry V5 Pro; its pin map is at the end of this file.

// SERIAL PORT COMMAND CHANNELS --------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Controller#SERIAL_PORTS
#define SERIAL_A_BAUD_DEFAULT             9600     // 9600,   n. Where n=9600,19200,57600,115200,230400,460800 (common baud rates.)    Infreq
#define SERIAL_B_BAUD_DEFAULT             9600     // 9600,   n. Baud rate as above. See (src/pinmaps/) for Serial port assignments.   Infreq
#define SERIAL_B_ESP_FLASHING             OFF      // OFF,    ON Upload ESP8266 WiFi firmware through SERIAL_B with :ESPFLASH# cmd.    Option
#define SERIAL_C_BAUD_DEFAULT             OFF      // OFF,    n. Baud rate as above. See (src/pinmaps/) for Serial port assignments.   Infreq
#define SERIAL_D_BAUD_DEFAULT             OFF      // OFF,    n. Baud rate as above. See (src/pinmaps/) for Serial port assignments.   Infreq
#define SERIAL_E_BAUD_DEFAULT             OFF      // OFF,    n. Baud rate as above. See (src/pinmaps/) for Serial port assignments.   Infreq
#define SERIAL_RADIO                      BLUETOOTH // OFF,    Use BLUETOOTH or WIFI_ACCESS_POINT or WIFI_STATION (ESP32 only.)         Option

// STATUS --------------------------------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Controller#STATUS_LED
#define STATUS_LED                        OFF      // OFF,    Steady illumination if no error, blinks w/error code otherwise.          Option

// RETICLE CONTROL ------------------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Controller#RETICLE_CONTROL
#define RETICLE_LED_DEFAULT               OFF      // OFF,    n. Where n=0..255 (0..100%) activates feature sets default brightness.   Option
#define RETICLE_LED_MEMORY                OFF      // OFF,    ON Remember reticle brightness across power cycles.                      Option
#define RETICLE_LED_INVERT                OFF      // OFF,    ON Inverts control for cases where 0V is max brightness.                 Option

// WEATHER SENSOR --------------------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Controller#WEATHER_SENSOR
#define WEATHER                           OFF      // OFF,    BME280 (I2C 0x77,) BME280_0x76, BME280_SPI (see pinmap for CS.)          Option

// SIGNALING ------------------------------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Controller#SIGNALING
#define STEP_WAVE_FORM                    SQUARE   // SQUARE, PULSE Step signal wave form faster rates. SQUARE best signal integrity.  Adjust

// NON-VOLATILE MEMORY ---------------------------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Controller#NV
#define NV_DRIVER                         NV_DEFAULT // NV_DEF, Use platforms default non-volatile device to remember runtime settings.  Option

// =================================================================================================================================
// MOUNT ===========================================================================================================================

// AXIS1 RA/AZM -------------------------------------------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Axes
#define AXIS1_DRIVER_MODEL                TMC2225S // OFF,    Enter motor driver model (above) in both axes to activate the mount.    <-Often

#define AXIS1_STEPS_PER_DEGREE            7680.0000 // 12800,  n. Number of steps per degree:                                          <-Req'd
#define AXIS1_REVERSE                     ON       // OFF,    ON Reverses movement direction, or reverse wiring instead to correct.   <-Often
#define AXIS1_LIMIT_MIN                   -180     // -180,   n. Where n= -90..-360 (degrees.) Minimum "Hour Angle" or Azimuth.        Adjust
#define AXIS1_LIMIT_MAX                   180      // 180,    n. Where n=  90.. 360 (degrees.) Maximum "Hour Angle" or Azimuth.        Adjust
#define AXIS1_LIMIT_SYNC                  OFF      // OFF,    n. Where n= 0..90 (degrees.) Allow sync/reset only within this +/-range. Option

#define AXIS1_DRIVER_MICROSTEPS           32       // OFF,    n. Microstep mode when tracking.                                        <-Req'd
#define AXIS1_DRIVER_MICROSTEPS_GOTO      OFF      // OFF,    n. Microstep mode used during slews. OFF uses _DRIVER_MICROSTEPS.        Option

// for TMC2130, TMC5160, TMC2209, TMC2226 STEP/DIR driver models:
#define AXIS1_DRIVER_IHOLD                OFF      // OFF,    n, (mA.) Current during standstill. OFF uses IRUN/2.0                    Option
#define AXIS1_DRIVER_IRUN                 OFF      // OFF,    n, (mA.) Current during tracking, appropriate for stepper/driver/etc.    Option
#define AXIS1_DRIVER_IGOTO                OFF      // OFF,    n, (mA.) Current during slews. OFF uses IRUN.                            Option

#define AXIS1_DRIVER_STATUS               OFF      // OFF,    ON, HIGH, or LOW.  For driver status info/fault detection.               Option

#define AXIS1_DRIVER_DECAY                OFF      // OFF,    Tracking decay mode default override. TMC default is STEALTHCHOP.        Infreq
#define AXIS1_DRIVER_DECAY_GOTO           OFF      // OFF,    Decay mode goto default override. TMC default is SPREADCYCLE.            Infreq

#define AXIS1_POWER_DOWN                  OFF      // OFF,    ON Powers off 30sec after movement stops or 10min after last<=1x guide.  Infreq

#define AXIS1_SENSE_HOME                  OFF      // OFF,    HIGH or LOW enables & state clockwise home position, as seen from front. Option
#define AXIS1_SENSE_LIMIT_MIN             LIMIT_SENSE // ...NSE, HIGH or LOW state on limit sense switch stops movement.                  Option
#define AXIS1_SENSE_LIMIT_MAX             LIMIT_SENSE // ...NSE, HIGH or LOW state on limit sense switch stops movement.                  Option

// AXIS2 DEC/ALT ------------------------------------------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Axes
#define AXIS2_DRIVER_MODEL                TMC2225S // OFF,    Enter motor driver model (above) in both axes to activate the mount.    <-Often

#define AXIS2_STEPS_PER_DEGREE            7680.0000 // 12800,  n. Number of steps per degree:                                          <-Req'd
#define AXIS2_REVERSE                     ON       // OFF,    ON Reverses movement direction, or reverse wiring instead to correct.   <-Often
#define AXIS2_LIMIT_MIN                   -90      // -90,    n. Where n=-90..0 (degrees.) Minimum allowed Declination or Altitude.    Infreq
#define AXIS2_LIMIT_MAX                   90       // 90,     n. Where n= 0..90 (degrees.) Maximum allowed Declination or Altitude.    Infreq
#define AXIS2_LIMIT_SYNC                  OFF      // OFF,    n. Where n= 0..90 (degrees.) Allow sync/reset only within this +/-range. Option

#define AXIS2_DRIVER_MICROSTEPS           32       // OFF,    n. Microstep mode when tracking.                                        <-Req'd
#define AXIS2_DRIVER_MICROSTEPS_GOTO      OFF      // OFF,    n. Microstep mode used during slews. OFF uses _DRIVER_MICROSTEPS.        Option

// for TMC2130, TMC5160, TMC2209, TMC2226 STEP/DIR driver models:
#define AXIS2_DRIVER_IHOLD                OFF      // OFF,    n, (mA.) Current during standstill. OFF uses IRUN/2.0                    Option
#define AXIS2_DRIVER_IRUN                 OFF      // OFF,    n, (mA.) Current during tracking, appropriate for stepper/driver/etc.    Option
#define AXIS2_DRIVER_IGOTO                OFF      // OFF,    n, (mA.) Current during slews. OFF uses IRUN.                            Option

#define AXIS2_DRIVER_STATUS               OFF      // OFF,    ON, HIGH, or LOW.  Polling for driver status info/fault detection.       Option

#define AXIS2_DRIVER_DECAY                OFF      // OFF,    Tracking decay mode default override. TMC default is STEALTHCHOP.        Infreq
#define AXIS2_DRIVER_DECAY_GOTO           OFF      // OFF,    Decay mode goto default override. TMC default is SPREADCYCLE.            Infreq

#define AXIS2_POWER_DOWN                  OFF      // OFF,    ON Powers off 30sec after movement stops or 10min after last<=1x guide.  Option

#define AXIS2_SENSE_HOME                  OFF      // OFF,    HIGH or LOW enables & state clockwise home position, as seen from above. Option
#define AXIS2_SENSE_LIMIT_MIN             LIMIT_SENSE // ...NSE, HIGH or LOW state on limit sense switch stops movement.                  Option
#define AXIS2_SENSE_LIMIT_MAX             LIMIT_SENSE // ...NSE, HIGH or LOW state on limit sense switch stops movement.                  Option

// MOUNT -------------------------------------------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Mount#MOUNT
#define MOUNT_TYPE                        GEM      // GEM,    GEM, FORK, ALTAZM, etc.                                                <-Req'd
#define MOUNT_ALTERNATE_ORIENTATION       OFF      // OFF,    ON Enables Meridian Flips for FORK / Zenith pass for ALTAZM.            Option
#define MOUNT_STARTUP_MODE                SA_AUTO  // ..AUTO, SA_STRICT, or SA_PERMISSIVE.                                             Option
#define MOUNT_COORDS                      TOPOCENTRIC // ...RIC, Applies refraction to coordinates. Use OBSERVED_PLACE for none.         Infreq
#define MOUNT_COORDS_MEMORY               OFF      // OFF,    ON Remembers approximate mount coordinates across power cycles.          Option
#define MOUNT_ENABLE_IN_STANDBY           OFF      // OFF,    ON Enables mount motor drivers while in standby.                         Infreq

// TIME AND LOCATION ---------------------------------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Mount#TLS
#define TIME_LOCATION_SOURCE              DS3231   // OFF,    DS3231 (I2C,) SD3031, TEENSY, GPS, or NTP source.                       Option
#define TIME_LOCATION_PPS_SENSE           OFF      // OFF,    HIGH senses PPS signal rising edge, LOW for falling, BOTH for both.    Option

// STATUS ------------------------------------------------------ see https://onstep.groups.io/g/main/wiki/Configuration_Mount#STATUS
#define STATUS_MOUNT_LED                  ON       // OFF,    ON Flashes proportional to rate of movement or solid on for slews.       Option
#define STATUS_BUZZER                     OFF      // OFF,    ON, n. Where n=100..6000 (Hz freq.) for speaker. ON for piezo buzzer.    Option
#define STATUS_BUZZER_DEFAULT             OFF      // OFF,    ON starts w/buzzer sound enabled.                                        Option
#define STATUS_BUZZER_MEMORY              OFF      // OFF,    ON to remember buzzer sound setting across power cycles.                 Option

// ST4 INTERFACE -------------------------------------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Mount#ST4
#define ST4_INTERFACE                     ON       // OFF,    ON enables interface. <= 1X guides unless hand control mode.             Option
#define ST4_HAND_CONTROL                  ON       // ON,     ON for hand controller special features and SHC support.                 Option
#define ST4_HAND_CONTROL_FOCUSER          ON       // ON,     ON alternate: Focuser move [E]f1 [W]f2 [N]- [S]+                        Option

// GUIDING BEHAVIOUR ------------------------------------------ see https://onstep.groups.io/g/main/wiki/Configuration_Mount#GUIDING
#define GUIDE_TIME_LIMIT                  0        // 10,     n. Time limit n=0..120 seconds. Use 0 to disable.                        Adjust
#define GUIDE_DISABLE_BACKLASH            OFF      // OFF,    Disable backlash takeup during guiding at <= 1X.                         Option

// LIMITS ------------------------------------------------------ see https://onstep.groups.io/g/main/wiki/Configuration_Mount#LIMITS
#define LIMIT_SENSE                       OFF      // OFF,    HIGH or LOW state on limit sense switch stops movement.                  Option

// PARKING ---------------------------------------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Mount#PARKING
#define PARK_SENSE                        OFF      // OFF,    HIGH or LOW state indicates mount is in the park orientation.            Option
#define PARK_SIGNAL                       OFF      // OFF,    HIGH or LOW state park input signal triggers parking.                    Option
#define PARK_STATUS                       OFF      // OFF,    signals with a HIGH or LOW state when successfully parked.               Option

// PEC ------------------------------------------------------------ see https://onstep.groups.io/g/main/wiki/Configuration_Mount#PEC
#define PEC_STEPS_PER_WORM_ROTATION       19200    // 0,      n. Steps per worm rotation (0 disables else 720 sec buffer allocated.)  <-Req'd
#define PEC_SENSE                         OFF      // OFF,    HIGH. Senses the PEC signal rising edge or use LOW for falling edge.     Option
#define PEC_BUFFER_SIZE_LIMIT             720      // 720,    Seconds of PEC buffer allowed.                                           Infreq

// TRACKING BEHAVIOUR ---------------------------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Mount#TRACKING
#define TRACK_BACKLASH_RATE               20       // 20,     n. Where n=2..50 (x sidereal rate) during backlash takeup.               Option
#define TRACK_AUTOSTART                   ON       // OFF,    ON Start with tracking enabled.                                          Option
#define TRACK_COMPENSATION_DEFAULT        OFF      // OFF,    No compensation or REFRACTION, MODEL, etc.                              Option
#define TRACK_COMPENSATION_MEMORY         OFF      // OFF,    ON Remembers compensated tracking settings.                             Option

// SLEWING BEHAVIOUR ------------------------------------------ see https://onstep.groups.io/g/main/wiki/Configuration_Mount#SLEWING
#define SLEW_RATE_BASE_DESIRED            2.0      // 1.0,    n. Desired slew rate in deg/sec.                                        <-Req'd
#define SLEW_RATE_MEMORY                  ON       // OFF,    ON Remembers rates set across power cycles.                              Option
#define SLEW_ACCELERATION_DIST            4.0      // 5.0,    n, (degrees.) Approx. distance for acceleration.                         Adjust
#define SLEW_RAPID_STOP_DIST              1.5      // 2.0,    n, (degrees.) Approx. distance required to stop.                         Adjust
#define GOTO_FEATURE                      ON       // ON,     Use OFF to disable mount Goto features.                                  Infreq
#define GOTO_OFFSET                       0.25     // 0.25,   Offset in deg for goto target unidirectional approach, 0.0 disables.    Adjust
#define GOTO_OFFSET_ALIGN                 OFF      // OFF,    ON skips final goto phase for align stars.                               Option

// PIER SIDE BEHAVIOUR --------------------------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Mount#PIERSIDE
#define MFLIP_SKIP_HOME                   OFF      // OFF,    ON Goto directly to destination without visiting home position.         Option
#define MFLIP_AUTOMATIC_DEFAULT           OFF      // OFF,    ON Start with automatic meridian flips enabled.                          Option
#define MFLIP_AUTOMATIC_MEMORY            ON       // OFF,    ON Remember automatic meridian flip setting across power cycles.         Option
#define MFLIP_PAUSE_HOME_DEFAULT          OFF      // OFF,    ON Start with meridian flip pause at home enabled.                       Infreq
#define MFLIP_PAUSE_HOME_MEMORY           OFF      // OFF,    ON Remember meridian flip pause at home setting across power cycles.     Infreq

#define PIER_SIDE_SYNC_CHANGE_SIDES       OFF      // OFF,    ON Allows sync to change pier side, for GEM mounts.                      Option
#define PIER_SIDE_PREFERRED_DEFAULT       BEST     // BEST,   BEST, EAST, WEST, or AUTOMATIC.                                        Option
#define PIER_SIDE_PREFERRED_MEMORY        ON       // OFF,    ON Remember preferred pier side setting across power cycles.            Option

// ALIGN -------------------------------------------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Mount#ALIGN
#define ALIGN_AUTO_HOME                   OFF      // OFF,    ON uses home switches to find home first when starting an align.         Option
#define ALIGN_MODEL_MEMORY                OFF      // OFF,    ON Restores any pointing model saved in NV at startup.                   Option
#define ALIGN_MAX_STARS                   AUTO     // AUTO,   Uses HAL specified default (either 6 or 9 stars.)                        Infreq

// =================================================================================================================================
// ROTATOR =========================================================================================================================

// AXIS3 ROTATOR ---------------------------------------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Rotator
#define AXIS3_DRIVER_MODEL                OFF      // OFF,    Enter motor driver model to activate the rotator.                        Option
#define AXIS3_SLEW_RATE_BASE_DESIRED      1.5      // 1.0,    n. Desired slew rate in deg/sec.                                        <-Req'd

#define AXIS3_STEPS_PER_DEGREE            65.1852  // 64.0,   n. Number of steps per degree for rotator/de-rotator.                    Adjust
#define AXIS3_REVERSE                     OFF      // OFF,    ON Reverses movement direction.                                          Option
#define AXIS3_LIMIT_MIN                   0        // 0,      n. Where n=-360..0 (degrees.) Minimum allowed rotator angle.             Infreq
#define AXIS3_LIMIT_MAX                   360      // 360,    n. Where n=0..360 (degrees.) Maximum allowed rotator angle.              Infreq

#define AXIS3_DRIVER_MICROSTEPS           32       // OFF,    n. Microstep mode when tracking.                                         Option
#define AXIS3_DRIVER_MICROSTEPS_GOTO      OFF      // OFF,    n. Microstep mode used during slews. OFF uses _DRIVER_MICROSTEPS.        Option

// for TMC2130, TMC5160, TMC2209, TMC2226 STEP/DIR driver models:
#define AXIS3_DRIVER_IHOLD                OFF      // OFF,    n, (mA.) Current during standstill. OFF uses IRUN/2.0                    Option
#define AXIS3_DRIVER_IRUN                 600      // OFF,    n, (mA.) Current during tracking.                                        Option
#define AXIS3_DRIVER_IGOTO                OFF      // OFF,    n, (mA.) Current during slews. OFF uses IRUN.                            Option

#define AXIS3_DRIVER_STATUS               OFF      // OFF,    ON, HIGH, or LOW.  For driver status info/fault detection.               Option
#define AXIS3_DRIVER_DECAY                OFF      // OFF,    Tracking decay mode default override.                                    Infreq
#define AXIS3_DRIVER_DECAY_GOTO           OFF      // OFF,    Decay mode goto default override.                                        Infreq
#define AXIS3_POWER_DOWN                  OFF      // OFF,    ON Powers off 30 seconds after movement stops.                           Option
#define AXIS3_SENSE_HOME                  OFF      // OFF,    HIGH or LOW enables & state home position.                               Option
#define AXIS3_SENSE_LIMIT_MIN             OFF      // OFF,    HIGH or LOW state on limit sense switch stops movement.                  Option
#define AXIS3_SENSE_LIMIT_MAX             OFF      // OFF,    HIGH or LOW state on limit sense switch stops movement.                  Option

// =================================================================================================================================
// FOCUSERS ========================================================================================================================

// AXIS4 FOCUSER 1 -------------------------------------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Focuser
#define AXIS4_DRIVER_MODEL                OFF      // OFF,    Enter motor driver model to activate the focuser.                        Option
#define AXIS4_SLEW_RATE_BASE_DESIRED      500      // 500,    n, Where n=200..5000 (um/s.)                                            <-Req'd
#define AXIS4_SLEW_RATE_MINIMUM           20       // 20,     n. Where n=5..200 (um/s.) Minimum microns/second.                        Adjust

#define AXIS4_STEPS_PER_MICRON            10       // 0.5,    n. Steps per micrometer.                                                Adjust
#define AXIS4_REVERSE                     OFF      // OFF,    ON Reverses movement direction.                                          Option
#define AXIS4_LIMIT_MIN                   0        // 0,      n. Where n=0..500 (millimeters.) Minimum allowed position.               Adjust
#define AXIS4_LIMIT_MAX                   50       // 50,     n. Where n=0..500 (millimeters.) Maximum allowed position.               Adjust

#define AXIS4_DRIVER_MICROSTEPS           32       // OFF,    n. Microstep mode when tracking.                                         Option
#define AXIS4_DRIVER_MICROSTEPS_GOTO      OFF      // OFF,    n. Microstep mode used during slews. OFF uses _DRIVER_MICROSTEPS.        Option

// for TMC2130, TMC5160, TMC2209, TMC2226 STEP/DIR driver models:
#define AXIS4_DRIVER_IHOLD                OFF      // OFF,    n, (mA.) Current during standstill. OFF uses IRUN/2.0                    Option
#define AXIS4_DRIVER_IRUN                 OFF      // OFF,    n, (mA.) Current during tracking.                                        Option
#define AXIS4_DRIVER_IGOTO                OFF      // OFF,    n, (mA.) Current during slews. OFF uses IRUN.                            Option

#define AXIS4_DRIVER_STATUS               OFF      // OFF,    ON, HIGH, or LOW.  For driver status info/fault detection.               Option
#define AXIS4_DRIVER_DECAY                OFF      // OFF,    Tracking decay mode default override.                                    Infreq
#define AXIS4_DRIVER_DECAY_GOTO           OFF      // OFF,    Decay mode goto default override.                                        Infreq
#define AXIS4_POWER_DOWN                  OFF      // OFF,    ON Powers off 30 seconds after movement stops.                           Option
#define AXIS4_SENSE_HOME                  OFF      // OFF,    HIGH or LOW enables & state home position.                               Option
#define AXIS4_SENSE_LIMIT_MIN             OFF      // OFF,    HIGH or LOW state on limit sense switch stops movement.                  Option
#define AXIS4_SENSE_LIMIT_MAX             OFF      // OFF,    HIGH or LOW state on limit sense switch stops movement.                  Option

// FOCUSER TEMPERATURE ---------------------------------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Focuser
#define FOCUSER_TEMPERATURE               OFF      // OFF,    THERMISTOR or n. Where n is the ds18b20 s/n for focuser temp.            Adjust

// =================================================================================================================================
// AUXILIARY FEATURES ==============================================================================================================

// FEATURES ------------------------------------------------------------- see https://onstep.groups.io/g/main/wiki/Configuration_Aux

#define FEATURE1_PURPOSE                  OFF      // OFF,    SWITCH, MOMENTARY_SWITCH, ANALOG_OUT, DEW_HEATER, INTERVALOMETER.        Option
#define FEATURE1_NAME                     "FEATURE1" // "FE..", Name of feature being controlled.                                        Adjust
#define FEATURE1_TEMP                     OFF      // OFF,    THERMISTOR or n. Where n is the ds18b20 s/n. For DEW_HEATER temperature. Adjust
#define FEATURE1_PIN                      OFF      // OFF,    OFF or a valid GPIO pin number. (AUX sentinel is NOT accepted.)         Adjust
#define FEATURE1_VALUE_DEFAULT            OFF      // OFF,    ON, n. Where n=0..255 for ANALOG_OUT purpose.                            Adjust
#define FEATURE1_VALUE_MEMORY             OFF      // OFF,    ON remembers state across power cycles.                                 Adjust
#define FEATURE1_ON_STATE                 HIGH     // HIGH,   LOW to invert so "ON" is 0V and "OFF" is Vcc (3.3V usually.)             Adjust

#define FEATURE2_PURPOSE                  OFF      // OFF,    SWITCH, MOMENTARY_SWITCH, ANALOG_OUT, DEW_HEATER, INTERVALOMETER.        Option
#define FEATURE2_NAME                     "FEATURE2" // "FE..", Name of feature being controlled.                                        Adjust
#define FEATURE2_TEMP                     OFF      // OFF,    THERMISTOR or n. Where n is the ds18b20 s/n. For DEW_HEATER temperature. Adjust
#define FEATURE2_PIN                      OFF      // OFF,    OFF or a valid GPIO pin number. (AUX sentinel is NOT accepted.)         Adjust
#define FEATURE2_VALUE_DEFAULT            OFF      // OFF,    ON, n. Where n=0..255 for ANALOG_OUT purpose.                            Adjust
#define FEATURE2_VALUE_MEMORY             OFF      // OFF,    ON remembers state across power cycles.                                 Adjust
#define FEATURE2_ON_STATE                 HIGH     // HIGH,   LOW to invert so "ON" is 0V and "OFF" is Vcc (3.3V usually.)             Adjust

#define FEATURE3_PURPOSE                  OFF      // OFF,    SWITCH, MOMENTARY_SWITCH, ANALOG_OUT, DEW_HEATER, INTERVALOMETER.        Option
#define FEATURE3_NAME                     "FEATURE3" // "FE..", Name of feature being controlled.                                        Adjust
#define FEATURE3_TEMP                     OFF      // OFF,    THERMISTOR or n. Where n is the ds18b20 s/n. For DEW_HEATER temperature. Adjust
#define FEATURE3_PIN                      OFF      // OFF,    OFF or a valid GPIO pin number. (AUX sentinel is NOT accepted.)         Adjust
#define FEATURE3_VALUE_DEFAULT            OFF      // OFF,    ON, n. Where n=0..255 for ANALOG_OUT purpose.                            Adjust
#define FEATURE3_VALUE_MEMORY             OFF      // OFF,    ON remembers state across power cycles.                                 Adjust
#define FEATURE3_ON_STATE                 HIGH     // HIGH,   LOW to invert so "ON" is 0V and "OFF" is Vcc (3.3V usually.)             Adjust

#define FEATURE4_PURPOSE                  OFF      // OFF,    SWITCH, MOMENTARY_SWITCH, ANALOG_OUT, DEW_HEATER, INTERVALOMETER.        Option
#define FEATURE4_NAME                     "FEATURE4" // "FE..", Name of feature being controlled.                                        Adjust
#define FEATURE4_TEMP                     OFF      // OFF,    THERMISTOR or n. Where n is the ds18b20 s/n. For DEW_HEATER temperature. Adjust
#define FEATURE4_PIN                      OFF      // OFF,    OFF or a valid GPIO pin number. (AUX sentinel is NOT accepted.)         Adjust
#define FEATURE4_VALUE_DEFAULT            OFF      // OFF,    ON, n. Where n=0..255 for ANALOG_OUT purpose.                            Adjust
#define FEATURE4_VALUE_MEMORY             OFF      // OFF,    ON remembers state across power cycles.                                 Adjust
#define FEATURE4_ON_STATE                 HIGH     // HIGH,   LOW to invert so "ON" is 0V and "OFF" is Vcc (3.3V usually.)             Adjust

#define FEATURE5_PURPOSE                  OFF      // OFF,    SWITCH, MOMENTARY_SWITCH, ANALOG_OUT, DEW_HEATER, INTERVALOMETER.        Option
#define FEATURE5_NAME                     "FEATURE5" // "FE..", Name of feature being controlled.                                        Adjust
#define FEATURE5_TEMP                     OFF      // OFF,    THERMISTOR or n. Where n is the ds18b20 s/n. For DEW_HEATER temperature. Adjust
#define FEATURE5_PIN                      OFF      // OFF,    OFF or a valid GPIO pin number. (AUX sentinel is NOT accepted.)         Adjust
#define FEATURE5_VALUE_DEFAULT            OFF      // OFF,    ON, n. Where n=0..255 for ANALOG_OUT purpose.                            Adjust
#define FEATURE5_VALUE_MEMORY             OFF      // OFF,    ON remembers state across power cycles.                                 Adjust
#define FEATURE5_ON_STATE                 HIGH     // HIGH,   LOW to invert so "ON" is 0V and "OFF" is Vcc (3.3V usually.)             Adjust

#define FEATURE6_PURPOSE                  OFF      // OFF,    SWITCH, MOMENTARY_SWITCH, ANALOG_OUT, DEW_HEATER, INTERVALOMETER.        Option
#define FEATURE6_NAME                     "FEATURE6" // "FE..", Name of feature being controlled.                                        Adjust
#define FEATURE6_TEMP                     OFF      // OFF,    THERMISTOR or n. Where n is the ds18b20 s/n. For DEW_HEATER temperature. Adjust
#define FEATURE6_PIN                      OFF      // OFF,    OFF or a valid GPIO pin number. (AUX sentinel is NOT accepted.)         Adjust
#define FEATURE6_VALUE_DEFAULT            OFF      // OFF,    ON, n. Where n=0..255 for ANALOG_OUT purpose.                            Adjust
#define FEATURE6_VALUE_MEMORY             OFF      // OFF,    ON remembers state across power cycles.                                 Adjust
#define FEATURE6_ON_STATE                 HIGH     // HIGH,   LOW to invert so "ON" is 0V and "OFF" is Vcc (3.3V usually.)             Adjust

#define FEATURE7_PURPOSE                  OFF      // OFF,    SWITCH, MOMENTARY_SWITCH, ANALOG_OUT, DEW_HEATER, INTERVALOMETER.        Option
#define FEATURE7_NAME                     "FEATURE7" // "FE..", Name of feature being controlled.                                        Adjust
#define FEATURE7_TEMP                     OFF      // OFF,    THERMISTOR or n. Where n is the ds18b20 s/n. For DEW_HEATER temperature. Adjust
#define FEATURE7_PIN                      OFF      // OFF,    OFF or a valid GPIO pin number. (AUX sentinel is NOT accepted.)         Adjust
#define FEATURE7_VALUE_DEFAULT            OFF      // OFF,    ON, n. Where n=0..255 for ANALOG_OUT purpose.                            Adjust
#define FEATURE7_VALUE_MEMORY             OFF      // OFF,    ON remembers state across power cycles.                                 Adjust
#define FEATURE7_ON_STATE                 HIGH     // HIGH,   LOW to invert so "ON" is 0V and "OFF" is Vcc (3.3V usually.)             Adjust

#define FEATURE8_PURPOSE                  OFF      // OFF,    SWITCH, MOMENTARY_SWITCH, ANALOG_OUT, DEW_HEATER, INTERVALOMETER.        Option
#define FEATURE8_NAME                     "FEATURE8" // "FE..", Name of feature being controlled.                                        Adjust
#define FEATURE8_TEMP                     OFF      // OFF,    THERMISTOR or n. Where n is the ds18b20 s/n. For DEW_HEATER temperature. Adjust
#define FEATURE8_PIN                      OFF      // OFF,    OFF or a valid GPIO pin number. (AUX sentinel is NOT accepted.)         Adjust
#define FEATURE8_VALUE_DEFAULT            OFF      // OFF,    ON, n. Where n=0..255 for ANALOG_OUT purpose.                            Adjust
#define FEATURE8_VALUE_MEMORY             OFF      // OFF,    ON remembers state across power cycles.                                 Adjust
#define FEATURE8_ON_STATE                 HIGH     // HIGH,   LOW to invert so "ON" is 0V and "OFF" is Vcc (3.3V usually.)             Adjust

// >>> TERRANS_V5PRO PIN MAP BEGIN (generated — do not hand-edit)
// ---------------------------------------------------------------------------------------------------------------------------------
// TERRANS INDUSTRY V5 PRO — USER PIN MAP  (PINMAP is OFF above; these defines stand in for src/pinmaps/Pins.<board>.h)
// Stock Pins.MaxESP3.h with the Terrans deltas: AXIS1_DIR_PIN 0->4, AUX2_PIN 4->-1, explicit I2C pins.
// Generated by the OnStepX Configurator — re-generate rather than hand-edit if you change serial baud or AXIS4_POWER_DOWN.
// ---------------------------------------------------------------------------------------------------------------------------------

// Serial0: RX GPIO3 / TX GPIO1 (USB). Serial2: RX2 GPIO16 / TX2 GPIO17 (on-board ESP8266 running SmartWebServer).
#define SERIAL_A                Serial
#define SERIAL_B                Serial2
#define SERIAL_B_RX             16
#define SERIAL_B_TX             17

// ESP32 I2C pins
#define I2C_SDA_PIN             21
#define I2C_SCL_PIN             22

// Multi-purpose pins
#define AUX2_PIN                -1              // GPIO4 upstream; GPIO4 is AXIS1 DIR on this board
#define AUX3_PIN                21              // Home SW for Axis1, or I2C SDA
#define AUX4_PIN                22              // Home SW for Axis2, or I2C SCL
#define AUX7_PIN                39              // Limit SW, PPS, etc.
#define AUX8_PIN                25              // 1-Wire, Status LED, Reticle LED, Tone, etc.

// Misc. pins
#define ONE_WIRE_PIN            AUX8_PIN
#define ADDON_GPIO0_PIN         26              // ESP8266 GPIO0 (shared with Axis2 DIR)
#define ADDON_RESET_PIN         AUX2_PIN
#define PEC_SENSE_PIN           36              // [input only]
#define STATUS_LED_PIN          AUX8_PIN
#define MOUNT_LED_PIN           STATUS_LED_PIN
#define RETICLE_LED_PIN         STATUS_LED_PIN
#define STATUS_BUZZER_PIN       AUX8_PIN        // same pin as STATUS_LED — enable only one
#define PPS_SENSE_PIN           AUX7_PIN
#define LIMIT_SENSE_PIN         AUX7_PIN

#define SHARED_DIRECTION_PINS                    // direction pins are shared
#define SHARED_ENABLE_PIN       12              // [must be low at boot]

// Axis1 RA/Azm step/dir driver
#define AXIS1_ENABLE_PIN        SHARED
#define AXIS1_M0_PIN            13
#define AXIS1_M1_PIN            14
#define AXIS1_M2_PIN            23
#define AXIS1_M3_PIN            AUX2_PIN
#define AXIS1_STEP_PIN          18
#define AXIS1_DIR_PIN           4               // Terrans change: upstream MaxESP3 uses GPIO0
#define AXIS1_SENSE_HOME_PIN    AUX3_PIN

// Axis2 Dec/Alt step/dir driver
#define AXIS2_ENABLE_PIN        SHARED
#define AXIS2_M0_PIN            13
#define AXIS2_M1_PIN            14
#define AXIS2_M2_PIN            5
#define AXIS2_M3_PIN            AUX2_PIN
#define AXIS2_STEP_PIN          27
#define AXIS2_DIR_PIN           26
#define AXIS2_SENSE_HOME_PIN    AUX4_PIN

// Axis3 rotator
#define AXIS3_ENABLE_PIN        OFF
#define AXIS3_M0_PIN            OFF
#define AXIS3_M1_PIN            OFF
#define AXIS3_M2_PIN            OFF
#define AXIS3_M3_PIN            OFF
#define AXIS3_STEP_PIN          2               // [must be low at boot]
#define AXIS3_DIR_PIN           15

// Axis4 focuser1
#define AXIS4_M0_PIN            OFF
#define AXIS4_M1_PIN            OFF
#define AXIS4_M2_PIN            OFF
#define AXIS4_M3_PIN            OFF
#define AXIS4_STEP_PIN          19
#define AXIS4_DIR_PIN           15

// Axis5 focuser2 (shares the Axis3 step/dir lines)
#define AXIS5_ENABLE_PIN        OFF
#define AXIS5_M0_PIN            OFF
#define AXIS5_M1_PIN            OFF
#define AXIS5_M2_PIN            OFF
#define AXIS5_M3_PIN            OFF
#define AXIS5_STEP_PIN          2
#define AXIS5_DIR_PIN           15

// ST4 interface
#define ST4_RA_W_PIN            34              // [input only] RA- West
#define ST4_DEC_S_PIN           32              // DE- South
#define ST4_DEC_N_PIN           33              // DE+ North
#define ST4_RA_E_PIN            35              // [input only] RA+ East
// <<< TERRANS_V5PRO PIN MAP END

// ---------------------------------------------------------------------------------------------------------------------------------
#define FileVersionConfig 6
#include "Extended.config.h"
