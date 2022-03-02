export let deviceSpecifications = {
/*
	"ESP8266" : {
    nodename:'esp8266',
    name:'ESP8266',
		"title":"<b>ESP8266</b><br>",
		"speed":"115200",
		"boardID":"ESP module with ESP8266",
		"img":"devinfo/media/Node-MCU-ESP.jpg",
		"description":"<BR><BR><input type='button' onclick='loadDoc();' value='Open Documentation' /> <BR><BR>To use ESP8266, simply connecto to MicroPython board using Wifi. Micropython must be previously installed.",
		"toolbox":"esp8266.xml",
		"pinout": [
	    ["D0 / GPIO16", "16"],
	    ["D1 / GPIO05", "5"],
	    ["D2 / GPIO04", "4"],
	    ["D3 / GPIO00", "0"],
	    ["D4 / LED / GPIO02", "2"],
	    ["D5 / GPIO14", "14"],
	    ["D6 / GPIO12", "12"],
	    ["D7 / GPIO13", "13"],
	    ["D8 / GPIO15", "15"],
	    ["RX / GPIO03", "3"],
	    ["TX / GPIO01", "1"],
	    ["SD3 / GPIO10", "10"],
	    ["SD2 / GPIO09", "9"],
	    ["SD1 / GPIO08", "8"],
	    ["CMD / GPIO11", "11"],
	    ["SD0 / GPIO07", "7"],
	    ["CLK / GPIO06", "6"]
		],
		"serial_packet_size":"500"
	},
	"ESP32S2": {
    nodename:'esp32s2',
    name:'ESP32S2',
		"title":"<b>ESP32 S2</b><br>",
		"speed":"115200",
		"boardID":"ESP32-S2",
		"img":"devinfo/media/pinagem-franzininho-wifi-3ee791cdc4872c0837b81cd12994e047.png",
		"description":"<BR><BR>Franzininho Wifi with CircuitPython. Image source and more details: https://docs.franzininho.com.br/docs/franzininho-wifi/franzininho-wifi/ ",
		"toolbox":"esp32S2.xml",
		"pinout": [
	    ["IO0/Switch", "0"],
	    ["IO1/AN1", "1"],
	    ["IO2/AN2", "2"],
	    ["IO3/AN3", "3"],
	    ["IO4/AN4", "4"],
	    ["IO5/AN5", "5"],
	    ["IO6/AN6", "6"],
	    ["IO7/AN7", "7"],
	    ["IO8/AN8", "8"],
	    ["IO9/AN9", "9"],
	    ["IO10/AN10", "10"],
	    ["IO11/AN11", "11"],
	    ["IO12/AN12", "12"],
	    ["IO13/AN13", "13"],
	    ["IO14/AN14", "14"],
	    ["IO15/AN15", "15"],
	    ["IO16/AN16", "16"],
	    ["IO17/AN17", "17"],
	    ["IO18/LED", "18"],
	    ["IO19/AN19", "19"],
	    ["IO20/AN20", "20"],
	    ["IO21", "21"],
	    ["IO22", "22"],
	    ["IO23", "23"],
	    ["IO24", "23"],
	    ["IO25", "23"]
		],
		"serial_packet_size":"500"
	},
	"ESP32Basic": {
    nodename:'esp32',
    name:'ESP32Basic',
		"title":"<b>ESP32 (Basic)</b><br>",
		"speed":"115200",
		"boardID":"ESP32",
		"img":"devinfo/media/ESP32-Pinout.jpg",
		"description":"",
		"toolbox":"esp32-basic.xml",
		"pinout": [
			["D2 / CS / ADC2_2 / GPIO2", "2"],
			["D4 / ADC2_0 / GPIO04", "4"],
			["D12 / ADC2_5 / GPIO12", "12"],
			["D13 / ADC2_4 / GPIO13", "13"],
			["D14 / ADC2_6 / GPIO14", "14"],
			["D15 / ADC2_3 / GPIO15", "15"],
			["D18 / SCK / GPIO18", "18"],
			["D19 / MISO / GPIO19", "19"],
			["D21 / SDA / GPIO21", "21"],
			["D22 / SCL / GPIO22 / RTS 0", "22"],
			["D23 / MOSI / GPIO23", "23"],
			["D25 / DAC 1 / ADC2_8 / GPIO25", "25"],
			["D26 / DAC 2 / ADC2_9 / GPIO26", "26"],
			["D27 / ADC2_7 / GPIO27", "27"],
			["D32 / ADC1_4 / GPIO32", "32"],
			["D33 / ADC1_5 / GPIO33", "33"],
			["D34 / ADC1_6 / GPIO34", "34"],
			["D35 / ADC1_7 / GPIO35", "35"],
			["VP / ADC1_0 / GPIO36", "36"],
			["VN / ADC1_3 / GPIO39", "39"],
			["CS / GPIO05", "5"],
			["TXD0 / GPIO01", "1"],
			["RXD0 / GPIO03", "3"],
			["RXD 1 / GPIO09", "9"],
			["TXD 1 / GPIO10", "10"],
			["RTS 1 / GPIO11", "11"],
			["TXD2 / GPIO17", "17"],
			["RXD2 / GPIO16", "16"],
			["ADC2_1 / GPIO0", "0"],
			["CTS2 / SPI_D / GPIO08", "8"],
			["RTS2 / SPI_Q / GPIO07", "7"],
			["CTS1 / SPI_CLK / GPIO06", "6"]
		],
		"serial_packet_size":"500"
	},*/
	"ESP32": {
    nodename:'esp32',
    name:'ESP32',
		"languages":['MicroPython','CircuitPython'],
		"img":"ESP32.svg",
		"title":"<b>ESP32</b><br>",
		"description":"",
		"toolbox":"esp32.xml",
		"pinout": [
			["D2 / CS / ADC2_2 / GPIO2", "2"],
			["D4 / ADC2_0 / GPIO04", "4"],
			["D12 / ADC2_5 / GPIO12", "12"],
			["D13 / ADC2_4 / GPIO13", "13"],
			["D14 / ADC2_6 / GPIO14", "14"],
			["D15 / ADC2_3 / GPIO15", "15"],
			["D18 / SCK / GPIO18", "18"],
			["D19 / MISO / GPIO19", "19"],
			["D21 / SDA / GPIO21", "21"],
			["D22 / SCL / GPIO22 / RTS 0", "22"],
			["D23 / MOSI / GPIO23", "23"],
			["D25 / DAC 1 / ADC2_8 / GPIO25", "25"],
			["D26 / DAC 2 / ADC2_9 / GPIO26", "26"],
			["D27 / ADC2_7 / GPIO27", "27"],
			["D32 / ADC1_4 / GPIO32", "32"],
			["D33 / ADC1_5 / GPIO33", "33"],
			["D34 / ADC1_6 / GPIO34", "34"],
			["D35 / ADC1_7 / GPIO35", "35"],
			["VP / ADC1_0 / GPIO36", "36"],
			["VN / ADC1_3 / GPIO39", "39"],
			["CS / GPIO05", "5"],
			["TXD0 / GPIO01", "1"],
			["RXD0 / GPIO03", "3"],
			["RXD 1 / GPIO09", "9"],
			["TXD 1 / GPIO10", "10"],
			["RTS 1 / GPIO11", "11"],
			["TXD2 / GPIO17", "17"],
			["RXD2 / GPIO16", "16"],
			["ADC2_1 / GPIO0", "0"],
			["CTS2 / SPI_D / GPIO08", "8"],
			["RTS2 / SPI_Q / GPIO07", "7"],
			["CTS1 / SPI_CLK / GPIO06", "6"]
		],
		"serial_packet_size":"500"
	},/*
	"RPIPico": {
    nodename:'rpipico',
    name:'RPIPico',
		"title":"<b>Raspberry Pi Pico</b><br>",
		"speed":"115200",
		"boardID":"Raspberry Pi Pico with RP2040",
		"img":"devinfo/media/RPI_Pico.svg",
		"description":"",
		"toolbox":"rpi_pico.xml",
		"pinout": [
			["LED / GPIO25", "25"],
	    ["Pin 1 / GPIO0", "0"],
	    ["Pin 2 / GPIO1", "1"],
	    ["Pin 4 / GPIO2", "4"],
	    ["Pin 5 / GPIO3", "3"],
	    ["Pin 6 / GPIO4", "4"],
	    ["Pin 7 / GPIO5", "5"],
	    ["Pin 9 / GPIO6", "6"],
	    ["Pin 10 / GPIO7", "7"],
	    ["Pin 11 / GPIO8", "8"],
	    ["Pin 12 / GPIO9", "9"],
	    ["Pin 14 / GPIO10", "10"],
	    ["Pin 15 / GPIO11", "11"],
	    ["Pin 16 / GPIO12", "12"],
	    ["Pin 17 / GPIO13", "13"],
	    ["Pin 19 / GPIO14", "14"],
	    ["Pin 20 / GPIO15", "15"],
	    ["Pin 21 / GPIO16", "16"],
	    ["Pin 22 / GPIO17", "17"],
	    ["Pin 24 / GPIO18", "18"],
	    ["Pin 25 / GPIO19", "19"],
	    ["Pin 26 / GPIO20", "20"],
	    ["Pin 27 / GPIO21", "21"],
	    ["Pin 29 / GPIO22", "22"],
	    ["Pin 26 / ADC0 / GPIO26", "26"],
	    ["Pin 27 / ADC1 / GPIO27", "27"],
	    ["Pin 28 / ADC2 / GPIO28", "28"],
	    ["Internal Temp Sensor / ADC3", "4"]
		],
		"serial_packet_size":"500"
	},
	"WemosD1mini": {
    nodename:'wemosd1mini',
    name:'WemosD1mini',
		"title":"<b>ESP8266 - Wemos D1 Mini</b><br>",
		"speed":"115200",
		"boardID":"ESP module with ESP8266",
		"img":"devinfo/media/Wemos-D1-Mini.png",
		"description":"<BR><BR><input type='button' onclick='loadDoc();' value='Open Documentation' /> <BR><BR>To use ESP8266, simply connecto to MicroPython board using Wifi. Micropython must be previously installed. Figure source: https://devonhubner.org/Using_MicroPython_with_a_WeMos_D1_Mini/",
		"toolbox":"esp8266.xml",
		"pinout": [
			["D0 / GPIO16", "16"],
			["D5 / SCX / GPIO14", "14"],
			["D6 / MISO / GPIO12", "12"],
			["D7 / MOSI / GPIO13", "13"],
			["D8 / SS / GPIO15", "15"],
			["D4 / GPIO02", "2"],
			["D3 / GPIO00", "0"],
			["D2 / SDA / GPIO04", "4"],
			["D1 / SCL / GPIO05", "5"],
			["RX / GPIO03", "3"],
			["TX / GPIO01", "1"]
		],
		"serial_packet_size":"100"
	},
	"ESP32Oled": {
    nodename:'esp32',
    name:'ESP32oled',
		"title":"<b>ESP32 board with OLED LCD and Battery</b><br>",
		"speed":"115200",
		"boardID":"ESP32",
		"img":"devinfo/media/esp32-oled.png",
		"description":"Yet another ESP32 board",
		"toolbox":"esp32.xml",
		"pinout": [
			["SVP / GPIO36", "36"],
			["SVN / GPIO39", "39"],
			["P34 / GPIO24", "34"],
			["P35 / GPIO35", "35"],
			["P32 / GPIO32", "32"],
			["P33 / GPIO33", "33"],
			["P25 / GPIO25", "25"],
			["P26 / GPIO26", "26"],
			["P27 / GPIO27", "27"],
			["P14 / GPIO14", "14"],
			["P12 / GPIO12", "12"],
			["P13 / GPIO13", "13"],
			["SD2 / GPIO09", "9"],
			["SD3 / GPIO10", "10"],
			["CMD / GPIO11", "11"],
			["SD0 / GPIO07", "7"],
			["SD1 / GPIO08", "8"],
			["P15 / GPIO15", "15"],
			["P2 / GPIO02", "2"],
			["P0 / GPIO00", "0"],
			["P4 / OLED_SCL / GPIO04", "4"],
			["P16 / GPIO16", "16"],
			["P17 / GPIO17", "17"],
			["P5 / OLED_SDA / GPIO05", "5"],
			["P18 / VSPI_SCK / GPIO18", "18"],
			["P19 / VSPI_MISO / GPIO19", "19"],
			["P21 / GPIO21", "21"],
			["RX / GPIO03", "3"],
			["TX / GPIO01", "1"],
			["P22 / GPIO22", "22"],
			["P23 / VSPI_MOSI / GPIO23", "23"]
		],
		"serial_packet_size":"500"
	},
	"ESP32LoRa": {
    nodename:'esp32',
    name:'ESP32LoRa',
		"title":"<b>ESP32 board with OLED LCD and LoRa</b><br>",
		"speed":"115200",
		"boardID":"ESP32",
		"img":"devinfo/media/ESP32-LoRa.jpg",
		"description":"Yet another ESP32 board",
		"toolbox":"esp32.xml",
		"pinout": [
			["RX / GPIO03", "3"],
			["TX / GPIO01", "1"],
			["0 / GPIO00", "0"],
			["22 / SCL / GPIO22", "22"],
			["23 / GPIO23", "23"],
			["2 / GPIO02", "2"],
			["17 / TX2 / GPIO17", "17"],
			["21 / SDA / GPIO21", "21"],
			["13 / GPIO13", "13"],
			["12 / GPIO12", "12"],
			["25 / LED / GPIO25", "25"],
			["33 / LoRa_DIO1 / GPIO33", "33"],
			["32 / LoRa_DIO2 / GPIO32", "32"],
			["35 / GPIO35", "35"],
			["34 / GPIO34", "34"],
			["39 / GPIO39", "39"],
			["38 / GPIO38", "38"],
			["37 / GPIO37", "37"],
			["36 / GPIO36", "36"]
		],
		"serial_packet_size":"500"
	},
	"M5Stick": {
    nodename:'m5stick',
    name:'M5Stick',
		"title":"<b>M5Stick ESP32</b><br>",
		"speed":"115200",
		"boardID":"ESP32",
		"img":"devinfo/media/m5stickc.png",
		"description":"M5STICK-C is based on ESP32 processor. More info at:",
		"toolbox":"esp32.xml",
		"serial_packet_size":"100"
	},
	"STM32Nucleo": {
    nodename:'stm32nucleo',
    name:'STM32Nucleo',
		"title":"<b>mBed: NUCLEO-F446RE</b><br>",
		"speed":"115200",
		"boardID":"NUCLEO-F446RE with STM32F4x",
		"img":"devinfo/media/NUCLEO-F446RE.png",
		"description":"",
		"toolbox":"stm32.xml",
		"serial_packet_size":"100"
	},
	"RPI4": {
    nodename:'rpi4',
    name:'RPI4',
		"title":"<b>Raspberry Pi 4 </b><br>",
		"speed":"115200",
		"boardID":"Linux",
		"img":"devinfo/media/rpi4.png",
		"description":"Use Raspberry Pi 4 with WebSocketServerREPL. For OpenCV features, please install opencv with apt install python-opencv",
		"toolbox":"linux.xml",
		"serial_packet_size":"10"
	},
	"LegoEV3": {
    nodename:'legoev3',
    name:'LegoEV3',
		"title":"<b>Lego EV3 </b><br>",
		"speed":"115200",
		"boardID":"ev3",
		"img":"",
		"description":"Help needed! We need a Lego EV3 to build the blocks to the intelligent brick, or help us designing the blocks, if you have an EV3 Inteligent Brick!",
		"toolbox":"",
		"serial_packet_size":"100"
	},
	"BBBlack": {
    nodename:'bbblack',
    name:'BBBlack',
		"title":"<b>Beagle Bone Black</b><br>",
		"speed":"115200",
		"boardID":"Linux",
		"img":"devinfo/media/cape-headers.png",
		"description":"",
		"toolbox":"bbblack.xml",
		"serial_packet_size":"100"
	},
	"BBC": {
    nodename:'bbc',
    name:'BBC',
		"title":"<b>BBC MicroBit</b><br>",
		"speed":"115200",
		"boardID":"micro:bit with nRF51822",
		"img":"devinfo/media/microbit.png",
		"description":"Image source and more info: <a href=https://microbit.org/get-started/user-guide/features-in-depth/>https://microbit.org/get-started/user-guide/features-in-depth/</a>",
		"toolbox":"esp32.xml",
		"serial_packet_size":"1"
	},*/
	"Arduino": {
    nodename:'arduino',
    name:'Arduino',
		"languages":['Snek'],
		"img":"Arduino.svg",
		"title":"<b>Arduino UNO and Arduino MEGA. Image source: https://content.arduino.cc/assets/Pinout-UNOrev3_latest.png</b><br>",
		"description":"",
		"toolbox":"arduino.xml",
		"pinout": [
			["0 / RX", "D0"],
			["1 / TX", "D1"],
			["D2", "D2"],
			["D3", "D3"],
			["D4", "D4"],
			["D5", "D5"],
			["D6", "D6"],
			["D7", "D7"],
			["D8", "D8"],
			["D9", "D9"],
			["D10", "D10"],
			["D11", "D11"],
			["D12", "D12"],
			["LED / D13", "D13"],
			["A0", "A0"],
			["A1", "A1"],
			["A2", "A2"],
			["A3", "A3"],
			["A4", "A4"],
			["A5", "A5"]
		],

		"serial_packet_size":"10"
	},/*
	"ArduinoUno2": {
    nodename:'arduino',
    name:'ArduinoUno2',
		"title":"<b>Arduino UNO and Arduino MEGA. Image source: https://content.arduino.cc/assets/Pinout-UNOrev3_latest.png</b><br>",
		"speed":"115200",
		"boardID":"Snek",
		"img":"https://content.arduino.cc/assets/Pinout-UNOrev3_latest.png",
		"description":"",
		"toolbox":"arduino.xml",
		"pinout": [
			["0 / RX", "D0"],
			["1 / TX", "D1"],
			["D2", "D2"],
			["D3", "D3"],
			["D4", "D4"],
			["D5", "D5"],
			["D6", "D6"],
			["D7", "D7"],
			["D8", "D8"],
			["D9", "D9"],
			["D10", "D10"],
			["D11", "D11"],
			["D12", "D12"],
			["LED / D13", "D13"],
			["A0", "A0"],
			["A1", "A1"],
			["A2", "A2"],
			["A3", "A3"],
			["A4", "A4"],
			["A5", "A5"]
		],

		"serial_packet_size":"10"
	}*/
}

