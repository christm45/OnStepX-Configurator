/* ============================================================================
   Chinese (Simplified, zh-CN) dictionary for the OnStepX Configurator.
   Same keys as the French dictionaries: the exact trimmed English text node /
   attribute, translated fragment by fragment so pieces split around <code> /
   <strong> still read in order. Fills window.I18N_ZH (see LANGS in i18n.js);
   loaded before i18n.js. Directive names, pin names, part numbers and product
   names are left untranslated. Machine-translated — corrections welcome.
   ========================================================================== */
window.I18N_ZH = Object.assign(window.I18N_ZH || {}, {
  "\" — change it! BLUETOOTH = pair over Bluetooth instead of WiFi.":
    "\" — 请务必修改！BLUETOOTH = 通过蓝牙配对，而非 WiFi。",
  "\"Apply board defaults\"":
    "「应用主板默认值」",
  "\"Bundle OnStepX plugins\"":
    "「Bundle OnStepX plugins」",
  "\"Compile service is not configured yet\"":
    "「编译服务尚未配置」",
  "\"Dew Heat 1\" regulates from":
    "「Dew Heat 1」的调节依据仅为",
  "\"Failed to connect\"":
    "「Failed to connect」（连接失败）",
  "\"I understand the issues above — build anyway\"":
    "「我了解上述问题——仍然构建」",
  "\"Learn more →\"":
    "「了解更多 →」",
  "\"PINMAP must be set to a valid board (from Constants.h) or OFF (for user pin defs in Config.h)\"":
    "「PINMAP 必须设置为有效的主板（来自 Constants.h），或设为 OFF（在 Config.h 中自定义引脚）」",
  "\"Your config has changed since this firmware was built\"":
    "「自此固件构建以来，您的配置已更改」",
  "\"Zero\" is the 100%-power point":
    "「Zero」是 100% 功率点",
  "\"password\" ships in every install — change AP_PASSWORD and (for SmartWebServer) PASSWORD_DEFAULT before putting the mount on a shared or outdoor network.":
    "「password」是每次安装的默认密码——在把支架接入共享或户外网络之前，请修改 AP_PASSWORD 以及（针对 SmartWebServer 的）PASSWORD_DEFAULT。",
  "(1) Uninstall current CH340 driver, (2) install CH341SER-3.7, (3) in ASCOM config select \"9600-NO DTR\", (4) in Device Manager → Ports → Advanced enable DisableModemHandshake.":
    "(1) 卸载当前的 CH340 驱动程序，(2) 安装 CH341SER-3.7，(3) 在 ASCOM 配置中选择「9600-NO DTR」，(4) 在设备管理器 → 端口 → 高级中启用 DisableModemHandshake。",
  "(AP at 192.168.0.1). The full SmartWebServer is a separate, optional upgrade.":
    "（AP 地址为 192.168.0.1）。完整的 SmartWebServer 是一个独立的可选升级。",
  "(AXIS1_STEPS_PER_DEGREE × 360) / worm_wheel_teeth — see the formula below. There is no universal default; a wrong value makes PEC useless.":
    "(AXIS1_STEPS_PER_DEGREE × 360) / 蜗轮齿数——见下方公式。没有通用的默认值；数值错误会使 PEC 失效。",
  "(Axis1/Axis2) — from the Calculator.":
    "（Axis1/Axis2）——来自计算器。",
  "(Controller) — pick the board you have. Wrong value = firmware drives wrong pins.":
    "（控制器）——选择您拥有的主板。数值错误 = 固件驱动错误的引脚。",
  "(Controller, ESP32 only) — enable if you want SkySafari over WiFi.":
    "（控制器，仅限 ESP32）——如需通过 WiFi 使用 SkySafari，请启用。",
  "(E4 branch) — erase all flash the first time":
    "（E4 分支）——首次烧录时擦除整个 flash",
  "(ESP32). Click":
    "(ESP32)。点击",
  "(ESP8266/ESP32) flashed with SmartWebServer, wired to a serial port.":
    "（ESP8266/ESP32），烧录了 SmartWebServer，并连接到一个串口。",
  "(Firefox / Safari / WebHID unavailable): we save":
    "（Firefox / Safari / 不支持 WebHID）：我们会保存",
  "(GPIO0 is the ESP32 boot-strap pin here),":
    "（此处 GPIO0 是 ESP32 的启动引脚），",
  "(GPIO4 is now AXIS1 DIR, so AUX2 is freed), and":
    "（GPIO4 现在用作 AXIS1 DIR，因此 AUX2 被释放），以及",
  "(HEAT_BED), both":
    "(HEAT_BED)，两者的",
  "(Mount) —":
    "（支架）——",
  "(Mount) — refraction-compensated tracking. Fine to leave OFF for visual use.":
    "（支架）——带大气折射补偿的跟踪。目视使用时可保持 OFF。",
  "(NodeMCU / Wemos D1) — most boards auto-reset. Bare ESP-01 modules: pull GPIO0 to GND, power cycle.":
    "（NodeMCU / Wemos D1）——大多数主板会自动复位。裸 ESP-01 模块：将 GPIO0 拉到 GND，然后断电重启。",
  "(STM32), or Teensy Loader (Teensy) locally.":
    "(STM32)，或在本地使用 Teensy Loader (Teensy)。",
  "(TB) and":
    "(TB) 和",
  "(TB), or a DS18B20 serial number. The E4 default Config.h already ties a thermistor to the 2nd channel.":
    "(TB)，或一个 DS18B20 序列号。E4 默认的 Config.h 已将一个热敏电阻绑定到第 2 通道。",
  "(Teensy 3.2) or":
    "(Teensy 3.2) 或",
  "(V1.2 / V2.0 — STM32F446, 6-axis),":
    "（V1.2 / V2.0 — STM32F446，6 轴），",
  "(WEATHER OFF, no DS3231 fallback). The preflight check flags the combination.":
    "（WEATHER OFF，也没有 DS3231 备用）。预检会标记此组合。",
  "(WeMos R32 — deprecated),":
    "（WeMos R32——已弃用），",
  "(Web UI / WiFi·Ethernet bridge).":
    "（Web 界面 / WiFi·以太网桥接）。",
  "(always confirm against your datasheet):":
    "（请务必以您的数据手册为准）：",
  "(and a":
    "（以及一个",
  "(build recipe) and a workflow file (":
    "（构建配方）和一个 workflow 文件（",
  "(built-in)":
    "（内置）",
  "(comes with":
    "（随附于",
  "(covers MaxESP4i + FRAM),":
    "（涵盖 MaxESP4i + FRAM），",
  "(covers MaxPCB4w/MaxPCB4e variants),":
    "（涵盖 MaxPCB4w/MaxPCB4e 变体），",
  "(dew-heater section).":
    "（除露加热带章节）。",
  "(first time only)":
    "（仅首次）",
  "(focuser2), both on":
    "（调焦器 2），两者都在",
  "(hand pendant), or":
    "（手控器），或",
  "(jumper or 3-pin header → centre + right) high.":
    "（跳线帽或 3 针排针 → 中间 + 右侧）置为高电平。",
  "(latest). The upstream repo it resolves against depends on the mode (OnStepX, SHC, or SWS). The live preview under the field shows the exact commit. See":
    "（最新）。它解析所依据的上游仓库取决于模式（OnStepX、SHC 或 SWS）。字段下方的实时预览会显示确切的提交。参见",
  "(left) before flashing, and put it back to centre afterwards. The V5 Pro shares one USB port between the ESP32 and the ESP8266.":
    "（左侧），烧录完成后再拨回中间。V5 Pro 的 ESP32 和 ESP8266 共用一个 USB 端口。",
  "(mod to bipolar) / NEMA11":
    "（改为双极）/ NEMA11",
  "(mount controller),":
    "（支架控制器），",
  "(msg #69284). Requires removing X-MIN's filter capacitor (the centre of the three SMD parts beside the header; the outer two are resistors) and gives up the Axis1 home/limit input:":
    "（msg #69284）。需要拆除 X-MIN 的滤波电容（排针旁三个贴片元件中间的那个；外侧两个是电阻），并且会失去 Axis1 的原点/限位输入：",
  "(needs a BME280). \"Dew Heat 2\" has its own point thermistor for precise control of a specific surface — e.g. a Newtonian secondary or a corrector plate.":
    "（需要 BME280）。「Dew Heat 2」有自己的测温点热敏电阻，可精确控制特定表面——例如牛顿式的副镜或改正镜。",
  "(no 3.3V pin). Most breakout boards (GY-GPSV3, GY-NEO6MV2, BN-880) carry their own 3.3V regulator and take 5V directly. A bare 3.3V-only module needs a small 3.3V regulator (e.g. AMS1117-3.3 / LM1117-3.3) fed from that 5V pin. The GPS TX line is 3.3V logic either way, which is safe for the ESP32.":
    "（没有 3.3V 引脚）。大多数模块板（GY-GPSV3、GY-NEO6MV2、BN-880）自带 3.3V 稳压器，可直接接 5V。仅支持 3.3V 的裸模块需要一个由该 5V 引脚供电的小型 3.3V 稳压器（如 AMS1117-3.3 / LM1117-3.3）。无论哪种情况，GPS 的 TX 线都是 3.3V 逻辑电平，对 ESP32 是安全的。",
  "(not the default 40MHz). This alone cured the stepper clicking for several users.":
    "（而不是默认的 40MHz）。仅此一项就为多位用户消除了步进电机的咔哒声。",
  "(one pole sets, the other resets). All of them need 3.5V or more — run them from a 5V pin.":
    "（一个磁极置位，另一个复位）。它们都需要 3.5V 或更高电压——请从 5V 引脚供电。",
  "(plus the whitelist in":
    "（以及",
  "(probe)":
    "（探头）",
  "(richer UI). On a non-ESP board, \"adding WiFi\" literally means bolting on an ESP module running SmartWebServer.":
    "（界面更丰富）之间做出选择。在非 ESP 主板上，「添加 WiFi」实际上就是加装一个运行 SmartWebServer 的 ESP 模块。",
  "(rule of thumb ≈1W per inch of aperture at 12V):":
    "（经验法则：12V 下每英寸口径约 1W）：",
  "(rules out Arduino/library issues).":
    "（排除 Arduino/库的问题）。",
  "(sensor pulls LOW on magnet). Place the magnet on the rotating part, the sensor on the stationary part.":
    "（有磁铁时传感器拉为 LOW）。将磁铁装在转动部件上，传感器装在固定部件上。",
  "(simple page, served by OnStepX) and the full":
    "（简单页面，由 OnStepX 提供）与完整的",
  "(the":
    "（",
  "(the IMXRT1062 flash base); on Teensy 3.2 the addresses start at 0. The parser auto-detects which by looking at the first data record, handles extended-linear-address prefixes (record type":
    "（IMXRT1062 的 flash 基址）；在 Teensy 3.2 上地址从 0 开始。解析器通过查看第一条数据记录自动判断属于哪种，并处理扩展线性地址前缀（记录类型",
  "(the fastest way to isolate problems on a new board):":
    "（在新主板上定位问题的最快方法）：",
  "(the plugin's own config, bundled automatically by the workflow when you tick the plugin).":
    "（插件自己的配置，勾选插件后由 workflow 自动打包）。",
  "(the settings shown above).":
    "（即上面显示的设置）。",
  "(typically 4.7–10kΩ to VCC) — the bus needs them. Do not rely on the ESP32's internal pull-ups: those are ~45kΩ, far too weak for I2C.":
    "（通常为 4.7–10kΩ 接 VCC）——总线需要它们。不要依赖 ESP32 的内部上拉：那只有约 45kΩ，对 I2C 来说太弱了。",
  "(under the PINMAP field) autofills driver model, microsteps, run current, and mount type with the known-good values for whichever PINMAP you picked — MaxESP3/4, MaxPCB4, MaxSTM3, BTT SKR PRO, MiniPCB, CNC3, etc. A one-click starting point you then tweak.":
    "（位于 PINMAP 字段下方）会根据您选择的 PINMAP，自动填入经过验证的驱动器型号、细分、运行电流和支架类型——MaxESP3/4、MaxPCB4、MaxSTM3、BTT SKR PRO、MiniPCB、CNC3 等。一键得到起点，再自行微调。",
  "(v1 embed-in-mount or v2 stand-alone case), or":
    "（v1 内嵌于支架，或 v2 独立外壳），或",
  "(we don't expose those fields in this configurator yet — you can edit the generated config after compile, or fork OnStepX-Plugins).":
    "（本配置器尚未提供这些字段——您可以在编译后编辑生成的配置，或 fork OnStepX-Plugins）。",
  "(web/WiFi bridge) — then":
    "（Web/WiFi 桥接）——然后",
  "(~2–3 min) because GitHub Actions has to download the PlatformIO toolchain and OnStepX's external libraries. Subsequent builds of the same board are ~30–60 s thanks to caching.":
    "（约 2–3 分钟），因为 GitHub Actions 需要下载 PlatformIO 工具链和 OnStepX 的外部库。之后同一主板的构建借助缓存只需约 30–60 秒。",
  "(±0.5°C typical, ±0.25° over a narrow band), but the E4 has no OneWire pin — AUX7 is OFF, and the only broken-out bidirectional GPIOs are SDA/SCL on the I2C header, so it rules out I2C devices and a GPS there. Reading each device's 64-bit serial number is the other fiddly part.":
    "（典型 ±0.5°C，窄范围内 ±0.25°），但 E4 没有 OneWire 引脚——AUX7 为 OFF，而唯一引出的双向 GPIO 是 I2C 排针上的 SDA/SCL，占用它们就无法再在那里接 I2C 设备和 GPS。读取每个器件的 64 位序列号是另一个麻烦之处。",
  "(≈64 ≈ 25%), or feed the heaters from a separate 12V rail.":
    "（≈64 ≈ 25%），或从独立的 12V 电源为加热带供电。",
  ") and":
    "）和",
  ") and the three":
    "）以及三个",
  ") instead of running the old firmware.":
    "），而不是运行旧固件。",
  ") is written on top.":
    "）会写在其上覆盖。",
  ") reflects the current mode — the example below is from OnStepX mode:":
    "）反映当前模式——下面的示例来自 OnStepX 模式：",
  ") will":
    "）",
  "), plug in USB, click":
    "），插入 USB，点击",
  "), verifies each line's checksum, and collapses everything into a flat":
    "），校验每一行的校验和，并将所有内容合并为一个扁平的",
  "). Leave empty to pull the FYSETC E4 reference config.":
    "）。留空则拉取 FYSETC E4 参考配置。",
  "). The project source is always the latest upstream —":
    "）。项目源码始终是最新的上游版本——",
  "). When the Worker triggers the workflow, GitHub spins up a fresh Ubuntu virtual machine, runs the steps, then throws the VM away. The steps are:":
    "）。当 Worker 触发 workflow 时，GitHub 会启动一台全新的 Ubuntu 虚拟机，执行各步骤，然后丢弃该虚拟机。步骤如下：",
  "+ USB connected,":
    "+ USB 连接，",
  ", a small C program that talks to the Teensy's HalfKay bootloader over USB HID using libusb/hidapi. The Teensy has no serial bootloader and no DFU interface — HalfKay is the only path in. To do the same thing from a browser we need an API that can send HID output reports to an arbitrary vendor device, and that's exactly what":
    "，一个小型 C 程序，通过 USB HID 使用 libusb/hidapi 与 Teensy 的 HalfKay 引导程序通信。Teensy 没有串口引导程序，也没有 DFU 接口——HalfKay 是唯一的入口。要在浏览器中做到同样的事，我们需要一个能向任意厂商设备发送 HID 输出报告的 API，而这正是",
  ", and":
    "，以及",
  ", and optionally":
    "，并可选",
  ", and search for":
    "，并搜索",
  ", and wire up":
    "，并自动配置好",
  ", axis driver model, and steps/deg must all be set.":
    "、轴驱动器型号和每度步数都必须设置。",
  ", back into Config.h in place of the":
    "，复制回 Config.h，替换",
  ", choosing a genuinely free GPIO — and remember GPIO34/35/36/39 are input-only and cannot drive a bidirectional OneWire bus. The only broken-out bidirectional GPIOs are":
    "，并选择一个真正空闲的 GPIO——注意 GPIO34/35/36/39 仅为输入，无法驱动双向 OneWire 总线。唯一引出的双向 GPIO 是",
  ", click the":
    "，点击",
  ", clone the upstream that matches the firmware you're building (":
    "，克隆与您要构建的固件对应的上游仓库（",
  ", copy the selected folders into":
    "，将所选文件夹复制到",
  ", driver, and mount lines should look right.":
    "、驱动器和支架相关的行应当正确。",
  ", drop the baud: most ESP8266 modules prefer 460 800 or 115 200. Our flasher already uses 460 800 by default; if that fails, the chip itself is the issue (check USB cable, try the boot procedure manually).":
    "，请降低波特率：大多数 ESP8266 模块更适合 460 800 或 115 200。我们的烧录工具默认已使用 460 800；如果仍失败，问题出在芯片本身（检查 USB 线，尝试手动执行启动步骤）。",
  ", etc.":
    "等。",
  ", factory jumper caps off, GPIO15 → M-TX wire fitted.":
    "，拆掉出厂跳线帽，接好 GPIO15 → M-TX 的连线。",
  ", follow":
    "，按照",
  ", its own dedicated pins. The":
    "，有自己专用的引脚。",
  ", making GPIO34 (X-MIN) the shared input for BOTH":
    "，使 GPIO34 (X-MIN) 同时作为以下两者的共享输入：",
  ", not":
    "，而不是",
  ", not \"NONE\" — NONE is not a valid OnStepX value and will not compile.":
    "，而不是「NONE」——NONE 不是有效的 OnStepX 值，无法编译。",
  ", open":
    "，打开",
  ", or":
    "，或",
  ", or any feature branch that exists upstream":
    "，或上游存在的任何功能分支",
  ", or by the full SmartWebServer running on the same ESP32.":
    "，或由运行在同一 ESP32 上的完整 SmartWebServer 提供。",
  ", otherwise the plugin will compile but the radio won't come up. Configure SSID / password in the plugin's own":
    "，否则插件能编译但无线模块不会启动。请在插件自己的配置中设置 SSID / 密码：",
  ", pick":
    "，选择",
  ", pick the device in the browser picker.":
    "，在浏览器选择器中选择设备。",
  ", pick the device in the browser prompt. Done.":
    "，在浏览器提示中选择设备。完成。",
  ", pick the port (same USB-UART families as ESP32: CP2102, CH340, FTDI).":
    "，选择端口（与 ESP32 相同的 USB-UART 系列：CP2102、CH340、FTDI）。",
  ", pick the port in the browser prompt (it'll be labeled something like":
    "，在浏览器提示中选择端口（名称类似于",
  ", published as a 1-day-retention workflow artifact":
    "，作为保留 1 天的 workflow artifact 发布",
  ", re-generate, re-compile, re-flash. If nothing moves at all, check the wiring — if step/dir pins aren't connected, the firmware is fine but the stepper won't move.":
    "，重新生成、重新编译、重新烧录。如果完全不动，请检查接线——如果 step/dir 引脚没有连接，固件没问题但步进电机不会转动。",
  ", redeploy. The whole pipeline takes under an hour end-to-end.":
    "，重新部署。整个流程从头到尾不到一小时。",
  ", release BOOT,":
    "，松开 BOOT，",
  ", release BOOT.":
    "，松开 BOOT。",
  ", release BOOT0. The board re-enumerates as":
    "，松开 BOOT0。主板会重新枚举为",
  ", select \"STM32 BOOTLOADER\", and replace the driver with":
    "，选择「STM32 BOOTLOADER」，并将驱动程序替换为",
  ", serial/WiFi, weather/IMU sensors, GPS, display.":
    "、串口/WiFi、气象/IMU 传感器、GPS、显示屏。",
  ", so the driver model is":
    "，因此驱动器型号为",
  ", so — unlike most OnStep main boards — it already":
    "，所以——与大多数 OnStep 主板不同——它已经",
  ", tap":
    "，点按",
  ", then flash and open the serial monitor. Every detected device is listed. Copy the one you want, e.g.":
    "，然后烧录并打开串口监视器。所有检测到的器件都会列出。复制您需要的那个，例如",
  ", then power-cycle — the device name in Device Manager /":
    "，然后断电重启——设备管理器 /",
  ", using the":
    "，使用",
  ", while":
    "，而",
  ", you're warned because it would appear in the public GitHub Actions log.":
    "，系统会发出警告，因为它会出现在公开的 GitHub Actions 日志中。",
  ", …) and pick the microstepping. Review the pre-filled steps/deg values.":
    "、…），并选择细分。检查预填的每度步数。",
  "-360..0 degrees":
    "-360..0 度",
  "-90..-360 degrees":
    "-90..-360 度",
  "-90..0 degrees":
    "-90..0 度",
  ". A 10k NTC raises the divider voltage, so do NOT also add the 10k RPARALLEL mod. The 4.7kΩ in the E4 config is simply the onboard series resistor.":
    "。10k NTC 会提高分压电压，所以不要再同时加装 10k RPARALLEL 改装。E4 配置中的 4.7kΩ 只是板载串联电阻。",
  ". A KY-003-style module adds its own pull-up to 5V — that one does need a divider (1kΩ series + 2kΩ to GND). OUT → X-MIN, VCC → 5V, GND → GND. Configure":
    "。KY-003 类模块自带接 5V 的上拉——这种确实需要分压（串联 1kΩ + 2kΩ 接 GND）。OUT → X-MIN，VCC → 5V，GND → GND。配置",
  ". A tester has volunteered and this notice will be removed once a build has been confirmed working on an actual V5 Pro. Until then: read the generated Config.h before you flash, and keep a copy of your working firmware.":
    "。已有测试者自愿帮忙，一旦在真实的 V5 Pro 上确认构建可用，此提示将被移除。在此之前：烧录前请阅读生成的 Config.h，并保留一份您当前可用固件的副本。",
  ". Click":
    "。点击",
  ". Copy, download, or load an existing one to back-fill the form. The":
    "。可复制、下载，或加载现有文件以回填表单。页眉中的",
  ". Enable":
    "。启用",
  ". If the issue is with the firmware itself (mount behavior on OnStepX, hand-pendant behavior on SHC, or web-UI / network behavior on SWS), use":
    "。如果问题出在固件本身（OnStepX 的支架行为、SHC 的手控器行为，或 SWS 的 Web 界面/网络行为），请使用",
  ". If the optic still dews up, lower Zero so full power kicks in sooner.":
    "。如果光学元件仍然结露，请调低 Zero，让全功率更早启动。",
  ". Mismatches are caught before they hit the runner.":
    "。不匹配会在进入 runner 之前就被发现。",
  ". No build-service or firmware-source change is involved.":
    "。不涉及对构建服务或固件源码的任何修改。",
  ". Note the value is":
    "。注意取值是",
  ". On Android, turn off mobile data first so it does not route around the access point.":
    "。在 Android 上请先关闭移动数据，以免流量绕过接入点。",
  ". Pick":
    "。选择",
  ". PlatformIO downloads the MCU toolchain and any external libraries the project needs, then compiles.":
    "。PlatformIO 会下载 MCU 工具链和项目所需的外部库，然后编译。",
  ". Same Windows WinUSB / Zadig note as the BlackPill applies.":
    "。与 BlackPill 相同的 Windows WinUSB / Zadig 说明同样适用。",
  ". Set":
    "。将",
  ". The MCU target auto-follows your PINMAP. The preflight checklist tells you whether the build will even try. Click":
    "。目标 MCU 会自动跟随您的 PINMAP。预检清单会告诉您构建是否会被执行。点击",
  ". The UART steppers (":
    "。UART 驱动器（",
  ". The form auto-corrects this when you switch envs, and the preflight catches it if you override.":
    "。切换环境时表单会自动更正，如果您强行覆盖，预检也会发现。",
  ". The next ~10 lines are the exact file the workflow wrote into the source tree before compiling.":
    "。接下来约 10 行就是 workflow 在编译前写入源码树的确切文件内容。",
  ". The workflow detects the pre-existing":
    "。workflow 会检测到该分支中已存在的",
  ". Use one switch at the home position (home = limit), or use separate switches: home to X-MIN, limit to TB (GPIO39) with":
    "。可在原点位置只用一个开关（原点 = 限位），或使用独立开关：原点接 X-MIN，限位接 TB (GPIO39)，并设置",
  ". WIFI_STATION = the board JOINS your existing home WiFi/router — best indoors with internet on the same device; find its IP in the serial monitor or your router's client list. Default WiFi password: \"":
    "。WIFI_STATION = 主板加入您现有的家庭 WiFi/路由器——适合室内且同一设备需要上网的情况；可在串口监视器或路由器的客户端列表中找到它的 IP。默认 WiFi 密码：\"",
  ". Wait 1–3 min.":
    "。等待 1–3 分钟。",
  ". With the normal E4 setup (4× TMC2209 on UART) there is therefore":
    "。因此在常规 E4 配置（4× TMC2209 走 UART）下，",
  "/ empty and configure them over the OnStepX web UI":
    "/ 空，并在烧录后通过 OnStepX Web 界面配置它们",
  "// AB, AB_ESP32, CW_CCW, PULSE_DIR, AS37_H39B_B. Dec/Alt (A/MA) & (B/SLO.)":
    "// AB、AB_ESP32、CW_CCW、PULSE_DIR、AS37_H39B_B。赤纬/高度 (A/MA) & (B/SLO.)",
  "// AB, AB_ESP32, CW_CCW, PULSE_DIR, AS37_H39B_B. RA/Azm (A/MA) & (B/SLO.)":
    "// AB、AB_ESP32、CW_CCW、PULSE_DIR、AS37_H39B_B。赤经/方位 (A/MA) & (B/SLO.)",
  "// Allow BLUETOOTH, WIFI_STATION, or BOTH OnStep connections (ESP32 only.)":
    "// 允许 BLUETOOTH、WIFI_STATION 或 BOTH 方式的 OnStep 连接（仅限 ESP32。）",
  "// Allow SERIAL_ST4 OnStep connections using its ST4 port synchronous":
    "// 允许通过其 ST4 端口进行同步的 SERIAL_ST4 OnStep 连接",
  "// Applies refraction to coordinates to/from OnStep, except exactly":
    "// 对发往/来自 OnStep 的坐标应用大气折射修正，但恰好",
  "// Automatic check both, ON for swapped port or OFF for default port only.":
    "// 自动检查两者，ON 为交换后的端口，OFF 仅为默认端口。",
  "// Automatically sync Encoders to OnStep.":
    "// 自动将编码器同步到 OnStep。",
  "// BEST Stays on current side if possible. EAST or WEST switch if possible.":
    "// BEST 尽可能保持在当前一侧。EAST 或 WEST 尽可能切换。",
  "// BME280 (I2C 0x77,) BME280_0x76, BME280_SPI (see pinmap for CS.)":
    "// BME280 (I2C 0x77,) BME280_0x76, BME280_SPI（CS 见引脚映射。）",
  "// Causes the defaults to be written back into NV (FLASH,EEPROM,etc.)":
    "// 使默认值被写回 NV（FLASH、EEPROM 等。）",
  "// Choose from: MiniPCB, MiniPCB2, MaxPCB4, MaxESP4, MaxSTM3, FYSETC_E4,":
    "// 可选：MiniPCB, MiniPCB2, MaxPCB4, MaxESP4, MaxSTM3, FYSETC_E4,",
  "// Common baud rates for these parameters are 9600,19200,57600,115200.":
    "// 这些参数的常用波特率为 9600,19200,57600,115200。",
  "// Common baud rates for this parameter are 9600,19200,57600,115200,etc.":
    "// 此参数的常用波特率为 9600,19200,57600,115200 等。",
  "// DS3231 (I2C,) SD3031 (I2C,) TEENSY (T3.2 etc,) GPS, or NTP source.":
    "// DS3231 (I2C,) SD3031 (I2C,) TEENSY (T3.2 等,) GPS 或 NTP 时间源。",
  "// Decay mode goto default override. TMC default is SPREADCYCLE.":
    "// 自动寻星（GOTO）时的衰减模式覆盖默认值。TMC 默认为 SPREADCYCLE。",
  "// Disable backlash takeup during guiding at <= 1X.":
    "// 在 <= 1X 导星时禁用回差补偿。",
  "// Enable LED flashes while connecting then steady once connected.":
    "// 连接时 LED 闪烁，连接后常亮。",
  "// English. Or L_ca, L_cn, L_de, L_en, L_es, L_fr, L_it, L_jp, L_ro, L_us.":
    "// 英语。或 L_ca, L_cn, L_de, L_en, L_es, L_fr, L_it, L_jp, L_ro, L_us。",
  "// English. Specify language with two letter country code, if supported.":
    "// 英语。如支持，可用两个字母的国家代码指定语言。",
  "// Enter motor driver model (above) in both axes to activate the mount.":
    "// 在两个轴上都填写电机驱动器型号（见上）以启用支架。",
  "// Enter motor driver model (above) to activate the focuser.":
    "// 填写电机驱动器型号（见上）以启用调焦器。",
  "// Enter motor driver model (above) to activate the rotator.":
    "// 填写电机驱动器型号（见上）以启用旋转器。",
  "// Ethernet unique MAC address.":
    "// 以太网唯一 MAC 地址。",
  "// For access to these settings, this can be changed at runtime also.":
    "// 用于访问这些设置，也可在运行时更改。",
  "// GEM German Equatorial Mount, etc. that need meridian flips.":
    "// GEM 德式赤道仪等需要中天翻转的支架。",
  "// GamePad MAC address #1":
    "// 游戏手柄 MAC 地址 #1",
  "// GamePad MAC address #2":
    "// 游戏手柄 MAC 地址 #2",
  "// HIGH or LOW enables & state clockwise home position, as seen from above.":
    "// HIGH 或 LOW 启用并表示顺时针原点位置（从上方看）。",
  "// HIGH or LOW enables & state clockwise home position, as seen from front.":
    "// HIGH 或 LOW 启用并表示顺时针原点位置（从前方看）。",
  "// HIGH or LOW state indicates mount is in the park orientation.":
    "// HIGH 或 LOW 状态表示支架处于停放姿态。",
  "// HIGH or LOW state on limit sense switch stops movement.":
    "// 限位开关上出现 HIGH 或 LOW 状态时停止运动。",
  "// HIGH or LOW state park input signal triggers parking.":
    "// 停放输入信号为 HIGH 或 LOW 状态时触发停放。",
  "// HIGH senses PPS (pulse per second,) signal rising edge, or use LOW for":
    "// HIGH 检测 PPS（秒脉冲,）信号的上升沿，或用 LOW 检测",
  "// HIGH. Senses the PEC signal rising edge or use LOW for falling edge.":
    "// HIGH。检测 PEC 信号的上升沿，或用 LOW 检测下降沿。",
  "// Hostname for this device up to 16 chars.":
    "// 此设备的主机名，最多 16 个字符。",
  "// JS1 for Jerry's analog joystick":
    "// JS1 为 Jerry 的模拟摇杆",
  "// No compensation or REFRACTION, REFRACTION_DUAL, MODEL, MODEL_DUAL.":
    "// 无补偿，或 REFRACTION、REFRACTION_DUAL、MODEL、MODEL_DUAL。",
  "// OFF to use 12 hour format for entering time.":
    "// OFF 表示输入时间时使用 12 小时制。",
  "// OLED 1.3\" I2C display commonly used. SSD1306 is a 0.96\" OLED display.":
    "// 常用的 1.3\" I2C OLED 显示屏。SSD1306 是 0.96\" OLED 显示屏。",
  "// ON Allows sync to change pier side, for GEM mounts.":
    "// ON 允许同步时改变镜筒所在侧，适用于 GEM 支架。",
  "// ON Enables Meridian Flips for FORK mounts and passing through the":
    "// ON 为 FORK 支架启用中天翻转，并允许穿过",
  "// ON Enables mount motor drivers while in standby.":
    "// ON 在待机时保持支架电机驱动器启用。",
  "// ON Flashes proportional to rate of movement or solid on for slews.":
    "// ON 按运动速率成比例闪烁，快速转动时常亮。",
  "// ON Goto directly to the destination without visiting home position.":
    "// ON 直接自动寻星（GOTO）到目标，不经过原点位置。",
  "// ON Inverts control for cases where 0V is max brightness.":
    "// ON 反转控制，用于 0V 对应最大亮度的情况。",
  "// ON Powers off 30 seconds after movement stops.":
    "// ON 运动停止 30 秒后断电。",
  "// ON Powers off 30sec after movement stops or 10min after last<=1x guide.":
    "// ON 运动停止 30 秒后，或最后一次 <=1x 导星 10 分钟后断电。",
  "// ON Remember automatic meridian flip setting across power cycles.":
    "// ON 断电重启后记住自动中天翻转设置。",
  "// ON Remember automatic sync setting across power cycles.":
    "// ON 断电重启后记住自动同步设置。",
  "// ON Remember meridian flip pause at home setting across power cycles.":
    "// ON 断电重启后记住「中天翻转时在原点暂停」设置。",
  "// ON Remember preferred pier side setting across power cycles.":
    "// ON 断电重启后记住首选镜筒侧设置。",
  "// ON Remember reticle brightness across power cycles.":
    "// ON 断电重启后记住十字线亮度。",
  "// ON Remembers approximate mount coordinates across power cycles.":
    "// ON 断电重启后记住支架的大致坐标。",
  "// ON Remembers rates set across power cycles.":
    "// ON 断电重启后记住已设置的速率。",
  "// ON Remembers refraction/pointing model compensated tracking settings.":
    "// ON 记住大气折射/指向模型补偿跟踪的设置。",
  "// ON Restores any pointing model saved in NV at startup.":
    "// ON 启动时恢复保存在 NV 中的指向模型。",
  "// ON Reverses movement direction, or reverse wiring instead to correct.":
    "// ON 反转运动方向，也可改为反接线来纠正。",
  "// ON Start with automatic meridian flips enabled.":
    "// ON 启动时启用自动中天翻转。",
  "// ON Start with meridian flip pause at home enabed.":
    "// ON 启动时启用「中天翻转时在原点暂停」。",
  "// ON Start with tracking enabled.":
    "// ON 启动时启用跟踪。",
  "// ON Upload ESP8266 WiFi firmware through SERIAL_B with :ESPFLASH# cmd.":
    "// ON 通过 SERIAL_B 用 :ESPFLASH# 命令上传 ESP8266 WiFi 固件。",
  "// ON allows menus to wrap so moving past bottom returns to top, etc.":
    "// ON 允许菜单循环，越过底部会回到顶部，等等。",
  "// ON allows reset if supported, FWU for STM32 firmware upload pin HIGH.":
    "// ON 允许复位（如支持），FWU 用于将 STM32 固件上传引脚置 HIGH。",
  "// ON alternate to above: Focuser move [E]f1 [W]f2 [N]- [S]+":
    "// ON 替代上述方式：调焦器移动 [E]f1 [W]f2 [N]- [S]+",
  "// ON ambient conditions in locale default units.":
    "// ON 以区域默认单位显示环境条件。",
  "// ON enables auxillary \"pass-through\" ST4 interface.":
    "// ON 启用辅助「直通」ST4 接口。",
  "// ON enables interface. <= 1X guides unless hand control mode.":
    "// ON 启用接口。<= 1X 时为导星，手控模式除外。",
  "// ON for hand controller special features and SHC support.":
    "// ON 启用手控器特殊功能和 SHC 支持。",
  "// ON high resolution encoders correct pointing even for gotos.":
    "// ON 高分辨率编码器即使在自动寻星（GOTO）时也会修正指向。",
  "// ON internal MCU temp. in locale default units.":
    "// ON 以区域默认单位显示 MCU 内部温度。",
  "// ON skips final phase of goto for align stars so user tends to approach":
    "// ON 对校准星跳过自动寻星（GOTO）的最后阶段，以便用户倾向于从",
  "// ON starts w/buzzer sound enabled.":
    "// ON 启动时启用蜂鸣器声音。",
  "// ON to allow BLE gamepad connection for ESP32 only.":
    "// ON 允许连接 BLE 游戏手柄，仅限 ESP32。",
  "// ON to display the coordinate origin control tile on the mount page.":
    "// ON 在支架页面显示坐标原点控制卡片。",
  "// ON to display the servo monitor for OnStepX (any axis.)":
    "// ON 显示 OnStepX 的伺服监视器（任意轴。）",
  "// ON to remember buzzer sound setting across power cycles.":
    "// ON 断电重启后记住蜂鸣器声音设置。",
  "// ON to reverse the count direction.":
    "// ON 反转计数方向。",
  "// ON to show ambient conditions in the display rotation":
    "// ON 在显示轮播中显示环境条件",
  "// ON uses home switches to find home first when starting an align.":
    "// ON 开始校准时先使用原点开关寻找原点。",
  "// ON, HIGH, or LOW. For driver status info/fault detection.":
    "// ON、HIGH 或 LOW。用于驱动器状态信息/故障检测。",
  "// ON, HIGH, or LOW. Polling for driver status info/fault detection.":
    "// ON、HIGH 或 LOW。轮询驱动器状态信息/故障检测。",
  "// ON, n. Where n=100..6000 (Hz freq.) for speaker. ON for piezo buzzer.":
    "// ON, n。其中 n=100..6000（Hz 频率）用于扬声器。ON 用于压电蜂鸣器。",
  "// Offset in deg's for goto target unidirectional approach, 0.0 disables":
    "// 自动寻星目标单向接近的偏移量（度），0.0 表示禁用",
  "// Only MaxSTM3, SKR PRO, FYSETC S6 and Manticore pinmaps assign one; all other boards must set it.":
    "// 只有 MaxSTM3、SKR PRO、FYSETC S6 和 Manticore 的引脚映射会分配一个；其他所有主板都必须设置它。",
  "// Or use 19200,57600,115200,230400,460800 (not all devices support > 115200)":
    "// 也可使用 19200,57600,115200,230400,460800（并非所有设备都支持 > 115200）",
  "// Or use ETHERNET_W5100 or ETHERNET_W5500":
    "// 也可使用 ETHERNET_W5100 或 ETHERNET_W5500",
  "// Or use any h/w serial port. Serial1 or Serial2, etc. as supported.":
    "// 也可使用任意硬件串口，如 Serial1 或 Serial2 等（视支持情况而定）。",
  "// PULSE Step signal wave form faster rates. SQUARE best signal integrity.":
    "// PULSE 步进信号波形，速率更快。SQUARE 信号完整性最佳。",
  "// SA_STRICT, or SA_PERMISSIVE. Controls when startup trust is granted.":
    "// SA_STRICT 或 SA_PERMISSIVE。控制何时授予启动信任。",
  "// Seconds of PEC buffer allowed.":
    "// 允许的 PEC 缓冲区秒数。",
  "// Sensitivity of joystick in ADC counts (larger is less sensitive)":
    "// 摇杆灵敏度，单位为 ADC 计数（数值越大越不灵敏）",
  "// Steady illumination if no error, blinks w/error code otherwise.":
    "// 无错误时常亮，否则按错误代码闪烁。",
  "// THERMISTOR or n. Where n is the ds18b20 s/n for focuser temp.":
    "// THERMISTOR 或 n。n 为调焦器温度所用 ds18b20 的序列号。",
  "// This devices name up to 16 chars (collapses to mDNS name \"onstepsws\".)":
    "// 本设备名称，最多 16 个字符（折叠为 mDNS 名称「onstepsws」。）",
  "// Tracking decay mode default override. TMC default is STEALTHCHOP.":
    "// 跟踪时衰减模式的默认值覆盖。TMC 默认为 STEALTHCHOP。",
  "// Use 0 to 3 for Min, Low, High, Max respectively.":
    "// 用 0 到 3 分别表示最小、低、高、最大。",
  "// Use BLUETOOTH or WIFI_ACCESS_POINT or WIFI_STATION (ESP32 only.)":
    "// 使用 BLUETOOTH、WIFI_ACCESS_POINT 或 WIFI_STATION（仅限 ESP32。）",
  "// Use OFF to disable mount Goto features.":
    "// 设为 OFF 可禁用支架的自动寻星（Goto）功能。",
  "// Use ON for background error messages only, use VERBOSE for all":
    "// 设为 ON 仅输出后台错误消息，设为 VERBOSE 输出全部消息",
  "// Use platforms default non-volatile device to remember runtime settings.":
    "// 使用平台默认的非易失性存储设备保存运行时设置。",
  "// Uses HAL specified default (either 6 or 9 stars.)":
    "// 使用 HAL 指定的默认值（6 或 9 颗星。）",
  "// Wifi Access Point Enabled.":
    "// 启用 WiFi 接入点。",
  "// Wifi Access Point GATEWAY Address.":
    "// WiFi 接入点网关（GATEWAY）地址。",
  "// Wifi Access Point IP Address.":
    "// WiFi 接入点 IP 地址。",
  "// Wifi Access Point SUBNET Mask.":
    "// WiFi 接入点子网掩码（SUBNET）。",
  "// Wifi Access Point channel.":
    "// WiFi 接入点信道。",
  "// Wifi Access Point password.":
    "// WiFi 接入点密码。",
  "// Wifi Station Enabled.":
    "// 启用 WiFi 站点（Station）模式。",
  "// Wifi Station mode password.":
    "// WiFi 站点模式密码。",
  "// Wifi Station/Ethernet DHCP Enabled.":
    "// 启用 WiFi 站点/以太网 DHCP。",
  "// Wifi Station/Ethernet GATEWAY Address.":
    "// WiFi 站点/以太网网关（GATEWAY）地址。",
  "// Wifi Station/Ethernet IP Address.":
    "// WiFi 站点/以太网 IP 地址。",
  "// Wifi Station/Ethernet SUBNET Mask.":
    "// WiFi 站点/以太网子网掩码（SUBNET）。",
  "// n, (arcsec.) Maximum diff. between encoder/OnStep for sync. from OnStep.":
    "// n，（角秒。）从 OnStep 同步时编码器与 OnStep 之间的最大差值。",
  "// n, (arcsec.) Minimum diff. between encoder/OnStep for sync. to OnStep.":
    "// n，（角秒。）同步到 OnStep 时编码器与 OnStep 之间的最小差值。",
  "// n, (degrees.) Approx. distance for acceleration (and deceleration.)":
    "// n，（度。）加速（及减速）的大致距离。",
  "// n, (degrees.) Approx. distance required to stop when a slew":
    "// n，（度。）快速转动时停止所需的大致距离",
  "// n, (mA.) Current during slews. OFF uses IRUN.":
    "// n，（mA。）快速转动时的电流。OFF 表示使用 IRUN。",
  "// n, (mA.) Current during standstill. OFF uses IRUN/2.0":
    "// n，（mA。）静止时的电流。OFF 表示使用 IRUN/2.0",
  "// n, (mA.) Current during tracking, appropriate for stepper/driver/etc.":
    "// n，（mA。）跟踪时的电流，需与电机/驱动器等相匹配。",
  "// n, (ticks/degree.) Encoder ticks per degree.":
    "// n，（刻度/度。）编码器每度刻度数。",
  "// n, Where n=200..5000 (um/s.) Adjustable at run-time from":
    "// n，其中 n=200..5000（um/s。）运行时可通过以下方式调整：",
  "// n. Baud rate as above. See (src/pinmaps/) for Serial port assignments.":
    "// n。波特率同上。串口分配见 (src/pinmaps/)。",
  "// n. Baud rate of the GPS module.":
    "// n。GPS 模块的波特率。",
  "// n. Desired slew rate in deg/sec. Adjustable at run-time from":
    "// n。期望的快速转动速度，单位 deg/sec。运行时可通过以下方式调整：",
  "// n. Microstep mode used during slews. OFF uses _DRIVER_MICROSTEPS.":
    "// n。快速转动时使用的细分模式。OFF 表示使用 _DRIVER_MICROSTEPS。",
  "// n. Microstep mode when tracking.":
    "// n。跟踪时的细分模式。",
  "// n. Number of steps per degree for rotator/de-rotator.":
    "// n。旋转器/消旋器每度步数。",
  "// n. Number of steps per degree:":
    "// n。每度步数：",
  "// n. RX pin for the GPS port. Required for SoftSerial/HardSerial; ESP32 Serial1/2 remap with RX+TX.":
    "// n。GPS 端口的 RX 引脚。SoftSerial/HardSerial 必需；ESP32 Serial1/2 通过 RX+TX 重映射。",
  "// n. Steps per micrometer. Figure this out by testing or other means.":
    "// n。每微米步数。可通过测试或其他方式确定。",
  "// n. Steps per worm rotation (0 disables else 720 sec buffer allocated.)":
    "// n。蜗杆每转步数（0 表示禁用，否则分配 720 秒缓冲区。）",
  "// n. TX pin for the GPS port (to GPS RX, often left unwired).":
    "// n。GPS 端口的 TX 引脚（接 GPS RX，通常不接线）。",
  "// n. Time limit n=0..120 seconds. Use 0 to disable.":
    "// n。时间限制 n=0..120 秒。设为 0 表示禁用。",
  "// n. Where n= -90..-360 (degrees.) Minimum \"Hour Angle\" or Azimuth.":
    "// n。其中 n= -90..-360（度。）最小「时角」或方位角。",
  "// n. Where n= 0..90 (degrees.) Allow sync/reset only within this +/-range.":
    "// n。其中 n= 0..90（度。）仅在此 +/- 范围内允许同步/重置。",
  "// n. Where n= 0..90 (degrees.) Maximum allowed Declination or Altitude.":
    "// n。其中 n= 0..90（度。）允许的最大赤纬或高度。",
  "// n. Where n= 90.. 360 (degrees.) Maximum \"Hour Angle\" or Azimuth.":
    "// n。其中 n= 90.. 360（度。）最大「时角」或方位角。",
  "// n. Where n=-360..0 (degrees.) Minimum allowed rotator angle.":
    "// n。其中 n=-360..0（度。）允许的最小旋转器角度。",
  "// n. Where n=-90..0 (degrees.) Minimum allowed Declination or Altitude.":
    "// n。其中 n=-90..0（度。）允许的最小赤纬或高度。",
  "// n. Where n=0..255 (0..100%) activates feature sets default brightness.":
    "// n。其中 n=0..255（0..100%），启用该功能并设置默认亮度。",
  "// n. Where n=0..360 (degrees.) Maximum allowed rotator angle.":
    "// n。其中 n=0..360（度。）允许的最大旋转器角度。",
  "// n. Where n=0..500 (millimeters.) Maximum allowed position.":
    "// n。其中 n=0..500（毫米。）允许的最大位置。",
  "// n. Where n=0..500 (millimeters.) Minimum allowed position.":
    "// n。其中 n=0..500（毫米。）允许的最小位置。",
  "// n. Where n=2..50 (x sidereal rate) during backlash takeup.":
    "// n。其中 n=2..50（x 恒星速率），用于回差消除期间。",
  "// n. Where n=5..200 (um/s.) Minimum microns/second.":
    "// n。其中 n=5..200（um/s。）最小微米/秒。",
  "// n. Where n=9600,19200,57600,115200 (common baud rates.)":
    "// n。其中 n=9600,19200,57600,115200（常用波特率。）",
  "// n. Where n=9600,19200,57600,115200,230400,460800 (common baud rates.)":
    "// n。其中 n=9600,19200,57600,115200,230400,460800（常用波特率。）",
  "// signals with a HIGH or LOW state when successfully parked.":
    "// 成功停放（park）后以 HIGH 或 LOW 状态发出信号。",
  "0 (Min)":
    "0（最小）",
  "0 disables, use Calculator tab":
    "0 表示禁用，请使用计算器标签页",
  "0..120 seconds (0 = disabled)":
    "0..120 秒（0 = 禁用）",
  "0..360 degrees":
    "0..360 度",
  "0..500 mm maximum":
    "0..500 mm 最大值",
  "0..500 mm minimum":
    "0..500 mm 最小值",
  "0..90 degrees":
    "0..90 度",
  "1 (Low)":
    "1（低）",
  "1 (full step)":
    "1（整步）",
  "1 hour":
    "1 小时",
  "1 · How it works (behind the curtain)":
    "1 · 工作原理（幕后）",
  "1) power the board → 2) on your phone/PC join the":
    "1) 给主板通电 → 2) 在手机/电脑上加入",
  "1-Wire temp":
    "1-Wire 温度",
  "1. Install Arduino IDE & ESP32 Platform":
    "1. 安装 Arduino IDE 和 ESP32 平台",
  "10 · Privacy & what gets logged":
    "10 · 隐私与日志记录内容",
  "10µF 16V electrolytic":
    "10µF 16V 电解电容",
  "11 · Troubleshooting":
    "11 · 故障排除",
  "12 · FAQ":
    "12 · 常见问题",
  "12–24V DC on Vin (board max 22.5A); heater + bed outputs 15A max; onboard 5V buck (2A) and 3.3V LDO":
    "Vin 输入 12–24V DC（主板最大 22.5A）；加热器 + 热床输出最大 15A；板载 5V 降压（2A）和 3.3V LDO",
  "12–24V PSU — Main DC power supply (12–24V)":
    "12–24V 电源 — 主直流电源（12–24V）",
  "1b · OnStepX vs SmartHandController vs SmartWebServer — the mode switch":
    "1b · OnStepX、SmartHandController 与 SmartWebServer — 模式切换",
  "1kΩ → PC817/4N35 LED anode (+)":
    "1kΩ → PC817/4N35 LED 阳极（+）",
  "2 (High)":
    "2（高）",
  "2 mount + 1 rotator + 2 focusers (shared pins)":
    "2 个支架轴 + 1 个旋转器 + 2 个调焦器（共用引脚）",
  "2 · Quick start — board to firmware in 8 steps":
    "2 · 快速入门 — 8 步从主板到固件",
  "2-pin screw terminal":
    "2 针螺丝端子",
  "2. Required Libraries":
    "2. 所需库",
  "2..50 (x sidereal rate)":
    "2..50（x 恒星速率）",
  "2.4 GHz channel 1–13":
    "2.4 GHz 信道 1–13",
  "2.5mm TRS (stereo)":
    "2.5mm TRS（立体声）",
  "2.5mm TRS Sleeve (camera GND)":
    "2.5mm TRS 套筒（相机 GND）",
  "2.5mm TRS Tip (shutter signal)":
    "2.5mm TRS 尖端（快门信号）",
  "2.5mm TS (mono)":
    "2.5mm TS（单声道）",
  "2.5mm or 3.5mm stereo":
    "2.5mm 或 3.5mm 立体声",
  "200 steps/rev, 0.4–0.8A":
    "200 步/转，0.4–0.8A",
  "200 steps/rev, 1.0–1.7A":
    "200 步/转，1.0–1.7A",
  "200..5000 μm/s slew rate":
    "200..5000 μm/s 快速转动速度",
  "20MHz channel width":
    "20MHz 信道宽度",
  "24 hours, then deleted automatically":
    "24 小时，之后自动删除",
  "24V supply makes motors / dew heaters run hot":
    "24V 电源会使电机/除露加热带发热",
  "24V supply:":
    "24V 电源：",
  "3 (Max)":
    "3（最大）",
  "3 · What each tab does":
    "3 · 各标签页的功能",
  "3. Source & Preparation":
    "3. 源码与准备",
  "3.3V reg":
    "3.3V 稳压",
  "3.3V regulator":
    "3.3V 稳压器",
  "3435 (set RNOM 10000)":
    "3435（设置 RNOM 10000）",
  "3950 — E4 default":
    "3950 — E4 默认",
  "4 · The settings you actually have to change":
    "4 · 真正需要修改的设置",
  "4. Arduino IDE Settings":
    "4. Arduino IDE 设置",
  "4.5–24V — not a 3.3V part":
    "4.5–24V — 不是 3.3V 器件",
  "4.5–5V (it carries an A3144)":
    "4.5–5V（搭载 A3144）",
  "4× TMC2209 soldered on board, UART at 460800 baud (addresses X=1, Y=3, Z=0, E=2), VREF unconnected — current is UART-only":
    "板载焊接 4× TMC2209，UART 波特率 460800（地址 X=1、Y=3、Z=0、E=2），VREF 未连接 — 电流只能通过 UART 设置",
  "5 · Picking an upstream version (Source ref)":
    "5 · 选择上游版本（源码引用）",
  "5. Default Config.h Values":
    "5. Config.h 默认值",
  "5–15W per heater; match to OTA diameter and to your supply voltage (12V strap on 12V, 24V-rated on 24V).":
    "每条加热带 5–15W；需与镜筒口径及电源电压匹配（12V 电源用 12V 加热带，24V 电源用 24V 额定加热带）。",
  "6 · The preflight checklist":
    "6 · 预检清单",
  "60–80mm finder / guide":
    "60–80mm 寻星镜 / 导星镜",
  "7 · OnStepX plugins — how the bundling works":
    "7 · OnStepX 插件 — 打包方式",
  "8 · Board-by-board USB preparation":
    "8 · 各主板的 USB 准备",
  "9 · Browser requirements":
    "9 · 浏览器要求",
  "90..360 degrees":
    "90..360 度",
  ": 1024-byte blocks, 64-byte header with a little-endian flash offset, final":
    "：1024 字节块，64 字节头部含小端序烧录偏移量，最后发送",
  ": SDA↔M-RX, SCL↔M-TX and the three xDIAG-EN caps":
    "：SDA↔M-RX、SCL↔M-TX 以及三个 xDIAG-EN 跳线帽",
  ": Z-min pin of ZDIAG-EN to M-TX on the TMC UART header":
    "：将 ZDIAG-EN 的 Z-min 引脚接到 TMC UART 排针上的 M-TX",
  ": focuser1 is the":
    "：focuser1 是",
  ": switching from OnStepX to SHC and back doesn't lose your work in either.":
    "：从 OnStepX 切换到 SHC 再切回来，两边的工作都不会丢失。",
  ": the ESP32 routes its hardware serial port (Serial2) to GPIO21/22, so nothing on the board has to be modified.":
    "：ESP32 将其硬件串口（Serial2）路由到 GPIO21/22，因此无需对主板做任何改动。",
  "; SHC builds use the":
    "；SHC 编译使用",
  "; drop it into Teensy Loader and press the white program button. CLI alternative:":
    "；将其拖入 Teensy Loader 并按下白色编程按钮。命令行替代方式：",
  "; set":
    "；设置",
  "; set the PSU current limit to ≥3A.":
    "；将电源限流设为 ≥3A。",
  "= (AXIS1_STEPS_PER_DEGREE × 360) / worm_gear":
    "= (AXIS1_STEPS_PER_DEGREE × 360) / 蜗轮齿数",
  "= (diagonal_pixels × 2) / 360":
    "= (对角线像素 × 2) / 360",
  "= (motor_steps × microsteps × gear_ratio) / 360":
    "= (电机步数 × 细分 × 齿轮比) / 360",
  "= (motor_steps × microsteps × worm × pulley) / 360":
    "= (电机步数 × 细分 × 蜗轮 × 皮带轮) / 360",
  "= 3600 / steps_per_degree":
    "= 3600 / 每度步数",
  "= OK,":
    "= 正常，",
  "= too fast for this MCU at fastest (2x) slew:":
    "= 在最快（2x）快速转动时对该 MCU 而言过快：",
  "? Help":
    "? 帮助",
  "A 4.7kΩ resistor is required between DATA and VCC (3.3V). Use normal 3-wire power (VCC/GND/DATA) — parasitic power is unreliable here and is not worth the saved wire.":
    "DATA 与 VCC（3.3V）之间需要一个 4.7kΩ 电阻。请使用常规三线供电（VCC/GND/DATA）— 寄生供电在此并不可靠，省下一根线并不值得。",
  "A DS3231 RTC provides accurate date/time and preserves it across power cycles. OnStepX uses it for timekeeping, optional PPS sync and remembering mount position.":
    "DS3231 RTC 提供精确的日期/时间，并在断电重启后保持。OnStepX 用它来计时、进行可选的 PPS 同步以及记忆支架位置。",
  "A GPS module provides automatic date/time and location to OnStepX. The most common module is the GY-GPSV3 (NEO-M8N or NEO-6M). On the E4 the GPS goes on the":
    "GPS 模块为 OnStepX 自动提供日期/时间和位置。最常见的模块是 GY-GPSV3（NEO-M8N 或 NEO-6M）。在 E4 上，GPS 接在",
  "A Hall sensor detects a magnet on the worm wheel. Each rotation triggers one pulse, synchronising the PEC buffer.":
    "霍尔传感器检测蜗轮上的磁铁。每转一圈触发一个脉冲，用于同步 PEC 缓冲区。",
  "A PINMAP incompatible with the MCU target (the preflight usually catches this — override it only if you're sure).":
    "PINMAP 与目标 MCU 不兼容（预检通常会发现这一点 — 只有在确定时才强制覆盖）。",
  "A bare sensor has an open-collector output, so TE's on-board 4.7kΩ pull-up to 3.3V keeps it safe — no divider. A KY-003 module adds its own pull-up to 5V, and GPIO36 is NOT 5V-tolerant: use a divider — 1kΩ in series from the module output, 2kΩ from the GPIO node to GND (5V × 2/3 ≈ 3.3V). Swapping the two resistors gives ~1.7V, which the ESP32 will not read as a reliable HIGH.":
    "裸传感器为集电极开路输出，因此 TE 板载的 4.7kΩ 上拉（至 3.3V）可保证安全 — 无需分压。KY-003 模块自带上拉至 5V，而 GPIO36 不耐受 5V：请使用分压器 — 模块输出串联 1kΩ，GPIO 节点到 GND 接 2kΩ（5V × 2/3 ≈ 3.3V）。若两只电阻接反，得到约 1.7V，ESP32 无法将其可靠识别为 HIGH。",
  "A cold start is ~30s with a clear sky view (u-blox spec ~27–32s). Allow a few minutes in practice through a window or under partial sky. Subsequent starts: 1–5s (hot start, if the module has a backup battery). If you are still waiting after 10 minutes, suspect the antenna or the wiring rather than the fix time.":
    "冷启动在天空视野开阔时约需 30 秒（u-blox 规格约 27–32 秒）。实际隔着窗户或仅能看到部分天空时，请预留几分钟。后续启动：1–5 秒（热启动，前提是模块带有备用电池）。如果 10 分钟后仍在等待，应怀疑天线或接线，而不是定位时间。",
  "A driver model or feature enabled that the selected pinmap doesn't have pins for.":
    "启用了所选引脚映射没有对应引脚的驱动器型号或功能。",
  "A few UI niceties worth knowing:":
    "几个值得了解的界面小技巧：",
  "A normal OnStepX workflow looks like:":
    "常规的 OnStepX 工作流程如下：",
  "A recurring, E4-specific gotcha: its own 2.4GHz WiFi can disturb the steppers, because one ESP32 juggles motion, the web server and the radio.":
    "E4 特有的常见陷阱：它自身的 2.4GHz WiFi 可能干扰步进电机，因为一颗 ESP32 要同时处理运动控制、Web 服务器和无线电。",
  "A required field left at":
    "必填字段仍为",
  "A ~200-line JavaScript function that Cloudflare runs on-demand when your browser pings it. Its only job is to accept your":
    "一个约 200 行的 JavaScript 函数，由 Cloudflare 在你的浏览器请求时按需运行。它唯一的工作是接收你的",
  "A3144 on PCB":
    "PCB 上的 A3144",
  "ALIGN_AUTO_HOME or MFLIP_SKIP_HOME issues; mount tries to visit home before goto.":
    "ALIGN_AUTO_HOME 或 MFLIP_SKIP_HOME 问题；支架在自动寻星前会先尝试回到原点。",
  "ALTAZM - Alt/Az, Dobsonians":
    "ALTAZM - 地平式（Alt/Az）、多布森",
  "ALTAZM_UNL - Unlimited Azimuth":
    "ALTAZM_UNL - 方位无限制",
  "AMS1117-3.3 / LM1117-3.3 module":
    "AMS1117-3.3 / LM1117-3.3 模块",
  "ASCOM & Serial":
    "ASCOM 与串口",
  "ASCOM driver cannot connect — \"Cannot find port\"":
    "ASCOM 驱动无法连接 —「Cannot find port」",
  "ASIAIR moves the mount in the OPPOSITE direction (N↔S / E↔W), even though the OnStepX web UI moves correctly":
    "ASIAIR 使支架朝相反方向移动（N↔S / E↔W），而 OnStepX Web 界面的移动方向是正确的",
  "ASIAIR polar alignment stops \"hard\" near the 60° rotation and errors \"rotation stopped\"":
    "ASIAIR 极轴校准在接近 60° 旋转时「急停」，并报错「rotation stopped」",
  "AUTO (try both)":
    "AUTO（两者都尝试）",
  "AUTO or 1, 3..9":
    "AUTO 或 1、3..9",
  "AUX7 maps to SPARE_RX_PIN, which Pins.FYSETC_E4.h hard-defines as OFF whenever the TMC UART drivers are in use — i.e. the standard E4 build. You must pick and define your own ONE_WIRE_PIN; there is no working default.":
    "AUX7 映射到 SPARE_RX_PIN，而只要使用 TMC UART 驱动器（即标准 E4 构建），Pins.FYSETC_E4.h 就会将其硬性定义为 OFF。你必须自行选择并定义 ONE_WIRE_PIN；没有可用的默认值。",
  "AXIS3_STEPS_PER_DEGREE (mechanical)":
    "AXIS3_STEPS_PER_DEGREE（机械）",
  "Absent. The MCU (Teensy 4.x, STM32 MaxPCB…) has no radio at all.":
    "无。该 MCU（Teensy 4.x、STM32 MaxPCB…）完全没有无线模块。",
  "Access Point (SWS hosts its own WiFi)":
    "接入点（SWS 自建 WiFi）",
  "Access Point mode (default — the board makes its own network)":
    "接入点模式（默认 — 主板自建网络）",
  "Across EN and GND on the ESP32 module if uploads fail.":
    "如果上传失败，跨接在 ESP32 模块的 EN 与 GND 之间。",
  "Active LOW = switch to GND triggers home":
    "低电平有效 = 开关接 GND 触发原点",
  "Active LOW for Axis2 home":
    "轴2 原点，低电平有效",
  "Active LOW — short to GND = limit triggered":
    "低电平有效 — 短接到 GND = 触发限位",
  "Active LOW — short to GND = limit triggered. Already LOW in the stock E4 Config.h":
    "低电平有效 — 短接到 GND = 触发限位。原厂 E4 Config.h 中已设为 LOW",
  "Adafruit BME280 v2.2.2 + Adafruit Sensor v1.1.7 (Arduino Library Manager).":
    "Adafruit BME280 v2.2.2 + Adafruit Sensor v1.1.7（Arduino 库管理器）。",
  "Add a 10µF capacitor across the reset button pins (negative to ground). This delays reset so the bootloader can catch it.":
    "在复位按钮引脚之间并联一个 10µF 电容（负极接地）。这会延迟复位，使引导程序能够捕获它。",
  "Add a DS3231 RTC so time/location persist regardless.":
    "加装 DS3231 RTC，使时间/位置始终得以保留。",
  "Add board URL":
    "添加主板 URL",
  "Additional reduction ratio (1 if none)":
    "额外减速比（无则为 1）",
  "Address":
    "地址",
  "Address mismatch: most purple GY-BME280 boards are 0x76 (SDO→GND) so you need WEATHER BME280_0x76. Plain BME280 means 0x77 and fails silently.":
    "地址不匹配：大多数紫色 GY-BME280 板为 0x76（SDO→GND），因此需要 WEATHER BME280_0x76。仅写 BME280 表示 0x77，会静默失败。",
  "Adds dedicated USB power port control to the aux-switching system.":
    "为辅助开关系统增加专用 USB 电源端口控制。",
  "Adjust":
    "需调整",
  "Adjust to your focuser (calibrate by measuring)":
    "根据你的调焦器调整（通过测量校准）",
  "Admin password for the SWS web UI. Change from \"password\" before deploying.":
    "SWS Web 界面的管理员密码。部署前请修改默认的「password」。",
  "After \"Flash complete\", power off, remove the BOOT0 jumper, power back on. Board boots into OnStepX.":
    "出现「Flash complete」后，断电，拔下 BOOT0 跳线帽，重新上电。主板将启动进入 OnStepX。",
  "After \"Flash complete\", remove the BOOT0 link and tap":
    "出现「Flash complete」后，移除 BOOT0 短接并轻按",
  "After changing settings, give the board a few seconds before cutting power so NV writes complete.":
    "更改设置后，请等待几秒再断电，以便 NV 写入完成。",
  "After reflashing OnStepX, power-cycle the whole board.":
    "重新烧录 OnStepX 后，请对整块主板断电重启。",
  "All axes share this":
    "所有轴共用此项",
  "All three free-tier services are transparent: you can inspect the configurator source (GitHub Pages serves it), the Worker source, the build workflow, the PlatformIO config. If the whole thing disappeared tomorrow, you could clone all three repos and deploy your own in under an hour — see":
    "这三个免费服务都是透明的：你可以查看配置器源码（由 GitHub Pages 提供）、Worker 源码、编译工作流以及 PlatformIO 配置。即使明天这一切都消失了，你也可以克隆这三个仓库，在一小时内部署自己的版本 — 参见",
  "Allow menus to wrap around (bottom → top)":
    "允许菜单循环（底部 → 顶部）",
  "Almost always a pin conflict rather than a wiring fault: Axis3 and Axis5 share STEP/DIR, so if both (or the wrong one) are enabled they fight. Set":
    "几乎总是引脚冲突而非接线故障：Axis3 和 Axis5 共用 STEP/DIR，因此如果两者都启用（或启用了错误的那个），它们会互相冲突。请设置",
  "Already set to 34 in the stock E4 Config.h, overriding the pinmap default of 39 (TB)":
    "原厂 E4 Config.h 中已设为 34，覆盖了引脚映射默认的 39（TB）",
  "Alt-Az de-rotation:":
    "地平式消旋：",
  "Alternative when the I2C bus is in use — X-MIN":
    "I2C 总线被占用时的替代方案 — X-MIN",
  "Alternative: Bluetooth serial (SHC app)":
    "替代方案：蓝牙串口（SHC 应用）",
  "Alternative: Hall effect sensor":
    "替代方案：霍尔效应传感器",
  "Alternative: join an existing WiFi (router/hotspot)":
    "替代方案：加入现有 WiFi（路由器/热点）",
  "Always disconnect main power before changing jumpers.":
    "更换跳线帽前务必断开主电源。",
  "Always run the board from the 12–24V input (5A+); USB is for data/flashing only.":
    "务必通过 12–24V 输入（5A 以上）为主板供电；USB 仅用于数据传输/烧录。",
  "Ambient temp + humidity → dew point":
    "环境温度 + 湿度 → 露点",
  "Analog (divider)":
    "模拟（分压器）",
  "Analog potentiometer on guide rate for hand-controller extensions.":
    "用于手控器扩展的导星速率模拟电位器。",
  "Android/iOS detects no internet on the AP and may route through cellular.":
    "Android/iOS 检测到该 AP 无互联网连接，可能改走蜂窝网络。",
  "App cannot connect — \"No internet connection\" warning":
    "应用无法连接 —「无互联网连接」警告",
  "Apply FYSETC E4 defaults":
    "应用 FYSETC E4 默认值",
  "Apply MaxSTM3 defaults":
    "应用 MaxSTM3 默认值",
  "Apply board defaults":
    "应用主板默认值",
  "Arc-second offset for Axis2":
    "轴2 的角秒偏移",
  "Arc-second offset from switch to true home":
    "从开关到真实原点的角秒偏移",
  "Arduino CNC Shield V3 on WeMos D1 R32 (ESP32). Deprecated per the OnStep wiki — kept for legacy builds. Recommended drivers per the wiki: LV8729 or S109 at 12V. Default below uses LV8729.":
    "WeMos D1 R32（ESP32）上的 Arduino CNC Shield V3。根据 OnStep wiki 已弃用 — 保留用于旧版构建。wiki 推荐的驱动器：12V 下的 LV8729 或 S109。下方默认使用 LV8729。",
  "As a workaround, manually slew several degrees past the meridian to the east, then issue the goto. Source: discussions #53807, #58501.":
    "变通方法：手动向东快速转动越过子午线几度，然后再执行自动寻星。来源：讨论 #53807、#58501。",
  "Assign Feature3 as camera trigger":
    "将 Feature3 指定为相机触发",
  "At 24V, 12V heaters run at ~4× power (P=V²/R) and may burn out.":
    "在 24V 下，12V 加热带的功率约为 4 倍（P=V²/R），可能烧毁。",
  "At 24V, motors slew faster but also run hotter — retune current. Source: discussions #65477, #68950.":
    "在 24V 下，电机快速转动更快，但也更热 — 请重新调整电流。来源：讨论 #65477、#68950。",
  "At 24V, reduce AXISn_DRIVER_IRUN to compensate.":
    "在 24V 下，请降低 AXISn_DRIVER_IRUN 以作补偿。",
  "Auto Regulation, Sizing & 24V Derating":
    "自动调节、选型与 24V 降额",
  "Auto meridian flips at startup":
    "启动时自动中天翻转",
  "Auto-filled from Axis1 worm gear":
    "根据轴1 蜗轮自动填充",
  "Auto-home at startup before alignment":
    "启动时在校准前自动回原点",
  "Auto-selected from your PINMAP choice":
    "根据你选择的 PINMAP 自动选择",
  "Automatically sync encoders → OnStep":
    "自动同步编码器 → OnStep",
  "Auxiliary":
    "辅助",
  "Available For":
    "适用于",
  "Available GPIO Reference":
    "可用 GPIO 参考",
  "Axis 1 encoder (RA / Azm)":
    "轴 1 编码器（赤经 / 方位）",
  "Axis 1 encoder type":
    "轴 1 编码器类型",
  "Axis 2 encoder (Dec / Alt)":
    "轴 2 编码器（赤纬 / 高度）",
  "Axis 2 encoder type":
    "轴 2 编码器类型",
  "Axis direction convention differs between the OnStep web UI and the ASIAIR mount profile.":
    "OnStep Web 界面与 ASIAIR 支架配置文件的轴方向约定不同。",
  "Axis1":
    "轴1",
  "Axis1 / Axis2":
    "轴1 / 轴2",
  "Axis1 DIR":
    "轴1 DIR",
  "Axis1 GOTO Microsteps":
    "轴1 GOTO 细分",
  "Axis1 RA/Azimuth — Driver":
    "轴1 赤经/方位 — 驱动器",
  "Axis1 RA/Azimuth — Steps Per Degree Calculator":
    "轴1 赤经/方位 — 每度步数计算器",
  "Axis1 RA/Azm":
    "轴1 赤经/方位",
  "Axis1 STEP":
    "轴1 STEP",
  "Axis1 stepper driver":
    "Axis1 步进驱动器",
  "Axis1 — Advanced":
    "Axis1 — 高级",
  "Axis1 — Microsteps & Current":
    "Axis1 — 细分与电流",
  "Axis2 Dec/Alt":
    "Axis2 赤纬/高度",
  "Axis2 Dec/Altitude — Driver":
    "Axis2 赤纬/高度 — 驱动器",
  "Axis2 Dec/Altitude — Steps Per Degree Calculator":
    "Axis2 赤纬/高度 — 每度步数计算器",
  "Axis2 stepper driver":
    "Axis2 步进驱动器",
  "Axis2 — Advanced":
    "Axis2 — 高级",
  "Axis2 — Microsteps & Current":
    "Axis2 — 细分与电流",
  "Axis3 Rotator":
    "Axis3 旋转器",
  "Axis3 Rotator/De-Rotator — Steps Per Degree Calculator":
    "Axis3 旋转器/消旋器 — 每度步数计算器",
  "Axis3 rotator / Axis5 focuser2 — TMC2209 UART":
    "Axis3 旋转器 / Axis5 调焦器2 — TMC2209 UART",
  "Axis3 — shares MOT-Z with Axis5, see the Focuser section":
    "Axis3 — 与 Axis5 共用 MOT-Z，请参见调焦器部分",
  "Axis4 (Focuser1) — TMC2209 UART":
    "Axis4（调焦器1）— TMC2209 UART",
  "Axis4 Focuser 1":
    "Axis4 调焦器 1",
  "Axis4 is the MOT-E (E0-AXIS) output and uses dedicated pins (GPIO16 STEP, GPIO17 DIR) — no pin-sharing conflicts. Enabled as TMC2209 in the stock E4 Config.h.":
    "Axis4 是 MOT-E（E0-AXIS）输出，使用专用引脚（GPIO16 STEP，GPIO17 DIR）— 不存在引脚共用冲突。在 E4 原厂 Config.h 中以 TMC2209 启用。",
  "Axis5 shares STEP/DIR pins with Axis3 (rotator). Only one can be active at a time. Enabled as TMC2209 in the stock E4 Config.h.":
    "Axis5 与 Axis3（旋转器）共用 STEP/DIR 引脚。同一时间只能启用其中一个。在 E4 原厂 Config.h 中以 TMC2209 启用。",
  "Axis5 uses GPIO14 (STEP) and GPIO12 (DIR) — the SAME pins as Axis3 (rotator). Enable only ONE: if AXIS5_DRIVER_MODEL is set, set AXIS3_DRIVER_MODEL to OFF and vice versa.":
    "Axis5 使用 GPIO14（STEP）和 GPIO12（DIR）— 与 Axis3（旋转器）的引脚完全相同。只能启用一个：如果设置了 AXIS5_DRIVER_MODEL，就把 AXIS3_DRIVER_MODEL 设为 OFF，反之亦然。",
  "BLE gamepad (ESP32 only)":
    "BLE 手柄（仅 ESP32）",
  "BLUETOOTH (ESP32 only)":
    "BLUETOOTH（仅 ESP32）",
  "BME280 Weather Sensor":
    "BME280 气象传感器",
  "BME280 and DS3231 use different addresses, so they coexist on the same I2C bus.":
    "BME280 和 DS3231 使用不同的地址，因此可以共存于同一条 I2C 总线上。",
  "BME280 and/or DS3231 not detected — no weather data, time never restored":
    "未检测到 BME280 和/或 DS3231 — 无气象数据，时间永远不会恢复",
  "BME280 at 0x76":
    "BME280 位于 0x76",
  "BME280 — Temperature / Humidity / Pressure":
    "BME280 — 温度 / 湿度 / 气压",
  "BME280 — Weather sensor — temp / humidity / pressure":
    "BME280 — 气象传感器 — 温度 / 湿度 / 气压",
  "BME280, DS3231 — or GPS RX (Serial2)":
    "BME280、DS3231 — 或 GPS RX（Serial2）",
  "BME280, DS3231 — or GPS TX (Serial2)":
    "BME280、DS3231 — 或 GPS TX（Serial2）",
  "BOOT0 jumper":
    "BOOT0 跳线帽",
  "BOTH (ESP32 only)":
    "BOTH（仅 ESP32）",
  "BTT SKR PRO on OnStep wiki":
    "OnStep wiki 上的 BTT SKR PRO 页面",
  "BULB mode":
    "BULB 模式",
  "Background":
    "背景",
  "Background settings":
    "背景设置",
  "Base avg step rate":
    "基础平均步进速率",
  "Battery-backed real-time clock":
    "电池供电的实时时钟",
  "Baud":
    "波特率",
  "Baud rate for async serial mode (ignored for SERIAL_ST4)":
    "异步串口模式的波特率（SERIAL_ST4 时忽略）",
  "Baud rate for debug UART":
    "调试 UART 的波特率",
  "Because":
    "由于",
  "Before any Compile actually goes to the cloud, a local validator scans your form for common mistakes so you don't waste a 2-minute build on an obvious oversight:":
    "在编译真正发送到云端之前，本地校验器会扫描你的表单，查找常见错误，免得你因为一个明显的疏忽白白浪费 2 分钟的编译：",
  "Before you flash":
    "烧录之前",
  "Before you flash anything:":
    "烧录任何固件之前：",
  "Best accuracy:":
    "最佳精度：",
  "Beta coefficient (often 3950 or 3435)":
    "Beta 系数（通常为 3950 或 3435）",
  "BigTreeTech 3D-printer board repurposed for OnStep (STM32F407ZGT6). Defaults assume TMC2209 UART step-sticks — if you've got TMC5160 SPI drivers plugged in, override the driver-model fields. Flash via WebUSB DFU (BOOT0 jumper + reset to enter DFU mode).":
    "改作 OnStep 使用的 BigTreeTech 3D 打印机主板（STM32F407ZGT6）。默认值假定使用 TMC2209 UART 驱动模块 — 如果你插的是 TMC5160 SPI 驱动器，请修改驱动器型号字段。通过 WebUSB DFU 烧录（BOOT0 跳线帽 + 复位进入 DFU 模式）。",
  "BigTreeTech's 3D-printer board repurposed for OnStep. Same ST DFU protocol as the BlackPill, just a different entry procedure:":
    "改作 OnStep 使用的 BigTreeTech 3D 打印机主板。与 BlackPill 相同的 ST DFU 协议，只是进入方式不同：",
  "Bipolar Hall latch":
    "双极霍尔锁存器",
  "Block 0 is always sent, even if blank, because that's the trigger that erases the whole chip; subsequent all-":
    "块 0 无论是否为空都会发送，因为正是它触发整片芯片擦除；之后全为",
  "Board":
    "主板",
  "Board address":
    "主板地址",
  "Board address in AP mode":
    "AP 模式下的主板地址",
  "Board doesn't work at all — no LED, no USB, nothing":
    "主板完全不工作 — 没有 LED、没有 USB、什么都没有",
  "Board flashes OK but won't boot — logs \"LEDC not initialized\" then nothing":
    "主板烧录成功但无法启动 — 日志显示「LEDC not initialized」后就没有任何输出",
  "Board overview, GPIO map & interactive diagram":
    "主板概览、GPIO 映射与交互式示意图",
  "Board pinmap selection. MaxPCB4w (WiFi) and MaxPCB4e (Ethernet) variants share the":
    "主板引脚映射选择。MaxPCB4w（WiFi）和 MaxPCB4e（以太网）两个版本共用",
  "Board selection & OnStepX ref":
    "主板选择与 OnStepX 版本",
  "Board-by-board USB preparation":
    "逐块主板的 USB 准备",
  "Boot-strap pin, held low by a 1.8kΩ pull-down":
    "启动配置引脚，由 1.8kΩ 下拉电阻保持为低电平",
  "Bosch BME280 3-in-1 environmental sensor. I2C address 0x76 (SDO→GND) or 0x77 (SDO→VCC). Requires Adafruit libraries.":
    "Bosch BME280 三合一环境传感器。I2C 地址 0x76（SDO→GND）或 0x77（SDO→VCC）。需要 Adafruit 库。",
  "Both on GPIO13. Current OnStepX refuses both at once (this configurator's build service turns them OFF); on the FAN MOSFET the LED also needs STATUS_LED_ON_STATE HIGH":
    "两者都在 GPIO13 上。当前 OnStepX 不允许两者同时启用（本配置器的编译服务会把它们设为 OFF）；在 FAN MOSFET 上，LED 还需要设置 STATUS_LED_ON_STATE HIGH",
  "Both run on Teensy 3.2 (moderately fast) or Teensy 4.0 (very fast). Both work with most StepStick drivers (DRV8825 / A4988 / LV8729) plus TMC2130 and TMC5160. Teensy 3.2 uses the HalfKay bootloader in the same \"block_size ≥ 512\" branch as 4.0/4.1 — the WebHID flasher covers all of them:":
    "两者都可运行在 Teensy 3.2（速度中等）或 Teensy 4.0（速度很快）上。两者都兼容大多数 StepStick 驱动器（DRV8825 / A4988 / LV8729），以及 TMC2130 和 TMC5160。Teensy 3.2 使用 HalfKay 引导程序，与 4.0/4.1 处于同一个「block_size ≥ 512」分支 — WebHID 烧录器全部支持：",
  "Branch / tag / commit SHA of the upstream repo. Leave as":
    "上游仓库的分支 / 标签 / 提交 SHA。保留为",
  "Brand":
    "品牌",
  "Browse to http://192.168.0.1 to confirm the server is up.":
    "浏览 http://192.168.0.1 以确认服务器已运行。",
  "Browser":
    "浏览器",
  "Browser requirements":
    "浏览器要求",
  "Build & flash a clean firmware from this configurator's":
    "在本配置器的",
  "Build succeeded, Flash button is disabled":
    "编译成功，但烧录按钮不可用",
  "Building both?":
    "两个都要编译？",
  "Building through this configurator's Compile & Flash tab avoids this entirely — the libraries are already in the build environment.":
    "通过本配置器的 Compile & Flash 选项卡编译可以完全避免这个问题 — 编译环境中已经包含这些库。",
  "Built into the E4 — already there, nothing to add.":
    "E4 内置 — 已经具备，无需添加。",
  "Built-in ESP32":
    "内置 ESP32",
  "Built-in ESP32 wireless & Bluetooth":
    "ESP32 内置无线与蓝牙",
  "Built-in WiFi AP mode":
    "内置 WiFi AP 模式",
  "Built-in series resistor":
    "内置串联电阻",
  "Built-in web UI (SmartWebServer features as a plugin instead of a separate MCU). ESP32 only in practice.":
    "内置 Web 界面（以插件形式提供 SmartWebServer 功能，无需单独的 MCU）。实际上仅限 ESP32。",
  "Bundle the outputs (firmware binary, bootloader, partitions, and — for ESP32 — a pre-merged single-file image) into":
    "将输出文件（固件二进制、引导程序、分区表，以及 — 对 ESP32 而言 — 预先合并的单文件镜像）打包为",
  "Burning smell or smoke near USB / jumper pins get hot":
    "USB 附近有焦味或冒烟 / 跳线针脚发烫",
  "Buzzer — Status buzzer (shared with the FAN output)":
    "蜂鸣器 — 状态蜂鸣器（与 FAN 输出共用）",
  "CALIBRATION REQUIRED: AXIS4_STEPS_PER_MICRON must be measured for your focuser.":
    "需要校准：必须针对你的调焦器实测 AXIS4_STEPS_PER_MICRON。",
  "CH340 USB-serial issues on Windows 11 solved by driver downgrade and DTR configuration.":
    "Windows 11 上的 CH340 USB 串口问题，通过降级驱动和配置 DTR 解决。",
  "CHANGE THIS — 8+ chars for WPA2":
    "请修改 — WPA2 需至少 8 个字符",
  "CHECK THE GPIO15 → M-TX WIRE (Z-min pin of ZDIAG-EN → M-TX on the TMC UART header). This is the #1 cause — it must be securely connected.":
    "检查 GPIO15 → M-TX 连线（ZDIAG-EN 的 Z-min 引脚 → TMC UART 排针上的 M-TX）。这是头号原因 — 必须连接牢靠。",
  "CLI alternative if you have Teensyduino installed:":
    "如果已安装 Teensyduino，可用命令行替代：",
  "CNC3 — WeMos D1 R32 (ESP32) — Deprecated":
    "CNC3 — WeMos D1 R32（ESP32）— 已弃用",
  "CPU Frequency":
    "CPU 频率",
  "Calculator":
    "计算器",
  "Calibrate for your focuser":
    "针对你的调焦器校准",
  "Calibration:":
    "校准：",
  "Camera Resolution X (pixels)":
    "相机分辨率 X（像素）",
  "Camera Resolution Y (pixels)":
    "相机分辨率 Y（像素）",
  "Camera connection. 2.5mm for Canon.":
    "相机接口。Canon 为 2.5mm。",
  "Can I run this offline?":
    "可以离线使用吗？",
  "Can someone else clone this and run their own instance?":
    "其他人可以克隆本项目并运行自己的实例吗？",
  "Cannot upload firmware — USB not recognized or upload fails silently":
    "无法上传固件 — USB 无法识别或上传静默失败",
  "Canon and Nikon use the same 2.5mm TRS plug but with Tip/Ring swapped. Check the table below before soldering.":
    "Canon 和 Nikon 使用相同的 2.5mm TRS 插头，但 Tip/Ring 是反的。焊接前请查看下表。",
  "Cap max duty — set ~64 (≈25%) when running 24V":
    "限制最大占空比 — 使用 24V 时设为约 64（≈25%）",
  "Change it.":
    "请修改。",
  "Change the WiFi channel if overlapping with other networks.":
    "如果与其他网络重叠，请更换 WiFi 信道。",
  "Channel 2 (TB/GPIO39) nominal temp °C":
    "通道 2（TB/GPIO39）标称温度 °C",
  "Cheap dew-strap NTC":
    "廉价除露加热带 NTC",
  "Cheapest. Works as-is (firmware debounce + built-in pull-up); add a 1–2kΩ pull-up or RC only if a long cable picks up noise.":
    "最便宜。直接可用（固件消抖 + 内置上拉）；只有当长电缆引入噪声时才需加 1–2kΩ 上拉或 RC 电路。",
  "Check for 3.3V sag:":
    "检查 3.3V 是否跌落：",
  "Check out this repo's build recipe":
    "查看本仓库的编译配方",
  "Check the GPIO15 → M-TX wire and that the factory SDA↔M-RX / SCL↔M-TX caps are off.":
    "检查 GPIO15 → M-TX 连线，并确认出厂的 SDA↔M-RX / SCL↔M-TX 跳线帽已拔除。",
  "Check the plugins you want":
    "勾选你想要",
  "Check the pull-ups: SDA and SCL each need ~4.7kΩ to 3.3V. Most breakouts have them — if you removed them, the bus is dead. Put them back.":
    "检查上拉电阻：SDA 和 SCL 各需约 4.7kΩ 接到 3.3V。大多数模块自带 — 如果你拆掉了，总线就无法工作。请装回去。",
  "Check the supply: the E4 I2C header pin is 5V, not 3.3V. Power the modules from 3.3V, and prefer the external LM1117 tap — the onboard 3.3V regulator is already loaded by the ESP32 + WiFi and can brown out with two modules on it.":
    "检查供电：E4 的 I2C 排针电源脚是 5V，不是 3.3V。请用 3.3V 给模块供电，最好从外部 LM1117 取电 — 板载 3.3V 稳压器已经被 ESP32 + WiFi 占用，再挂两个模块可能会欠压。",
  "Checking…":
    "正在检查…",
  "Chip":
    "芯片",
  "Clear all saved form state (every tab, every mode) and reload the page":
    "清除所有已保存的表单状态（所有选项卡、所有模式）并重新加载页面",
  "Click":
    "点击",
  "Click the":
    "点击编译日志中打印的",
  "Click the sticky":
    "点击底部固定的",
  "Click: fetches the Config.h from hjd1964/OnStepX branch \"E4\" (180+ fields) into the Output tab, keeps Source ref on main (latest OnStepX), and ticks the Website plugin. Matches Howard's documented E4 + Website build.":
    "点击：将 hjd1964/OnStepX「E4」分支的 Config.h（180 多个字段）获取到输出选项卡，Source ref 保持为 main（最新 OnStepX），并勾选 Website 插件。与 Howard 文档中的 E4 + Website 编译一致。",
  "Close any other program holding the port (Arduino Serial Monitor, screen, PuTTY).":
    "关闭其他占用该端口的程序（Arduino 串口监视器、screen、PuTTY）。",
  "Cloudflare Worker KV (if rate limit is enabled)":
    "Cloudflare Worker KV（如果启用了频率限制）",
  "Cloudflare Worker → GitHub Actions as a workflow input":
    "Cloudflare Worker → GitHub Actions，作为工作流输入",
  "Commercial dew rings use a 10kΩ NTC.":
    "商用除露加热环使用 10kΩ NTC。",
  "Common NTC beta values":
    "常见 NTC Beta 值",
  "Common problems and verified solutions collected from the OnStep":
    "常见问题与经过验证的解决方案，收集自 OnStep",
  "Communication":
    "通信",
  "Community Discussions":
    "社区讨论",
  "Community note — \"focuser has no torque / does not move\".":
    "社区提示 — 「调焦器没有扭矩 / 不动」。",
  "Community note — default limit behaviour:":
    "社区提示 — 默认限位行为：",
  "Community note — the E4 has NO onboard clock.":
    "社区提示 — E4 没有板载时钟。",
  "Community notes (OnStep forum)":
    "社区提示（OnStep 论坛）",
  "Community notes — WiFi self-interference & range":
    "社区提示 — WiFi 自干扰与覆盖范围",
  "Community recipe — systematic first light":
    "社区方法 — 系统化的首次通电测试",
  "Compact 2-axis OnStep design intended to embed inside the mount body. Runs on Teensy 3.2 (moderately fast) or Teensy 4.0 (very fast — pick teensy40 on the Compile tab). Works with most StepStick drivers (DRV8825 / A4988 / LV8729), plus TMC2130 and TMC5160. Defaults below assume DRV8825 step-sticks; override AXIS_DRIVER_MODEL if you have TMC SPI drivers wired in. Note: Teensy 4.0 has only ~1KB EEPROM emulation vs Teensy 3.2's 2KB — affects catalog/PEC storage size.":
    "紧凑型双轴 OnStep 设计，旨在嵌入支架机身内部。可运行在 Teensy 3.2（速度中等）或 Teensy 4.0（速度很快 — 在 Compile 选项卡中选择 teensy40）上。兼容大多数 StepStick 驱动器（DRV8825 / A4988 / LV8729），以及 TMC2130 和 TMC5160。下面的默认值假定使用 DRV8825 驱动模块；如果你接的是 TMC SPI 驱动器，请修改 AXIS_DRIVER_MODEL。注意：Teensy 4.0 只有约 1KB 的 EEPROM 模拟空间，而 Teensy 3.2 有 2KB — 会影响星表/PEC 的存储容量。",
  "Companion 3D designs:":
    "配套 3D 设计：",
  "Compass + GPS, external SMA antenna.":
    "罗盘 + GPS，外接 SMA 天线。",
  "Compatible Hardware Guide":
    "兼容硬件指南",
  "Compatible sensors, part numbers & specs":
    "兼容传感器、型号与规格",
  "Compilation error: \"analogWriteResolution was not declared in this scope\"":
    "编译错误：「analogWriteResolution was not declared in this scope」",
  "Compilation error: Multiple libraries found for \"TMC2209.h\"":
    "编译错误：Multiple libraries found for「TMC2209.h」",
  "Compilation fails — missing required libraries (BME280, Sensor, Makuna RTC)":
    "编译失败 — 缺少必需的库（BME280、Sensor、Makuna RTC）",
  "Compile & Flash":
    "编译与烧录",
  "Compile Firmware":
    "编译固件",
  "Compile Online":
    "在线编译",
  "Compile starts but fails":
    "编译开始了但失败",
  "Compile uses whatever is in this textarea.":
    "编译使用的是此文本框中的内容。",
  "Complete E4 reference: pinout, safety, schematics, power recommendations (12VDC/5A), peripheral wiring and the 10µF cap upload fix.":
    "完整的 E4 参考：引脚定义、安全、原理图、电源建议（12VDC/5A）、外设接线以及解决上传问题的 10µF 电容方法。",
  "Component":
    "元件",
  "Concrete example:":
    "具体示例：",
  "Config":
    "配置",
  "Configuration (Config.h)":
    "配置（Config.h）",
  "Configuration Generator":
    "配置生成器",
  "Configurator & Compile":
    "配置器与编译",
  "Configure OnStepX in OnStepX mode → Compile & Flash to your mount controller board. Then flip to SHC mode, configure the hand pendant, Compile & Flash to your SHC board. Two separate flashes, one site.":
    "在 OnStepX 模式下配置 OnStepX → 编译并烧录到你的支架控制主板。然后切换到 SHC 模式，配置手控器，编译并烧录到你的 SHC 主板。两次独立烧录，一个网站搞定。",
  "Configures external HC-05/HC-06 Bluetooth modules via AT commands at startup.":
    "启动时通过 AT 命令配置外接 HC-05/HC-06 蓝牙模块。",
  "Confirm SERIAL_BAUD matches between Config.h and SWS.":
    "确认 Config.h 与 SWS 中的 SERIAL_BAUD 一致。",
  "Confirm VID:PID":
    "确认存在 VID:PID",
  "Confirm the correct mount type/profile is selected in ASIAIR (OnStep / \"OnStep Electronics\").":
    "确认在 ASIAIR 中选择了正确的支架类型/配置（OnStep /「OnStep Electronics」）。",
  "Confirm the factory jumper caps are removed and only the GPIO15 → M-TX wire is fitted.":
    "确认出厂跳线帽已拔除，并且只接了 GPIO15 → M-TX 这根线。",
  "Confirmed against":
    "已对照以下文件确认：",
  "Conflicting TMC2209 libraries (TMC2209 by hjd1964 vs TMC2209Stepper).":
    "TMC2209 库冲突（hjd1964 的 TMC2209 与 TMC2209Stepper）。",
  "Connect To":
    "连接到",
  "Connect USB.":
    "连接 USB。",
  "Connect USB. Most dev boards (and MaxESP*) auto-reset into bootloader when esptool grabs the port.":
    "连接 USB。大多数开发板（以及 MaxESP*）会在 esptool 占用端口时自动复位进入引导程序。",
  "Connect the cable shield at one end only. Source: discussions #66142, #67866.":
    "电缆屏蔽层只在一端接地。来源：讨论 #66142、#67866。",
  "Connect to \"OnStepX\" WiFi":
    "连接到「OnStepX」WiFi",
  "Connect to the I2C header (4-pin 2.54mm header in the centre block: 5V, GND, SDA, SCL — no 3.3V). Remove the factory SDA↔M-RX / SCL↔M-TX caps first. A purple 3.3V-only GY-BME280 needs a 3.3V regulator; 5V-ready modules (regulator + level shifter) can use the 5V pin.":
    "接到 I2C 排针（中央区域的 4 针 2.54mm 排针：5V、GND、SDA、SCL — 没有 3.3V）。先拔掉出厂的 SDA↔M-RX / SCL↔M-TX 跳线帽。紫色的仅 3.3V GY-BME280 需要 3.3V 稳压器；支持 5V 的模块（带稳压器 + 电平转换）可以使用 5V 引脚。",
  "Connect your board via USB and put it into programming mode:":
    "通过 USB 连接主板并使其进入编程模式：",
  "Connection":
    "接线",
  "Connection to OnStep mount":
    "连接到 OnStep 支架",
  "Connector positions mirror the real FYSETC E4 board: the":
    "接口位置与真实的 FYSETC E4 主板一致：",
  "Constraints":
    "限制条件",
  "Contents":
    "目录",
  "Controller":
    "控制器",
  "Controls a DSLR shutter with full galvanic isolation. Compatible with Canon, Nikon, Sony, Fujifilm and most cameras with a remote port.":
    "以完全电气隔离的方式控制单反相机快门。兼容 Canon、Nikon、Sony、Fujifilm 以及大多数带遥控接口的相机。",
  "Coordinate refraction mode":
    "坐标折射模式",
  "Copy the plugin folder into your OnStepX sketch under":
    "将插件文件夹复制到你的 OnStepX 草图中，路径为",
  "Copy to Clipboard":
    "复制到剪贴板",
  "Correction circuitry to improve ESP32 thermistor readings is documented in the official":
    "改善 ESP32 热敏电阻读数的校正电路记录在官方",
  "Critical — jumpers and the TMC UART wire.":
    "关键 — 跳线帽和 TMC UART 连线。",
  "Current @12V":
    "电流 @12V",
  "Current @24V":
    "电流 @24V",
  "Current limit R":
    "限流电阻 R",
  "DEC/Alt — Declination / Altitude stepper":
    "DEC/Alt — 赤纬 / 高度步进电机",
  "DS18B20 DATA (with 4.7kΩ to 3.3V)":
    "DS18B20 DATA（接 4.7kΩ 到 3.3V）",
  "DS18B20 Temperature Sensors":
    "DS18B20 温度传感器",
  "DS18B20 is the reliable alternative":
    "DS18B20 是可靠的替代方案",
  "DS18B20 — OneWire digital temperature sensor":
    "DS18B20 — OneWire 数字温度传感器",
  "DS3231 = 0x68. No conflict with BME280 (0x76/0x77).":
    "DS3231 = 0x68。与 BME280（0x76/0x77）无冲突。",
  "DS3231 RTC Module":
    "DS3231 RTC 模块",
  "DS3231 VCC — the ZS-042 pulls SDA/SCL up to its VCC, so keep it at 3.3V":
    "DS3231 VCC — ZS-042 会把 SDA/SCL 上拉到其 VCC，因此请保持 3.3V",
  "DS3231 — Battery-backed real-time clock (ZS-042)":
    "DS3231 — 电池供电的实时时钟（ZS-042）",
  "DSLR camera trigger for astrophotography":
    "用于天文摄影的单反相机触发",
  "DSLR remote plug wiring by brand:":
    "按品牌区分的单反遥控插头接线：",
  "DSLR shutter":
    "单反快门",
  "DSLR shutter — DSLR shutter release (via optocoupler)":
    "单反快门 — 单反快门释放（经光耦）",
  "Data":
    "数据",
  "Data from":
    "数据来源：",
  "Date/Time source":
    "日期/时间来源",
  "Debounce RC circuit (recommended for mechanical switches):":
    "RC 消抖电路（机械开关推荐使用）：",
  "Debug":
    "调试",
  "Dec/Alt direction":
    "赤纬/高度方向",
  "Dec/Alt step":
    "赤纬/高度步进",
  "Dedicated limit switch input (original pinmap)":
    "专用限位开关输入（原始引脚映射）",
  "Default":
    "默认",
  "Default Config.h FEATURE block:":
    "Config.h 默认 FEATURE 块：",
  "Default Config.h enables TMC2209 for Axis4. For a different driver, change AXIS4_DRIVER_MODEL.":
    "默认 Config.h 为 Axis4 启用了 TMC2209。如使用其他驱动器，请修改 AXIS4_DRIVER_MODEL。",
  "Default Config.h: LIMIT_SENSE_PIN = GPIO34 (X-MIN). GPIO34 therefore serves as BOTH Axis1 home AND limit. To separate them, change LIMIT_SENSE_PIN to 39 (TB).":
    "默认 Config.h：LIMIT_SENSE_PIN = GPIO34（X-MIN）。因此 GPIO34 同时充当 Axis1 原点和限位。要将两者分开，请把 LIMIT_SENSE_PIN 改为 39（TB）。",
  "Default E4 Config.h enables WEATHER and TIME_LOCATION_SOURCE even if you lack those devices; the libraries must still be installed.":
    "默认的 E4 Config.h 即使在你没有这些设备时也启用了 WEATHER 和 TIME_LOCATION_SOURCE；仍然必须安装相应的库。",
  "Default driver":
    "默认驱动器",
  "Default driver for focuser":
    "调焦器默认驱动器",
  "Default is 9600 8N1. Some modules ship at 38400 or 115200. Verify with a serial monitor first.":
    "默认为 9600 8N1。有些模块出厂为 38400 或 115200。请先用串口监视器确认。",
  "Default passwords are public.":
    "默认密码是公开的。",
  "Default value":
    "默认值",
  "Default: board creates its own WiFi network":
    "默认：主板创建自己的 WiFi 网络",
  "Degrees for acceleration":
    "加速所用度数",
  "Degrees offset for unidirectional approach":
    "单向接近的偏移度数",
  "Degrees to stop on abort":
    "中止时的停止度数",
  "Density":
    "密度",
  "Depends on the flow:":
    "取决于具体流程：",
  "Desired base slew rate":
    "期望的基础快速转动速率",
  "Detail":
    "详情",
  "Device":
    "设备",
  "Device name (≤16 chars). Becomes mDNS \"onstepsws.local\"":
    "设备名称（≤16 个字符）。将成为 mDNS「onstepsws.local」",
  "Dew Heater":
    "除露加热带",
  "Dew Heater 1":
    "除露加热带 1",
  "Dew Heater 1 reads thermistor channel 1 (TE)":
    "除露加热带 1 读取热敏电阻通道 1（TE）",
  "Dew Heater 1 — Dew heater strap 1 (onboard MOSFET)":
    "除露加热带 1 — 除露加热带 1（板载 MOSFET）",
  "Dew Heater 2":
    "除露加热带 2",
  "Dew Heater 2 reads thermistor channel 2 (TB)":
    "除露加热带 2 读取热敏电阻通道 2（TB）",
  "Dew Heater 2 — Dew heater strap 2 (onboard MOSFET)":
    "Dew Heater 2 — 除露加热带 2（板载 MOSFET）",
  "Dew Heater Control — Direct Connection":
    "除露加热带控制 — 直接连接",
  "Dew Heater Implementation":
    "除露加热带实现",
  "Dew heater via onboard MOSFET":
    "通过板载 MOSFET 驱动除露加热带",
  "Dew point:":
    "露点：",
  "Dew-heater strap 1 — both wires to the 2-pin terminal":
    "除露加热带 1 — 两根线都接到 2 针端子",
  "Dew-heater strap 2 — both wires to the 2-pin terminal":
    "除露加热带 2 — 两根线都接到 2 针端子",
  "Digital temperature sensors (±0.5°C). Used for focuser temp compensation, dew-heater feedback or ambient monitoring.":
    "数字温度传感器（±0.5°C）。用于调焦器温度补偿、除露加热带反馈或环境温度监测。",
  "Digital temperature sensors on single wire":
    "单总线数字温度传感器",
  "Directive":
    "指令",
  "Disable \"Auto-switch to better network\".":
    "关闭「自动切换到更好的网络」。",
  "Disable backlash during guiding":
    "导星时禁用回差补偿",
  "Disable mobile data (4G/5G) when connected.":
    "连接后关闭移动数据（4G/5G）。",
  "Display":
    "显示",
  "Display name":
    "显示名称",
  "Divider: 1kΩ series + 2kΩ to GND ≈ 3.3V":
    "分压：1kΩ 串联 + 2kΩ 接 GND ≈ 3.3V",
  "Divider: 1kΩ series + 2kΩ to GND ≈ 3.3V (the module pulls up to 5V)":
    "分压：1kΩ 串联 + 2kΩ 接 GND ≈ 3.3V（模块上拉到 5V）",
  "Do NOT attach stepper motors while flashing":
    "烧录时请勿连接步进电机",
  "Do NOT enable both AP and Station mode simultaneously.":
    "请勿同时启用 AP 和 Station 模式。",
  "Do not remove the pull-up resistors from your breakouts":
    "请勿拆除模块上的上拉电阻",
  "Does NOT work in ALTAZM mode":
    "在 ALTAZM 模式下不起作用",
  "Don't put WiFi passwords, API keys, or other secrets in Config.h.":
    "不要把 WiFi 密码、API 密钥或其他机密信息写进 Config.h。",
  "Downgrade ESP32 board package to v2.0.11 or earlier.":
    "将 ESP32 主板包降级到 v2.0.11 或更早版本。",
  "Download Config.h":
    "下载 Config.h",
  "Download Firmware":
    "下载固件",
  "Download the":
    "下载",
  "Drag the file onto the Teensy Loader window, or File → Open HEX File. If it opens but doesn't flash, press the white program button on the Teensy — it flashes on button press, not on file open.":
    "将文件拖到 Teensy Loader 窗口，或选择 File → Open HEX File。如果文件已打开但没有烧录，请按 Teensy 上的白色编程按钮 — 它在按下按钮时烧录，而不是在打开文件时。",
  "Driver microstep mode":
    "驱动器细分模式",
  "Driver microsteps":
    "驱动器细分",
  "Driver status shows \"Unknown\" or \"Comms Failure\"":
    "驱动器状态显示「Unknown」或「Comms Failure」",
  "Driver status/fault detection":
    "驱动器状态/故障检测",
  "Drivers":
    "驱动器",
  "Drives the FAN MOSFET — status LED, buzzer, reticle or intervalometer":
    "驱动 FAN MOSFET — 状态 LED、蜂鸣器、分划板照明或间隔拍摄器",
  "Drop":
    "拖放",
  "During slews, lower microsteps = faster but coarser":
    "快速转动时，细分越低 = 越快但越粗糙",
  "E4 Config.h defaults to BME280_0x76. If your breakout pulls SDO to VCC, use BME280_0x77 (or BME280 for auto-detect).":
    "E4 的 Config.h 默认使用 BME280_0x76。如果你的模块将 SDO 上拉到 VCC，请使用 BME280_0x77（或 BME280 以自动检测）。",
  "E4 Pin":
    "E4 引脚",
  "E4 series resistor = 4.7kΩ":
    "E4 串联电阻 = 4.7kΩ",
  "E4 series resistor on TB":
    "E4 在 TB 上的串联电阻",
  "E4 wiring:":
    "E4 接线：",
  "EQ3D and the V5 Lite / V4 Pro are different boards":
    "EQ3D 与 V5 Lite / V4 Pro 是不同的主板",
  "ESP, the E4 and the web page — what is what":
    "ESP、E4 和网页 — 各是什么",
  "ESP32 (MaxESP3, MaxESP4, FYSETC_E4, Terrans V5 Pro, generic ESP32 dev boards)":
    "ESP32（MaxESP3、MaxESP4、FYSETC_E4、Terrans V5 Pro、通用 ESP32 开发板）",
  "ESP32 (MaxESP3, MaxESP4, FYSETC_E4, Terrans V5 Pro, …)":
    "ESP32（MaxESP3、MaxESP4、FYSETC_E4、Terrans V5 Pro、…）",
  "ESP32 (recommended for SHC)":
    "ESP32（推荐用于 SHC）",
  "ESP32 (recommended — WiFi + BLE)":
    "ESP32（推荐 — WiFi + BLE）",
  "ESP32 - Dual-core Xtensa LX6 @ 240MHz":
    "ESP32 - 双核 Xtensa LX6 @ 240MHz",
  "ESP32 / ESP8266 flash":
    "ESP32 / ESP8266 烧录",
  "ESP32 ADC accuracy is mediocre for thermistors":
    "ESP32 的 ADC 精度用于热敏电阻时表现一般",
  "ESP32 Dev Module, 240MHz, Huge App partition":
    "ESP32 Dev Module，240MHz，Huge App 分区",
  "ESP32 GPIO pins available for custom use on the FYSETC E4. Some have constraints.":
    "FYSETC E4 上可供自定义使用的 ESP32 GPIO 引脚。部分引脚有使用限制。",
  "ESP32 wireless mode — this enables the SmartWebServer that is built into OnStepX on ESP32 boards (no separate ESP needed). WIFI_ACCESS_POINT = the board creates its OWN WiFi network \"OnStepX\" — no router needed, best in the field; connect your phone/PC to it, then open http://":
    "ESP32 无线模式 — 启用 ESP32 主板上 OnStepX 内置的 SmartWebServer（无需单独的 ESP）。WIFI_ACCESS_POINT = 主板创建自己的 WiFi 网络「OnStepX」— 无需路由器，最适合野外；将手机/电脑连接到该网络，然后打开 http://",
  "ESP32 with 4× TMC2209 UART drivers on a shared serial bus. All axes use TMC2209. Note: STATUS_LED and STATUS_BUZZER both default to GPIO 12 on this pinmap, so we default the buzzer OFF — flip it back ON only if you set STATUS_LED=OFF.":
    "ESP32 搭配 4 个 TMC2209 UART 驱动器，共用一条串行总线。所有轴都使用 TMC2209。注意：在此引脚映射中 STATUS_LED 和 STATUS_BUZZER 默认都在 GPIO 12 上，因此我们默认将蜂鸣器设为 OFF — 只有在将 STATUS_LED 设为 OFF 时才将其改回 ON。",
  "ESP32-WROOM-32E / 32UE (external antenna) @ 240MHz, 16MB flash":
    "ESP32-WROOM-32E / 32UE（外置天线）@ 240MHz，16MB flash",
  "ESP32-based predecessor to MaxESP4. Default driver mix is TMC2209 UART on the mount axes and focuser; if your MaxESP3 was wired for SPI drivers (TMC2130 etc.) override the driver-model fields below. Note: this pinmap routes both STATUS_LED and STATUS_BUZZER to the same AUX8_PIN, so we default the buzzer OFF — flip it back ON only if you set STATUS_LED=OFF.":
    "MaxESP4 的前代产品，基于 ESP32。默认驱动器组合为赤道仪各轴和调焦器使用 TMC2209 UART；如果你的 MaxESP3 接的是 SPI 驱动器（TMC2130 等），请修改下面的驱动器型号字段。注意：此引脚映射将 STATUS_LED 和 STATUS_BUZZER 都接到同一个 AUX8_PIN，因此我们默认将蜂鸣器设为 OFF — 只有在将 STATUS_LED 设为 OFF 时才将其改回 ON。",
  "ESP8266 (NodeMCU, Wemos D1 mini, ESP-01 — SWS only)":
    "ESP8266（NodeMCU、Wemos D1 mini、ESP-01 — 仅限 SWS）",
  "ESP8266 flash is a single":
    "ESP8266 的烧录只需一个",
  "ESP8266 or ESP32":
    "ESP8266 或 ESP32",
  "ESP8266-style TX/RX swap selection":
    "ESP8266 式 TX/RX 交换选择",
  "ETHERNET_W5100 (SPI shield)":
    "ETHERNET_W5100（SPI 扩展板）",
  "ETHERNET_W5500 (SPI shield)":
    "ETHERNET_W5500（SPI 扩展板）",
  "EXT-RST - EXT-RST — external reset header":
    "EXT-RST - EXT-RST — 外部复位排针",
  "Easiest option: build & flash right here with this configurator's":
    "最简单的方式：直接在这里使用本配置器的",
  "Easiest way to reach it without hunting for the IP.":
    "无需查找 IP 即可访问它的最简单方式。",
  "Emits":
    "生成",
  "Enable":
    "启用",
  "Enable BLE gamepad (ACGAM R1 etc.)":
    "启用 BLE 手柄（ACGAM R1 等）",
  "Enable BME280 at 0x76 (SDO→GND)":
    "启用 0x76 地址的 BME280（SDO→GND）",
  "Enable BME280 for dew point calculation":
    "启用 BME280 以计算露点",
  "Enable Dew Heater 1":
    "启用除露加热带 1",
  "Enable Dew Heater 2":
    "启用除露加热带 2",
  "Enable Goto features":
    "启用自动寻星（GOTO）功能",
  "Enable WiFi in Config.h:":
    "在 Config.h 中启用 WiFi：",
  "Enable drivers in standby":
    "待机时保持驱动器使能",
  "Enable if using DS3231 32kHz PPS output":
    "使用 DS3231 的 32kHz PPS 输出时启用",
  "Enable temp compensation (uses TE)":
    "启用温度补偿（使用 TE）",
  "Encoder global behaviour":
    "编码器全局行为",
  "Encoders & BLE":
    "编码器与 BLE",
  "End result:":
    "最终结果：",
  "Endstop / switch":
    "限位开关 / 开关",
  "Ensure ESP32 board package v2.0.17 is installed.":
    "确保已安装 ESP32 主板包 v2.0.17。",
  "Epcos/TDK & some 100k brands":
    "Epcos/TDK 及部分 100k 品牌",
  "Erase All Flash Before Upload":
    "上传前擦除全部 flash",
  "Erase entire flash before writing — fixes a stuck \"Init NV/EEPROM error\" (ESP32/ESP8266 only; wipes saved settings/PEC, adds ~10–30 s).":
    "写入前擦除整个 flash — 可修复一直出现的「Init NV/EEPROM error」（仅限 ESP32/ESP8266；会清除已保存的设置/PEC，增加约 10–30 秒）。",
  "Escape hatch:":
    "应急方案：",
  "Ethernet (only if OPERATIONAL_MODE = ETHERNET_*)":
    "以太网（仅当 OPERATIONAL_MODE = ETHERNET_* 时）",
  "Every Teensy 3.2 / 4.0 / 4.1 sits in ROM as HalfKay whenever you press the white program button. In that mode it appears as a USB HID device with vendor/product IDs":
    "每块 Teensy 3.2 / 4.0 / 4.1 在你按下白色编程按钮时都会进入 ROM 中的 HalfKay。在该模式下，它显示为一个 USB HID 设备，其厂商/产品 ID 为",
  "Every add-on OnStepX supports on the E4":
    "OnStepX 在 E4 上支持的所有附加设备",
  "Everything above lives in":
    "以上所有内容都位于",
  "Everything happens either inside your browser tab or on free cloud services (":
    "一切都在你的浏览器标签页内或免费的云服务上完成（",
  "Everything in the":
    "凡是出现在",
  "External-antenna board: weak WiFi or damaged radio":
    "外置天线主板：WiFi 信号弱或射频部分损坏",
  "External-antenna boards:":
    "外置天线主板：",
  "Extract to a folder named":
    "解压到名为",
  "F-F Dupont 10cm":
    "F-F 杜邦线 10cm",
  "FAN - FAN — switched 2-pin output (AUX8 / FAN_E0)":
    "FAN - FAN — 可开关的 2 针输出（AUX8 / FAN_E0）",
  "FAQ":
    "常见问题",
  "FEATURE1 (GPIO2/HEAT_E0) and FEATURE2 (GPIO4/HEAT_BED) are separate channels — e.g. main objective strap on one with TE feedback, secondary/finder strap on the other with TB feedback.":
    "FEATURE1（GPIO2/HEAT_E0）和 FEATURE2（GPIO4/HEAT_BED）是相互独立的通道 — 例如主物镜加热带接一路并使用 TE 反馈，副镜/寻星镜加热带接另一路并使用 TB 反馈。",
  "FEATUREn_ON_STATE is HIGH for the onboard N-channel low-side MOSFET (GPIO HIGH → output on). Leave it HIGH; only change it if you insert an inverting stage of your own.":
    "对于板载 N 沟道低边 MOSFET，FEATUREn_ON_STATE 为 HIGH（GPIO HIGH → 输出开启）。保持 HIGH 即可；只有在你自己加入反相电路时才需要修改。",
  "FIRST: remove the factory SDA↔M-RX / SCL↔M-TX jumper caps — with them fitted, the I2C lines are wired to the TMC UART bus.":
    "首先：拆下出厂的 SDA↔M-RX / SCL↔M-TX 跳线帽 — 装着它们时，I2C 线路会接到 TMC UART 总线上。",
  "FORK_TA - w/tangent arm":
    "FORK_TA - 带切线臂",
  "FORK_TAC - w/tangent arm + correction":
    "FORK_TAC - 带切线臂 + 校正",
  "FWU (STM32 firmware-upload)":
    "FWU（STM32 固件上传）",
  "FYSETC E4 + Website plugin":
    "FYSETC E4 + Website 插件",
  "FYSETC E4 beginner guide":
    "FYSETC E4 新手指南",
  "FYSETC E4 board diagram with mounted peripherals":
    "FYSETC E4 主板示意图（含已安装的外设）",
  "FYSETC E4 recipe (what will happen when you click Compile)":
    "FYSETC E4 方案（点击「编译」后会发生什么）",
  "FYSETC S6 on OnStep wiki":
    "OnStep wiki 上的 FYSETC S6",
  "FYSETC's 6-axis 3D-printer board. Same ST DFU protocol as the SKR PRO, but the BOOT0 control on newer S6 revisions is a 3-pin header instead of a jumper (centre + right pin = boot to DFU).":
    "FYSETC 的 6 轴 3D 打印机主板。与 SKR PRO 使用相同的 ST DFU 协议，但较新的 S6 版本上 BOOT0 控制是一个 3 针排针，而不是跳线（中间 + 右侧引脚 = 启动进入 DFU）。",
  "FYSETC_E4 (ESP32) — beginner-friendly all-in-one":
    "FYSETC_E4（ESP32）— 适合新手的一体化主板",
  "FYSETC_S6 V1.2 (STM32F446VE) — 6-axis 3D-printer board":
    "FYSETC_S6 V1.2（STM32F446VE）— 6 轴 3D 打印机主板",
  "FYSETC_S6 V2.0 (STM32F446VE) — 6-axis, V2 connector layout":
    "FYSETC_S6 V2.0（STM32F446VE）— 6 轴，V2 接口布局",
  "Factory Marlin jumper caps still installed — they tie the I2C lines to the TMC UART bus and the drivers' DIAG outputs to the endstop inputs.":
    "出厂的 Marlin 跳线帽仍然装着 — 它们将 I2C 线路连到 TMC UART 总线，并将驱动器的 DIAG 输出连到限位开关输入。",
  "Fallback":
    "备用方案",
  "Fallback (Firefox / Safari / WebHID unavailable):":
    "备用方案（Firefox / Safari / 不支持 WebHID）：",
  "Fastest (2x)":
    "最快（2x）",
  "Feature 1":
    "功能 1",
  "Feature 2":
    "功能 2",
  "Feature 3":
    "功能 3",
  "Feature 4":
    "功能 4",
  "Feature 5":
    "功能 5",
  "Feature 6":
    "功能 6",
  "Feature 7":
    "功能 7",
  "Feature 8":
    "功能 8",
  "Feature purpose":
    "功能用途",
  "Fed from a 5V header pin — the E4 has no 3.3V pin for 3.3V-only I2C modules, GPS or DS18B20.":
    "由 5V 排针引脚供电 — E4 没有 3.3V 引脚，无法直接为仅支持 3.3V 的 I2C 模块、GPS 或 DS18B20 供电。",
  "Fetch a Config.h from a raw URL and back-fill matching form fields":
    "从原始（raw）URL 获取 Config.h 并回填匹配的表单字段",
  "Field de-rotator for Alt-Az mounts":
    "用于地平式支架的场旋转器",
  "Field-tested points from the OnStep group, specific to E4 dew heaters.":
    "来自 OnStep 群组的实测要点，专门针对 E4 除露加热带。",
  "Field-tested points from the OnStep group, specific to E4 thermistors.":
    "来自 OnStep 群组的实测要点，专门针对 E4 热敏电阻。",
  "File an issue at":
    "请提交 issue 至",
  "Fill in driver model, microsteps, current, etc. for the selected PINMAP":
    "为所选 PINMAP 填入驱动器型号、细分、电流等",
  "Find it in the serial monitor at boot, in your router's client list, or via mDNS.":
    "可在启动时的串口监视器、路由器的客户端列表中找到，或通过 mDNS 查找。",
  "Finding the serial numbers:":
    "查找序列号：",
  "Firefox / Safari can generate a config, trigger a compile, and":
    "Firefox / Safari 可以生成配置、触发编译，并",
  "Firmware":
    "固件",
  "Firmware & USB":
    "固件与 USB",
  "Firmware Upload & Default Config":
    "固件上传与默认配置",
  "Firmware runs but axis moves wrong direction / doesn't move":
    "固件已运行，但轴转动方向错误 / 不转动",
  "First build is slower":
    "首次编译较慢",
  "First command in Serial Monitor returns \"failed\"":
    "串口监视器中的第一条命令返回「failed」",
  "Fit only the GPIO15 → M-TX wire (Z-min pin of ZDIAG-EN → M-TX).":
    "只接 GPIO15 → M-TX 这根线（ZDIAG-EN 的 Z-min 引脚 → M-TX）。",
  "Fix order: (1) check the GPIO15 → M-TX wire, (2) confirm the factory SDA↔M-RX / SCL↔M-TX caps are off, (3) reduce IRUN to ~400mA / IHOLD ~200mA, (4) update to OnStepX v10.20a+. The E4 drivers have no VRef pot (VREF is not connected) — UART is the only current control.":
    "排查顺序：(1) 检查 GPIO15 → M-TX 的连线，(2) 确认出厂的 SDA↔M-RX / SCL↔M-TX 跳线帽已拆下，(3) 将 IRUN 降至约 400mA / IHOLD 约 200mA，(4) 升级到 OnStepX v10.20a+。E4 的驱动器没有 VRef 电位器（VREF 未连接）— UART 是唯一的电流控制方式。",
  "Fixes that work, in order of ease:":
    "有效的解决方法，按难易程度排列：",
  "Flash OnStepX":
    "烧录 OnStepX",
  "Flash a plain I2C scanner sketch (Wire.begin(21,22), scan 0x03-0x77). Nothing found = hardware. 0x76/0x77/0x68 found = it is the address or chip type in Config.h.":
    "烧录一个简单的 I2C 扫描程序（Wire.begin(21,22)，扫描 0x03-0x77）。什么都没找到 = 硬件问题。找到 0x76/0x77/0x68 = 问题在于 Config.h 中的地址或芯片类型。",
  "Flash it with":
    "烧录时使用",
  "Flash log stops at \"First block sent (chip erase…)\"":
    "烧录日志停在「First block sent (chip erase…)」",
  "Flash size.":
    "Flash 大小。",
  "Flash to Board":
    "烧录到主板",
  "Flash to Board via USB":
    "通过 USB 烧录到主板",
  "Flash:":
    "Flash：",
  "Flashing ESP32: \"Failed to connect\"":
    "烧录 ESP32：「Failed to connect」",
  "Flashing STM32: device doesn't appear in the picker":
    "烧录 STM32：设备未出现在选择器中",
  "Flashing Teensy: \"WebHID not available in this browser\"":
    "烧录 Teensy：「WebHID not available in this browser」",
  "Flashing Teensy: device picker is empty":
    "烧录 Teensy：设备选择器为空",
  "Flashing guide & community discussions":
    "烧录指南与社区讨论",
  "Flashing restarts only the ESP32; the ESP8266 keeps running and re-detects the mount and focusers as OnStepX comes back. SmartWebServer checks once and keeps the answer, so a check that lands mid-boot hides the axis settings (or a newly enabled focuser) until the link next drops. Starting both chips together avoids it.":
    "烧录只会重启 ESP32；ESP8266 会继续运行，并在 OnStepX 恢复时重新检测支架和调焦器。SmartWebServer 只检测一次并保留结果，因此如果检测恰好发生在启动过程中，轴设置（或新启用的调焦器）会被隐藏，直到下次连接断开。让两颗芯片同时启动即可避免此问题。",
  "Flashing takes 15–40 s. Board auto-resets into firmware when done.":
    "烧录需要 15–40 秒。完成后主板会自动复位并进入固件。",
  "Flip count direction":
    "反转计数方向",
  "Flip/home configuration; on GEM the mount visits home, and on fork the default slew logic can trigger an unwanted flip near park.":
    "中天翻转/原点配置；在赤道仪（GEM）上支架会经过原点，而在叉式支架上，默认的快速转动逻辑可能会在停放位置附近触发不必要的翻转。",
  "Foc2/Rot — Focuser 2 or rotator stepper":
    "Foc2/Rot — 调焦器 2 或旋转器步进电机",
  "Focus":
    "调焦",
  "Focuser":
    "调焦器",
  "Focuser 1":
    "调焦器 1",
  "Focuser control via hand controller":
    "通过手控器控制调焦器",
  "Focuser1 active by default on MOT-E":
    "Focuser1 默认在 MOT-E 上启用",
  "Focuser1 stepper coils to MOT E.":
    "Focuser1 步进电机线圈接到 MOT E。",
  "Focuser1 — Focuser 1 stepper":
    "Focuser1 — 调焦器 1 步进电机",
  "Focuser2 active by default on MOT-Z":
    "Focuser2 默认在 MOT-Z 上启用",
  "For US5881 (unipolar): flip the magnet if no detection.":
    "对于 US5881（单极）：如果检测不到，请将磁铁翻面。",
  "For range: use WIFI_STATION mode + a better router antenna or a WiFi extender, or the external-antenna E4 variant.":
    "提升距离：使用 WIFI_STATION 模式 + 更好的路由器天线或 WiFi 中继器，或者使用外置天线版 E4。",
  "Form state (all your settings)":
    "表单状态（你的所有设置）",
  "Form state is saved to local storage":
    "表单状态会保存到本地存储",
  "Formula: steps_per_degree = (motor_steps × microsteps × overall_gear_reduction) / 360":
    "公式：steps_per_degree = (motor_steps × microsteps × overall_gear_reduction) / 360",
  "Four places, in increasing order of \"you really want to be sure\":":
    "四个位置，按「你确实需要确认」的程度递增排列：",
  "From pinmap":
    "取自引脚映射",
  "Full read-back needs the TMC UART on UART0 (jumper M-RX↔RXD0, M-TX↔TXD0) with SERIAL_A_BAUD_DEFAULT OFF — which also takes USB serial away, so remove those caps to flash.":
    "完整读回需要将 TMC UART 接到 UART0（跳线 M-RX↔RXD0、M-TX↔TXD0），并设置 SERIAL_A_BAUD_DEFAULT OFF — 这也会占用 USB 串口，因此烧录时需拆下这些跳线帽。",
  "Function":
    "功能",
  "Fuse":
    "保险丝",
  "Fuse the main 12–24V input (shared by motors + heaters) so a shorted strap blows the fuse. Fire safety.":
    "给主 12–24V 输入（电机 + 加热带共用）加保险丝，这样加热带短路时会熔断保险丝。防火安全。",
  "GEM - German Equatorial":
    "GEM - 德式赤道仪",
  "GEM_TA - GEM w/tangent arm":
    "GEM_TA - 带切线臂的 GEM",
  "GEM_TAC - GEM w/tangent arm + correction":
    "GEM_TAC - 带切线臂 + 校正的 GEM",
  "GENERIC — external step/dir (NEMA34+, big servo drives)":
    "GENERIC — 外部 step/dir（NEMA34+、大型伺服驱动器）",
  "GOTO step rate × microsteps exceeds what the ESP32/driver/motor can deliver; too-fine GOTO microstepping or too-high target speed loses torque.":
    "GOTO 步进速率 × 细分超出了 ESP32/驱动器/电机的能力；GOTO 细分过细或目标速度过高都会损失扭矩。",
  "GPIO HIGH = heater on (matches the onboard low-side MOSFET)":
    "GPIO HIGH = 加热带开启（与板载低边 MOSFET 匹配）",
  "GPIO goes HIGH to fire shutter":
    "GPIO 变为 HIGH 以触发快门",
  "GPIO13 (FAN) — set STATUS_LED and STATUS_BUZZER OFF, they share this output":
    "GPIO13（FAN）— 将 STATUS_LED 和 STATUS_BUZZER 设为 OFF，它们共用此输出",
  "GPIO16/17 are the default Serial2 pins, but on the E4 they run straight to the onboard MOT E driver — they are not on any header.":
    "GPIO16/17 是默认的 Serial2 引脚，但在 E4 上它们直接连到板载的 MOT E 驱动器 — 没有引出到任何排针。",
  "GPIO2 (HEAT_E0) is an ESP32 boot-strap pin, but the board and OnStepX already hold it low at boot — you don't add anything. Either output works for dew heat.":
    "GPIO2（HEAT_E0）是 ESP32 的启动配置（strapping）引脚，但主板和 OnStepX 在启动时已经将其保持为低电平 — 你无需添加任何东西。两路输出都可用于除露加热。",
  "GPIO2 = Dew Heater 1":
    "GPIO2 = 除露加热带 1",
  "GPIO2 note:":
    "GPIO2 说明：",
  "GPIO21 on the I2C header (only if it is free) + 4.7kΩ pull-up":
    "GPIO21 位于 I2C 排针上（仅当其空闲时）+ 4.7kΩ 上拉电阻",
  "GPIO21/22 are the I2C bus. A GPS there means":
    "GPIO21/22 是 I2C 总线。将 GPS 接在那里意味着",
  "GPIO34/GPIO35 are input-only on ESP32 — no internal pull-up/down. The E4 has discrete 10kΩ pull-ups to 3.3V on both X-MIN and Y-MIN.":
    "GPIO34/GPIO35 在 ESP32 上是仅输入引脚 — 没有内部上拉/下拉。E4 在 X-MIN 和 Y-MIN 上都有独立的 10kΩ 上拉电阻接 3.3V。",
  "GPIO36 (ADC1_CH0) and GPIO39 (ADC1_CH3) are the correct thermistor pins. Do NOT relocate a thermistor to an ADC2 pin (GPIO0/2/4/12–15/25–27) — analogRead() returns garbage once WiFi starts.":
    "GPIO36（ADC1_CH0）和 GPIO39（ADC1_CH3）是正确的热敏电阻引脚。请勿将热敏电阻改接到 ADC2 引脚（GPIO0/2/4/12–15/25–27）— WiFi 启动后 analogRead() 会返回无效数据。",
  "GPIO36 (TE) and GPIO39 (TB) are input-only — no internal pull-up. The 4.7kΩ series resistor to 3.3V acts as the pull-up.":
    "GPIO36（TE）和 GPIO39（TB）是仅输入引脚 — 没有内部上拉。接 3.3V 的 4.7kΩ 串联电阻充当上拉电阻。",
  "GPIO36 is input-only. The E4 has a 4.7kΩ series resistor on TE (to 3.3V) which serves as the pull-up for open-collector sensors.":
    "GPIO36 是仅输入引脚。E4 在 TE 上有一个接 3.3V 的 4.7kΩ 串联电阻，可作为开集电极传感器的上拉电阻。",
  "GPIO4 = Dew Heater 2":
    "GPIO4 = 除露加热带 2",
  "GPS + RTC together (auto-fallback):":
    "GPS + RTC 同时使用（自动回退）：",
  "GPS Module":
    "GPS 模块",
  "GPS Module Implementation":
    "GPS 模块实现",
  "GPS Module v2 — X-MIN Single-Wire Mode":
    "GPS 模块 v2 — X-MIN 单线模式",
  "GPS Module — GY-GPSV3 (NEO-M8N / NEO-6M)":
    "GPS 模块 — GY-GPSV3（NEO-M8N / NEO-6M）",
  "GPS RX (optional, for sending commands)":
    "GPS RX（可选，用于发送命令）",
  "GPS VCC (through a 3.3V regulator if the module has none)":
    "GPS VCC（如果模块没有 3.3V 稳压器，需经 3.3V 稳压器）",
  "GPS serial port (used only when TIME_LOCATION_SOURCE is GPS)":
    "GPS 串口（仅当 TIME_LOCATION_SOURCE 为 GPS 时使用）",
  "GPS — GPS module — auto time & location":
    "GPS — GPS 模块 — 自动获取时间和位置",
  "GT2 Gearbox — thanks to Chad for the original design 🙏":
    "GT2 减速箱 — 感谢 Chad 的原始设计 🙏",
  "GY-BME280, Adafruit BME280 or generic modules all work. Avoid BMP280 (no humidity).":
    "GY-BME280、Adafruit BME280 或通用模块均可使用。避免使用 BMP280（没有湿度）。",
  "Galvanic isolation — mandatory, never connect GPIO directly.":
    "电气隔离 — 必须使用，切勿直接连接 GPIO。",
  "Gamepad #1 MAC address (colon-separated)":
    "手柄 #1 MAC 地址（以冒号分隔）",
  "Gamepad #2 MAC address (leave as ff:…:ff if unused)":
    "手柄 #2 MAC 地址（未使用时保持为 ff:…:ff）",
  "Garbage data in the serial buffer at boot. Normal.":
    "启动时串口缓冲区中的乱码数据。属正常现象。",
  "Gateway (usually identical to AP_IP_ADDR)":
    "网关（通常与 AP_IP_ADDR 相同）",
  "Gear Ratio Denominator":
    "齿轮比分母",
  "Gear Ratio Numerator":
    "齿轮比分子",
  "Generate & Copy":
    "生成并复制",
  "Generate & View Config.h":
    "生成并查看 Config.h",
  "Generate Config.h":
    "生成 Config.h",
  "Generate Config.h for OnStepX telescope controller — based on OnStep Calculations v1.34":
    "为 OnStepX 望远镜控制器生成 Config.h — 基于 OnStep Calculations v1.34",
  "Generate Config.h for the OnStep SHC hand pendant — compile and flash online":
    "为 OnStep SHC 手控器生成 Config.h — 在线编译和烧录",
  "Generate Config.h for the OnStep web server / WiFi bridge — compile and flash online":
    "为 OnStep 网页服务器 / WiFi 桥接器生成 Config.h — 在线编译和烧录",
  "Generate Config.h, compile online, and flash over USB":
    "生成 Config.h，在线编译，并通过 USB 烧录",
  "Generic (2-pin)":
    "通用（2 针）",
  "Get a small":
    "准备一块小型",
  "GitHub Actions + the build-service repo":
    "GitHub Actions + build-service 仓库",
  "GitHub Actions artifact storage":
    "GitHub Actions 构件存储",
  "GitHub URL (":
    "GitHub URL（",
  "Glass-bead astro NTC (most common)":
    "玻璃珠封装天文 NTC（最常见）",
  "Goto decay override":
    "GOTO 衰减模式覆盖",
  "Goto decay override (default: SPREADCYCLE)":
    "GOTO 衰减模式覆盖（默认：SPREADCYCLE）",
  "Goto fails with \"Out of limit\" — manual moves work":
    "GOTO 失败并提示「Out of limit」— 手动移动正常",
  "Guide Rate Rheostat":
    "导星速率变阻器",
  "Guide rates — defaults match most autoguiders.":
    "导星速率 — 默认值适用于大多数自动导星器。",
  "Guiding, Limits, Parking":
    "导星、限位、停放",
  "H1 - H1 — Heater output 1 (AUX5)":
    "H1 - H1 — 加热输出 1（AUX5）",
  "H1 strap":
    "H1 加热带",
  "H1/H2 are the board's HEAT_E0 / HEAT_BED power outputs — the MOSFET is already onboard (~15A total stage). Do NOT add an IRLZ44N or any gate/pull-down parts; just land the heater strap on the 2-pin terminal.":
    "H1/H2 是主板的 HEAT_E0 / HEAT_BED 功率输出——MOSFET 已集成在板上（整级约 15A）。请勿添加 IRLZ44N 或任何栅极/下拉元件；只需将加热带直接接到 2 针端子上。",
  "H2 - H2 — Heater output 2 (AUX6)":
    "H2 - H2 — 加热输出 2（AUX6）",
  "H2 strap":
    "H2 加热带",
  "Hall (latch)":
    "霍尔（锁存型）",
  "Hall (unipolar)":
    "霍尔（单极型）",
  "Hall VCC — the E4 has no 3.3V pin":
    "霍尔 VCC——E4 没有 3.3V 引脚",
  "Hall sensor GND":
    "霍尔传感器 GND",
  "Hall sensor OUT (open-collector or digital)":
    "霍尔传感器 OUT（集电极开路或数字输出）",
  "Hall sensor outputs 5V but GPIO36 expects 3.3V; or incorrect wiring polarity to TE.":
    "霍尔传感器输出 5V，但 GPIO36 只接受 3.3V；或接到 TE 的接线极性错误。",
  "Hand Controller":
    "手控器",
  "Hand controller features":
    "手控器功能",
  "Hand pendant firmware":
    "手控器固件",
  "Hardware & Safety":
    "硬件与安全",
  "Hardware Guide":
    "硬件指南",
  "Hardware limits stop ALL mount movement when triggered. The E4 Config.h overrides the default limit pin to GPIO34 instead of GPIO39.":
    "硬件限位触发时会停止支架的所有运动。E4 的 Config.h 将默认限位引脚改为 GPIO34，而不是 GPIO39。",
  "Heater power":
    "加热功率",
  "Heater sizing":
    "加热带功率选择",
  "Heater tape":
    "加热带",
  "Help for AXIS1_DRIVER_MICROSTEPS":
    "AXIS1_DRIVER_MICROSTEPS 的帮助",
  "Help for AXIS1_REVERSE":
    "AXIS1_REVERSE 的帮助",
  "Help for AXIS1_STEPS_PER_DEGREE":
    "AXIS1_STEPS_PER_DEGREE 的帮助",
  "Help for AXIS2_DRIVER_MICROSTEPS":
    "AXIS2_DRIVER_MICROSTEPS 的帮助",
  "Help for AXIS2_REVERSE":
    "AXIS2_REVERSE 的帮助",
  "Help for AXIS2_STEPS_PER_DEGREE":
    "AXIS2_STEPS_PER_DEGREE 的帮助",
  "Help for MOUNT_TYPE":
    "MOUNT_TYPE 的帮助",
  "Help for PEC_STEPS_PER_WORM_ROTATION":
    "PEC_STEPS_PER_WORM_ROTATION 的帮助",
  "Help for PINMAP":
    "PINMAP 的帮助",
  "Help for SERIAL_A_BAUD_DEFAULT":
    "SERIAL_A_BAUD_DEFAULT 的帮助",
  "Help for SERIAL_GPS":
    "SERIAL_GPS 的帮助",
  "Help for SLEW_RATE_BASE_DESIRED":
    "SLEW_RATE_BASE_DESIRED 的帮助",
  "Help for STEP_WAVE_FORM":
    "STEP_WAVE_FORM 的帮助",
  "Help for TIME_LOCATION_SOURCE":
    "TIME_LOCATION_SOURCE 的帮助",
  "Here's exactly what leaves your browser and where it ends up:":
    "以下是离开您浏览器的确切数据及其最终去向：",
  "Here's what actually happens when you click":
    "以下是点击此按钮时实际发生的过程：",
  "High-res encoders correct pointing mid-goto":
    "高分辨率编码器在自动寻星（GOTO）过程中修正指向",
  "Highly accurate I2C RTC (±2ppm), battery-backed (CR2032). Connects to the E4 I2C header.":
    "高精度 I2C 实时时钟（±2ppm），带电池备份（CR2032）。连接到 E4 的 I2C 排针。",
  "Hold":
    "按住",
  "Hold current (mA)":
    "保持电流（mA）",
  "Home / Limit":
    "原点 / 限位",
  "Home Axis1":
    "Axis1 原点",
  "Home Axis2":
    "Axis2 原点",
  "Home SW Axis1, limit":
    "Axis1 原点开关，限位",
  "Home SW Axis2":
    "Axis2 原点开关",
  "Home Switches — Mechanical Microswitch":
    "原点开关——机械微动开关",
  "Home Y":
    "原点 Y",
  "Home Y — Axis2 home / limit sensor":
    "原点 Y — Axis2 原点 / 限位传感器",
  "Home position sense":
    "原点位置检测",
  "Home sense":
    "原点检测",
  "Home sensors & hardware endstops":
    "原点传感器与硬件限位",
  "Home/Limit X":
    "原点/限位 X",
  "Home/Limit X — Axis1 home & emergency-stop limit":
    "原点/限位 X — Axis1 原点及急停限位",
  "Horizontal pixels":
    "水平像素",
  "Hostname up to 16 chars — also the WiFi network name on E4":
    "主机名最多 16 个字符——在 E4 上同时也是 WiFi 网络名称",
  "How apps (SkySafari, INDI, the SHC app) talk to the mount — over IP or Bluetooth.":
    "应用程序（SkySafari、INDI、SHC 应用）如何与支架通信——通过 IP 或蓝牙。",
  "How it works (behind the curtain)":
    "工作原理（幕后揭秘）",
  "How long it stays":
    "保留时长",
  "How much does this cost the site owner?":
    "这会让网站所有者花多少钱？",
  "How to connect — IP addresses & default passwords":
    "如何连接——IP 地址与默认密码",
  "How to verify a plugin is actually compiled in":
    "如何确认插件确实已编译进固件",
  "I understand the issues above — build anyway":
    "我了解上述问题——仍然编译",
  "I2C Clock":
    "I2C 时钟",
  "I2C Data":
    "I2C 数据",
  "I2C Pins":
    "I2C 引脚",
  "I2C UART - Centre 12-pin block — I2C · TMC UART · UART0":
    "I2C UART - 中央 12 针排针——I2C · TMC UART · UART0",
  "I2C bus":
    "I2C 总线",
  "I2C device (BME280 / DS3231) wired to 5V":
    "I2C 设备（BME280 / DS3231）接到 5V",
  "I2C header":
    "I2C 排针",
  "I2C header (21/22)":
    "I2C 排针（21/22）",
  "I2C header SCL → GPS RX":
    "I2C 排针 SCL → GPS RX",
  "I2C header SDA ← GPS TX":
    "I2C 排针 SDA ← GPS TX",
  "I2C module":
    "I2C 模块",
  "Idle — click \"Compile Firmware\" to begin.":
    "空闲——点击「编译固件」开始。",
  "If auto-reset fails: hold":
    "如果自动复位失败：按住",
  "If it still hangs, suspect the clone hardware — test with a genuine FYSETC E4. Source: discussion #68362.":
    "如果仍然卡住，请怀疑是仿制硬件的问题——用正品 FYSETC E4 测试。来源：讨论 #68362。",
  "If park/coords stay corrupt, re-flash with \"Erase All Flash\" to wipe stale NV, then reconfigure. Source: discussion #58501.":
    "如果停放位置/坐标仍然损坏，请使用「Erase All Flash」重新烧录以清除旧的 NV 数据，然后重新配置。来源：讨论 #58501。",
  "If the browser dialog is empty, the Teensy isn't in HalfKay bootloader mode yet — just press the white program button and it'll pop in.":
    "如果浏览器对话框为空，说明 Teensy 尚未进入 HalfKay 引导加载模式——只需按下白色编程按钮，它就会出现。",
  "If the ref doesn't exist (typo, or tag hasn't been published yet), you'll see a red \"could not resolve\" message.":
    "如果该引用不存在（拼写错误，或标签尚未发布），会显示红色的「could not resolve」消息。",
  "If the service enforces rate limits (default: 10 builds/hour/IP), wait an hour. If you're iterating heavily, set up a local PlatformIO checkout: clone the upstream that matches the firmware you're building —":
    "如果服务启用了频率限制（默认：每 IP 每小时 10 次编译），请等待一小时。如果需要频繁反复编译，请在本地搭建 PlatformIO 环境：克隆与您所编译固件对应的上游仓库——",
  "If the web UI cannot edit axis settings, the ESP8266 is the part that's out of date.":
    "如果网页界面无法编辑轴设置，说明过时的是 ESP8266。",
  "If using swapped serial pins, force the SWS config to match.":
    "如果使用了交换的串口引脚，请强制 SWS 配置与之一致。",
  "If you have a Teensy 4.0 mounted instead of 3.2, switch the":
    "如果您安装的是 Teensy 4.0 而不是 3.2，请切换",
  "If you see":
    "如果看到",
  "If you see smoke: disconnect all power immediately and inspect for damage.":
    "如果看到冒烟：立即断开所有电源并检查损坏情况。",
  "If you want to inspect the plugin source":
    "如果想查看插件源码",
  "If your controller is NOT ESP-based (e.g. Teensy 4.0/4.1, STM32 MaxPCB) there is no radio on the board. There are two routes to a web page.":
    "如果您的控制器不是基于 ESP 的（例如 Teensy 4.0/4.1、STM32 MaxPCB），主板上就没有无线模块。有两种途径可以获得网页界面。",
  "Imaging Clients & Alignment (ASIAIR / NINA)":
    "成像客户端与校准（ASIAIR / NINA）",
  "Import from URL":
    "从 URL 导入",
  "Imports and file loads preserve the raw source exactly. Clicking":
    "导入和加载文件会原样保留原始源码。点击",
  "In ASCOM driver panel, uncheck \"Enable Serial port DTR control\".":
    "在 ASCOM 驱动面板中，取消勾选「Enable Serial port DTR control」。",
  "In OnStepX mode, after a successful flash the form auto-resets to the selected board's starter defaults, so the next build starts from a clean baseline for that board. This only happens for boards where a starter config is shipped (see the hint next to the \"Apply board defaults\" button on the Controller tab). Your pre-flash state is stashed in":
    "在 OnStepX 模式下，烧录成功后表单会自动重置为所选主板的初始默认值，使下一次编译从该主板的干净基线开始。这仅适用于附带初始配置的主板（参见「控制器」选项卡上「应用主板默认值」按钮旁的提示）。您烧录前的状态保存在",
  "In series with the optocoupler LED on the FAN output (FAN jumper on 5V).":
    "与 FAN 输出上的光耦 LED 串联（FAN 跳线帽设在 5V）。",
  "Includes 32KB EEPROM.":
    "含 32KB EEPROM。",
  "Infreq":
    "少用",
  "Initial OLED contrast (user can change in-menu later)":
    "OLED 初始对比度（之后可在菜单中修改）",
  "Input only":
    "仅输入",
  "Input only — PEC index or temp":
    "仅输入——PEC 索引或温度",
  "Input only — focuser/dew temp (FEATURE2). Limit is moved to X-MIN on the E4.":
    "仅输入——调焦器/除露温度（FEATURE2）。在 E4 上限位已移至 X-MIN。",
  "Input only — home sensor for Dec/Alt":
    "仅输入——Dec/Alt 原点传感器",
  "Input only — home sensor for RA/Azm":
    "仅输入——RA/Azm 原点传感器",
  "Input only — limit moved to X-MIN on E4":
    "仅输入——在 E4 上限位已移至 X-MIN",
  "Install":
    "安装",
  "Install CH341SER-3.7 (older version known to work).":
    "安装 CH341SER-3.7（已知可用的旧版本）。",
  "Install ESP32 via Boards Manager (v2.0.17 recommended)":
    "通过开发板管理器安装 ESP32（推荐 v2.0.17）",
  "Install PlatformIO (Python package)":
    "安装 PlatformIO（Python 包）",
  "Install a CR2032 to retain time when power is off.":
    "装入一颗 CR2032，断电时可保持时间。",
  "Install all three: Adafruit BME280, Adafruit Sensor, Makuna RTC.":
    "三个都要安装：Adafruit BME280、Adafruit Sensor、Makuna RTC。",
  "Install libraries":
    "安装库",
  "Interactive Board Diagram":
    "交互式主板示意图",
  "Interactive Board Diagram & Mounted Hardware":
    "交互式主板示意图与已连接硬件",
  "Interface":
    "接口",
  "Intervalometer / DSLR Trigger":
    "间隔拍摄器 / 单反快门触发",
  "Intervalometer Circuit — Optocoupler Isolated":
    "间隔拍摄器电路——光耦隔离",
  "Invert control (0V = max brightness)":
    "反转控制（0V = 最大亮度）",
  "Is my Config.h sent anywhere permanent?":
    "我的 Config.h 会被永久保存在某处吗？",
  "It has not been flashed on real hardware yet":
    "它尚未在真实硬件上烧录测试过",
  "Item":
    "项目",
  "JS1 (Jerry's analog joystick)":
    "JS1（Jerry 的模拟摇杆）",
  "JST-XH for motors, endstops, thermistors and fan; screw terminals for power and heaters; 12-pin I2C / TMC UART / UART0 block (5V and GND only, no 3.3V)":
    "电机、限位、热敏电阻和风扇使用 JST-XH；电源和加热器使用螺丝端子；12 针 I2C / TMC UART / UART0 排针（仅 5V 和 GND，无 3.3V）",
  "Joystick deadband in ADC counts (larger = less sensitive)":
    "摇杆死区，单位为 ADC 计数（越大越不灵敏）",
  "Judge the UART by its effect: change AXISn_DRIVER_IRUN and check that holding torque and motor temperature follow.":
    "通过效果判断 UART 是否工作：修改 AXISn_DRIVER_IRUN，检查保持扭矩和电机温度是否随之变化。",
  "Jumper wire":
    "跳线",
  "Jumpering pins near the USB connector while 12-24V is applied creates a direct short.":
    "在接通 12-24V 时短接 USB 接口附近的引脚会造成直接短路。",
  "Just below the field you'll see a live preview that resolves your input against GitHub and shows the commit hash, author, date, and the first line of the commit message, so you know exactly what's about to be compiled. The repo prefix (":
    "输入框下方会显示实时预览，它会在 GitHub 上解析您的输入，并显示提交哈希、作者、日期和提交信息的第一行，让您确切知道将要编译的内容。仓库前缀（",
  "Just send the command again — the second attempt works.":
    "再发送一次命令即可——第二次尝试会成功。",
  "KY-003 (A3144 latch) open-collector output with the built-in 4.7kΩ pull-up on TE. Test with the Sky Planetarium flash indicator.":
    "KY-003（A3144 锁存型）集电极开路输出，配合 TE 上内置的 4.7kΩ 上拉电阻。可用 Sky Planetarium 的闪烁指示进行测试。",
  "KY-003 needs 4.5V+, so power it from 5V; its own pull-up then puts 5V on the output, so use a divider (1kΩ + 2kΩ) — GPIO36 is not 5V-tolerant. Wiring: TE Pin 1 (GPIO36) ← Hall OUT, TE Pin 2 ← GND. Config: PEC_SENSE HIGH, PEC_SENSE_PIN 36.":
    "KY-003 需要 4.5V 以上电压，因此需用 5V 供电；其自带的上拉电阻会使输出为 5V，所以要使用分压电阻（1kΩ + 2kΩ）——GPIO36 不耐受 5V。接线：TE 引脚 1（GPIO36）← 霍尔 OUT，TE 引脚 2 ← GND。配置：PEC_SENSE HIGH，PEC_SENSE_PIN 36。",
  "Keep only the TMC2209 library by hjd1964.":
    "只保留 hjd1964 的 TMC2209 库。",
  "Keep the pull-up resistors that came on your breakout":
    "保留模块上自带的上拉电阻",
  "Keep the wires short — over ~20cm of unshielded wire next to the stepper drivers, I2C drops out.":
    "导线要尽量短——在步进驱动器旁使用超过约 20cm 的非屏蔽导线时，I2C 会掉线。",
  "Kendrick / generic silicone strip":
    "Kendrick / 通用硅胶加热带",
  "Key technical findings extracted from the OnStep Groups.io forum so you don't need to click through.":
    "从 OnStep Groups.io 论坛整理出的关键技术结论，省去您逐帖翻阅的麻烦。",
  "Keypad":
    "键盘",
  "Known issue with some ESP32 board package versions; also dual AP+Station conflicts or interference.":
    "某些 ESP32 开发板包版本的已知问题；也可能是 AP+Station 双模式冲突或干扰。",
  "Known issues with verified fixes":
    "已知问题及经验证的修复方法",
  "LED / Buzzer":
    "LED / 蜂鸣器",
  "LED / Buzzer (switched)":
    "LED / 蜂鸣器（开关控制）",
  "LM1117-3.3 — LM1117-3.3 / AMS1117-3.3 regulator":
    "LM1117-3.3 — LM1117-3.3 / AMS1117-3.3 稳压器",
  "L_ca (Catalan)":
    "L_ca（加泰罗尼亚语）",
  "L_cn (Chinese)":
    "L_cn（中文）",
  "L_de (German)":
    "L_de（德语）",
  "L_en (English)":
    "L_en（英语）",
  "L_es (Spanish)":
    "L_es（西班牙语）",
  "L_fr (French)":
    "L_fr（法语）",
  "L_it (Italian)":
    "L_it（意大利语）",
  "L_jp (Japanese)":
    "L_jp（日语）",
  "L_ro (Romanian)":
    "L_ro（罗马尼亚语）",
  "L_us (US English)":
    "L_us（美式英语）",
  "L_us (US English, imperial units)":
    "L_us（美式英语，英制单位）",
  "Label":
    "标签",
  "Label in SWS/App interface":
    "在 SWS/应用界面中显示的标签",
  "Land both strap wires straight on the H1 / H2 terminal. Polarity does not matter for resistive tape.":
    "将加热带的两根线直接接到 H1 / H2 端子上。电阻式加热带不分极性。",
  "Lands on the":
    "接到",
  "Language / Langue":
    "语言 / Language",
  "Layer":
    "图层",
  "Leave OFF for production. ON / VERBOSE prints to SERIAL_DEBUG; REMOTE streams over the network.":
    "正式使用时保持 OFF。ON / VERBOSE 输出到 SERIAL_DEBUG；REMOTE 通过网络传输。",
  "Leave alone unless you know why":
    "除非清楚原因，否则不要修改",
  "Level Shift":
    "电平转换",
  "Limit Switch Implementation":
    "限位开关的实现",
  "Limit Switches":
    "限位开关",
  "Limit on X-MIN armed (switch to GND stops motion)":
    "X-MIN 上的限位已启用（开关接通 GND 时停止运动）",
  "Limit switch NO → GND (shared with Axis1 home)":
    "限位开关 NO → GND（与 Axis1 原点共用）",
  "Limit switch state":
    "限位开关状态",
  "Load Existing Config.h":
    "加载现有 Config.h",
  "Logged in the Actions run metadata indefinitely (public repo)":
    "永久记录在 Actions 运行元数据中（公开仓库）",
  "Lower AXISn_SLEW_RATE_BASE_DESIRED until slews are reliable, then raise gradually.":
    "降低 AXISn_SLEW_RATE_BASE_DESIRED，直到快速转动稳定可靠，然后逐步调高。",
  "Lower WiFi TX power to ~2dB and use a 20MHz channel width (not 40MHz) — see the WiFi section.":
    "将 WiFi 发射功率降至约 2dB，并使用 20MHz 信道宽度（而非 40MHz）——参见 WiFi 部分。",
  "Lower the WiFi TX power":
    "降低 WiFi 发射功率",
  "MOSFET / driver parts":
    "MOSFET / 驱动元件",
  "MOT E — Focuser1 motor output (Axis4)":
    "MOT E — Focuser1 电机输出（Axis4）",
  "MOT Z — rotator (Axis3) or Focuser2 (Axis5)":
    "MOT Z — 旋转器（Axis3）或 Focuser2（Axis5）",
  "MOT-X (JST-XH 4-pin)":
    "MOT-X（JST-XH 4 针）",
  "MOT-Y (JST-XH 4-pin)":
    "MOT-Y（JST-XH 4 针）",
  "MOTE Foc1 - MOT E — Focuser1 motor output (Axis4)":
    "MOTE Foc1 - MOT E — Focuser1 电机输出（Axis4）",
  "MOTX Ra/Azm - MOT X — Ra/Azm motor output":
    "MOTX Ra/Azm - MOT X — Ra/Azm 电机输出",
  "MOTY DEC - MOT Y — DEC/Alt motor output":
    "MOTY DEC - MOT Y — DEC/Alt 电机输出",
  "MOTZ Rot/Foc2 - MOT Z — rotator (Axis3) or Focuser2 (Axis5)":
    "MOTZ Rot/Foc2 - MOT Z — 旋转器（Axis3）或 Focuser2（Axis5）",
  "MUST be set explicitly on the E4 — see the warning above. Put it in Extended.config.h, e.g. #define ONE_WIRE_PIN 21 (I2C header SDA, with nothing else on it)":
    "在 E4 上必须显式设置——参见上方警告。将其写入 Extended.config.h，例如 #define ONE_WIRE_PIN 21（I2C 排针的 SDA，且不接其他设备）",
  "Make sure no limit is being tripped (check the limit pin / LIMIT_STRICT).":
    "确认没有触发任何限位（检查限位引脚 / LIMIT_STRICT）。",
  "Make sure the factory SDA↔M-RX / SCL↔M-TX caps and the ZDIAG-EN cap are removed.":
    "确认出厂时的 SDA↔M-RX / SCL↔M-TX 跳线帽和 ZDIAG-EN 跳线帽已拔除。",
  "Make sure you actually entered DFU. BlackPill: hold BOOT0, tap NRST, release. BTT SKR PRO V1.2: set the":
    "确认确实已进入 DFU 模式。BlackPill：按住 BOOT0，点按 NRST，然后松开。BTT SKR PRO V1.2：插上",
  "Max Axes":
    "最大轴数",
  "Max PWM duty (reduce if 24V supply)":
    "最大 PWM 占空比（使用 24V 电源时应调低）",
  "Max angle (degrees)":
    "最大角度（度）",
  "Max limit":
    "最大限位",
  "Max limit switch":
    "最大限位开关",
  "Max recording length in seconds (720s = 12 min)":
    "最长记录时间，单位秒（720s = 12 分钟）",
  "Max travel in mm":
    "最大行程（mm）",
  "Max µm/s":
    "最大 µm/s",
  "MaxESP build notes":
    "MaxESP 组装说明",
  "MaxESP3 (ESP32) — older 3-axis ESP32, MaxESP4 recommended":
    "MaxESP3 (ESP32) — 较旧的 3 轴 ESP32，推荐 MaxESP4",
  "MaxESP4 (ESP32) — covers MaxESP4i (dual-ESP32 + FRAM)":
    "MaxESP4 (ESP32) — 也适用于 MaxESP4i（双 ESP32 + FRAM）",
  "MaxPCB4 (Teensy 4.1) — covers MaxPCB4w (WiFi) / MaxPCB4e (Ethernet)":
    "MaxPCB4 (Teensy 4.1) — 也适用于 MaxPCB4w（WiFi）/ MaxPCB4e（以太网）",
  "MaxSTM3 with integrated STM32F411CE + onboard M24C64 EEPROM (8KB). Same TMC SPI driver bus as MaxSTM3 — defaults to TMC2130.":
    "MaxSTM3 集成 STM32F411CE + 板载 M24C64 EEPROM（8KB）。TMC SPI 驱动器总线与 MaxSTM3 相同——默认 TMC2130。",
  "MaxSTM3I (STM32F411 + onboard M24C64 EEPROM)":
    "MaxSTM3I（STM32F411 + 板载 M24C64 EEPROM）",
  "Measure the 3.3V rail during a slew; if it sags, reduce motor current until brownouts stop.":
    "在快速转动时测量 3.3V 电源轨；如果电压下跌，请降低电机电流，直到不再欠压。",
  "Mechanical":
    "机械式",
  "Mechanical switches bounce for 5–20ms, but OnStepX debounces home/limit inputs in firmware and the E4's built-in pull-up holds the line — bare switches work as-is. Only if a long switch cable picks up RFI/EMI and causes false triggers, add a stronger 1–2kΩ pull-up to 3.3V (per the OnStep E4 wiki) or a small RC (10kΩ + 0.1µF).":
    "机械开关会有 5–20ms 的抖动，但 OnStepX 在固件中对原点/限位输入做了消抖，E4 内置的上拉电阻也会保持电平——直接接开关即可使用。只有当较长的开关线缆拾取 RFI/EMI 并导致误触发时，才需加一个更强的 1–2kΩ 上拉到 3.3V（依据 OnStep E4 wiki），或加一个小 RC 电路（10kΩ + 0.1µF）。",
  "Meridian flip never completes — mount just slews to home and stops (or does nothing)":
    "中天翻转始终无法完成——支架只是转到原点就停止（或毫无反应）",
  "Meridian flip offsets — set":
    "中天翻转偏移——设置时机：",
  "Meridian flips for FORK / Zenith pass for ALTAZM":
    "FORK 的中天翻转 / ALTAZM 的过天顶",
  "Metrics":
    "统计指标",
  "Microstep mode":
    "细分模式",
  "Microstep mode for slewing":
    "快速转动时的细分模式",
  "Microstep mode for tracking":
    "跟踪时的细分模式",
  "Microstep mode slewing":
    "细分模式（快速转动）",
  "Microstep mode tracking":
    "细分模式（跟踪）",
  "Microsteps":
    "细分",
  "Microswitch COM terminal":
    "微动开关 COM 端子",
  "Microswitch NO terminal (switch to GND when activated)":
    "微动开关 NO 端子（触发时接通 GND）",
  "Min 8 chars (WPA2). Empty string = open network.":
    "至少 8 个字符（WPA2）。留空 = 开放网络。",
  "Min angle (degrees)":
    "最小角度（度）",
  "Min limit":
    "最小限位",
  "Min limit switch":
    "最小限位开关",
  "MiniPCB overview":
    "MiniPCB 概述",
  "MiniPCB v1 (Teensy 3.2 or Teensy 4.0) — embed-in-mount":
    "MiniPCB v1（Teensy 3.2 或 Teensy 4.0）— 内嵌于支架",
  "MiniPCB v1 / v2 (Teensy 3.2 or Teensy 4.0)":
    "MiniPCB v1 / v2（Teensy 3.2 或 Teensy 4.0）",
  "MiniPCB v2 (Teensy 3.2 or Teensy 4.0) — standalone case":
    "MiniPCB v2（Teensy 3.2 或 Teensy 4.0）— 独立机箱",
  "Model":
    "型号",
  "Module":
    "模块",
  "Most common, ~$2, ±2ppm. CR2032 backup.":
    "最常见，约 $2，±2ppm。CR2032 备用电池。",
  "Most defaults are fine. These are the ones you almost always have to set:":
    "大多数默认值都可以。以下是几乎总是需要设置的项：",
  "Most recommended. On the E4: I2C header (GPIO21/22).":
    "最推荐。在 E4 上：I2C 排针（GPIO21/22）。",
  "Motor / LED":
    "电机 / LED",
  "Motor Steps (per revolution)":
    "电机步数（每转）",
  "Motor driver model":
    "电机驱动器型号",
  "Motor output for Focuser1 on the E0-AXIS.":
    "Focuser1 的电机输出，位于 E0-AXIS。",
  "Motor output on the Z-AXIS. Axis3 and Axis5 share these pins — only one may be enabled.":
    "Z-AXIS 上的电机输出。Axis3 和 Axis5 共用这些引脚——只能启用其中一个。",
  "Motorized Focuser":
    "电动调焦器",
  "Motorized Focuser (Axis4)":
    "电动调焦器（Axis4）",
  "Motorized autofocus with temp compensation":
    "带温度补偿的电动自动对焦",
  "Motors click/jerk at standstill or stutter during slews (often in time with the web UI)":
    "电机在静止时咔哒作响/抽动，或在快速转动时卡顿（常与网页界面刷新同步）",
  "Motors randomly click/jerk or stutter at standstill, and motion is not smooth — often a short hitch every ~1s that lines up with the web UI refreshing the position. At higher slew speeds the axis can briefly stall.":
    "电机在静止时随机咔哒作响/抽动或卡顿，运动不平滑——常见为每约 1s 一次短暂停顿，与网页界面刷新位置的节奏一致。在较高快速转动速度下，轴可能短暂失步。",
  "Motors run hot on 12V. Root cause: TMC2209 UART comms failure means Config.h current never reaches the driver, and with VREF unconnected the current is uncontrolled.":
    "电机在 12V 下发热严重。根本原因：TMC2209 UART 通信失败，导致 Config.h 中设定的电流从未传达到驱动器，而 VREF 又未连接，电流因此失控。",
  "Motors stall at full slew speed (often only one axis, or after going to finer microsteps)":
    "电机在全速快速转动时失步（常常只有一个轴，或在改用更高细分之后）",
  "Mount":
    "支架",
  "Mount Dec/Alt":
    "支架 Dec/Alt",
  "Mount Operation & Goto":
    "支架操作与自动寻星（GOTO）",
  "Mount RA/Azm":
    "支架 RA/Azm",
  "Mount Type":
    "支架类型",
  "Mount controller firmware":
    "支架控制器固件",
  "Mount type":
    "支架类型",
  "Mount type (change to ALTAZM as needed)":
    "支架类型（按需改为 ALTAZM）",
  "Move/rename the TMC2209Stepper folder out of your Arduino/libraries directory.":
    "将 TMC2209Stepper 文件夹移出您的 Arduino/libraries 目录（或将其重命名）。",
  "Movement rate LED":
    "运动速率 LED",
  "Multi-GNSS, better sensitivity.":
    "多 GNSS，灵敏度更高。",
  "Must be low at boot":
    "启动时必须为 LOW",
  "Must be low at boot; PWM dew or switch":
    "启动时必须为 LOW；PWM 除露或开关",
  "Must be ≥ 8 chars (WPA2), or leave empty for an open network.":
    "必须 ≥ 8 个字符（WPA2），或留空以使用开放网络。",
  "Must match GPS module baud rate":
    "必须与 GPS 模块波特率一致",
  "Must match the GPS module (most ship at 9600)":
    "必须与 GPS 模块一致（大多数出厂为 9600）",
  "Must match your mount — use the configurator's Calculator tab":
    "必须与您的支架匹配——请使用配置器的「计算器」标签页",
  "NEO-M8N / NEO-6M auto time & location":
    "NEO-M8N / NEO-6M 自动获取时间和位置",
  "NEO-M8N on X-MIN (GPIO34) single-wire bit-banged mode. Capacitor removal required for reliable 9600-baud data.":
    "NEO-M8N 接 X-MIN（GPIO34），单线软件模拟（bit-bang）模式。需移除电容才能可靠接收 9600 波特数据。",
  "NEVER connect the E4 GPIO directly to a camera. Always use an optocoupler (4N35, PC817). Direct connection can destroy both the ESP32 and the camera.":
    "切勿将 E4 的 GPIO 直接连接到相机。务必使用光耦（4N35、PC817）。直接连接可能同时损坏 ESP32 和相机。",
  "NEVER jumper the two pins closest to the USB connector while main power is connected.":
    "主电源接通时，切勿用跳线帽短接最靠近 USB 接口的两个引脚。",
  "NEVER power the board up with the antenna disconnected — running the RF stage with no antenna can damage the ESP32 RF amplifier.":
    "切勿在天线断开时给主板上电——在无天线的情况下运行射频级可能损坏 ESP32 的射频放大器。",
  "NEVER power up an external-antenna board without its antenna attached.":
    "切勿在未接天线时给外置天线主板上电。",
  "NO to GND":
    "NO 接 GND",
  "NTC temperature sensing via TE/TB":
    "通过 TE/TB 进行 NTC 温度检测",
  "NTC thermistor leg 1 — leg 2 → GND":
    "NTC 热敏电阻引脚 1——引脚 2 → GND",
  "NTC type":
    "NTC 类型",
  "NV Storage":
    "NV 存储",
  "NV_AT24C32 — 4KB I2C EEPROM @ 0x57 (ZS042 module)":
    "NV_AT24C32 — 4KB I2C EEPROM @ 0x57（ZS042 模块）",
  "NV_DEFAULT — platform default (use this for almost every board)":
    "NV_DEFAULT — 平台默认（几乎所有主板都用这个）",
  "NV_MB85RC64 — 8KB I2C FRAM @ 0x50 (MaxESP4i and similar)":
    "NV_MB85RC64 — 8KB I2C FRAM @ 0x50（MaxESP4i 及类似主板）",
  "Needs 3.5V+ — power at 5V, no divider.":
    "需要 3.5V 以上——用 5V 供电，无需分压电阻。",
  "Needs 3.5V+ — power at 5V, no divider. Only one pole triggers — flip the magnet if nothing is detected.":
    "需要 3.5V 以上——用 5V 供电，无需分压电阻。仅一个磁极会触发——若未检测到，请翻转磁铁。",
  "Needs 4.5V+ — power at 5V. Bare A3144: no divider. KY-003 module: divider (its pull-up goes to 5V).":
    "需要 4.5V 以上——用 5V 供电。裸 A3144：无需分压。KY-003 模块：需要分压（其上拉电阻接到 5V）。",
  "Needs a":
    "需要一个",
  "Negotiated baud after connection (not all devices support > 115200)":
    "连接后协商的波特率（并非所有设备都支持 > 115200）",
  "Network":
    "网络",
  "Network stack. WIFI is the most common choice on ESP32/ESP8266.":
    "网络协议栈。在 ESP32/ESP8266 上最常用的是 WIFI。",
  "Nikon uses opposite tip/ring polarity vs Canon.":
    "Nikon 的尖端/环极性与 Canon 相反。",
  "No":
    "否",
  "No built-in ESP? Adding WiFi and the web page":
    "没有内置 ESP？添加 WiFi 和网页",
  "No extra ESP needed for the web UI:":
    "Web 界面无需额外的 ESP：",
  "No focus control. Short tip→sleeve = shutter.":
    "无对焦控制。短接尖端→套筒 = 快门。",
  "NodeMCU / Wemos D1 mini auto-reset into the ROM bootloader (DTR/RTS wiring on their USB bridge). Bare ESP-01 modules don't — you need to pull":
    "NodeMCU / Wemos D1 mini 会自动复位进入 ROM 引导程序（其 USB 桥上有 DTR/RTS 连线）。裸 ESP-01 模块不会——您需要将",
  "Nominal resistance (Ω) — typically 100kΩ":
    "标称电阻（Ω）——通常为 100kΩ",
  "Nominal temp of your NTC (°C)":
    "您的 NTC 的标称温度（°C）",
  "None — onboard":
    "无——板载",
  "None — open collector, TE is pulled up to 3.3V on board. Power at 5V":
    "无——开集输出，TE 在板上已上拉到 3.3V。用 5V 供电",
  "None — open collector. Power at 5V":
    "无——开集输出。用 5V 供电",
  "Normal. Block 0 on a Teensy triggers a full chip erase; the ACK for that first write arrives only after the erase finishes (a few seconds on 3.2, a bit longer on 4.1's 8 MB flash). The flasher allows up to 45 s per block for the first five blocks. If it actually times out, unplug / replug the Teensy and retry — HalfKay is ROM-resident, nothing can be bricked.":
    "正常现象。在 Teensy 上，块 0 会触发整片擦除；第一次写入的 ACK 要等擦除完成后才返回（3.2 上需几秒，4.1 的 8 MB 闪存上稍长）。烧录器对前五个块每块最多允许 45 s。如果确实超时，请拔下/重新插上 Teensy 再试——HalfKay 驻留在 ROM 中，不会变砖。",
  "Not available":
    "不可用",
  "Notes":
    "备注",
  "Nothing runs on anyone's private server.":
    "不会在任何人的私有服务器上运行任何东西。",
  "OFF (12-hour)":
    "OFF（12 小时制）",
  "OFF (default port)":
    "OFF（默认端口）",
  "OFF (normal operation)":
    "OFF（正常运行）",
  "OFF (radio only)":
    "OFF（仅无线）",
  "OFF (same as tracking)":
    "OFF（与跟踪相同）",
  "OFF (uses tracking)":
    "OFF（使用跟踪值）",
  "OFF in the stock Config.h — Dew Heat 1 then runs on ambient-vs-dew-point alone. Set THERMISTOR only if you add a probe on TE":
    "原厂 Config.h 中为 OFF——此时 Dew Heat 1 仅依据环境温度与露点之差工作。仅当您在 TE 上加装探头时才设为 THERMISTOR",
  "OFF in the stock E4 Config.h, which gives MOT-Z to Axis5 (focuser2). Set AXIS5_DRIVER_MODEL OFF first":
    "原厂 E4 Config.h 中为 OFF，它把 MOT-Z 分配给 Axis5（调焦器 2）。请先将 AXIS5_DRIVER_MODEL 设为 OFF",
  "OFF on the E4 — define ONE_WIRE_PIN yourself (GPIO21/22 only)":
    "E4 上为 OFF——需自行定义 ONE_WIRE_PIN（仅限 GPIO21/22）",
  "OFF or 0..255 brightness":
    "OFF 或 0..255 亮度",
  "OFF or 0..90 degrees":
    "OFF 或 0..90 度",
  "OFF or mA":
    "OFF 或 mA",
  "OFF or mA for slew current":
    "OFF 或快速转动电流（mA）",
  "OFF or mA for standstill current":
    "OFF 或静止电流（mA）",
  "OFF or mA for tracking current":
    "OFF 或跟踪电流（mA）",
  "OFF or pin number":
    "OFF 或引脚号",
  "OFF or pin number (GPS TX wires here)":
    "OFF 或引脚号（GPS 的 TX 接到这里）",
  "OFF, AUX, or pin number":
    "OFF、AUX 或引脚号",
  "OFF, ON, or 0..255":
    "OFF、ON 或 0..255",
  "OFF, ON, or 100..6000 Hz":
    "OFF、ON 或 100..6000 Hz",
  "OFF, THERMISTOR, or DS18B20 s/n":
    "OFF、THERMISTOR 或 DS18B20 序列号",
  "OFF, or 0–255 brightness (0–100%) for the utility LED":
    "OFF，或辅助 LED 的亮度 0–255（0–100%）",
  "OLED model in your hand controller":
    "手控器中的 OLED 型号",
  "ON (24-hour)":
    "ON（24 小时制）",
  "ON (swapped port)":
    "ON（交换端口）",
  "ON state voltage level":
    "ON 状态电压电平",
  "ON ⚠ wipe NV on next boot":
    "ON ⚠ 下次启动时清除 NV",
  "Of the three browser flashers, the Teensy one is the most custom. PJRC's official tool is":
    "在三个浏览器烧录器中，Teensy 的那个定制程度最高。PJRC 的官方工具是",
  "Official FYSETC E4 Wiki — Complete Reference":
    "FYSETC E4 官方 Wiki——完整参考",
  "Often":
    "常见",
  "Often a \"compatible\" E4 clone or a marginal board; the firmware uploads and verifies but the ESP32 hangs at start-up.":
    "通常是「兼容」的 E4 克隆板或品质勉强的主板；固件能上传并通过校验，但 ESP32 在启动时卡死。",
  "Old ESP32 board package version — the analogWrite API was renamed.":
    "ESP32 开发板包版本过旧——analogWrite API 已被重命名。",
  "Older, GPS-only, less sensitive than M8N. Cold start ~30s.":
    "较旧，仅支持 GPS，灵敏度低于 M8N。冷启动约 30s。",
  "On Android: disable mobile data when connected to OnStep WiFi.":
    "Android 上：连接 OnStep WiFi 时请关闭移动数据。",
  "On Windows: install the WinUSB driver via Zadig (see the BlackPill warning above).":
    "Windows 上：通过 Zadig 安装 WinUSB 驱动程序（参见上方的 BlackPill 警告）。",
  "On a board with no built-in WiFi":
    "在没有内置 WiFi 的主板上",
  "On the Compile & Flash tab, the":
    "在「编译并烧录」标签页中，",
  "On the FYSETC E4":
    "在 FYSETC E4 上",
  "On-board pull-up on X-MIN/Y-MIN":
    "X-MIN/Y-MIN 上的板载上拉电阻",
  "OnStep Web Installer":
    "OnStep 网页安装器",
  "OnStepX (Mount controller firmware)":
    "OnStepX（支架控制器固件）",
  "OnStepX Configuration Generator":
    "OnStepX 配置生成器",
  "OnStepX Configurator":
    "OnStepX 配置器",
  "OnStepX E4 branch":
    "OnStepX E4 分支",
  "OnStepX E4 branch (v10.24c+)":
    "OnStepX E4 分支（v10.24c+）",
  "OnStepX can act as an intervalometer (DSLR timer). It controls the camera shutter via a GPIO pin through an optocoupler. The camera MUST be set to":
    "OnStepX 可用作间隔定时器（单反定时器）。它通过 GPIO 引脚经光耦控制相机快门。相机必须设置为",
  "OnStepX can serve its own page via the":
    "OnStepX 可以自行提供网页，方式是",
  "OnStepX on ESP32 with the Website plugin":
    "使用 Website 插件的 ESP32 上的 OnStepX",
  "OnStepX opens a TCP/IP port on its own WiFi, and/or Bluetooth serial.":
    "OnStepX 在自己的 WiFi 上开放一个 TCP/IP 端口，和/或提供蓝牙串口。",
  "OnStepX plugins":
    "OnStepX 插件",
  "OnStepX plugins (optional)":
    "OnStepX 插件（可选）",
  "OnStepX plugins — how the bundling works":
    "OnStepX 插件——打包机制说明",
  "OnStepX regulates dew-heater power with slow PWM (2-second period). Power is computed from the ambient-vs-dew-point difference (0–255 duty).":
    "OnStepX 以慢速 PWM（周期 2 秒）调节除露加热带功率。功率根据环境温度与露点之差计算（占空比 0–255）。",
  "OnStepX regulates dew-heater power with slow PWM (2-second period). Power is computed from the ambient-vs-dew-point difference (0–255 duty). GPIO2/GPIO4 drive the E4's onboard MOSFETs — there is no external switching stage to build.":
    "OnStepX 以慢速 PWM（周期 2 秒）调节除露加热带功率。功率根据环境温度与露点之差计算（占空比 0–255）。GPIO2/GPIO4 驱动 E4 板载的 MOSFET——无需另外搭建开关电路。",
  "OnStepX servo monitor panel (any axis)":
    "OnStepX 伺服监控面板（任意轴）",
  "OnStepX supports home sensors (end-stops) and limit switches on each axis. The E4 has dedicated pins for Axis1 home (X-MIN / GPIO34) and Axis2 home (Y-MIN / GPIO35). GPIO34 is input-only (no internal pull-up) — the E4 has a 10kΩ pull-up to 3.3V, a 100nF filter capacitor and a 100Ω series resistor on each of X-MIN and Y-MIN. Remove the XDIAG-EN / YDIAG-EN jumper caps, or the drivers' DIAG outputs drive these inputs.":
    "OnStepX 支持每个轴上的原点传感器（止挡）和限位开关。E4 为 Axis1 原点（X-MIN / GPIO34）和 Axis2 原点（Y-MIN / GPIO35）提供了专用引脚。GPIO34 仅可输入（无内部上拉）——E4 在 X-MIN 和 Y-MIN 上各有一个接 3.3V 的 10kΩ 上拉电阻、一个 100nF 滤波电容和一个 100Ω 串联电阻。请取下 XDIAG-EN / YDIAG-EN 跳线帽，否则驱动器的 DIAG 输出会驱动这些输入。",
  "OnStepX supports up to 6 focusers (Axis4–Axis9). The E4 has two:":
    "OnStepX 最多支持 6 个调焦器（Axis4–Axis9）。E4 有两个：",
  "OnStepX vs SmartHandController vs SmartWebServer — the mode switch":
    "OnStepX、SmartHandController 与 SmartWebServer——模式切换",
  "OnStepX website plugin":
    "OnStepX website 插件",
  "OnStepX with raw LX200 TCP (no web UI)":
    "使用原始 LX200 TCP 的 OnStepX（无 Web 界面）",
  "Onboard LED blinks while connecting, steady once connected":
    "板载 LED 连接中闪烁，连接后常亮",
  "Onboard driver only — no header":
    "仅板载驱动器——无排针",
  "Once the device is open, flashing is a loop of 1088-byte HID output reports with this layout:":
    "设备打开后，烧录过程就是循环发送 1088 字节的 HID 输出报告，其结构如下：",
  "Once your browser has the firmware zip, it unzips in memory and uses one of the Web APIs modern Chromium browsers expose to talk to USB devices:":
    "浏览器拿到固件 zip 后，会在内存中解压，并使用现代 Chromium 浏览器提供的某个 Web API 与 USB 设备通信：",
  "One axis (often DEC) runs weak/jerky when connected to USB":
    "连接 USB 时某个轴（通常是 DEC）无力/抖动",
  "One-click browser flash (Chrome / Edge):":
    "浏览器一键烧录（Chrome / Edge）：",
  "OneWire / DS18B20 Sensors":
    "OneWire / DS18B20 传感器",
  "OneWire bus":
    "OneWire 总线",
  "Online build shortcut:":
    "在线编译捷径：",
  "Only used if you disable DHCP (STA_DHCP_ENABLED = false).":
    "仅在禁用 DHCP 时使用（STA_DHCP_ENABLED = false）。",
  "Open":
    "打开",
  "Open the":
    "打开",
  "Open this in a browser once joined to the network.":
    "连接到该网络后，在浏览器中打开此地址。",
  "Open-collector":
    "开集输出",
  "Open-collector, LOW on south pole":
    "开集输出，遇南极时为 LOW",
  "Operation:":
    "操作：",
  "Optic":
    "光学",
  "Optic temp source → enables dew-point auto control":
    "光学镜筒温度来源 → 启用露点自动控制",
  "Option":
    "选项",
  "Optional ambient sensor on the I2C bus":
    "I2C 总线上的可选环境传感器",
  "Optional analog joystick add-on":
    "可选模拟摇杆扩展",
  "Optional: extras on":
    "可选：额外设置见",
  "Optocoupler":
    "光耦",
  "Or downgrade to v2.0.11 if v2.0.17 causes other issues.":
    "如果 v2.0.17 引起其他问题，也可降级到 v2.0.11。",
  "Or set both to OFF:":
    "或将两者都设为 OFF：",
  "Or the specific sensor's 64-bit serial":
    "或指定传感器的 64 位序列号",
  "Output":
    "输出",
  "Over-the-air firmware update via web browser. Pairs well with Website.":
    "通过网页浏览器进行无线（OTA）固件更新。与 Website 搭配使用效果好。",
  "Overrides the pinmap default of 39, moving limit sense to X-MIN":
    "覆盖引脚映射默认值 39，将限位检测移到 X-MIN",
  "PC817/4N35 LED cathode (–)":
    "PC817/4N35 LED 阴极（–）",
  "PEC (Periodic Error Correction)":
    "PEC（周期误差校正）",
  "PEC / Thermistor":
    "PEC / 热敏电阻",
  "PEC Calculator":
    "PEC 计算器",
  "PEC Hall":
    "PEC 霍尔",
  "PEC Hall sensor not detected":
    "未检测到 PEC 霍尔传感器",
  "PEC Hall — PEC index Hall sensor":
    "PEC 霍尔——PEC 索引霍尔传感器",
  "PEC Index":
    "PEC 索引",
  "PEC Index Implementation":
    "PEC 索引实现",
  "PEC Index — Hall Effect Sensor (A3144 / KY-003 / US5881)":
    "PEC 索引——霍尔效应传感器（A3144 / KY-003 / US5881）",
  "PEC Wiring KY-003 / A3144 — Step by Step":
    "PEC 接线 KY-003 / A3144——分步说明",
  "PEC index, thermistor":
    "PEC 索引、热敏电阻",
  "PEC is completely ignored in ALTAZM mode.":
    "在 ALTAZM 模式下 PEC 完全不起作用。",
  "PEC sensor edge":
    "PEC 传感器边沿",
  "PIN SHARING — CRITICAL:":
    "引脚共用——关键：",
  "PINMAP → MCU target auto-resolves.":
    "PINMAP → 目标 MCU 自动确定。",
  "PINMAP ↔ MCU match":
    "PINMAP ↔ MCU 匹配",
  "PPS signal edge detection":
    "PPS 信号边沿检测",
  "PULSE allows ~1.6x faster rates than SQUARE":
    "PULSE 的速率比 SQUARE 快约 1.6 倍",
  "PULSE min":
    "PULSE 最小值",
  "PULSE — ~1.6× higher step rate (short wiring runs only)":
    "PULSE — 步进速率高约 1.6×（仅限短接线）",
  "PWM dew heater or switch":
    "PWM 除露加热带或开关",
  "PWM heater control & dew point compensation":
    "PWM 加热控制与露点补偿",
  "PWR Vin·GND - Main power input — Vin / GND screw terminal":
    "PWR Vin·GND - 主电源输入——Vin / GND 螺丝端子",
  "Parameter":
    "参数",
  "Park input signal trigger":
    "停放输入信号触发",
  "Park orientation sensor":
    "停放方向传感器",
  "Park status output":
    "停放状态输出",
  "Parsing the firmware is its own step. On Teensy 4.x, PlatformIO emits an Intel HEX file whose data records carry absolute addresses starting at":
    "解析固件是单独的一步。在 Teensy 4.x 上，PlatformIO 生成一个 Intel HEX 文件，其数据记录携带的绝对地址起始于",
  "Part":
    "部件",
  "Partition Scheme":
    "分区方案",
  "Pass-through ST4 jack for autoguider":
    "用于自动导星器的 ST4 直通接口",
  "Password for your existing WiFi network":
    "您现有 WiFi 网络的密码",
  "Paste a":
    "粘贴一个",
  "Pause at home during flip":
    "中天翻转时在原点暂停",
  "Per Config.h: OFF disables limits until an unpark goto or a sync; ON enables them at startup (the defaults file adds \"if date/time are set\"). The stock E4 Config.h ships OFF.":
    "根据 Config.h：OFF 会禁用限位，直到执行一次解除停放的 GOTO 或同步；ON 则在启动时启用（默认值文件补充说明「如果已设置日期/时间」）。原厂 E4 Config.h 默认为 OFF。",
  "Periodic Error Correction (PEC) compensates for worm-gear imperfections. OnStepX learns the error pattern over one worm rotation and applies real-time correction. Requires a sensor to detect the worm index pulse.":
    "周期误差校正（PEC）用于补偿蜗轮蜗杆的缺陷。OnStepX 在蜗杆转动一周的过程中学习误差规律，并实时施加校正。需要一个传感器来检测蜗杆索引脉冲。",
  "Periodic error correction with Hall sensor":
    "使用霍尔传感器的周期误差校正",
  "Persist auto-sync setting across power cycles":
    "断电重启后保留自动同步设置",
  "Pick":
    "选择",
  "Pick a PINMAP first.":
    "请先选择 PINMAP。",
  "Picking an upstream version":
    "选择上游版本",
  "Picking an upstream version (Source ref)":
    "选择上游版本（Source ref）",
  "Piece by piece:":
    "逐项说明：",
  "Pier Side & Alignment":
    "镜筒侧（Pier Side）与校准",
  "Pin / Header":
    "引脚 / 排针",
  "Pin Header Quick Reference":
    "排针速查",
  "Pin sharing:":
    "引脚共用：",
  "Pin#":
    "引脚号",
  "Pinmap & Overview":
    "引脚映射与概览",
  "Pins.FYSETC_E4.h defines SPARE_RX_PIN as OFF in both TMC-UART branches":
    "Pins.FYSETC_E4.h 在两个 TMC-UART 分支中都将 SPARE_RX_PIN 定义为 OFF",
  "Place the":
    "安装",
  "Platform":
    "平台",
  "Platform Rate Limits (minimum μs/step) —":
    "平台速率限制（最小 μs/步）——",
  "Plug":
    "插头",
  "Plug in the motors":
    "连接电机",
  "Plug the Teensy into USB.":
    "将 Teensy 插入 USB。",
  "Plugins live in their own repo —":
    "插件位于独立的仓库中——",
  "Plugins that need extras":
    "需要额外组件的插件",
  "Port":
    "端口",
  "Power":
    "电源",
  "Power / regulator":
    "电源 / 稳压器",
  "Power LED":
    "电源 LED",
  "Power LED — Power-on indicator LED":
    "电源 LED——上电指示灯",
  "Power off after movement stops":
    "运动停止后断电",
  "Power off after stop":
    "停止后断电",
  "Power off the board.":
    "关闭主板电源。",
  "Power off, connect":
    "断电，连接",
  "Power on via USB — the board comes up as":
    "通过 USB 上电——主板会显示为",
  "Power on, connect to the \"OnStepX\" WiFi → 192.168.0.1, and test that one axis before adding the rest.":
    "上电，连接到「OnStepX」WiFi → 192.168.0.1，先测试这一个轴，再接其余的。",
  "Power supply":
    "电源",
  "Power the sensor from 5V (the E4 has no 3.3V pin). A bare open-collector sensor needs no divider; a KY-003 module (own 5V pull-up) needs 1kΩ series + 2kΩ to GND.":
    "用 5V 给传感器供电（E4 没有 3.3V 引脚）。裸的开集输出传感器无需分压；KY-003 模块（自带 5V 上拉）需要 1kΩ 串联 + 2kΩ 接 GND。",
  "Power up: the ESP creates the":
    "上电：ESP 会创建",
  "Power-cycle once after the first boot":
    "首次启动后断电重启一次",
  "Powering the board with the u.FL antenna disconnected can damage the ESP32 RF amplifier; on-board-antenna boards simply have short range.":
    "在 u.FL 天线断开时给主板上电可能损坏 ESP32 的射频放大器；板载天线的主板只是通信距离较短。",
  "Preferred pier side":
    "首选镜筒侧",
  "Press the white program button on the Teensy — it flashes and reboots automatically.":
    "按下 Teensy 上的白色编程按钮——它会自动烧录并重启。",
  "Privacy":
    "隐私",
  "Privacy & what gets logged":
    "隐私与日志记录内容",
  "Progress streams to the flash log; the Teensy reboots into the new firmware when it's done. Typical time: 3–8 seconds.":
    "进度会实时显示在烧录日志中；完成后 Teensy 会重启进入新固件。通常耗时：3–8 秒。",
  "Progress streams to the flash log; the board reboots into OnStepX when done.":
    "进度会实时显示在烧录日志中；完成后主板会重启进入 OnStepX。",
  "Project selector":
    "项目选择器",
  "Prometheus-compatible metrics endpoint for debugging / monitoring.":
    "兼容 Prometheus 的指标端点，用于调试/监控。",
  "Provides UTC time, latitude, longitude via NMEA sentences. OnStepX parses $GPGGA and $GPRMC automatically at 1Hz.":
    "通过 NMEA 语句提供 UTC 时间、纬度、经度。OnStepX 以 1Hz 自动解析 $GPGGA 和 $GPRMC。",
  "Pulley/Belt Reduction":
    "皮带轮/皮带减速比",
  "Purpose":
    "用途",
  "Put the board in bootloader mode (see":
    "让主板进入引导程序（bootloader）模式（参见",
  "Quick Start — First Time Setup":
    "快速入门——首次设置",
  "Quick start — board to firmware in 8 steps":
    "快速入门——8 步从主板到固件",
  "Quick-reference shopping list of sensors, actuators and components compatible with the FYSETC E4. Use the configurator's own":
    "与 FYSETC E4 兼容的传感器、执行器和元件速查采购清单。使用配置器自带的",
  "Quiet operation":
    "静音运行",
  "RA/Azm direction":
    "RA/Azm 方向",
  "RA/Azm step":
    "RA/Azm 步进",
  "RTC for timekeeping":
    "用于计时的 RTC",
  "RTC — DS3231 Real-Time Clock":
    "RTC——DS3231 实时时钟",
  "Ra/Azm — Right-Ascension / Azimuth stepper":
    "Ra/Azm——赤经/方位步进电机",
  "Raise IRUN toward the motor rating (within thermal limits); confirm UART current actually applied (driver status page).":
    "将 IRUN 提高至接近电机额定电流（在散热允许范围内）；确认 UART 电流确实已生效（驱动器状态页）。",
  "Range too short?":
    "通信距离太短？",
  "Rate limit hit":
    "已达到速率限制",
  "Re-flash with \"Erase All Flash\" enabled, using ESP32 board package v2.0.17.":
    "启用「Erase All Flash」后重新烧录，使用 ESP32 开发板包 v2.0.17。",
  "Recompile & flash. The page is then served at":
    "重新编译并烧录。之后页面地址为",
  "Recording:":
    "录制：",
  "Reduce IRUN/IHOLD in Config.h (start at ~30-50% of motor rated current).":
    "在 Config.h 中降低 IRUN/IHOLD（从电机额定电流的约 30-50% 开始）。",
  "Reference build proving this config compiles against current OnStepX:":
    "证明此配置可在当前 OnStepX 上编译通过的参考构建：",
  "Reference wiki:":
    "参考 Wiki：",
  "Reference wikis:":
    "参考 Wiki：",
  "Register it in":
    "将其注册到",
  "Remember across power cycles":
    "断电后保持记忆",
  "Remember auto flip setting":
    "记住自动翻转设置",
  "Remember brightness across power cycles":
    "断电后保持亮度设置",
  "Remember buzzer setting":
    "记住蜂鸣器设置",
  "Remember compensation setting":
    "记住补偿设置",
  "Remember coords across power cycles (needs FRAM)":
    "断电后保持坐标记忆（需要 FRAM）",
  "Remember pause setting":
    "记住暂停设置",
  "Remember pier side setting":
    "记住镜筒侧（pier side）设置",
  "Remember slew rate":
    "记住快速转动速率",
  "Remember: remove the factory jumper caps (SDA↔M-RX, SCL↔M-TX, xDIAG-EN) and fit only the GPIO15 → M-TX wire. 12V recommended (24V dew heaters run at 4× power). Two E4 versions exist (internal ceramic vs external IPEX antenna) — both work identically.":
    "注意：拆下出厂跳线帽（SDA↔M-RX、SCL↔M-TX、xDIAG-EN），只接一根 GPIO15 → M-TX 的跳线。推荐使用 12V（24V 下除露加热带以 4× 功率运行）。E4 有两个版本（内置陶瓷天线与外置 IPEX 天线）——两者工作方式完全相同。",
  "Remove the Marlin jumper caps (SDA↔M-RX, SCL↔M-TX, xDIAG-EN) before use and ignore the board's Marlin heater wiring notes — OnStepX drives these pins directly.":
    "使用前拆下 Marlin 跳线帽（SDA↔M-RX、SCL↔M-TX、xDIAG-EN），并忽略主板上 Marlin 加热器的接线说明——OnStepX 直接驱动这些引脚。",
  "Remove the SDA↔M-RX and SCL↔M-TX caps and the three xDIAG-EN caps.":
    "拆下 SDA↔M-RX 和 SCL↔M-TX 跳线帽，以及三个 xDIAG-EN 跳线帽。",
  "Remove the factory jumper caps":
    "拆下出厂跳线帽",
  "Remove the factory jumper caps (SDA↔M-RX, SCL↔M-TX, xDIAG-EN); wire the Z-min pin of ZDIAG-EN (GPIO15) to M-TX":
    "拆下出厂跳线帽（SDA↔M-RX、SCL↔M-TX、xDIAG-EN）；将 ZDIAG-EN 的 Z-min 引脚（GPIO15）连到 M-TX",
  "Remove the power-on LED from DS3231 modules to cut idle current.":
    "拆掉 DS3231 模块上的电源指示 LED，以降低待机电流。",
  "Remove the single centre SMD filter capacitor beside the X-MIN pins — the two outer parts are resistors, leave them. No-modification alternative: the I2C header (GPS TX → SDA/GPIO21, SERIAL_GPS Serial2, SERIAL_GPS_RX 21, SERIAL_GPS_TX 22) when no DS3231/BME280 is fitted. Config: TIME_LOCATION_SOURCE GPS, SERIAL_GPS_BAUD 9600.":
    "拆掉 X-MIN 引脚旁中间那一颗贴片滤波电容——外侧两颗是电阻，保留不动。免改装替代方案：在未安装 DS3231/BME280 时使用 I2C 排针（GPS TX → SDA/GPIO21，SERIAL_GPS Serial2，SERIAL_GPS_RX 21，SERIAL_GPS_TX 22）。配置：TIME_LOCATION_SOURCE GPS，SERIAL_GPS_BAUD 9600。",
  "Req'd":
    "必填",
  "Required (compile will fail without these)":
    "必填（缺少这些将编译失败）",
  "Required fields":
    "必填字段",
  "Required — the E4 pinmap assigns no GPS port":
    "必需——E4 引脚映射未分配任何 GPS 端口",
  "Requires Makuna RTC Library v2.3.5.":
    "需要 Makuna RTC 库 v2.3.5。",
  "Reset btn":
    "复位键",
  "Reset btn — External reset button":
    "复位键——外部复位按钮",
  "Reset button on UI (FWU option exposes the STM32 bootloader pin)":
    "界面上的复位按钮（FWU 选项会引出 STM32 引导加载程序引脚）",
  "Resolve Issues or Override to Compile":
    "请解决问题或强制编译",
  "Restart Arduino IDE after removing the conflicting library.":
    "移除冲突的库后重启 Arduino IDE。",
  "Restore pointing model from NV":
    "从 NV 恢复指向模型",
  "Restores where the mount was pointing after a power cycle. Default OFF. Uses NV storage, not the RTC — but it writes often, so FRAM is kinder than flash-backed EEPROM":
    "断电重启后恢复支架原先的指向。默认 OFF。使用 NV 存储而非 RTC——但写入频繁，因此 FRAM 比基于闪存模拟的 EEPROM 更耐用",
  "Reticle — Illuminated reticle lamp":
    "Reticle——照明分划板灯",
  "Reverse direction":
    "反转方向",
  "Reverse direction if needed":
    "如有需要请反转方向",
  "Reverse movement direction":
    "反转运动方向",
  "Reverse the affected axis in Config.h: toggle AXIS1_DRIVER_REVERSE / AXIS2_DRIVER_REVERSE.":
    "在 Config.h 中反转相应的轴：切换 AXIS1_DRIVER_REVERSE / AXIS2_DRIVER_REVERSE。",
  "Ring":
    "环（Ring）",
  "Rising edge = index pulse detected":
    "上升沿 = 检测到索引脉冲",
  "Root cause:":
    "根本原因：",
  "Rotator":
    "旋转器",
  "Rotator (Axis3)":
    "旋转器（Axis3）",
  "Rotator / Field De-Rotator":
    "旋转器 / 视场消旋器",
  "Rotator / Focuser":
    "旋转器 / 调焦器",
  "Rotator off — MOT-Z goes to Focuser2":
    "关闭旋转器——MOT-Z 改用于 Focuser2",
  "Route A — add a SmartWebServer ESP module (classic OnStep way):":
    "方案 A——添加 SmartWebServer ESP 模块（经典 OnStep 方式）：",
  "Route B — the OnStepX website plugin (for ESP-based boards like the E4):":
    "方案 B——OnStepX 的 website 插件（适用于 E4 等基于 ESP 的主板）：",
  "Rule of thumb:":
    "经验法则：",
  "Run":
    "运行",
  "Run current (mA)":
    "运行电流（mA）",
  "Runs entirely in your browser. The HTML/CSS/JavaScript was served by GitHub Pages when you loaded the tab, and from then on everything is local — even the Config.h generation and the browser-based flasher. The page never phones home just for you being here.":
    "完全在您的浏览器中运行。HTML/CSS/JavaScript 在您打开此标签页时由 GitHub Pages 提供，此后一切都在本地进行——包括 Config.h 的生成和基于浏览器的烧录工具。页面不会仅因为您的访问而向外发送任何信息。",
  "SCL for RTC, BME280, etc.":
    "用于 RTC、BME280 等的 SCL",
  "SD - MicroSD card slot":
    "SD - MicroSD 卡槽",
  "SDA for RTC, BME280, etc.":
    "用于 RTC、BME280 等的 SDA",
  "SERIAL_RADIO is a single choice. Do not run WIFI_ACCESS_POINT and WIFI_STATION at the same time on the E4 — it is a known cause of dropped connections.":
    "SERIAL_RADIO 只能选择一种。不要在 E4 上同时运行 WIFI_ACCESS_POINT 和 WIFI_STATION——这是已知的连接中断原因。",
  "SERIAL_ST4 (synchronous via ST4 port)":
    "SERIAL_ST4（通过 ST4 端口同步）",
  "SERVO_EE — DC servo, dual PWM (enable/enable)":
    "SERVO_EE——直流伺服，双路 PWM（enable/enable）",
  "SERVO_PE — DC servo, phase + enable PWM":
    "SERVO_PE——直流伺服，相位 + 使能 PWM",
  "SERVO_TMC2209 — closed-loop TMC2209 (VACTUAL)":
    "SERVO_TMC2209——闭环 TMC2209（VACTUAL）",
  "SERVO_TMC5160 — closed-loop TMC5160 (VMAX)":
    "SERVO_TMC5160——闭环 TMC5160（VMAX）",
  "SH1106 (1.3\" I2C, common)":
    "SH1106（1.3\" I2C，常见）",
  "SHC / SWS modes do":
    "SHC / SWS 模式",
  "SHC builds — pick the MCU in your hand controller":
    "SHC 构建——选择您手控器中的 MCU",
  "SQUARE — best signal integrity (required for Teensy 4.x)":
    "SQUARE——最佳信号完整性（Teensy 4.x 必需）",
  "SSD1306 (0.96\" I2C)":
    "SSD1306（0.96\" I2C）",
  "SSD1309 (1.54\" / 2.3\" I2C)":
    "SSD1309（1.54\" / 2.3\" I2C）",
  "ST4 Interface":
    "ST4 接口",
  "ST4 guide interface":
    "ST4 导星接口",
  "STA_PASSWORD — replace with your real WiFi password.":
    "STA_PASSWORD——替换为您真实的 WiFi 密码。",
  "STA_SSID — the router/hotspot to join.":
    "STA_SSID——要加入的路由器/热点。",
  "STM32 DFU flash":
    "STM32 DFU 烧录",
  "STM32F411. Pinmap is wired for TMC SPI drivers (shared MOSI/SCK/MISO bus). All axes use TMC2130 (TMC5160 also works — swap the #define).":
    "STM32F411。该引脚映射按 TMC SPI 驱动器接线（共享 MOSI/SCK/MISO 总线）。所有轴均使用 TMC2130（TMC5160 也可用——修改 #define 即可）。",
  "STM32F446VE, 6-axis 3D-printer board, V2.0 connector layout. ⚠ Per the OnStep wiki: only TMC2130 / TMC5160 (SPI), LV8729 or S109 are supported here — TMC2208 / TMC2209 / TMC2226 UART steppers will NOT work on this board. Defaults assume TMC2130 SPI. Flash via WebUSB DFU (BOOT0 jumper + reset).":
    "STM32F446VE，6 轴 3D 打印机主板，V2.0 接口布局。⚠ 根据 OnStep wiki：此处仅支持 TMC2130 / TMC5160（SPI）、LV8729 或 S109——TMC2208 / TMC2209 / TMC2226 UART 驱动器在此主板上无法工作。默认值假定为 TMC2130 SPI。通过 WebUSB DFU 烧录（BOOT0 跳线 + 复位）。",
  "STM32F446VE, 6-axis 3D-printer board. ⚠ Per the OnStep wiki: only TMC2130 / TMC5160 (SPI), LV8729 or S109 are supported here — TMC2208 / TMC2209 / TMC2226 UART steppers will NOT work on this board. Defaults assume TMC2130 SPI on all stepper sticks. Flash via WebUSB DFU (BOOT0 jumper + reset).":
    "STM32F446VE，6 轴 3D 打印机主板。⚠ 根据 OnStep wiki：此处仅支持 TMC2130 / TMC5160（SPI）、LV8729 或 S109——TMC2208 / TMC2209 / TMC2226 UART 驱动器在此主板上无法工作。默认值假定所有驱动模块均为 TMC2130 SPI。通过 WebUSB DFU 烧录（BOOT0 跳线 + 复位）。",
  "SWS IP when in AP mode. Emitted as":
    "AP 模式下的 SWS IP。输出格式为",
  "SWS builds — pick the MCU hosting the web server":
    "SWS 构建——选择承载 Web 服务器的 MCU",
  "SWS cannot talk to OnStepX over serial — often an ESP32 library version mismatch.":
    "SWS 无法通过串口与 OnStepX 通信——通常是 ESP32 库版本不匹配。",
  "Same":
    "相同",
  "Same as above":
    "同上",
  "Same, at supply voltage — use 2.2kΩ at 12V, 4.7kΩ at 24V":
    "同上，但接电源电压——12V 时用 2.2kΩ，24V 时用 4.7kΩ",
  "Search features, pins, directives…":
    "搜索功能、引脚、指令…",
  "Search the E4 guide":
    "搜索 E4 指南",
  "Second Focuser (Axis5)":
    "第二调焦器（Axis5）",
  "Second channel = THERMISTOR2.":
    "第二通道 = THERMISTOR2。",
  "Seconds of PEC buffer":
    "PEC 缓冲区秒数",
  "Secret-looking values":
    "疑似机密的值",
  "Select board:":
    "选择主板：",
  "Selects E4 pin layout":
    "选择 E4 引脚布局",
  "Sensor":
    "传感器",
  "Sensor Steps/Degree (pixels)":
    "传感器每度步数（像素）",
  "Sensors & Aux":
    "传感器与辅助",
  "Separate SmartWebServer board":
    "独立的 SmartWebServer 主板",
  "Serial":
    "串口",
  "Serial (USB CDC)":
    "串口（USB CDC）",
  "Serial A baud rate":
    "串口 A 波特率",
  "Serial B baud rate":
    "串口 B 波特率",
  "Serial Bluetooth Config":
    "串口蓝牙配置",
  "Serial C baud rate":
    "串口 C 波特率",
  "Serial D baud rate":
    "串口 D 波特率",
  "Serial E baud rate":
    "串口 E 波特率",
  "Serial Ports":
    "串口",
  "Serial baud rates — 9600 on":
    "串口波特率——9600 用于",
  "Serial link to OnStep":
    "与 OnStep 的串口连接",
  "Serial1 (UART1)":
    "Serial1（UART1）",
  "Serial2 (UART2)":
    "Serial2（UART2）",
  "Served by OnStepX itself via the lightweight":
    "由 OnStepX 自身通过轻量级",
  "Set \"Erase All Flash Before Sketch Upload\" to Enabled for first-time flashing.":
    "首次烧录时将「Erase All Flash Before Sketch Upload」设为 Enabled。",
  "Set ALIGN_AUTO_HOME to OFF if you have no home switches.":
    "如果没有原点开关，请将 ALIGN_AUTO_HOME 设为 OFF。",
  "Set DEBUG VERBOSE plus FEATURE1_TEMP DS1820, flash, and read the serial numbers off the serial monitor — then assign each sensor by its own 64-bit serial. (There is no FEATURE_LIST_DS directive in OnStepX.)":
    "设置 DEBUG VERBOSE 以及 FEATURE1_TEMP DS1820，烧录后从串口监视器读取序列号——然后按各自的 64 位序列号分配每个传感器。（OnStepX 中没有 FEATURE_LIST_DS 指令。）",
  "Set MFLIP_SKIP_HOME to ON for gotos without visiting home.":
    "将 MFLIP_SKIP_HOME 设为 ON，自动寻星时不经过原点。",
  "Set PEC_SENSE to HIGH for Hall sensors.":
    "霍尔传感器请将 PEC_SENSE 设为 HIGH。",
  "Set SERIAL_B_BAUD_DEFAULT to 230400.":
    "将 SERIAL_B_BAUD_DEFAULT 设为 230400。",
  "Set static IP 192.168.0.x / 255.255.255.0 / gw 192.168.0.1.":
    "设置静态 IP 192.168.0.x / 255.255.255.0 / 网关 192.168.0.1。",
  "Set the board's switch to the ESP32 position":
    "将主板上的开关拨到 ESP32 位置",
  "Set the slew speed to ~5°/sec — slower than that errored out for one user, faster also failed.":
    "将快速转动速度设为约 5°/秒——有用户设得更慢时出错，更快也会失败。",
  "Set to 10000 (10kΩ) for extended sub-zero range":
    "设为 10000（10kΩ）以扩展零下温度范围",
  "Set to HIGH if GPS has PPS output":
    "如果 GPS 有 PPS 输出则设为 HIGH",
  "Setting":
    "设置",
  "Settings (UTC offset, park position) are not saved across a power cycle":
    "设置（UTC 偏移、停放位置）在断电后不会保存",
  "Settings stored in NV are not migrated — expect to redo date/time, site and alignment.":
    "存储在 NV 中的设置不会迁移——需要重新设置日期/时间、地点和校准。",
  "Shared I2C bus:":
    "共享 I2C 总线：",
  "Shared bus:":
    "共享总线：",
  "Shared enable for all stepper drivers":
    "所有步进驱动器共用的使能",
  "Shared with Axis5":
    "与 Axis5 共用",
  "Short tip→sleeve = shutter. Short ring→sleeve = focus.":
    "短接尖端→套筒 = 快门。短接环→套筒 = 对焦。",
  "Shortcut:":
    "快捷方式：",
  "Show ESP32 internal temp":
    "显示 ESP32 内部温度",
  "Show MCU internal temperature":
    "显示 MCU 内部温度",
  "Show ambient conditions (temp / pressure / humidity)":
    "显示环境条件（温度 / 气压 / 湿度）",
  "Show coordinate-origin tile on Mount page":
    "在支架页面显示坐标原点卡片",
  "Show dew point & humidity in the SWS web UI":
    "在 SWS 网页界面显示露点和湿度",
  "Show temp/humidity/pressure on SWS":
    "在 SWS 上显示温度/湿度/气压",
  "Show weather (temp/pressure/humidity) in display rotation":
    "在显示轮播中显示天气（温度/气压/湿度）",
  "Shutter":
    "快门",
  "Single 12–24V supply also feeds the heater outputs":
    "单一 12–24V 电源同时为加热输出供电",
  "Six hex bytes for the W5100/W5500 Ethernet shield. Ignored in WIFI mode.":
    "用于 W5100/W5500 以太网扩展板的六个十六进制字节。WIFI 模式下忽略。",
  "Skip final goto phase for alignment stars":
    "跳过校准星的最终自动寻星阶段",
  "Skip home during meridian flip":
    "中天翻转时跳过原点",
  "Sleeve":
    "套筒（Sleeve）",
  "Sleeve is ground, as on every brand here. Many modern Sony bodies use Multi-terminal (USB) instead of a 2.5mm jack — check the manual.":
    "套筒（Sleeve）接地，这里的所有品牌都一样。许多较新的 Sony 机身使用 Multi-terminal（USB）而非 2.5mm 插孔——请查阅说明书。",
  "Sleeve is ground. Fuji RR-90 bodies use micro-USB, not the 2.5mm jack — verify yours.":
    "套筒（Sleeve）接地。使用 RR-90 的 Fuji 机身采用 micro-USB，而非 2.5mm 插孔——请核实您的机身。",
  "Slew Rate & Timing Calculator":
    "快速转动速率与时序计算器",
  "Slew speed too high for the deceleration ASIAIR expects; the axis decelerates then halts abruptly like hitting a limit.":
    "快速转动速度过高，超出 ASIAIR 预期的减速能力；轴减速后突然停止，就像碰到了限位。",
  "Slowest (0.5x)":
    "最慢（0.5x）",
  "SmartHandController (Hand pendant firmware)":
    "SmartHandController（手控器固件）",
  "SmartHandController Configuration Generator":
    "SmartHandController 配置生成器",
  "SmartHandController and SmartWebServer don't use a plugin system — the OnStepX plugins box is hidden in those modes, and you can skip ahead to the next section.":
    "SmartHandController 和 SmartWebServer 不使用插件系统——在这两种模式下 OnStepX 插件区会被隐藏，您可以直接跳到下一节。",
  "SmartWebServer (Web UI & WiFi bridge firmware)":
    "SmartWebServer（网页界面与 WiFi 桥接固件）",
  "SmartWebServer Configuration Generator":
    "SmartWebServer 配置生成器",
  "SmartWebServer admin password (PASSWORD_DEFAULT). The lightweight plugin has no login.":
    "SmartWebServer 管理员密码（PASSWORD_DEFAULT）。轻量级插件没有登录功能。",
  "SmartWebServer bridges TCP/IP ↔ the controller's serial port.":
    "SmartWebServer 在 TCP/IP ↔ 控制器串口之间进行桥接。",
  "SmartWebServer mode":
    "SmartWebServer 模式",
  "Solutions:":
    "解决方法：",
  "Some E4 boards have bootloader timing issues with the auto-reset method used by Arduino IDE.":
    "部分 E4 主板在 Arduino IDE 使用的自动复位方式下存在引导加载程序时序问题。",
  "Source ref":
    "源代码引用",
  "Source ref stays on":
    "源代码引用保持为",
  "Source:":
    "来源：",
  "Source: discussions #66613, #66616.":
    "来源：讨论 #66613、#66616。",
  "Source: discussions #68360, #68365, #68438, #68563.":
    "来源：讨论 #68360、#68365、#68438、#68563。",
  "Source: discussions #68361, #68795.":
    "来源：讨论 #68361、#68795。",
  "Specifications":
    "规格",
  "Specs":
    "规格",
  "Speed":
    "速度",
  "Stand-alone 2-axis OnStep controller designed for a small aluminium project box. Runs on Teensy 3.2 (moderately fast) or Teensy 4.0 (very fast — pick teensy40 on the Compile tab). Works with most StepStick drivers (DRV8825 / A4988 / LV8729), plus TMC2130 and TMC5160. Defaults below assume DRV8825 step-sticks; override AXIS_DRIVER_MODEL for TMC. Onboard WeMos D1 Mini header for WiFi.":
    "独立的双轴 OnStep 控制器，专为小型铝制工程盒设计。运行于 Teensy 3.2（速度中等）或 Teensy 4.0（非常快——在编译标签页选择 teensy40）。兼容大多数 StepStick 驱动器（DRV8825 / A4988 / LV8729），以及 TMC2130 和 TMC5160。以下默认值假定使用 DRV8825 驱动模块；使用 TMC 时请修改 AXIS_DRIVER_MODEL。板载 WeMos D1 Mini 排针用于 WiFi。",
  "Standard NTC 100kΩ glass-bead thermistors (beta 3950). The onboard 4.7kΩ series resistor and the NTC form a voltage divider read by the ESP32 ADC.":
    "标准 NTC 100kΩ 玻璃珠热敏电阻（beta 3950）。板载 4.7kΩ 串联电阻与 NTC 组成分压器，由 ESP32 ADC 读取。",
  "Standard config: -10°C to +85°C. For sub-freezing, add THERMISTOR_RPARALLEL 10000 (10kΩ) to extend down to -20°C.":
    "标准配置：-10°C 至 +85°C。如需零下使用，添加 THERMISTOR_RPARALLEL 10000（10kΩ）可扩展至 -20°C。",
  "Standard mechanical microswitches (e.g. Omron D2F, D2MV) provide reliable homing. Normally-open (NO) to GND is recommended for failsafe operation.":
    "标准机械微动开关（如 Omron D2F、D2MV）可提供可靠的归原点。推荐使用常开（NO）接 GND，以实现故障安全。",
  "Stars":
    "星数",
  "Start with buzzer enabled":
    "启动时启用蜂鸣器",
  "Start with tracking enabled":
    "启动时启用跟踪",
  "Startup baud used to talk to OnStep":
    "与 OnStep 通信的启动波特率",
  "Startup state — OFF, or 0–255 for a fixed PWM level":
    "启动状态——OFF，或 0–255 表示固定 PWM 电平",
  "Startup trust mode":
    "启动信任模式",
  "Static IP (optional)":
    "静态 IP（可选）",
  "Static IP — only used when STA_DHCP_ENABLED = false":
    "静态 IP——仅在 STA_DHCP_ENABLED = false 时使用",
  "Static gateway — only used when STA_DHCP_ENABLED = false":
    "静态网关——仅在 STA_DHCP_ENABLED = false 时使用",
  "Static subnet mask — only used when STA_DHCP_ENABLED = false":
    "静态子网掩码——仅在 STA_DHCP_ENABLED = false 时使用",
  "Station Mode (SWS joins your existing WiFi)":
    "Station 模式（SWS 加入您现有的 WiFi）",
  "Station mode (the board joins your existing WiFi)":
    "Station 模式（主板加入您现有的 WiFi）",
  "Status":
    "状态",
  "Status & Misc":
    "状态与杂项",
  "Status LED":
    "状态 LED",
  "Status LED on controller":
    "控制器上的状态 LED",
  "Status LED, buzzer, reticle, intervalometer":
    "状态 LED、蜂鸣器、分划板照明、间隔拍摄器",
  "Status/fault detection":
    "状态/故障检测",
  "Step Wave Form (for limit check)":
    "步进波形（用于限位检查）",
  "Step pulse waveform. Use SQUARE on long wiring or Teensy 4.x; PULSE squeezes more rate out of slower MCUs.":
    "步进脉冲波形。长距离接线或 Teensy 4.x 请使用 SQUARE；PULSE 可让较慢的 MCU 获得更高速率。",
  "Stepper Motor Overheating — UART Current Fix":
    "步进电机过热——UART 电流修正",
  "Stepper Motors & Drivers":
    "步进电机与驱动器",
  "Stepper motor steps":
    "步进电机步数",
  "Stepper motors run very hot (overheating)":
    "步进电机非常烫（过热）",
  "Steps (AP mode):":
    "步骤（AP 模式）：",
  "Steps per degree (use Calculator)":
    "每度步数（使用计算器）",
  "Steps per micrometer":
    "每微米步数",
  "Steps/degree defaults (7680) are for the":
    "每度步数默认值（7680）适用于",
  "Steps/° for Axis1":
    "Axis1 每度步数",
  "Steps/° for Axis1 (Axis2 too) — a placeholder, you MUST set this for your gearing (Calculator tab)":
    "Axis1（以及 Axis2）每度步数——占位值，您必须根据自己的传动比设置（计算器标签页）",
  "Stick with 12V unless you have a specific reason for 24V.":
    "除非有特别理由使用 24V，否则请保持 12V。",
  "Stock drivers are":
    "原装驱动器为",
  "Stock value. OFF = limits off until an unpark goto or sync; ON = armed at startup":
    "原厂值。OFF = 限位在解除停放的自动寻星或同步之前不生效；ON = 启动时即启用",
  "Strip everything: only":
    "全部拆除：仅保留",
  "Sub-zero mod:":
    "零下改装：",
  "Subnet mask":
    "子网掩码",
  "Supports both rotator (field orientation) and Alt-Az de-rotation. Steps per degree is typically much lower than mount axes.":
    "同时支持旋转器（视场方向）和地平式消旋。每度步数通常远低于支架各轴。",
  "Switched low-side output, not a logic pin":
    "开关式低边输出，不是逻辑引脚",
  "Sync can change pier side (GEM)":
    "同步可改变镜筒侧（GEM）",
  "TB - TB — Thermistor input 2":
    "TB - TB——热敏电阻输入 2",
  "TB NTC nominal resistance (10000 for a 10k NTC)":
    "TB NTC 标称阻值（10k NTC 填 10000）",
  "TB beta coefficient (datasheet value)":
    "TB beta 系数（数据手册值）",
  "TB feedback for Dew Heater 2":
    "除露加热带 2 的 TB 反馈",
  "TE - TE — Thermistor input 1 / PEC":
    "TE - TE——热敏电阻输入 1 / PEC",
  "TE feedback for Dew Heater 1":
    "除露加热带 1 的 TE 反馈",
  "TMC driver":
    "TMC 驱动器",
  "TMC driver microstep mode for tracking":
    "跟踪时的 TMC 驱动器细分模式",
  "TMC1 Ra/Azm - Axis1 (Ra/Azm) stepper driver — TMC2209 UART":
    "TMC1 Ra/Azm - Axis1（赤经/方位）步进驱动器——TMC2209 UART",
  "TMC2 DEC - Axis2 (DEC/Alt) stepper driver — TMC2209 UART":
    "TMC2 DEC - Axis2（赤纬/高度）步进驱动器——TMC2209 UART",
  "TMC2100 — standalone only (spreadCycle, max 16x)":
    "TMC2100——仅独立模式（spreadCycle，最大 16x）",
  "TMC2130S — standalone TMC2130 (step/dir, no SPI)":
    "TMC2130S——独立模式 TMC2130（step/dir，无 SPI）",
  "TMC2208 (UART) ⚠ legacy — no stall detect":
    "TMC2208（UART）⚠ 旧款——无失步检测",
  "TMC2208S — standalone TMC2208 (step/dir, no UART)":
    "TMC2208S——独立模式 TMC2208（step/dir，无 UART）",
  "TMC2209 (UART) — recommended":
    "TMC2209（UART）——推荐",
  "TMC2209S — standalone TMC2209 (step/dir, no UART)":
    "TMC2209S——独立模式 TMC2209（step/dir，无 UART）",
  "TMC2225 \"Dual V2\" modules strapped standalone":
    "TMC2225 \"Dual V2\" 模块，以独立模式跳线配置",
  "TMC2225 (UART) ⚠ legacy — no stall detect":
    "TMC2225（UART）⚠ 旧款——无失步检测",
  "TMC2225S — standalone TMC2225 (Terrans V5 Pro stock)":
    "TMC2225S——独立模式 TMC2225（Terrans V5 Pro 原装）",
  "TMC2226 (UART) — SMD equiv. of TMC2209":
    "TMC2226（UART）——TMC2209 的贴片等效型号",
  "TMC2226S — standalone TMC2226 (step/dir, no UART)":
    "TMC2226S——独立模式 TMC2226（step/dir，无 UART）",
  "TMC3 Rot/Foc2 - Axis3 rotator / Axis5 focuser2 — TMC2209 UART":
    "TMC3 Rot/Foc2 - Axis3 旋转器 / Axis5 调焦器2——TMC2209 UART",
  "TRS jack":
    "TRS 插孔",
  "Tap":
    "按一下",
  "Target MCU":
    "目标 MCU",
  "Teensy 3.2 / 4.0 / 4.1 flash":
    "Teensy 3.2 / 4.0 / 4.1 烧录",
  "Teensy 4.1. Pinmap is wired for 4× TMC2209 UART step drivers (Serial8, 460800 baud). All axes use TMC2209.":
    "Teensy 4.1。该引脚映射按 4× TMC2209 UART 步进驱动器接线（Serial8，460800 波特）。所有轴均使用 TMC2209。",
  "Teensy 4.x step waveform":
    "Teensy 4.x 步进波形",
  "Teensy Loader doesn't see my .hex":
    "Teensy Loader 找不到我的 .hex",
  "Temp, humidity, pressure for dew point":
    "用于计算露点的温度、湿度和气压",
  "Terrans Industry V5 Pro (ESP32) — ⚠ UNDER TEST / EN TEST":
    "Terrans Industry V5 Pro (ESP32) — ⚠ 测试中 / UNDER TEST",
  "Thanks to Chad for the original gearbox design 🙏":
    "感谢 Chad 提供最初的减速箱设计 🙏",
  "That's a lot of setup just to try the firmware once. This site replaces every step with a click.":
    "只为试一次固件就要做这么多准备。本网站把每一步都换成了一次点击。",
  "That's config, not firmware. Toggle":
    "这是配置问题，不是固件问题。请切换",
  "That's the source of truth — the Plugins.config.h block is the actual file the workflow used to build your firmware, copied straight out of your downloaded artifact.":
    "这才是权威依据——Plugins.config.h 区块就是工作流编译您固件时实际使用的文件，直接从您下载的构件中复制而来。",
  "The \"Source ref\" field resolves against the right upstream repo (":
    "「源引用」字段会解析到正确的上游仓库（",
  "The BME280 provides ambient temperature, humidity and barometric pressure over I2C. OnStepX uses it for dew-point calculation and weather display on the SWS web interface. Connect to the E4's dedicated I2C header.":
    "BME280 通过 I2C 提供环境温度、湿度和大气压。OnStepX 用它计算露点，并在 SWS 网页界面上显示天气信息。请连接到 E4 专用的 I2C 排针。",
  "The Celestron Dew Heater Ring thermistor is 10kΩ, not 100kΩ — set":
    "Celestron 除露加热环的热敏电阻是 10kΩ，而不是 100kΩ——请设置",
  "The Cloudflare Worker (the \"bridge\")":
    "Cloudflare Worker（「桥接器」）",
  "The Compile & Flash tab's MCU target list changes: SHC supports ESP32 / Teensy 4.0 / Teensy 3.2; OnStepX adds Teensy 4.1, STM32 BlackPill F411, and STM32F407 / BTT SKR PRO.":
    "「编译与烧录」选项卡中的 MCU 目标列表会随之变化：SHC 支持 ESP32 / Teensy 4.0 / Teensy 3.2；OnStepX 另外支持 Teensy 4.1、STM32 BlackPill F411 以及 STM32F407 / BTT SKR PRO。",
  "The Config.h you've generated will be sent to a GitHub Actions runner that clones the latest":
    "您生成的 Config.h 将被发送到一个 GitHub Actions 运行器，它会克隆最新的",
  "The E4 Config.h default enables WIFI_ACCESS_POINT mode — the board creates its own WiFi network for direct connection in the field, no router required.":
    "E4 的默认 Config.h 启用 WIFI_ACCESS_POINT 模式——主板会自建 WiFi 网络，便于在野外直接连接，无需路由器。",
  "The E4 already switches H1/H2 with onboard power MOSFETs. There is no IRLZ44N to source or wire; the strap lands straight on the terminal.":
    "E4 已通过板载功率 MOSFET 开关 H1/H2。无需采购或连接 IRLZ44N；加热带直接接到接线端子上。",
  "The E4 dew-heater outputs are designed for 12V; 24V also raises driver heat.":
    "E4 的除露加热输出按 12V 设计；使用 24V 还会增加驱动器发热。",
  "The E4 exposes two analog inputs — TE (GPIO36) and TB (GPIO39) — so you can run two independent temperature feeds (e.g. focuser on TE, dew strap on TB). Both sit on the ESP32 ADC1, which matters: ADC2 cannot be read while WiFi is active, and the E4 runs WiFi by default. Because TE/TB are ADC1, they keep working with WiFi on.":
    "E4 提供两路模拟输入——TE (GPIO36) 和 TB (GPIO39)——因此可以接入两路独立的温度信号（例如 TE 接调焦器，TB 接除露加热带）。两者都位于 ESP32 的 ADC1 上，这一点很重要：WiFi 工作时无法读取 ADC2，而 E4 默认启用 WiFi。由于 TE/TB 属于 ADC1，开启 WiFi 时它们照常工作。",
  "The E4 has a 4.7kΩ series resistor to 3.3V on each input. THERMISTORn_RSERIES must be 4700 or every reading is offset. If you change that resistor, update the directive to match.":
    "E4 每路输入都有一个接到 3.3V 的 4.7kΩ 串联电阻。THERMISTORn_RSERIES 必须设为 4700，否则每次读数都会有偏差。如果更换了该电阻，请相应修改此指令。",
  "The E4 has two dedicated heater outputs — HEAT_E0 / H1 (GPIO2) and HEAT_BED / H2 (GPIO4) — carried over from its 3D-printer origins. Each is a switched 12–24V power terminal driven by an onboard power MOSFET (the board's \"BED+Heater\" stage is rated ~15A total), so a dew-heater strap connects directly to the 2-pin screw terminal — no external MOSFET, gate resistor, or pull-down is needed. GPIO2/GPIO4 only drive the MOSFET gates. Controlled via the FEATURE system as DEW_HEATER type.":
    "E4 有两路专用加热输出——HEAT_E0 / H1 (GPIO2) 和 HEAT_BED / H2 (GPIO4)——沿袭自其 3D 打印机出身。每路都是由板载功率 MOSFET 驱动的 12–24V 开关电源端子（主板的「BED+Heater」级总额定约 15A），因此除露加热带可直接接到 2 针螺丝端子上——无需外部 MOSFET、栅极电阻或下拉电阻。GPIO2/GPIO4 只负责驱动 MOSFET 栅极。通过 FEATURE 系统以 DEW_HEATER 类型进行控制。",
  "The E4 has two thermistor inputs (TE and TB) with built-in 4.7kΩ pull-up resistors and 10µF filter caps. Used for focuser temperature compensation, dew-heater control or ambient monitoring (3.3V → 4.7kΩ → GPIO → NTC → GND).":
    "E4 有两路热敏电阻输入（TE 和 TB），内置 4.7kΩ 上拉电阻和 10µF 滤波电容。可用于调焦器温度补偿、除露加热控制或环境监测（3.3V → 4.7kΩ → GPIO → NTC → GND）。",
  "The E4 shares one 12–24V input across the motors and both heaters. Fuse the main supply appropriately so a shorted strap blows the fuse, not the board.":
    "E4 的电机和两路加热共用同一个 12–24V 输入。请为主电源配上合适的保险丝，这样加热带短路时熔断的是保险丝，而不是主板。",
  "The E4 ships set up for Marlin. Remove the two jumper caps that bridge the I2C and TMC UART headers (":
    "E4 出厂时按 Marlin 配置。请拔下桥接 I2C 与 TMC UART 排针的两个跳线帽（",
  "The E4's H1/H2 (HEAT_E0/HEAT_BED) outputs already have onboard power MOSFETs. No IRLZ44N, gate resistor, or pull-down to buy.":
    "E4 的 H1/H2（HEAT_E0/HEAT_BED）输出已带有板载功率 MOSFET。无需购买 IRLZ44N、栅极电阻或下拉电阻。",
  "The E4's own 2.4GHz WiFi interferes with the steppers, and one ESP32 shares motion + web server + radio, so position-page updates briefly starve the motion task.":
    "E4 自身的 2.4GHz WiFi 会干扰步进电机，而且运动控制、网页服务器和无线电共用同一颗 ESP32，因此位置页面更新时会短暂挤占运动任务。",
  "The ESP32 ADC is not perfectly linear (0–3.3V → 0–4095). OnStepX applies the Steinhart-Hart equation internally.":
    "ESP32 的 ADC 并非完全线性（0–3.3V → 0–4095）。OnStepX 内部会应用 Steinhart-Hart 方程。",
  "The ESP32 I2C pins are 3.3V; feeding 5V logic eventually destroys the inputs and can kill the board.":
    "ESP32 的 I2C 引脚是 3.3V 的；输入 5V 逻辑电平最终会损坏输入口，甚至可能烧毁主板。",
  "The ESP8266 is a separate flash, and you do not have to do it.":
    "ESP8266 需要单独烧录，而且并非必须。",
  "The FYSETC E4 is an ESP32-based 3D-printer controller repurposed for telescope control with OnStepX. It has 4× TMC2209 UART stepper drivers, built-in WiFi/BT, dew-heater outputs, thermistor inputs and I2C — all from a single 12–24V supply.":
    "FYSETC E4 是一款基于 ESP32 的 3D 打印机控制板，经改用后配合 OnStepX 控制望远镜。它带有 4 个 UART 模式的 TMC2209 步进驱动器、内置 WiFi/BT、除露加热输出、热敏电阻输入和 I2C——全部由单一 12–24V 电源供电。",
  "The GitHub Actions log.":
    "GitHub Actions 日志。",
  "The HTML control panel you open in a browser.":
    "您在浏览器中打开的 HTML 控制面板。",
  "The I2C bus is not communicating at all. On the E4 this is nearly always wiring, power or pull-ups rather than Config.h — the only I2C settings the firmware has are WEATHER and TIME_LOCATION_SOURCE; SDA/SCL come from the pinmap (GPIO21/22) and cannot be set wrongly.":
    "I2C 总线完全没有通信。在 E4 上，这几乎总是接线、供电或上拉电阻的问题，而不是 Config.h——固件中与 I2C 相关的设置只有 WEATHER 和 TIME_LOCATION_SOURCE；SDA/SCL 来自引脚映射（GPIO21/22），不可能设错。",
  "The I2C bus is taken by the GPS":
    "I2C 总线已被 GPS 占用",
  "The I2C header only has":
    "I2C 排针仅提供",
  "The OneWire bus allows multiple DS18B20 temperature sensors on a single wire. Up to 8 devices supported.":
    "OneWire 总线允许在一根线上挂接多个 DS18B20 温度传感器。最多支持 8 个设备。",
  "The Output tab shows the Config.h for the currently-selected firmware.":
    "「输出」选项卡显示当前所选固件的 Config.h。",
  "The SHC needs to talk to your OnStep/OnStepX mount controller. Pick whichever cabling matches your hardware.":
    "SHC 需要与您的 OnStep/OnStepX 支架控制器通信。请选择与您硬件匹配的连线方式。",
  "The TE connector has a built-in 4.7k pull-up — correct for open-collector sensors.":
    "TE 接口内置 4.7k 上拉电阻——适用于集电极开路传感器。",
  "The TMC UART is not reaching the drivers, so the Config.h currents never arrive. The E4's TMC2209s have their VREF pin unconnected, so without UART the current is uncontrolled.":
    "TMC UART 没有连到驱动器，因此 Config.h 中的电流设置从未生效。E4 上 TMC2209 的 VREF 引脚未连接，所以没有 UART 时电流不受控制。",
  "The Teensy isn't in HalfKay bootloader mode yet. Leave the browser dialog open and press the white program button on the Teensy — Chrome polls for new devices and it'll appear. This applies to 3.2, 4.0, 4.1, and MaxPCB4. If the picker still won't show it after the button press, the USB cable may be charge-only (try another).":
    "Teensy 尚未进入 HalfKay 引导程序模式。请保持浏览器对话框打开，并按下 Teensy 上的白色编程按钮——Chrome 会轮询新设备，它随后就会出现。这适用于 3.2、4.0、4.1 和 MaxPCB4。如果按下按钮后选择器中仍不显示，可能是 USB 线只能充电（请换一根试试）。",
  "The Z-MIN connector is opto-isolated — not usable":
    "Z-MIN 接口带光耦隔离——无法使用",
  "The actual 2.4 GHz WiFi + Bluetooth hardware.":
    "实际的 2.4 GHz WiFi + 蓝牙硬件。",
  "The big toggle at the top of the page picks which firmware you're building:":
    "页面顶部的大开关用于选择要构建的固件：",
  "The board is being partly powered through the USB 5V line; under load that rail sags and a motor misbehaves.":
    "主板部分由 USB 5V 线供电；负载下该电源轨电压下降，导致某个电机工作异常。",
  "The browser flasher":
    "浏览器烧录工具",
  "The bundling happens on a fresh ephemeral GitHub-hosted runner that's torn down the moment the workflow finishes. Nothing is committed back to a repo — not to the build-service repo, not to OnStepX, not to anywhere. The only persistent output is the firmware artifact, and (with the workflow change shipped alongside this help section) the":
    "打包过程在一个全新的临时 GitHub 托管运行器上进行，工作流结束后立即销毁。不会有任何内容提交回仓库——不会提交到 build-service 仓库，不会提交到 OnStepX，也不会提交到任何地方。唯一持久保留的输出是固件构件，以及（随本帮助章节一同发布的工作流改动之后）",
  "The camera body MUST be set to BULB. OnStep controls exposure duration via :CAn# (n = seconds).":
    "相机机身必须设为 BULB 模式。OnStep 通过 :CAn#（n = 秒）控制曝光时长。",
  "The command channel":
    "命令通道",
  "The compile log on this page prints":
    "构建进入队列后，本页的编译日志会打印",
  "The compile log on this page.":
    "本页的编译日志。",
  "The compiled firmware":
    "编译好的固件",
  "The configurator (this page)":
    "配置器（本页面）",
  "The configurator is broken / giving weird output":
    "配置器坏了 / 输出异常",
  "The configurator itself sends no analytics, no telemetry, no trackers. Nothing leaves your browser until you click Compile.":
    "配置器本身不发送任何统计数据、遥测信息或跟踪器。在您点击「编译」之前，没有任何数据离开您的浏览器。",
  "The configurator tabs change — you see Calculator/Axis/Mount in OnStepX mode, or Hand Controller / Communication / Sensors in SHC mode.":
    "配置器的选项卡会变化——OnStepX 模式下显示计算器/轴/支架，SHC 模式下显示手控器/通信/传感器。",
  "The default Config.h sets":
    "默认 Config.h 设置了",
  "The downloaded firmware zip.":
    "下载的固件 zip 文件。",
  "The firmware artifact couldn't be downloaded. Reload the page, re-compile, and watch for a":
    "固件构件无法下载。请重新加载页面并重新编译，同时留意是否出现一行",
  "The little":
    "字段名旁边的小",
  "The network you join from your phone/PC.":
    "您从手机/电脑加入的网络。",
  "The onboard 10µF cap gives steady ambient readings (~50ms). Keep it for dew/ambient sensing; remove it only when a focuser needs fast thermal response.":
    "板载 10µF 电容可让环境读数保持稳定（约 50ms）。用于除露/环境测量时请保留它；只有调焦器需要快速热响应时才拆除。",
  "The onboard filter cap works with the 4.7kΩ series resistor to slow the input (roughly 50ms with a 10µF part). That is harmless for ambient and dew sensing. Only if a focuser needs fast thermal response would you lift the cap next to that specific TE/TB input — meter it first, and note this is a different part from the one beside X-MIN.":
    "板载滤波电容与 4.7kΩ 串联电阻共同减缓输入响应（使用 10µF 电容时约 50ms）。这对环境和结露测量没有影响。只有当调焦器需要快速热响应时，才需要拆下该 TE/TB 输入旁的电容——请先用万用表确认，并注意它与 X-MIN 旁的元件不是同一个。",
  "The pin map is stock":
    "该引脚映射为原版",
  "The pinmap sets":
    "该引脚映射设置",
  "The preflight checklist":
    "预检清单",
  "The radio (ESP32)":
    "无线电（ESP32）",
  "The repo":
    "仓库",
  "The rotator (Axis3) controls a camera rotator or field de-rotator for Alt-Az mounts. Shares STEP/DIR pins with Axis5 (focuser 2).":
    "旋转器（Axis3）用于控制相机旋转器或地平式支架的视场消旋器。与 Axis5（调焦器 2）共用 STEP/DIR 引脚。",
  "The settings you actually have to change":
    "真正需要修改的设置",
  "The simpler alternative: before flashing, click":
    "更简单的做法：烧录前，点击",
  "The site owner hasn't deployed the Cloudflare Worker, or":
    "站点所有者尚未部署 Cloudflare Worker，或者",
  "The terminal outputs your full input voltage. Run a 12V strap on a 12V supply. If the board runs at 24V, use 24V-rated tape or cap the duty via FEATUREn_VALUE_LIMIT — 24V into 12V tape is ~4× the rated power.":
    "该端子输出的是您的全部输入电压。12V 加热带请配 12V 电源。如果主板使用 24V，请使用额定 24V 的加热带，或通过 FEATUREn_VALUE_LIMIT 限制占空比——24V 接到 12V 加热带上约为额定功率的 4 倍。",
  "The three firmwares run on":
    "这三种固件运行在",
  "The two channels behave differently.":
    "两个通道的行为不同。",
  "The web page":
    "网页",
  "The website plugin is the simplest and lightest (one ESP32 doing everything). Use the full SmartWebServer when you want its richer UI and can accept the extra load on the shared ESP32.":
    "website 插件最简单、最轻量（一颗 ESP32 包办一切）。如果您想要更丰富的界面，并能接受共享 ESP32 上的额外负载，请使用完整的 SmartWebServer。",
  "The workflow clones":
    "工作流会克隆",
  "The workflow input is visible in the public Actions log. Leave those fields at":
    "工作流的输入在公开的 Actions 日志中可见。请将这些字段保持为",
  "Thermistor":
    "热敏电阻",
  "Thermistor (FEATURE2 / focuser temp)":
    "热敏电阻（FEATURE2 / 调焦器温度）",
  "Thermistor (FEATURE2)":
    "热敏电阻（FEATURE2）",
  "Thermistor / Hall":
    "热敏电阻 / 霍尔",
  "Thermistor Configuration — NTC 3950 100kΩ":
    "热敏电阻配置——NTC 3950 100kΩ",
  "Thermistor Implementation":
    "热敏电阻的实现",
  "Thermistor — NTC thermistor — focuser / dew temp":
    "热敏电阻——NTC 热敏电阻——调焦器 / 除露温度",
  "These map the computed demand onto PWM duty;":
    "它们把计算得到的需求映射为 PWM 占空比；",
  "This board profile was derived from source,":
    "此主板配置是根据源码推导而来的，",
  "This is bootloader noise before OnStepX initialises, not a bug.":
    "这是 OnStepX 初始化之前引导程序输出的杂讯，不是 bug。",
  "This is the part beginners trip over most, because three different things all get called \"the WiFi\". The FYSETC E4 is built around an":
    "这是初学者最容易绊倒的部分，因为有三样不同的东西都被称为「WiFi」。FYSETC E4 的核心是一颗",
  "This profile rebuilds only the ESP32 (OnStepX) half, which is all the newer OnStepX features need. The factory SmartWebServer on the ESP8266 keeps working for status and slewing.":
    "此配置只重新构建 ESP32（OnStepX）这一半，OnStepX 的新功能只需要这部分。ESP8266 上的出厂 SmartWebServer 仍可正常用于状态查看和快速转动。",
  "This section applies to OnStepX mode only.":
    "本节仅适用于 OnStepX 模式。",
  "Those controls ride on the :GXA / :SXA command set, which SmartWebServer only draws when OnStepX reports version 10.26 or newer. An older SWS renders the rest of the page normally and simply does nothing when you press \"Enable Advanced Configuration\", so it reads as a partial failure rather than a version gap. Build a current SmartWebServer here (mode SWS, board ESP8266, SERIAL_BAUD_DEFAULT 9600 to match SERIAL_B_BAUD_DEFAULT above) and flash it with the board switch in the ESP8266 position (right). Terrans' web firmware is stock SmartWebServer plus a config file, so nothing board-specific is lost — but reflashing it resets the WiFi settings, so have the AP password to hand.":
    "这些控件依赖 :GXA / :SXA 命令集，只有当 OnStepX 报告的版本为 10.26 或更高时，SmartWebServer 才会显示它们。较旧的 SWS 会正常显示页面其余部分，但按下「Enable Advanced Configuration」时毫无反应，因此看起来像是部分故障，而不是版本差异。请在此构建最新的 SmartWebServer（SWS 模式，主板 ESP8266，SERIAL_BAUD_DEFAULT 设为 9600 以匹配上面的 SERIAL_B_BAUD_DEFAULT），并在主板开关处于 ESP8266 位置（右侧）时烧录。Terrans 的网页固件就是原版 SmartWebServer 加一个配置文件，因此不会丢失任何主板专属内容——但重新烧录会重置 WiFi 设置，请提前准备好 AP 密码。",
  "Three layers that are easy to confuse. Knowing which one you are dealing with tells you what to flash and where to connect.":
    "三个容易混淆的层级。弄清楚您面对的是哪一层，就知道该烧录什么、该连接到哪里。",
  "Ticks per degree":
    "每度脉冲数",
  "Time & Location":
    "时间与位置",
  "Time entry / display format":
    "时间输入 / 显示格式",
  "Tip":
    "尖端（Tip）",
  "To add a board that's not listed, the build service needs a new PlatformIO env — edit":
    "要添加未列出的主板，构建服务需要一个新的 PlatformIO 环境——请编辑",
  "Total Steps / Revolution":
    "每转总步数",
  "Total steps for a full 360°":
    "旋转完整 360° 的总步数",
  "Tracking & Slewing":
    "跟踪与快速转动",
  "Tracking compensation":
    "跟踪补偿",
  "Tracking decay override":
    "跟踪时的衰减模式覆盖",
  "Tracking decay override (default: STEALTHCHOP)":
    "跟踪时的衰减模式覆盖（默认：STEALTHCHOP）",
  "Tracking resolution (arc-sec) Axis1":
    "跟踪分辨率（角秒）Axis1",
  "Tracking resolution (arc-sec) Axis2":
    "跟踪分辨率（角秒）Axis2",
  "Troubleshooting":
    "故障排除",
  "Troubleshooting & Known Fixes":
    "故障排除与已知修复",
  "Try a different USB cable — a surprising number are charge-only.":
    "换一根 USB 线试试——出乎意料地有很多线只能充电。",
  "Tune with the SWS \"Span\" and \"Zero\" sliders.":
    "用 SWS 的「Span」和「Zero」滑块进行调节。",
  "Twinkle animation":
    "闪烁动画",
  "Twist the motor cables and shield the enclosure (foil + tape); prefer the external-antenna board in a metal box.":
    "将电机线绞合并屏蔽机箱（铝箔 + 胶带）；优先选用外置天线版主板并装在金属盒内。",
  "Twist the motor cables tightly":
    "将电机线紧密绞合",
  "Two Channels, ADC Notes & Calibration":
    "双通道、ADC 说明与校准",
  "Two iterations on the OnStep wiki:":
    "OnStep 维基上的两个版本：",
  "Two regulated zones:":
    "两个受控区域：",
  "Two ways to reach the board. AP mode is the default and the simplest in the field; Station mode is best at home where you want internet on the same device.":
    "连接主板的两种方式。AP 模式是默认方式，在野外最简单；Station 模式最适合在家使用，让同一设备还能上网。",
  "Type":
    "类型",
  "Typical beta":
    "典型 beta 值",
  "Typical for a direct-drive rotator":
    "直驱旋转器的典型值",
  "Typical: 200 (1.8°) or 400 (0.9°)":
    "典型值：200（1.8°）或 400（0.9°）",
  "UI language & default locale units":
    "界面语言与默认区域单位",
  "UI language as declared in upstream SHC src/locales. Strings_xx.h shipped upstream for en/us, cn, de and ro (Romanian); es/fr are declared but have no Strings file yet.":
    "界面语言，按上游 SHC src/locales 中的声明。上游已提供 en/us、cn、de 和 ro（罗马尼亚语）的 Strings_xx.h；es/fr 虽已声明，但尚无 Strings 文件。",
  "USB - Firmware upload & serial monitor":
    "USB - 固件上传与串口监视器",
  "USB / PC — Host computer / firmware upload":
    "USB / PC — 主机电脑 / 固件上传",
  "USB Power Control":
    "USB 电源控制",
  "USB bridge":
    "USB 桥接芯片",
  "USB serial baud rate":
    "USB 串口波特率",
  "USB serial of E4 board":
    "E4 主板的 USB 串口",
  "Under the hood: the Teensy WebHID flasher":
    "深入了解：Teensy WebHID 烧录工具",
  "Unipolar Hall":
    "单极霍尔",
  "Unipolar Hall switch":
    "单极霍尔开关",
  "Unplug USB, replug.":
    "拔下 USB，再重新插上。",
  "Until you click Reset to Defaults or clear site data":
    "直到您点击「恢复默认值」或清除网站数据",
  "Unusual steps/deg":
    "steps/deg 异常",
  "Unzip it; you should see":
    "解压后，您应能看到",
  "Update to ESP32 board package v2.0.17 (recommended for E4).":
    "更新到 ESP32 主板包 v2.0.17（推荐用于 E4）。",
  "Update to OnStepX v10.20a+ (TMC2209 GCONF register fix).":
    "更新到 OnStepX v10.20a+（修复了 TMC2209 GCONF 寄存器问题）。",
  "Update to a recent OnStepX — fork-mount slewing was reworked in newer releases.":
    "更新到较新的 OnStepX——新版本重做了叉式支架的快速转动。",
  "Upload ESP8266 firmware via Serial B":
    "通过 Serial B 上传 ESP8266 固件",
  "Upload-fix cap":
    "上传修复电容",
  "Use":
    "使用",
  "Use \"Go Home\" from ASIAIR to recover, then retry. Source: discussions #68119, #68264.":
    "在 ASIAIR 中使用「Go Home」恢复，然后重试。来源：讨论 #68119、#68264。",
  "Use Calculator tab!":
    "请使用计算器选项卡！",
  "Use Calculator tab! steps/degree":
    "请使用计算器选项卡！步数/度",
  "Use DS3231 RTC as time source":
    "使用 DS3231 RTC 作为时间源",
  "Use ESP32 board package v2.0.11 or v2.0.17 — v2.0.15+ can break SWS connectivity.":
    "请使用 ESP32 主板包 v2.0.11 或 v2.0.17——v2.0.15+ 可能导致 SWS 连接失败。",
  "Use GPS for date/time and location":
    "使用 GPS 获取日期/时间和位置",
  "Use Normally-Open (NO) connecting to GND when activated. Configure AXISn_SENSE_HOME LOW. NC is possible but less failsafe (broken wire = false trigger).":
    "使用常开（NO）开关，触发时接通 GND。将 AXISn_SENSE_HOME 设为 LOW。也可以用常闭（NC），但故障安全性较差（断线 = 误触发）。",
  "Use TE thermistor for focuser temp":
    "使用 TE 热敏电阻测量调焦器温度",
  "Use a COARSE goto microstep: AXISn_DRIVER_MICROSTEPS_GOTO 4 (or 8), with 32 for tracking. Fine goto microstepping (e.g. 4→ stalls) is a common cause.":
    "GOTO 时使用较粗的细分：AXISn_DRIVER_MICROSTEPS_GOTO 设为 4（或 8），跟踪用 32。GOTO 细分过细（例如 4→ 失步）是常见原因。",
  "Use a cut-down USB-2 data cable with the 5V wire LEFT DISCONNECTED, so the board is only powered by the 12V supply and is truly off when 12V is removed.":
    "使用剪短改装的 USB-2 数据线，并让 5V 线保持断开，这样主板只由 12V 电源供电，断开 12V 后才真正断电。",
  "Use home switches for alignment":
    "使用原点开关进行校准",
  "Use only when you need the values below to actually take effect — SWS reads them from NV after the first flash and ignores any later changes here unless NV is wiped. Workflow: set":
    "仅在需要让下面的值真正生效时使用——SWS 首次烧录后会从 NV 读取这些值，之后除非清空 NV，否则会忽略此处的任何修改。流程：设为",
  "Use the \"9600-NO DTR\" serial speed option.":
    "使用「9600-NO DTR」串口速率选项。",
  "Use the 3.3V variant of the module, or drop the 5V rail: a plain red LED in series gives ~3.1–3.4V (it drops ~1.6–1.9V) and the":
    "使用该模块的 3.3V 版本，或降低 5V 电源轨电压：串联一个普通红色 LED 可得到约 3.1–3.4V（压降约 1.6–1.9V），而",
  "Use the 3.3V variant of the module, or drop the 5V rail: a plain red LED in series gives ~3.1–3.4V (it drops ~1.6–1.9V) and the <1mA draw is fine.":
    "使用该模块的 3.3V 版本，或降低 5V 电源轨电压：串联一个普通红色 LED 可得到约 3.1–3.4V（压降约 1.6–1.9V），而 <1mA 的电流完全没问题。",
  "Use the bare DS1820 keyword + DEBUG VERBOSE to LIST serial numbers; then replace it with the serial of the sensor you want":
    "先用单独的 DS1820 关键字 + DEBUG VERBOSE 列出序列号；再将其替换为所需传感器的序列号",
  "Use the browser-based":
    "使用基于浏览器的",
  "Use the external-antenna E4 variant, or run the board in WIFI_STATION mode and improve your router/AP side (directional antenna or a WiFi extender).":
    "使用外置天线版 E4，或让主板以 WIFI_STATION 模式运行，并改善路由器/AP 一侧（定向天线或 WiFi 扩展器）。",
  "User Guide":
    "用户指南",
  "Uses shared LIMIT_SENSE":
    "使用共享的 LIMIT_SENSE",
  "Value":
    "值",
  "Values were not committed to non-volatile storage before power-off, or the NV is stale/corrupt.":
    "断电前数值没有写入非易失性存储，或者 NV 数据过时/损坏。",
  "Verify 12–24V DC on Vin/GND and that the power LED lights.":
    "确认 Vin/GND 上有 12–24V 直流电，并且电源 LED 亮起。",
  "Verify N/S/E/W behave correctly from the web UI first, then re-test in ASIAIR. Source: discussion #68576.":
    "先确认在网页界面中 N/S/E/W 动作正确，再到 ASIAIR 中重新测试。来源：讨论 #68576。",
  "Verify axis limits are correct for your mount.":
    "确认轴限位设置适合您的支架。",
  "Verify meridian-limit and MFLIP settings; for GEM, set MFLIP_SKIP_HOME appropriately.":
    "检查子午线限位和 MFLIP 设置；对于赤道仪（GEM），请正确设置 MFLIP_SKIP_HOME。",
  "Verify the COM port appears in Device Manager.":
    "确认设备管理器中出现了该 COM 端口。",
  "Verify the module first:":
    "先验证模块本身：",
  "Vertical pixels":
    "垂直像素",
  "Very common adjustments":
    "非常常见的调整",
  "View original →":
    "查看原文 →",
  "Vin / GND screw terminal":
    "Vin / GND 螺丝端子",
  "Vin GND - Vin / GND tap — 3×2 pin header":
    "Vin GND - Vin / GND 取电口——3×2 针排针",
  "Voltage":
    "电压",
  "WIFI_STATION (ESP32 only)":
    "WIFI_STATION（仅 ESP32）",
  "Wait for \"Flash complete\", then tap":
    "等待出现「烧录完成」，然后按一下",
  "Weather sensor":
    "天气传感器",
  "Weather sensor type":
    "天气传感器类型",
  "Web UI":
    "网页界面",
  "Web UI & WiFi bridge firmware":
    "网页界面与 WiFi 桥接固件",
  "Web UI access":
    "网页界面访问",
  "Web UI appearance":
    "网页界面外观",
  "Web UI login (SWS only)":
    "网页界面登录（仅 SWS）",
  "Web server won't start — 3 flashes from WiFi module":
    "网页服务器无法启动——WiFi 模块闪烁 3 次",
  "WebHID is Chromium-only. On Firefox/Safari the flasher silently falls back to saving":
    "WebHID 仅支持 Chromium 内核浏览器。在 Firefox/Safari 上，烧录工具会静默改为保存",
  "What each tab does":
    "各选项卡的作用",
  "What it is":
    "它是什么",
  "What this profile does":
    "此配置的作用",
  "What this site does:":
    "本网站的作用：",
  "Whatever you type in the":
    "您在",
  "When any limit triggers: all gotos abort, tracking stops, the mount freezes. Recover by clearing the condition (move off the switch) and then unparking or syncing — with LIMIT_STRICT OFF, an unpark goto or a sync re-arms normal operation.":
    "任一限位触发时：所有 GOTO 中止，跟踪停止，支架停住不动。恢复方法：先解除触发条件（移离开关），然后取消停放或同步——在 LIMIT_STRICT 为 OFF 时，一次取消停放的 GOTO 或一次同步即可恢复正常运行。",
  "When the browser picker appears, press the white program button on the Teensy. It'll show up as \"Teensy\" in the dialog — pick it and click Connect.":
    "浏览器选择器出现后，按下 Teensy 上的白色编程按钮。它会在对话框中显示为「Teensy」——选中它并点击「连接」。",
  "When the browser picker appears, press the white program button — \"Teensy\" shows up in the dialog, pick it and click Connect.":
    "浏览器选择器出现后，按下白色编程按钮——对话框中会出现「Teensy」，选中它并点击「连接」。",
  "When you click Compile, the log streams these lines:":
    "点击「编译」后，日志会依次输出以下内容：",
  "When you flip the mode switch:":
    "切换模式开关时：",
  "Where OnStepX stores runtime settings. Leave on NV_DEFAULT unless your board has a documented external EEPROM/FRAM (e.g. MaxESP4i ⇒ NV_MB85RC64).":
    "OnStepX 存储运行时设置的位置。除非您的主板有文档说明的外部 EEPROM/FRAM（例如 MaxESP4i ⇒ NV_MB85RC64），否则请保持 NV_DEFAULT。",
  "Where do I configure network / WiFi / Ethernet?":
    "在哪里配置网络 / WiFi / 以太网？",
  "Where it goes":
    "接到哪里",
  "Which UART to use for debug prints (only meaningful when DEBUG ≠ OFF)":
    "调试输出使用哪个 UART（仅当 DEBUG ≠ OFF 时有意义）",
  "Which boards can I build for?":
    "可以为哪些主板构建？",
  "Which to choose on the E4?":
    "E4 上该选哪个？",
  "Which upstream version does this build?":
    "本次构建使用哪个上游版本？",
  "Why did the form change after I flashed?":
    "为什么烧录后表单变了？",
  "Why it's needed: GitHub Pages is static-only (it serves files, it can't call protected APIs). A tiny serverless function is the simplest way to bridge a static site to an authenticated API without standing up a server you have to maintain.":
    "为何需要它：GitHub Pages 只能提供静态内容（它只提供文件，无法调用受保护的 API）。用一个极小的无服务器函数，是把静态网站桥接到需认证 API 的最简单方式，无需自己搭建和维护服务器。",
  "Why the I2C header:":
    "为何使用 I2C 排针：",
  "Why you don't see":
    "为什么您看不到",
  "WiFi & Bluetooth setup (E4 / OnStepX)":
    "WiFi 与蓝牙设置（E4 / OnStepX）",
  "WiFi & Connectivity":
    "WiFi 与连接",
  "WiFi drops connection or lags after a few minutes":
    "WiFi 几分钟后断开或卡顿",
  "WiFi network (SSID)":
    "WiFi 网络（SSID）",
  "WiFi network name in AP mode":
    "AP 模式下的 WiFi 网络名称",
  "WiFi password":
    "WiFi 密码",
  "WiFi with the password above → 3) browse to":
    "WiFi（使用上面的密码）→ 3) 用浏览器访问",
  "WiFi, the web page & how it all connects":
    "WiFi、网页以及它们如何连接",
  "Wiki":
    "维基",
  "Will build:":
    "将构建：",
  "Win10/11 may need CH341SER-3.7. Use 9600-NO DTR in ASCOM.":
    "Win10/11 可能需要 CH341SER-3.7。在 ASCOM 中使用 9600-NO DTR。",
  "Win11 CH340 USB Fix — Driver & DTR":
    "Win11 CH340 USB 修复——驱动与 DTR",
  "Windows CH340 USB-serial driver issues (common on Win11).":
    "Windows 上的 CH340 USB 串口驱动问题（在 Win11 上很常见）。",
  "Windows driver note:":
    "Windows 驱动说明：",
  "Wipes all stored network credentials on boot.":
    "启动时清除所有已保存的网络凭据。",
  "Wire GPIO15 → M-TX":
    "连线 GPIO15 → M-TX",
  "Wire from the Z-min pin of ZDIAG-EN to M-TX on the TMC UART header":
    "从 ZDIAG-EN 的 Z-min 引脚连一根线到 TMC UART 排针上的 M-TX",
  "Wire the ESP's serial TX/RX (cross-over: TX→RX, RX→TX) to a free serial port on the controller, plus a common GND; make SERIAL_BAUD match on both sides.":
    "将 ESP 的串口 TX/RX（交叉连接：TX→RX，RX→TX）接到控制器上的空闲串口，并共地（GND）；两端的 SERIAL_BAUD 必须一致。",
  "Wire the Focuser1 stepper coils.":
    "连接 Focuser1 步进电机线圈。",
  "Wire the rotator OR the Focuser2 stepper coils.":
    "连接旋转器或 Focuser2 的步进电机线圈。",
  "Wired link to the mount controller":
    "到支架控制器的有线连接",
  "Wireless link to OnStep (ESP32 builds only)":
    "到 OnStep 的无线连接（仅限 ESP32 构建）",
  "Wiring":
    "接线",
  "With BME280 active, OnStepX calculates dew point from ambient temp + RH and adjusts PWM to keep optics ≥2°C above dew point. Configure the target delta in the SWS Dew tab.":
    "启用 BME280 后，OnStepX 会根据环境温度和相对湿度计算露点，并调节 PWM，使光学元件保持在露点以上至少 2°C。请在 SWS 的 Dew 选项卡中配置目标温差。",
  "With USB serial on, the E4 pinmap runs the TMC UART transmit-only: SERIAL_TMC_RX is a dummy pin (GPIO0), so driver status cannot be read back. The drivers are soldered on — there is no module brand or seating to check.":
    "启用 USB 串口时，E4 引脚映射让 TMC UART 只发不收：SERIAL_TMC_RX 是一个虚设引脚（GPIO0），因此无法回读驱动器状态。驱动器是焊在板上的——不存在模块品牌或插接是否到位的问题。",
  "With a temperature source assigned (FEATUREn_TEMP) plus a BME280 for dew point, OnStepX runs each heater as a closed loop — it raises PWM as the optic temperature approaches the dew point and eases off once it is safely above. Without a temperature source the channel is just a manual 0–255 PWM output you set in the SWS/app.":
    "为每路加热指定温度源（FEATUREn_TEMP）并配合 BME280 提供露点后，OnStepX 会以闭环方式控制每路加热：光学元件温度接近露点时提高 PWM，安全高于露点后再降低。没有温度源时，该通道只是一个在 SWS/应用中手动设置的 0–255 PWM 输出。",
  "Without Website, an ESP32 OnStepX build is ~600KB. With Website it's ~1.0–1.1MB. The":
    "不含 Website 时，ESP32 的 OnStepX 固件约 600KB；包含 Website 时约 1.0–1.1MB。",
  "Without a DS3231 (or GPS) you must re-enter date & time every session, which is tedious via the SHC. A DS3231 fixes this; or combine both with":
    "没有 DS3231（或 GPS）时，每次观测都必须重新输入日期和时间，通过 SHC 操作很繁琐。DS3231 可以解决这个问题；也可以两者结合：",
  "Working E4 GPS settings and tips shared by users.":
    "用户分享的可用 E4 GPS 设置和技巧。",
  "Works if your device supports mDNS (Bonjour).":
    "适用于支持 mDNS（Bonjour）的设备。",
  "Worm Gear Teeth (or gear ratio)":
    "蜗轮齿数（或传动比）",
  "Worm gear teeth (from Axis1)":
    "蜗轮齿数（来自 Axis1）",
  "Worm wheel teeth count":
    "蜗轮齿数",
  "Write your generated":
    "用您生成的",
  "Wrong chip: many boards sold as \"BME280\" are actually BMP280 (no humidity, different chip ID). Use BMP280 / BMP280_0x76 instead.":
    "芯片不对：许多标称「BME280」的模块实际上是 BMP280（没有湿度，芯片 ID 不同）。请改用 BMP280 / BMP280_0x76。",
  "X-MIN (GPIO34) acts as an emergency stop for BOTH axes":
    "X-MIN (GPIO34) 会作为两个轴的急停",
  "X-MIN - X-MIN — Home Axis1 / Limit / GPS":
    "X-MIN - X-MIN — Axis1 原点 / 限位 / GPS",
  "X-MIN alternative only — which cap to remove:":
    "仅限 X-MIN 替代方案 — 要拆除哪个电容：",
  "Y-MIN - Y-MIN — Home Axis2":
    "Y-MIN - Y-MIN — Axis2 原点",
  "Y-MIN does NOT stop motion":
    "Y-MIN 不会停止运动",
  "Yes":
    "是",
  "Yes (pin present)":
    "是（引脚存在）",
  "Yes — each compile request base64-encodes your Config.h and sends it as a GitHub Actions workflow input. Public-repo Actions logs are visible to anyone, so treat Config.h as public. See":
    "是的 — 每次编译请求都会将你的 Config.h 进行 base64 编码，并作为 GitHub Actions 工作流输入发送。公开仓库的 Actions 日志任何人都能看到，因此请把 Config.h 视为公开内容。参见",
  "Yes. Everything is open-source. Fork":
    "是的。一切都是开源的。Fork",
  "You can":
    "你可以",
  "You can generate Config.h offline — this page works fully offline once loaded. Compiling needs the online service. For a fully offline toolchain, install":
    "你可以离线生成 Config.h — 此页面加载后可完全离线使用。编译需要在线服务。若要完全离线的工具链，请安装",
  "You can type any of:":
    "你可以输入以下任一格式：",
  "You edited the form after compiling. The firmware on disk is stale. Click":
    "你在编译后修改了表单。磁盘上的固件已过时。请再次点击",
  "You picked a branch/tag that doesn't exist. The \"Fetch upstream OnStepX\" step will fail at":
    "你选择了一个不存在的分支/标签。「Fetch upstream OnStepX」步骤会在此处失败：",
  "You see each issue listed with a red ✗ (error) or yellow ⚠ (warning) icon. The Compile button stays disabled until you either resolve the issues or tick the":
    "每个问题都会以红色 ✗（错误）或黄色 ⚠（警告）图标列出。编译按钮会保持禁用，直到你解决这些问题或勾选",
  "Your Config.h (= E4 branch's Config.h, if you clicked":
    "你的 Config.h（= E4 分支的 Config.h，如果你点击了",
  "Your Config.h (base64-encoded)":
    "你的 Config.h（base64 编码）",
  "Your IP address (for rate limiting only)":
    "你的 IP 地址（仅用于速率限制）",
  "Your WiFi name (SSID)":
    "你的 WiFi 名称（SSID）",
  "Your WiFi password":
    "你的 WiFi 密码",
  "Your browser does not support WebUSB — STM32 flashing needs Chrome/Edge/Opera.":
    "你的浏览器不支持 WebUSB — STM32 烧录需要 Chrome/Edge/Opera。",
  "Your browser's localStorage":
    "你浏览器的 localStorage",
  "Your chosen ONE_WIRE_PIN":
    "你选择的 ONE_WIRE_PIN",
  "Your config has changed since this firmware was built. Recompile before flashing, or the board will run stale firmware.":
    "自构建此固件以来，你的配置已发生变化。烧录前请重新编译，否则主板将运行过时的固件。",
  "Your form state is saved automatically to your browser's local storage every time you change a field, so a refresh won't lose your work. The":
    "每次你修改字段时，表单状态都会自动保存到浏览器的本地存储中，因此刷新不会丢失你的工作。页眉中的",
  "Your form values are preserved":
    "你的表单值会被保留",
  "Z-MIN - Z-MIN — opto-isolated probe input (GPIO15 = TMC UART TX)":
    "Z-MIN - Z-MIN — 光耦隔离探针输入（GPIO15 = TMC UART TX）",
  "Z-MIN can't be a serial/GPS input":
    "Z-MIN 不能用作串口/GPS 输入",
  "Z-min pin of ZDIAG-EN (GPIO15) → M-TX on the TMC UART header. Required for driver current control.":
    "ZDIAG-EN 的 Z-min 引脚（GPIO15）→ TMC UART 排针上的 M-TX。驱动器电流控制所必需。",
  "Z-min pin of the ZDIAG-EN header (GPIO15)":
    "ZDIAG-EN 排针的 Z-min 引脚（GPIO15）",
  "ZDIAG-EN (Z-min pin)":
    "ZDIAG-EN（Z-min 引脚）",
  "Zero at the scale of a hobby project. GitHub Pages, GitHub Actions (on public repos), and Cloudflare Workers all have free tiers that comfortably fit hundreds of builds per day.":
    "对业余项目的规模来说为零。GitHub Pages、GitHub Actions（公开仓库）和 Cloudflare Workers 都有免费额度，足以轻松支撑每天数百次构建。",
  "a 12V-rated heater on 24V dissipates ~4× its rated power (P=V²/R) and can scorch optics or wiring. Either use 24V-rated heaters, cap the duty with":
    "额定 12V 的加热带接 24V 时会耗散约 4 倍的额定功率（P=V²/R），可能烧焦光学元件或线缆。请使用额定 24V 的加热带，或将占空比上限设置为",
  "a build, browse it directly at":
    "构建之前，可直接浏览",
  "a free GPIO":
    "一个空闲的 GPIO",
  "accepts":
    "接受",
  "accepts only OFF, DS3231, SD3031, TEENSY, GPS or NTP, and GPS means a serial connection — so the header is simply used as two serial pins.":
    "仅接受 OFF、DS3231、SD3031、TEENSY、GPS 或 NTP，而 GPS 指的是串口连接 — 因此该排针只是被用作两个串口引脚。",
  "access point (or joins your WiFi) and bridges commands to the mount.":
    "接入点（或加入你的 WiFi），并将命令桥接到支架。",
  "add":
    "添加",
  "add any hardware for WiFi. You only decide between the lightweight":
    "为 WiFi 添加任何硬件。你只需在轻量的",
  "after":
    "之后",
  "after the build queues. Open it, expand the step":
    "（构建排队后打印）。打开它，展开步骤",
  "again, or click Cancel to flash the outdated firmware anyway (rarely what you want).":
    "，或点击「取消」仍然烧录过时的固件（通常不是你想要的）。",
  "ambient temp vs dew point only":
    "仅根据环境温度与露点",
  "and":
    "和",
  "and after success:":
    "成功后：",
  "and appends the V5 Pro pin map directly to Config.h. OnStepX supports this:":
    "并将 V5 Pro 引脚映射直接追加到 Config.h。OnStepX 支持这种做法：",
  "and show the Teensy Loader instructions. HalfKay is in ROM and cannot be overwritten, so a partial flash never bricks the board — worst case you click Flash again and retry.":
    "并显示 Teensy Loader 说明。HalfKay 位于 ROM 中且无法被覆盖，因此烧录中断绝不会让主板变砖 — 最坏情况下你只需再次点击烧录重试。",
  "and solder a 10kΩ resistor between the TE/TB pin and GND — extends usable range from -10°C down to -20°C.":
    "并在 TE/TB 引脚与 GND 之间焊接一个 10kΩ 电阻 — 可将可用范围从 -10°C 扩展到 -20°C。",
  "and that GPS TX goes to the pin set in":
    "并确认 GPS TX 接到此处设置的引脚：",
  "and the Worker's":
    "以及 Worker 的",
  "and the configurator auto-ticks the Website checkbox. Click Compile and the workflow ends up with":
    "，配置器会自动勾选 Website 复选框。点击编译后，工作流最终得到",
  "and/or line the enclosure with foil + tape to cut EMI; the external-antenna board in a metal box is the most robust.":
    "和/或在外壳内衬铝箔 + 胶带以减少电磁干扰；带外置天线的主板装在金属盒中是最可靠的方案。",
  "arcsec or OFF: max diff to sync OnStep → encoder":
    "arcsec 或 OFF：OnStep → 编码器同步的最大差值",
  "arcsec: min diff to sync encoder → OnStep":
    "arcsec：编码器 → OnStep 同步的最小差值",
  "assign a temperature source to each — e.g. focus/BME280 on one input and the dew-ring thermistor on Dew Heat 1, with dew point taken from the BME280.":
    "为每个区域指定一个温度源 — 例如调焦/BME280 用一个输入，除露环热敏电阻用于 Dew Heat 1，露点取自 BME280。",
  "assigned by your router (DHCP)":
    "由你的路由器分配（DHCP）",
  "at OFF until Focuser 1 works, then add the second axis.":
    "保持为 OFF，直到调焦器 1 正常工作，再添加第二个轴。",
  "at the branch/tag/commit you typed in the":
    "，检出你在",
  "auto-reset — their configs are small enough that overwriting would be annoying rather than helpful.":
    "自动重置 — 它们的配置很小，覆盖只会带来麻烦而不是帮助。",
  "auto-ticks it).":
    "会自动勾选它）。",
  "automatically. Leave all unchecked for a stock build.":
    "自动完成。全部不勾选即为标准构建。",
  "before":
    "在",
  "before clicking Compile.":
    "，然后再点击编译。",
  "below":
    "下文",
  "below for the FRAM variant. Teensy 3.2 / 4.1 boards flash one-click via WebHID; ESP32 boards (MaxESP3/4, FYSETC_E4, Terrans V5 Pro, CNC3) flash via WebSerial; BTT_SKR_PRO flashes via WebUSB DFU (BOOT0 jumper + reset). CNC3 is deprecated — see the OnStep wiki for alternatives.":
    "（见下方）以使用 FRAM 版本。Teensy 3.2 / 4.1 主板通过 WebHID 一键烧录；ESP32 主板（MaxESP3/4、FYSETC_E4、Terrans V5 Pro、CNC3）通过 WebSerial 烧录；BTT_SKR_PRO 通过 WebUSB DFU 烧录（BOOT0 跳线帽 + 复位）。CNC3 已弃用 — 替代方案请参阅 OnStep wiki。",
  "bipolar latch":
    "双极锁存型",
  "blade":
    "插片式",
  "blade on the supply":
    "插片式，接在电源上",
  "board.":
    "主板。",
  "both BME280 and DS3231 share the bus at different addresses. The bus needs one pair of pull-ups (SDA→3.3V, SCL→3.3V, 4.7kΩ) — nearly every GY-BME280 and ZS-042 breakout already has them, so leave them alone. Only add your own if a scan finds no device and you have confirmed your modules carry none.":
    "BME280 和 DS3231 以不同地址共享该总线。总线需要一对上拉电阻（SDA→3.3V，SCL→3.3V，4.7kΩ）— 几乎所有 GY-BME280 和 ZS-042 模块都已自带，因此无需改动。只有在扫描找不到设备、并且你已确认模块上没有上拉电阻时，才自行添加。",
  "box, the build service does this for you:":
    "框中，构建服务会为你完成以下工作：",
  "branch deliberately doesn't ship them. When you tick a plugin checkbox in the Compile tab's":
    "分支特意不包含它们。当你在编译选项卡的",
  "branch name":
    "分支名称",
  "builds it into a single ESP32 firmware with mount control + web UI.":
    "将其构建为集成支架控制 + Web 界面的单个 ESP32 固件。",
  "bundled into this OnStepX firmware":
    "打包进此 OnStepX 固件",
  "button at the bottom. Skim the output; the":
    "按钮。浏览一下输出；其中",
  "button in the header clears every tab's saved state and reloads.":
    "按钮（位于页眉）会清除所有选项卡已保存的状态并重新加载。",
  "button in the header clears it.":
    "按钮（位于页眉）可将其清除。",
  "button right under the dropdown. For MaxESP3/4, MaxPCB4, MaxSTM3, BTT SKR PRO, MiniPCB, CNC3, and FYSETC_E4, that fills in the driver model, microsteps, run current, and mount type with known-good values — so you only need to touch the steps/deg (from the Calculator) and the values specific to your scope.":
    "按钮（位于下拉菜单正下方）。对于 MaxESP3/4、MaxPCB4、MaxSTM3、BTT SKR PRO、MiniPCB、CNC3 和 FYSETC_E4，它会用经过验证的值填入驱动器型号、细分、运行电流和支架类型 — 因此你只需修改 steps/deg（来自计算器）以及与你的望远镜相关的值。",
  "by":
    "来自",
  "by default — switch the Compile-tab MCU to":
    "（默认）— 请将编译选项卡的 MCU 切换为",
  "by hjd1964":
    "作者 hjd1964",
  "calculate it":
    "去计算",
  "caps. Then fit one wire from the":
    "跳线帽。然后接一根线，从",
  "centre":
    "中间",
  "class: 200 steps × 32 microsteps × 3:1 belt × 144:1 worm ÷ 360.":
    "级别：200 步 × 32 细分 × 3:1 皮带 × 144:1 蜗杆 ÷ 360。",
  "clears it.":
    "可将其清除。",
  "click Flash.":
    "点击烧录。",
  "commit SHA":
    "提交 SHA",
  "community":
    "社区",
  "community forum. Each issue lists the root cause and fixes.":
    "社区论坛。每个问题都列出了根本原因和解决方法。",
  "compare the reported temperature against a known thermometer at two points (room temp and ice water). If it reads consistently high or low, nudge BETA by ~50 at a time until it matches — RNOM/TNOM anchor the 25°C point, BETA sets the slope of the curve.":
    "将报告的温度与已知准确的温度计在两个点（室温和冰水）进行比较。如果读数始终偏高或偏低，每次将 BETA 调整约 50，直到一致 — RNOM/TNOM 锚定 25°C 点，BETA 设定曲线斜率。",
  "connector with its own GPIO16 (STEP) / GPIO17 (DIR), and":
    "接口上，使用独立的 GPIO16 (STEP) / GPIO17 (DIR)；",
  "connector, sharing GPIO14/GPIO12 with Axis3 (rotator). The stock E4 Config.h enables both focusers (Axis3 OFF).":
    "接口上，与 Axis3（旋转器）共用 GPIO14/GPIO12。原厂 E4 Config.h 启用了两个调焦器（Axis3 为 OFF）。",
  "delay between frames (1–3600),":
    "帧间延时（1–3600），",
  "depending on the mode you pick — we never bundle a stale copy.":
    "（取决于你选择的模式）— 我们从不打包过时的副本。",
  "doesn't ship on main, the workflow copies it from":
    "未随 main 分支提供，工作流会从以下仓库复制：",
  "download":
    "下载",
  "driver for the DFU device. If the browser can't open the device, install":
    "驱动。如果浏览器无法打开设备，请安装",
  "drivers and central":
    "驱动器，以及中央的",
  "dropdown is wired to a matching PlatformIO env on the build side. Today that covers:":
    "下拉菜单中的所有选项都对应构建端匹配的 PlatformIO env。目前包括：",
  "dropdown on the Compile tab. OnStepX builds use":
    "下拉菜单中选择。OnStepX 构建使用",
  "dropped next to it.":
    "，放在固件旁边。",
  "e.g. 110 teeth driven":
    "例如 110 齿（从动）",
  "e.g. 30 teeth driving":
    "例如 30 齿（主动）",
  "endpoint; you need a scraper running somewhere.":
    "端点；你需要在某处运行一个采集器（scraper）。",
  "endstops along the top,":
    "限位开关位于顶部，",
  "exposure length (0–3600),":
    "曝光时长（0–3600），",
  "field (default: latest":
    "字段中输入的分支/标签/提交（默认：最新的",
  "field controls which version of the firmware gets compiled. The default is":
    "字段决定要编译哪个版本的固件。默认值是",
  "field on the Compile & Flash tab — defaults to":
    "字段中输入的内容 — 默认为",
  "field). If those are missing, your build server is running an older workflow that didn't include them — the firmware is still correctly built, you just have to fall back to method (4) to confirm.":
    "字段）。如果缺少这些文件，说明你的构建服务器运行的是不包含它们的旧版工作流 — 固件仍然构建正确，你只需退回到方法 (4) 来确认。",
  "fields do nothing). TMC UART models will not compile on this profile.":
    "字段不起作用）。TMC UART 型号在此配置下无法编译。",
  "files plus the plugin's own Config.h.":
    "文件，外加插件自己的 Config.h。",
  "flashing, where they only live on your board.":
    "烧录后进行配置，这样它们只保存在你的主板上。",
  "for":
    "用于",
  "for ESP32 — same protocol as":
    "用于 ESP32 — 协议与此相同：",
  "for Focuser 1 and hold":
    "用于调焦器 1，并将",
  "for STM32 BlackPill — we wrote a small DFU client that speaks the same protocol as":
    "用于 STM32 BlackPill — 我们编写了一个小型 DFU 客户端，其协议与此相同：",
  "for Teensy 3.2 / 4.0 / 4.1 — we speak the HalfKay bootloader protocol directly from the browser (same wire format as":
    "用于 Teensy 3.2 / 4.0 / 4.1 — 我们直接在浏览器中实现 HalfKay 引导程序协议（线路格式与此相同：",
  "for W5x00 shields. The textarea is editable and Compile sends it as-is.":
    "用于 W5x00 扩展板。该文本框可编辑，编译时会原样发送。",
  "for exact reproducibility or to try a specific in-progress change":
    "，用于精确复现或试用某个进行中的特定修改",
  "for latest.":
    "表示最新版本。",
  "for the PJRC Teensy Loader app.":
    "，供 PJRC Teensy Loader 应用使用。",
  "for the hand pendant, or":
    "用于手控器，或",
  "for the mount controller,":
    "用于支架控制器，",
  "for the web/WiFi bridge), and run":
    "用于 Web/WiFi 桥接），然后运行",
  "for you. Changing it manually to something incompatible fires a preflight warning before you spend a build minute.":
    "。手动将其改为不兼容的值会在你消耗构建时间之前触发预检警告。",
  "form values into existing content — imported extras like":
    "表单值到现有内容中 — 导入的额外项（如",
  "frame count (0–255),":
    "帧数（0–255），",
  "from OnStepX-Plugins +":
    "来自 OnStepX-Plugins +",
  "from the E4 branch +":
    "来自 E4 分支 +",
  "gives us (Chrome/Edge only; no Firefox or Safari support yet).":
    "所提供的能力（仅限 Chrome/Edge；尚不支持 Firefox 或 Safari）。",
  "green":
    "绿色",
  "guide for exactly one full worm rotation; OnStepX records the error pattern and applies the inverse correction. The buffer persists until power-off unless saved to NV.":
    "导星恰好一个完整的蜗杆旋转周期；OnStepX 会记录误差模式并施加反向校正。除非保存到 NV，否则该缓冲区在断电前一直保留。",
  "has":
    "已经",
  "header block in the middle, and":
    "排针区位于中间，",
  "here and set":
    "，并将",
  "holds a":
    "包含一个",
  "home sensor":
    "原点传感器",
  "icons":
    "图标",
  "if the GPS works with a test sketch but not OnStepX, it's almost always a baud/pin mismatch — confirm":
    "如果 GPS 在测试程序中工作正常但在 OnStepX 中不工作，几乎总是波特率/引脚不匹配 — 请确认",
  "if you have a Teensy 4.0 mounted; MaxSTM3 / MaxSTM3I →":
    "如果你装的是 Teensy 4.0；MaxSTM3 / MaxSTM3I →",
  "if you specifically want Howard's E4-branch source (older OnStepX snapshot with the website plugin pre-installed), type":
    "如果你确实需要 Howard 的 E4 分支源码（较旧的 OnStepX 快照，已预装 website 插件），请输入",
  "in":
    "在",
  "in ALTAZM mode with AXIS3_DRIVER_MODEL enabled, OnStepX automatically enables field de-rotation to keep field orientation constant. Remember Axis3 shares pins with Axis5 — only one active.":
    "在 ALTAZM 模式下启用 AXIS3_DRIVER_MODEL 时，OnStepX 会自动启用视场消旋，以保持视场方向不变。请记住 Axis3 与 Axis5 共用引脚 — 只能启用其中一个。",
  "in Arduino IDE: Makuna RTC, Adafruit BME280, Adafruit Sensor, TMC2209":
    "在 Arduino IDE 中：Makuna RTC、Adafruit BME280、Adafruit Sensor、TMC2209",
  "in File → Preferences":
    "（在 文件 → 首选项 中）",
  "in OnStepX mode,":
    "（OnStepX 模式），",
  "in OnStepX —":
    "在 OnStepX 中 —",
  "in SHC mode, or":
    "（SHC 模式），或",
  "in SWS mode.":
    "（SWS 模式）。",
  "in any repo on disk":
    "在磁盘上的任何仓库中",
  "in hjd1964/OnStepX…":
    "（hjd1964/OnStepX）…",
  "in hjd1964/SmartHandController…":
    "（hjd1964/SmartHandController）…",
  "in hjd1964/SmartWebServer…":
    "（hjd1964/SmartWebServer）…",
  "in that branch and reuses it in place rather than re-copying.":
    "，并直接原地复用，而不是重新复制。",
  "in the Controller section and the Compile & Flash tab's":
    "，编译与烧录选项卡中的",
  "in the Source ref field below instead of leaving it on":
    "输入到下方的 Source ref 字段中，而不是保留为",
  "in the browser prompt.":
    "（在浏览器弹出的对话框中）。",
  "in the configurator repo.":
    "（位于配置器仓库中）。",
  "in the page header.":
    "（位于页眉）。",
  "in the picker.":
    "（在选择器中）。",
  "index sensor":
    "索引传感器",
  "indexed from offset 0. Unused gaps are filled with":
    "从偏移 0 开始索引。未使用的空隙填充为",
  "indicator that appears under the Compile button after a successful build will jump accordingly. If you tick Website and the size barely moves, something's wrong — open the run URL and read the workflow log.":
    "指示（编译成功后显示在编译按钮下方）会相应增大。如果你勾选了 Website 而大小几乎没变，说明有问题 — 请打开运行 URL 并阅读工作流日志。",
  "install Arduino IDE or PlatformIO → clone the source → edit Config.h → wait for the toolchain to download → build → flash.":
    "安装 Arduino IDE 或 PlatformIO → 克隆源码 → 编辑 Config.h → 等待工具链下载 → 构建 → 烧录。",
  "is generated to enable Website in slot 1.":
    "会被生成，以在插槽 1 中启用 Website。",
  "is not an upstream OnStepX pinmap: picking it emits":
    "不是上游 OnStepX 的引脚映射：选择它会生成",
  "is present.":
    "存在。",
  "is the FEATURE number (so":
    "是 FEATURE 编号（因此",
  "is the simplest (single short cable to OnStep's ST4 port). Standard async serial (Serial / Serial1) works if you wire UART. Radio is cleanest for ESP32 builds.":
    "最简单（一根短线连接到 OnStep 的 ST4 端口）。如果你接了 UART，标准异步串口（Serial / Serial1）也可以。对于 ESP32 构建，无线方式最简洁。",
  "is wired in around it — power supply & regulator, 4 motors, GPS, RTC, BME280, DS18B20, thermistor, PEC Hall, 2 dew heaters, DSLR shutter, reticle, buzzer, power LED, endstops and USB. Click any board connector":
    "都已连接在它周围 — 电源与稳压器、4 个电机、GPS、RTC、BME280、DS18B20、热敏电阻、PEC 霍尔传感器、2 条除露加热带、单反快门、十字线照明、蜂鸣器、电源 LED、限位开关和 USB。点击任意主板接口",
  "jumper (pins are silkscreened next to the reset button) to hold BOOT0 high.":
    "跳线帽（引脚丝印在复位按钮旁边），使 BOOT0 保持高电平。",
  "library loaded from a CDN on first use.":
    "库（首次使用时从 CDN 加载）。",
  "line as shown in its README.":
    "这一行，如其 README 所示。",
  "line in the compile log. Usually means the artifact already expired (24 h retention) or the Worker URL is wrong.":
    "这一行。通常意味着构建产物已过期（保留 24 小时）或 Worker URL 有误。",
  "lines from":
    "行，来自",
  "link that jumps to the relevant help section. Hover to preview, click to pin,":
    "链接，可跳转到相关帮助章节。悬停可预览，点击可固定，",
  "load an existing Config.h":
    "加载现有的 Config.h",
  "mDNS name":
    "mDNS 名称",
  "main OnStepX source + E4's Config.h + Website plugin — the same layout as":
    "主线 OnStepX 源码 + E4 的 Config.h + Website 插件 — 与以下目录布局相同：",
  "main, v10.24, or commit SHA":
    "main、v10.24 或提交 SHA",
  "make sure your wiring and PINMAP selection match the board you're flashing. A mismatched pinmap can drive step/enable pins that are tied to other things and damage stepper drivers, limit switches, or the MCU. When in doubt, flash once with no motors connected, watch the serial output, and only then plug in the steppers.":
    "请确保你的接线和 PINMAP 选择与要烧录的主板相符。不匹配的引脚映射可能会驱动连接到其他部件的 step/enable 引脚，从而损坏步进驱动器、限位开关或 MCU。如有疑问，先在不连接电机的情况下烧录一次，观察串口输出，之后再接上步进电机。",
  "mappings here.":
    "映射。",
  "matches SkySafari defaults.":
    "与 SkySafari 默认值一致。",
  "measure the 3.3V rail during a slew; if it dips, reduce motor current until brownouts stop — sag also drops the SHC/app connection (\"Lost Connection / Looking for OnStep\") while WiFi itself stays up.":
    "在快速转动时测量 3.3V 电源轨；如果电压下跌，降低电机电流直到不再掉电 — 电压下跌还会断开 SHC/应用的连接（「Lost Connection / Looking for OnStep」），而 WiFi 本身仍保持连接。",
  "mode (the project selector at the top of the page).":
    "模式中配置（页面顶部的项目选择器）。",
  "motor outputs with":
    "电机输出以及",
  "motor to":
    "个电机连接到",
  "next to":
    "旁边",
  "next to field names open a one-sentence explanation for that specific setting, plus (for most fields) a":
    "（位于字段名旁边）会打开针对该设置的一句话说明，另外（大多数字段）还有一个",
  "no":
    "否",
  "no (download .hex)":
    "否（下载 .hex）",
  "no DS3231 RTC and no BME280":
    "不能使用 DS3231 RTC 和 BME280",
  "no I2C GPS option":
    "没有 I2C GPS 选项",
  "no OneWire pin at all":
    "根本没有 OneWire 引脚",
  "no divider":
    "不需要分压器",
  "no steppers":
    "不接步进电机",
  "not":
    "不",
  "not yet verified by flashing real hardware":
    "尚未通过在真实硬件上烧录进行验证",
  "of new firmware: that first run initialises NV, and until it has, the hand controller and web UI can show greyed-out controls or an axis that will not stop.":
    "之后断电重启一次：首次运行会初始化 NV，在此之前，手控器和 Web 界面可能会显示灰色的控件，或出现无法停止的轴。",
  "of this page (Network / Web UI / Encoders & BLE tabs).":
    "模式下配置（Network / Web UI / Encoders & BLE 选项卡）。",
  "on Windows you may need the":
    "在 Windows 上，你可能需要为 DFU 设备安装",
  "on disk.":
    "。",
  "on every change, so a refresh or closed tab doesn't lose your work. The header":
    "，因此刷新或关闭标签页都不会丢失你的工作。页眉中的",
  "on the":
    "位于",
  "on the Compile & Flash tab from":
    "（在编译与烧录选项卡中）从",
  "on the Controller tab is":
    "（在控制器选项卡中）设置为",
  "on the E4 (it goes through an optocoupler). If you use the X-MIN alternative and X-MIN and Y-MIN are both home sensors, move one":
    "（在 E4 上它经过光耦）。如果你使用 X-MIN 替代方案，且 X-MIN 和 Y-MIN 都是原点传感器，请将其中一个",
  "on the E4 you do":
    "在 E4 上，你",
  "on the I2C header, so OneWire rules out I2C devices and a GPS there — the TE/TB thermistor inputs are usually the easier route.":
    "位于 I2C 排针上，因此使用 OneWire 就不能在那里接 I2C 设备和 GPS — 通常使用 TE/TB 热敏电阻输入更简单。",
  "on the JST-XH MOT connectors (4-wire bipolar steppers)":
    "接到 JST-XH MOT 接口上（4 线双极步进电机）",
  "on the Output tab to save a copy; re-load it later with":
    "（在输出选项卡中）保存一份副本；以后可通过以下按钮重新加载：",
  "on the Output tab. The form fields will populate from the file, so you can take a working config from your current firmware and tweak from there.":
    "（在输出选项卡中）。表单字段会根据文件自动填充，因此你可以拿当前固件的可用配置在此基础上调整。",
  "on the TMC UART header — that is how OnStepX sets the driver currents. Leave the FAN and Z-probe voltage jumpers; put the FAN one on 5V if you use the status LED or buzzer.":
    "（位于 TMC UART 排针上）— OnStepX 就是通过它设置驱动器电流的。保留 FAN 和 Z-probe 电压跳线帽；如果你使用状态 LED 或蜂鸣器，请将 FAN 跳线帽设到 5V。",
  "on the right, the 4":
    "位于右侧，4 个",
  "once you've picked your":
    "在你选定",
  "one":
    "一",
  "one is the filter capacitor.":
    "那个是滤波电容。",
  "onto the window.":
    "拖放到窗口上。",
  "or":
    "或",
  "or the relevant upstream issue tracker:":
    "或相关的上游问题跟踪器：",
  "out of the box,":
    "默认情况下，",
  "output (MOT-Z) carries":
    "输出（MOT-Z）承载",
  "output-capable GPIO":
    "可输出的 GPIO",
  "over the TMC UART. If the GPIO15 → M-TX wire is missing or loose, the drivers never get those values and the current is uncontrolled — the usual cause of \"motors run scorching hot\". On first power-up, touch-check the motors and confirm that changing IRUN changes holding torque.":
    "通过 TMC UART 设置。如果 GPIO15 → M-TX 线缺失或松动，驱动器将永远收不到这些值，电流不受控制 — 这就是「电机烫得厉害」的常见原因。首次上电时，用手触摸检查电机温度，并确认修改 IRUN 会改变保持扭矩。",
  "over the upstream's default":
    "覆盖上游的默认文件",
  "override. This is intentional: the checklist is a safety net for beginners, not a straightjacket for power users who know what they're doing.":
    "覆盖选项。这是有意为之：检查清单是给初学者的安全网，而不是束缚清楚自己在做什么的高级用户的枷锁。",
  "pages are skipped to speed things up. The first five blocks get a long 45-second timeout because the chip erase takes a few seconds before the first write is acknowledged; later blocks complete in milliseconds. After the last data block we send one more 1088-byte report with the offset bytes set to":
    "页会被跳过以加快速度。前五个块使用较长的 45 秒超时，因为芯片擦除需要几秒钟，之后第一次写入才会被确认；后续块在几毫秒内完成。在最后一个数据块之后，我们再发送一个 1088 字节的报告，其偏移字节设置为",
  "patches":
    "会将",
  "per mode":
    "（按模式分别保存）",
  "per the OnStep wiki, FYSETC S6 only supports":
    "根据 OnStep wiki，FYSETC S6 仅支持",
  "per the comment in Config.h itself — temporarily set":
    "按照 Config.h 本身的注释 — 临时设置",
  "peripheral for details, GPIO mapping and wiring guidance.":
    "外设即可查看详细信息、GPIO 映射和接线指导。",
  "permanently will erase your settings on every boot.":
    "永久保持会在每次启动时清除你的设置。",
  "picked from the env name (2 MB for 4.0, 8 MB for 4.1, 256 KB for 3.2) bounds the write and catches \"wrong firmware for this board\" early.":
    "根据 env 名称选取（4.0 为 2 MB，4.1 为 8 MB，3.2 为 256 KB），用于限制写入范围，并尽早发现「此主板的固件不对」。",
  "pin of the header block. Their outputs are open-collector: the E4's 10kΩ pull-up to 3.3V is the pull-up, so a bare sensor needs":
    "引脚供电。它们的输出是集电极开路：E4 上接到 3.3V 的 10kΩ 电阻就是上拉电阻，因此裸传感器",
  "pinmap — the difference is on-PCB wiring, not the firmware constant. Same goes for MaxESP4i: pick":
    "引脚映射 — 区别在于 PCB 上的接线，而不是固件常量。MaxESP4i 也一样：选择",
  "plugin automatically — you do not have to copy any files by hand when building through this configurator.":
    "插件 — 通过本配置器构建时，你无需手动复制任何文件。",
  "plugin checkbox should be ticked below —":
    "插件复选框应在下方勾选 —",
  "plugin from":
    "插件，来源：",
  "plus the board's own pin map inline in Config.h (a path OnStepX supports explicitly).":
    "，并将该主板自己的引脚映射内联写入 Config.h（这是 OnStepX 明确支持的方式）。",
  "power supply":
    "电源",
  "printed in the compile log. That opens the GitHub Actions page for your build. The \"PlatformIO build\" step contains the compiler error. Common causes:":
    "（打印在编译日志中）。这会打开你此次构建的 GitHub Actions 页面。「PlatformIO build」步骤中包含编译器错误。常见原因：",
  "put a DS18B20 or NTC directly on the optic/tube for the FEATUREn_TEMP source, and a BME280 for ambient/dew point. OnStepX then heats only enough to keep the glass ~2°C above the measured dew point instead of running full power all night.":
    "将 DS18B20 或 NTC 直接贴在光学元件/镜筒上作为 FEATUREn_TEMP 的温度源，并用 BME280 测量环境温度/露点。这样 OnStepX 只需加热到让镜片比实测露点高约 2°C 即可，而不必整夜全功率运行。",
  "put the GPS on the I2C header (TX → SDA/GPIO21, RX → SCL/GPIO22) with":
    "将 GPS 接到 I2C 排针上（TX → SDA/GPIO21，RX → SCL/GPIO22），并设置",
  "raw":
    "原始",
  "raw GitHub URL of a Config.h (e.g. https://raw.githubusercontent.com/hjd1964/OnStepX/E4/Config.h)":
    "Config.h 的原始 GitHub URL（例如 https://raw.githubusercontent.com/hjd1964/OnStepX/E4/Config.h）",
  "reads":
    "中写道",
  "red":
    "红色",
  "report to reboot into the app). You still have to press the white program button to put the Teensy into bootloader mode — HalfKay is only reachable after that. On browsers without WebHID we fall back to downloading":
    "报告以重启进入应用程序）。你仍然需要按下白色的编程按钮，让 Teensy 进入 bootloader 模式 — 只有这样之后才能访问 HalfKay。在不支持 WebHID 的浏览器上，我们会退而下载",
  "request, attach a private GitHub API token (which, critically, your browser":
    "请求，附加一个私有的 GitHub API 令牌（关键在于，你的浏览器",
  "resolving":
    "正在解析",
  "resolving…":
    "解析中…",
  "right below the PINMAP dropdown to autofill driver model, microsteps, and run current for that board.":
    "（位于 PINMAP 下拉菜单正下方），为该主板自动填入驱动器型号、细分和运行电流。",
  "screw terminal and":
    "接线端子，以及",
  "see), and tell GitHub Actions to start a build. It also proxies the resulting firmware zip back to you. The Worker doesn't store anything — each request is independent.":
    "看到它），并通知 GitHub Actions 开始构建。它还会把生成的固件 zip 转发回给你。Worker 不存储任何内容 — 每个请求都是独立的。",
  "separate ESP":
    "独立的 ESP",
  "separate MCUs":
    "各自独立的 MCU 上",
  "set":
    "设置",
  "set), then update the PINMAP dropdown and":
    "集合），然后更新 PINMAP 下拉菜单以及",
  "should change.":
    "应当发生变化。",
  "shouldn't":
    "不应",
  "so the RTC covers you until the GPS gets a fix.":
    "，这样在 GPS 定位成功之前由 RTC 提供时间。",
  "so they look like erased flash. The":
    "，使其看起来与已擦除的 flash 相同。",
  "source, replaces Config.h with your version, compiles with PlatformIO, and returns the firmware. Builds typically take 1-3 minutes.":
    "源码，用你的版本替换 Config.h，使用 PlatformIO 编译，然后返回固件。编译通常需要 1-3 分钟。",
  "start /":
    "启动 /",
  "stated explicitly as 21/22.":
    "显式指定为 21/22。",
  "stay put. To start totally fresh, click":
    "会保持不变。如需完全从头开始，请点击",
  "still has the placeholder. For the owner: follow":
    "仍是占位符。站点所有者：请按照",
  "stop, and":
    "停止，以及",
  "switch / Hall":
    "开关 / 霍尔",
  "switches to":
    "会自动切换为",
  "tab (rules out Arduino/library issues).":
    "选项卡中编译并烧录一份干净的固件（排除 Arduino/库方面的问题）。",
  "tab can request the":
    "选项卡可以请求",
  "tab fetches the right source for you.)":
    "选项卡会为你获取正确的源码。）",
  "tab — it compiles online and flashes over USB in your browser. The manual Arduino IDE method is below.":
    "选项卡 — 它在线编译，并在浏览器中通过 USB 烧录。手动的 Arduino IDE 方法见下文。",
  "tab. Fill in your mount's worm teeth, motor steps/rev, and gear ratio for each axis — the steps/deg values used by Axis1/Axis2 are calculated from this.":
    "选项卡。为每个轴填写支架的蜗轮齿数、电机每转步数和齿轮比 — Axis1/Axis2 使用的步数/度数值就是由此计算得出的。",
  "tab. Set":
    "选项卡。将",
  "tabs to turn your choices into a ready-to-use Config.h.":
    "选项卡，把你的选择转换为可直接使用的 Config.h。",
  "tag":
    "标签",
  "the":
    "该",
  "the E4 I2C header provides 5V but the ESP32 pins are 3.3V. Power your modules from 3.3V (or drop the 5V rail — see Troubleshooting), and use 3.3V-rated modules.":
    "E4 的 I2C 排针提供 5V，但 ESP32 引脚是 3.3V。请用 3.3V 为模块供电（或降低 5V 电源轨 — 参见故障排除），并使用 3.3V 规格的模块。",
  "the E4 brings no spare serial pins out. GPIO16/17 (default Serial2) go only to the onboard MOT E driver, and X-MIN has a 100nF filter capacitor that corrupts 9600-baud data unless it is removed. The I2C header lines have no filter parts, and the ESP32 can put Serial2 on any GPIO. There is":
    "E4 没有引出任何空闲的串口引脚。GPIO16/17（默认 Serial2）只连接到板载 MOT E 驱动器，而 X-MIN 上有一个 100nF 滤波电容，除非将其拆除，否则会破坏 9600 波特的数据。I2C 排针的线路没有滤波元件，并且 ESP32 可以把 Serial2 分配到任意 GPIO。此外，",
  "the OnStep group":
    "OnStep 群组",
  "the OnStepX source requires":
    "OnStepX 源码要求",
  "the configurator repo":
    "配置器仓库",
  "the firmware — they just can't flash via the browser. If you're on one of those, download the firmware and use":
    "固件 — 只是无法通过浏览器烧录。如果你使用的是这些浏览器，请下载固件，并在本地使用",
  "the four TMC2209s are soldered on with their VREF pin unconnected, so motor current is set only by":
    "四个 TMC2209 焊接在板上，其 VREF 引脚悬空，因此电机电流只能通过",
  "the intervalometer is driven through the auxiliary-feature commands, where":
    "间隔拍摄器通过辅助功能命令驱动，其中",
  "the radio on board: no add-on WiFi module is needed. What you still choose is":
    "板载无线模块：无需额外的 WiFi 模块。你仍需要选择的是",
  "the upstream repo that matches the mode you picked —":
    "与你所选模式对应的上游仓库 —",
  "then":
    "然后",
  "there are 3 SMD parts next to the X-MIN pins — two are resistors, the":
    "X-MIN 引脚旁边有 3 个贴片元件 — 其中两个是电阻，",
  "thermistors along the bottom.":
    "热敏电阻位于底部。",
  "to":
    "改为",
  "to Defaults":
    "为默认值",
  "to GND, power cycle, and release.":
    "拉到 GND，重新上电，然后松开。",
  "to THERMISTOR / THERMISTOR2.":
    "设置为 THERMISTOR / THERMISTOR2。",
  "to Z-MIN to free X-MIN for the GPS.":
    "移到 Z-MIN，为 GPS 腾出 X-MIN。",
  "to dismiss.":
    "关闭。",
  "to pin to a released version for reproducibility":
    "以固定到某个已发布版本，便于复现",
  "to read back count, exposure and delay. Or just use SWS → Camera tab → Duration / Delay / Frames.":
    "来读回张数、曝光时间和间隔。或者直接使用 SWS → Camera 选项卡 → Duration / Delay / Frames。",
  "to run your firmware.":
    "以运行你的固件。",
  "to whatever board you have —":
    "设置为你所拥有的主板 —",
  "to whatever you're using (":
    "设置为你所使用的型号（",
  "to your Downloads folder. Then:":
    "保存到你的下载文件夹。然后：",
  "to ~2dB and use a":
    "降低到 ~2dB，并使用",
  "true = SWS broadcasts its own WiFi network (\"ONSTEP\" by default)":
    "true = SWS 广播自己的 WiFi 网络（默认为「ONSTEP」）",
  "true = SWS connects to your home/observatory router":
    "true = SWS 连接到你家中/天文台的路由器",
  "true = let the router assign an IP; false = use the static IP below":
    "true = 由路由器分配 IP；false = 使用下面的静态 IP",
  "under":
    "中，键名为",
  "unipolar switch":
    "单极开关",
  "unless you override it yourself. Add an explicit":
    "，除非你自行覆盖它。请显式添加",
  "use a small neodymium magnet (3×2mm disc) epoxied to the worm wheel. For unipolar (US5881) only the south pole triggers — mark the pole.":
    "在蜗轮上用环氧胶粘一块小钕磁铁（3×2mm 圆片）。对于单极型（US5881），只有南极能触发 — 请标记好磁极。",
  "v1.1.7 or newer (build service: 1.1.14)":
    "v1.1.7 或更新版本（编译服务：1.1.14）",
  "v2.2.2 or newer (build service: 2.2.4)":
    "v2.2.2 或更新版本（编译服务：2.2.4）",
  "v2.3.5 or newer (this configurator's build service uses 2.4.2)":
    "v2.3.5 或更新版本（本配置器的编译服务使用 2.4.2）",
  "variants; SWS builds use":
    "变体；SWS 构建使用",
  "we save":
    "我们会将",
  "website plugin":
    "website 插件",
  "which firmware serves the web page":
    "由哪个固件来提供网页",
  "which you then drop into the PJRC Teensy Loader app. Same result, one more step.":
    "，然后你再将其拖入 PJRC Teensy Loader 应用。结果相同，只是多一步。",
  "wiring Website to slot 1. After flashing, the ESP32 boots OnStepX, exposes its WiFi (SSID and password live in":
    "将 Website 接入插槽 1。烧录后，ESP32 启动 OnStepX 并开启其 WiFi（SSID 和密码位于",
  "with a":
    "，其中包含一个",
  "with the three changes Terrans made on this hardware:":
    "，并包含 Terrans 在该硬件上所做的三处修改：",
  "work on this board even though they're in the dropdown — picking one fires a preflight error.":
    "能在这块主板上工作，即使它们出现在下拉菜单中 — 选择其中任何一个都会触发预检错误。",
  "written at":
    "，写入地址为",
  "yes":
    "是",
  "yes (Web Serial)":
    "是（Web Serial）",
  "yes (WebHID)":
    "是（WebHID）",
  "yes (WebUSB)":
    "是（WebUSB）",
  "you answer a handful of questions about your telescope mount (motors, gearing, drivers, board) — or your hand pendant, or your web-server bridge — click a button, and get firmware ready to flash, without installing Arduino IDE, PlatformIO, or any C++ toolchain on your computer. The mode switch at the top of the page picks which firmware you're building:":
    "你回答几个关于望远镜支架的问题（电机、传动、驱动器、主板）— 或者关于手控器、Web 服务器桥接 — 点击一个按钮，即可得到可直接烧录的固件，无需在电脑上安装 Arduino IDE、PlatformIO 或任何 C++ 工具链。页面顶部的模式切换用于选择你要构建的固件：",
  "you have the mount tracking, using the hand controller, not in Config.h.":
    "支架开始跟踪之后，使用手控器进行设置，而不是在 Config.h 中设置。",
  "you set it":
    "由你设置",
  "your gearing":
    "你的传动比",
  "~1W per inch of aperture: an 8\" SCT ≈ 8W tape. At 12V, 8W = 0.67A — well within the output's rating.":
    "每英寸口径约 1W：8\" SCT ≈ 8W 加热带。在 12V 下，8W = 0.67A — 远低于该输出的额定值。",
  "~2048 full steps/rev at the output shaft (32 steps/rev motor × 1/64 gearbox), ~0.1–0.3A":
    "输出轴约 2048 整步/转（32 步/转电机 × 1/64 减速箱），约 0.1–0.3A",
  "°/sec base slew rate":
    "°/sec 基础快速转动速率",
  "°/sec slew rate":
    "°/sec 快速转动速率",
  "μs/step at base slew rate":
    "μs/步（基础快速转动速率下）",
  "μs/step at double slew rate":
    "μs/步（双倍快速转动速率下）",
  "μs/step at half slew rate":
    "μs/步（一半快速转动速率下）",
  "— 16, 32, 64, 128, 256. Higher = smoother tracking but more step rate on slews.":
    "— 16、32、64、128、256。越高 = 跟踪越平滑，但快速转动时的步进频率越高。",
  "— A3144, US1881, US5881 and SS441A all need 3.5–4.5V or more, and the E4 has no 3.3V pin anyway, so power them from a":
    "— A3144、US1881、US5881 和 SS441A 都需要 3.5–4.5V 或更高电压，而且 E4 本身也没有 3.3V 引脚，因此请从排针区的一个",
  "— A4988 won't do 256, DRV8825 maxes at 32, etc.":
    "— A4988 不支持 256，DRV8825 最高只到 32，等等。",
  "— ESP32 only in practice (needs WiFi). Make sure your":
    "— 实际上仅限 ESP32（需要 WiFi）。请确保你的",
  "— ESP32 only. Exposes a Prometheus-compatible":
    "— 仅限 ESP32。提供一个兼容 Prometheus 的",
  "— GEM/FORK only.":
    "— 仅限 GEM/FORK。",
  "— HalfKay reads that as \"reboot into the app.\" The bootloader often resets mid-ACK, so a missing reply on that final packet is expected, not an error.":
    "— HalfKay 将其解释为「重启进入应用程序」。bootloader 经常在 ACK 过程中复位，因此最后一个数据包没有回复是预期现象，并非错误。",
  "— MaxESP3, MaxESP4, FYSETC_E4, Terrans Industry V5 Pro (⚠ support under test), CNC3 (WeMos D1 R32 — deprecated), generic dev boards.":
    "— MaxESP3、MaxESP4、FYSETC_E4、Terrans Industry V5 Pro（⚠ 支持仍在测试中）、CNC3（WeMos D1 R32 — 已弃用）、通用开发板。",
  "— MiniPCB v1 (embed-in-mount) and MiniPCB v2 (stand-alone case).":
    "— MiniPCB v1（嵌入支架内部）和 MiniPCB v2（独立外壳）。",
  "— OnStepX controls how long the shutter stays open.":
    "— 由 OnStepX 控制快门打开的时长。",
  "— OnStepX uses the GPS once it has a fix and falls back to the DS3231 clock when no satellites are visible.":
    "— OnStepX 在 GPS 定位成功后使用 GPS，看不到卫星时则回退到 DS3231 时钟。",
  "— a separate small device with an OLED screen and physical buttons that you hold while observing. Talks to the OnStep mount over a short cable (ST4 port), serial, WiFi, or Bluetooth. Lets you slew, pick targets, and adjust settings without a phone or laptop.":
    "— 一个独立的小型设备，带 OLED 屏幕和实体按键，观测时拿在手中。通过短线缆（ST4 接口）、串口、WiFi 或蓝牙与 OnStep 支架通信。无需手机或笔记本电脑即可快速转动、选择目标和调整设置。",
  "— a third small device (usually an ESP32 or ESP8266) that hosts the OnStep web interface and bridges a WiFi or Ethernet connection into the mount. Lets you point a phone / tablet / laptop browser at the telescope and control it without cables, and exposes the mount to ASCOM / INDI clients over the network. Optional axis encoders plug into the SWS board for real-pointing feedback; optional BLE gamepad works on ESP32.":
    "— 第三个小型设备（通常是 ESP32 或 ESP8266），承载 OnStep 网页界面，并将 WiFi 或以太网连接桥接到支架。你可以用手机 / 平板 / 笔记本电脑的浏览器无线控制望远镜，并通过网络将支架提供给 ASCOM / INDI 客户端。可选的轴编码器接到 SWS 主板上以提供真实指向反馈；可选的 BLE 游戏手柄可在 ESP32 上使用。",
  "— add the plugin's":
    "— 添加该插件的",
  "— and the OnStepX":
    "— 而 OnStepX 的",
  "— board comes up as":
    "— 主板会显示为",
  "— board-level settings:":
    "— 主板级设置：",
  "— check the branch list for an E4-specific branch, otherwise take the current release. (Simpler: the":
    "— 查看分支列表中是否有 E4 专用分支，否则使用当前发布版本。（更简单的方法：",
  "— compile online and flash over USB.":
    "— 在线编译并通过 USB 烧录。",
  "— configure it in this tool's":
    "— 在本工具的",
  "— do not assume this profile fits them.":
    "— 不要假定此配置适用于它们。",
  "— drop your Config.h in,":
    "— 把你的 Config.h 放进去，",
  "— e.g. Teensy 4.1 native Ethernet — hand-edit the generated Config.h on the Output tab: add":
    "— 例如 Teensy 4.1 原生以太网 — 在输出选项卡中手动编辑生成的 Config.h：添加",
  "— embeds inside the mount body. External: power, ST4, USB. Internal: limit sense, PEC, WiFi (ESP-01) or Bluetooth (HC-05). Horizontal connectors so it sits flat behind a cover plate.":
    "— 嵌入支架机身内部。外部：电源、ST4、USB。内部：限位检测、PEC、WiFi（ESP-01）或蓝牙（HC-05）。采用水平连接器，因此可平放在盖板后面。",
  "— enable and configure up to one camera rotator and up to four focusers.":
    "— 启用并配置最多一个相机旋转器和最多四个调焦器。",
  "— enter physical mount/motor numbers (worm teeth, motor full steps, gear ratio, belt ratio). It computes steps/deg, PEC period, and maximum slew rate for each axis. Copy results into the Axis tabs.":
    "— 输入支架/电机的物理参数（蜗轮齿数、电机整步数、齿轮比、皮带比）。它会计算每个轴的步数/度、PEC 周期和最大快速转动速率。将结果复制到轴选项卡中。",
  "— every PINMAP is pinned to a specific MCU family in the validator. Current map: MaxESP3/MaxESP4/FYSETC_E4/TERRANS_V5PRO →":
    "— 在验证器中，每个 PINMAP 都绑定到特定的 MCU 系列。当前映射：MaxESP3/MaxESP4/FYSETC_E4/TERRANS_V5PRO →",
  "— feature toggles (dew heaters, aux switches, TMC stall guard, …).":
    "— 功能开关（除露加热带、辅助开关、TMC 失速检测……）。",
  "— flip if the axis moves the wrong way.":
    "— 如果轴的运动方向相反，请翻转此项。",
  "— hold BOOT0 and tap NRST. Board should appear as \"STM32 BOOTLOADER\".":
    "— 按住 BOOT0 并按一下 NRST。主板应显示为「STM32 BOOTLOADER」。",
  "— if your Config.h has a non-empty field whose name contains":
    "— 如果你的 Config.h 中有非空字段，且其名称包含",
  "— it's a normal folder of":
    "— 它就是一个普通文件夹，包含",
  "— most boards auto-reset; if not, hold BOOT and tap EN/RST.":
    "— 大多数主板会自动复位；否则请按住 BOOT 并按一下 EN/RST。",
  "— motor current (mA) for TMC drivers. Start low, raise only as needed. Too high = hot driver, skipped steps, burned stepper.":
    "— TMC 驱动器的电机电流（mA）。从低值开始，仅在需要时调高。过高 = 驱动器发烫、丢步、烧毁步进电机。",
  "— mount type (GEM / FORK / ALTAZM), guide rates, parking, meridian flip behavior, PEC.":
    "— 支架类型（GEM / FORK / ALTAZM）、导星速率、停放、中天翻转行为、PEC。",
  "— much simpler than ESP32's four-partition layout. Takes 20–60 s.":
    "— 比 ESP32 的四分区布局简单得多。耗时 20–60 秒。",
  "— needs a free aux-switch GPIO available on your board.":
    "— 需要主板上有一个空闲的辅助开关 GPIO。",
  "— needs a physical analog potentiometer on a free analog input.":
    "— 需要在空闲的模拟输入上接一个实体模拟电位器。",
  "— needs an external HC-05 / HC-06 module wired to a serial port; configures it via AT commands at startup.":
    "— 需要一个外接的 HC-05 / HC-06 模块连接到串口；启动时通过 AT 命令对其进行配置。",
  "— no USB timing dependency.":
    "— 不依赖 USB 时序。",
  "— no board modification. The header has only 5V, so a 3.3V-only module needs a small 3.3V regulator. Fall back to X-MIN (which needs its filter capacitor removed) only if a DS3231 or BME280 must stay on the I2C bus.":
    "— 无需改动主板。该排针只有 5V，因此仅支持 3.3V 的模块需要一个小型 3.3V 稳压器。只有在 DS3231 或 BME280 必须保留在 I2C 总线上时，才退而使用 X-MIN（需拆除其滤波电容）。",
  "— on":
    "— 在",
  "— one-click flash via WebHID (Chrome/Edge). Press the white program button when prompted and pick the Teensy in the browser dialog. On Firefox/Safari we fall back to downloading firmware.hex for Teensy Loader.":
    "— 通过 WebHID 一键烧录（Chrome/Edge）。在提示时按下白色编程按钮，并在浏览器对话框中选择该 Teensy。在 Firefox/Safari 上，我们会退而下载 firmware.hex 供 Teensy Loader 使用。",
  "— pairs with Website. Doesn't work on its own.":
    "— 需与 Website 配合使用。无法单独工作。",
  "— per-axis driver config: steps/deg, microsteps, driver model, motor current (for TMC drivers), soft limits, reverse direction, tracking compensation.":
    "— 每个轴的驱动器配置：步数/度、细分、驱动器型号、电机电流（TMC 驱动器）、软限位、反向、跟踪补偿。",
  "— roughly 300 lines, no external dependencies beyond the ES-module imports this page uses everywhere. If the browser doesn't expose WebHID, or you dismiss the device picker, or any step throws mid-flash, we fall back to the original path: save":
    "— 大约 300 行，除了本页面各处都在使用的 ES 模块导入外，没有任何外部依赖。如果浏览器不支持 WebHID、你关闭了设备选择器，或任何步骤在烧录过程中出错，我们会退回到原来的方式：保存",
  "— same VID:PID across models. The browser's device picker filters on those IDs, so only a Teensy in bootloader mode shows up in the dialog; the running OnStepX sketch, with its own USB identity, is ignored. That also means the dialog is empty until you press the program button — Chrome polls for new devices, so the Teensy pops in as soon as HalfKay activates.":
    "— 所有型号的 VID:PID 都相同。浏览器的设备选择器按这些 ID 进行过滤，因此只有处于 bootloader 模式的 Teensy 才会出现在对话框中；正在运行的 OnStepX 程序有自己的 USB 标识，会被忽略。这也意味着在你按下编程按钮之前对话框是空的 — Chrome 会轮询新设备，因此 HalfKay 一激活，Teensy 就会出现。",
  "— scroll up in the log for":
    "— 请在日志中向上滚动，查找来自 Validate.h 的",
  "— see the warning box.":
    "— 参见警告框。",
  "— several users saw large reading errors. Verify each sensor in ice water (0°C) and at body temperature (~37°C); if it's off, adjust BETA or switch to a DS18B20.":
    "— 多位用户遇到过较大的读数误差。请在冰水（0°C）和体温（~37°C）下分别校验每个传感器；如有偏差，请调整 BETA 或改用 DS18B20。",
  "— soft limits in degrees.":
    "— 以度为单位的软限位。",
  "— stand-alone controller for a small aluminium project box. External connectors for power, limit sense, illuminated reticle, PEC, ST4, USB. Internal header for a WeMos D1 Mini (WiFi).":
    "— 用于小型铝制工程盒的独立控制器。外部接口：电源、限位检测、照明十字线、PEC、ST4、USB。内部排针用于 WeMos D1 Mini（WiFi）。",
  "— step/dir, microsteps set on M0/M1, run current set in hardware (the":
    "— step/dir，细分由 M0/M1 设置，运行电流由硬件设定（",
  "— the E4 has no barrel jack, so a plug-and-socket PSU needs a screw-terminal pigtail. 5A min with peripherals. Watch polarity: Vin = +, GND = –.":
    "— E4 没有圆形电源插座，因此插头式电源需要一根接线端子转接线。带外设时至少 5A。注意极性：Vin = +，GND = –。",
  "— the ESP32's internal pull-ups are ~45kΩ, nowhere near enough to run an I2C bus, and stripping the module pull-ups is a common way to end up with a completely dead bus.":
    "— ESP32 的内部上拉电阻约为 ~45kΩ，远不足以驱动 I2C 总线，而拆掉模块上的上拉电阻是导致总线完全失效的常见原因。",
  "— the brain of the telescope. Runs on the controller board attached to the mount, drives the stepper drivers, talks LX200 to your client app (SkySafari, KStars, etc.). This is the default and what most people want.":
    "— 望远镜的大脑。运行在安装于支架上的控制主板上，驱动步进驱动器，并通过 LX200 协议与你的客户端应用（SkySafari、KStars 等）通信。这是默认选项，也是大多数人需要的。",
  "— the default limit is an e-stop, not a homing endstop. All of these pins are remappable: one working build uses":
    "— 默认限位是急停，而不是回原点限位开关。所有这些引脚都可以重新映射：一个可正常工作的构建使用了",
  "— the env is selected from the":
    "— env 在",
  "— the generated":
    "— 生成的",
  "— the latest commit on the upstream repo's main branch. Which upstream that is depends on the mode you picked at the top of the page:":
    "— 上游仓库 main 分支上的最新提交。具体是哪个上游仓库，取决于你在页面顶部选择的模式：",
  "— the plugin's own config, not yours), and the web UI is reachable at the IP it prints on the serial console.":
    "— 这是插件自己的配置，而不是你的），网页界面可通过它在串口控制台上打印的 IP 访问。",
  "— the south pole turns it on, removing the magnet turns it off, so magnet polarity matters. US5881: also unipolar. US1881 is a":
    "— 南极使其导通，移开磁铁则使其断开，因此磁铁极性很重要。US5881：同样是单极型。US1881 是一种",
  "— the workflow will clone":
    "— 工作流将克隆",
  "— this page.":
    "— 本页面。",
  "— to restore it, open DevTools → Console and run:":
    "— 如需恢复，请打开 DevTools → Console 并运行：",
  "— typical values are 5,000–50,000; anything outside 500–200,000 is flagged.":
    "— 典型值为 5,000–50,000；超出 500–200,000 的值会被标记。",
  "— which is why only one of those two can ever be enabled. If a focuser motor has no holding torque, this swap is the usual reason.":
    "— 这就是为什么这两者只能启用其中一个。如果调焦器电机没有保持力矩，通常就是这个接错导致的。",
  "— you don't combine them onto one chip. A typical full setup is: one board (ESP32 / Teensy / STM32) running OnStepX inside the mount, plus one ESP32 running SWS for the web UI, plus (optionally) one ESP32 running SHC inside a hand pendant. They all talk to each other at runtime over the links you configure (ST4 cable, serial, WiFi, BLE).":
    "— 你不能把它们合并到一块芯片上。典型的完整配置是：一块运行 OnStepX 的主板（ESP32 / Teensy / STM32）装在支架内，加上一块运行 SWS 的 ESP32 提供网页界面，再加上（可选）一块运行 SHC 的 ESP32 装在手控器内。它们在运行时通过你配置的链路（ST4 线缆、串口、WiFi、BLE）相互通信。",
  "— you get the latest OnStepX.":
    "— 你将获得最新的 OnStepX。",
  "→ configure on the SWS side in":
    "→ 在 SWS 端进行配置，位于",
  "→ flash again. Leaving it":
    "→ 再次烧录。如果一直保持",
  "→ flash → wait 1–2 min for the wipe to finish → set back to":
    "→ 烧录 → 等待 1–2 分钟完成擦除 → 改回",
  "→ network settings live in":
    "→ 网络设置位于",
  "↻ Reset":
    "↻ 重置",
  "↻ Reset to Defaults":
    "↻ 重置为默认值",
  "⏰ RTC & Timekeeping":
    "⏰ RTC 与计时",
  "⚙️ HTD3M Pulley 220T Dobson 254":
    "⚙️ HTD3M 皮带轮 220T Dobson 254",
  "⚠ ADC Non-Linearity:":
    "⚠ ADC 非线性：",
  "⚠ AUX7 is not available:":
    "⚠ AUX7 不可用：",
  "⚠ Active-high default:":
    "⚠ 默认高电平有效：",
  "⚠ Addressing:":
    "⚠ 寻址：",
  "⚠ Battery:":
    "⚠ 电池：",
  "⚠ Baud Rate Mismatch:":
    "⚠ 波特率不匹配：",
  "⚠ Camera in BULB Mode:":
    "⚠ 相机须处于 BULB 模式：",
  "⚠ Cold Start:":
    "⚠ 冷启动：",
  "⚠ Debounce is optional:":
    "⚠ 去抖动是可选的：",
  "⚠ Driver compatibility:":
    "⚠ 驱动器兼容性：",
  "⚠ E-Stop Effect:":
    "⚠ 急停效果：",
  "⚠ Factory jumpers:":
    "⚠ 出厂跳线帽：",
  "⚠ Filter cap vs response:":
    "⚠ 滤波电容与响应速度：",
  "⚠ Filtering Capacitor:":
    "⚠ 滤波电容：",
  "⚠ Focuser 1 goes on MOT-E, not MOT-Z.":
    "⚠ 调焦器 1 接 MOT-E，而不是 MOT-Z。",
  "⚠ Fuse the supply:":
    "⚠ 为电源加装保险丝：",
  "⚠ GEM/FORK Only:":
    "⚠ 仅限 GEM/FORK：",
  "⚠ Galvanic Isolation Required:":
    "⚠ 必须电气隔离：",
  "⚠ Heater power rating:":
    "⚠ 加热功率：",
  "⚠ I2C Address:":
    "⚠ I2C 地址：",
  "⚠ I2C header is shared:":
    "⚠ I2C 排针是共用的：",
  "⚠ Input Only Pins:":
    "⚠ 仅输入引脚：",
  "⚠ Input Only:":
    "⚠ 仅输入：",
  "⚠ LIMIT_STRICT Behavior:":
    "⚠ LIMIT_STRICT 行为：",
  "⚠ Libraries:":
    "⚠ 库：",
  "⚠ Library:":
    "⚠ 库：",
  "⚠ Magnet:":
    "⚠ 磁铁：",
  "⚠ Match heater voltage to your supply:":
    "⚠ 加热带电压须与电源匹配：",
  "⚠ Module Types:":
    "⚠ 模块类型：",
  "⚠ NO vs NC:":
    "⚠ NO 与 NC：",
  "⚠ No external MOSFET:":
    "⚠ 无需外接 MOSFET：",
  "⚠ Onboard MOSFET — nothing to add:":
    "⚠ 板载 MOSFET — 无需额外添加：",
  "⚠ PASSWORD_DEFAULT is still \"password\" — change it before deploying.":
    "⚠ PASSWORD_DEFAULT 仍为「password」— 部署前请修改。",
  "⚠ Pick one radio mode:":
    "⚠ 只能选择一种无线模式：",
  "⚠ Preflight: 0 errors, 1 warning":
    "⚠ 预检：0 个错误，1 个警告",
  "⚠ Pull-up:":
    "⚠ 上拉电阻：",
  "⚠ RSERIES must match the board:":
    "⚠ RSERIES 必须与主板一致：",
  "⚠ Read this before buying DS18B20s for an E4.":
    "⚠ 为 E4 购买 DS18B20 之前请先阅读此内容。",
  "⚠ Sensor Selection:":
    "⚠ 传感器选择：",
  "⚠ Shared Pin:":
    "⚠ 共用引脚：",
  "⚠ Steps/Micron:":
    "⚠ 步数/微米：",
  "⚠ Symptom:":
    "⚠ 症状：",
  "⚠ TMC2209 Default:":
    "⚠ TMC2209 默认设置：",
  "⚠ TRS Plug Wiring Varies:":
    "⚠ TRS 插头接线各不相同：",
  "⚠ Temperature Range:":
    "⚠ 温度范围：",
  "⚠ Terrans Industry V5 Pro — support UNDER TEST / support EN COURS DE TEST":
    "⚠ Terrans Industry V5 Pro — 支持仍在测试中",
  "⚠ Two independent zones:":
    "⚠ 两个独立区域：",
  "⚠ UNDER TEST — not yet verified on real hardware. ESP32 half of the Terrans Industry V5 Pro (the on-board ESP8266 runs its own SmartWebServer and is a separate, optional flash). PINMAP is emitted as OFF with the board pin map inlined in Config.h. Stock drivers are TMC2225 \"Dual V2\" modules strapped standalone, so the model is TMC2225S: microsteps are set on M0/M1 and run current is fixed in hardware (IRUN/IHOLD do nothing). Geometry defaults are the EXOS2/CG5/EQ5 class — 200 steps x 32 microsteps x 3:1 belt x 144:1 worm = 7680 steps/deg. Bluetooth is on by default, matching the stock firmware. The focuser (Axis4) slot and every auxiliary feature are OFF: the kit ships with no focuser driver fitted and has no dew-heater outputs. Set the board switch to the ESP32 position before flashing.":
    "⚠ 测试中 — 尚未在真实硬件上验证。这是 Terrans Industry V5 Pro 的 ESP32 部分（板载 ESP8266 运行自己的 SmartWebServer，需单独烧录，且为可选）。PINMAP 输出为 OFF，主板引脚映射直接内联在 Config.h 中。原装驱动器是以独立模式接线的 TMC2225「Dual V2」模块，因此型号为 TMC2225S：细分由 M0/M1 设置，运行电流由硬件固定（IRUN/IHOLD 不起作用）。几何参数默认值适用于 EXOS2/CG5/EQ5 级别 — 200 步 x 32 细分 x 3:1 皮带 x 144:1 蜗轮 = 7680 步/度。蓝牙默认开启，与原装固件一致。调焦器（Axis4）槽位和所有辅助功能均为 OFF：该套件出厂时未安装调焦器驱动器，也没有除露加热带输出。烧录前请将主板上的开关拨到 ESP32 位置。",
  "⚠ Use ADC1 pins only:":
    "⚠ 仅使用 ADC1 引脚：",
  "⚠ Voltage Level:":
    "⚠ 电压电平：",
  "⚠ Voltage:":
    "⚠ 电压：",
  "⚠ Wiring:":
    "⚠ 接线：",
  "⚡ USB / Serial / Power":
    "⚡ USB / 串口 / 电源",
  "✓ Preflight: all checks pass.":
    "✓ 预检：所有检查均已通过。",
  "✗ Axis 1 driver model is OFF — set it on the Axis1 tab.":
    "✗ 轴 1 驱动器型号为 OFF — 请在 Axis1 选项卡中设置。",
  "✗ Axis 2 driver model is OFF — set it on the Axis2 tab.":
    "✗ 轴 2 驱动器型号为 OFF — 请在 Axis2 选项卡中设置。",
  "🌡️ Temperature Sensors":
    "🌡️ 温度传感器",
  "💡 No VRef pot on the E4:":
    "💡 E4 上没有 VRef 电位器：",
  "💧 Dew Heater Components":
    "💧 除露加热带组件",
  "📡 E4 Guide":
    "📡 E4 指南",
  "📦 MaxSTM3.6 Case":
    "📦 MaxSTM3.6 外壳",
  "📷 Canon Rotator/Derotator":
    "📷 Canon 旋转器/消旋器",
  "📷 Intervalometer / DSLR":
    "📷 间隔拍摄器 / 单反",
  "🔌 Stepper Motors":
    "🔌 步进电机",
  "🔧 GT2 Gearbox":
    "🔧 GT2 减速箱",
  "🔭 Motorized Focuser":
    "🔭 电动调焦器",
  "🛤️ Home & Limit Switches":
    "🛤️ 原点与限位开关",
  "🛰️ GPS Modules":
    "🛰️ GPS 模块",
  "🧰 Fysetc E4 Case":
    "🧰 Fysetc E4 外壳",
  "🧲 PEC Index Sensors":
    "🧲 PEC 索引传感器",
});
