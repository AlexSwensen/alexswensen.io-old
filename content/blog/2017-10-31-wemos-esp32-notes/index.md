---
title: "\"WeMos\" ESP32 Notes"
date: 2017-10-31T22:19:31-05:00
description: "My notes on the fake WeMos branded ESP32."
featuredImage: "./wemos.jpg"
---

## If you haven't caught on to the ESP32 yet, you really should.

It's a wonder of engineering. At ~$10 USD, you get 2.4ghz wifi b/g/n, Bluetooth LE,
9 capacitive touch pins, tons of IO, and a mega fast processor with more than enough room
for your project in a wonderful little Arduino Compatible package.

After [a little bit of setup](https://github.com/espressif/arduino-esp32#installation-instructions), you are good to go!
Alternatively, you can also [run Micropython on it](https://github.com/micropython/micropython-esp32).


Thats it for ESP32 overview. These are my notes on 1 very specific ESP32 package.

## The "WeMos" ESP32

According to [this forum post](https://forum.wemos.cc/topic/372/fake-wemos-lolin-esp32-with-oled/2), the "WeMos" labeled ESP32 is a knockoff re-branded `D-duino-32`.

Simply for my sanity, I'll be referring to it as the WeMos ESP32, as its featured in the blatantly stolen branding.

This board features a OLED display right on the board,
along with `EN` and `BOOT` buttons surface mounted.

My particular one also has a female JST header next to the micro USB port,
which I assume is for a LiPo battery,
although it is unclear if it is really for that.

The OLED is an SSD1306 in plain white with a resolution of 128x64 pixels.
The driver library [can be found here](https://github.com/squix78/esp8266-oled-ssd1306)
and a nice little inscrutables tutorial for getting setup can be found [here](http://www.instructables.com/id/ESP32-With-Integrated-OLED-WEMOSLolin-Getting-Star/).

The OLED display is driven over I2C, with SDA linked to pin `5`, and SCL linked to pin `4`.
<br> The I2C Address of the display is at `0x3c`

The wiring of I2C, being as it is hard wired into the board, and reversed from normal, makes addressing other I2C devices a bit more of a challenge.
Currently im trying to setup a BME280 with it.

I will update this post over time with more notes on this cool little device as a find them.
