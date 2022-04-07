const defaultExamplesHostname = 'https://raw.githubusercontent.com/BIPES/examples-libraries/main/blocks-examples/'
export const knownExamples = {
  PID_water_boiler:{
    hostname:defaultExamplesHostname,
    file:'pid_water_temp.xml'
  },
  PID_dc_motor:{
    hostname:defaultExamplesHostname,
    file:'pid_dc_motor.xml'
  },
  PID_dc_motor_interrupt:{
    hostname:defaultExamplesHostname,
    file:'pid_dc_motor_interrupt.xml'
  },
  PID_thermal_plant_ds1820:{
    hostname:defaultExamplesHostname,
    file:'pid_thermal_plant_ds1820.xml'
  },
  TM1640:{
    hostname:defaultExamplesHostname,
    file:'tm1640.xml'
  },
  songs:{
    hostname:defaultExamplesHostname,
    file:'songs.xml'
  }
}

export const knownLibs = {
  PID:{
    hostname:'https://raw.githubusercontent.com/gastmaier/micropython-simple-pid/master/simple_pid',
    file:'PID.py'
  },
  I2CLCD:{
    hostname:'https://raw.githubusercontent.com/Bucknalla/micropython-i2c-lcd/master/lib/',
    file:['i2c_lcd.py', 'i2c_lcd_backlight.py', 'i2c_lcd_screen.py']
  },
  ST7789:{
    hostname:'https://github.com/devbis/st7789py_mpy/blob/master/',
    file:'st7789py.py'
  },
  SSD1306:{
    hostname:'https://raw.githubusercontent.com/adafruit/micropython-adafruit-ssd1306/master/',
    file:'ssd1306.py'
  },
  TM1640:{
    hostname:'https://raw.githubusercontent.com/mcauser/micropython-tm1640/master/',
    file:'tm1640.py'
  },
  HCSR04:{
    hostname:'https://raw.githubusercontent.com/rsc1975/micropython-hcsr04/master/',
    file:'hcsr04.py'
  },
  mini_micropyGPS:{
    hostname:'https://raw.githubusercontent.com/rafaelaroca/mini_micropyGPS/master/esp32/',
    file:'mini_micropyGPS.py'
  },
  BMP180:{
    hostname:'https://raw.githubusercontent.com/micropython-IMU/micropython-bmp180/master/',
    file:'bmp180.py'
  },
  CCS811:{
    hostname:'https://raw.githubusercontent.com/Notthemarsian/CCS811/master/',
    file:'CCS811.py'
  },
  MPU9250:{
    hostname:'https://bipes.net.br/ide/pylibs/',
    file:'mpu9250.py'
  },
  MPU6500:{
    hostname:'https://bipes.net.br/ide/pylibs/',
    file:'mpu6500.py'
  },
  AK8963:{
    hostname:'https://bipes.net.br/ide/pylibs/',
    file:'ak8963.py'
  },
  MFRC522:{
    hostname:'https://bipes.net.br/ide/pylibs/',
    file:'mfrc522.py'
  },
  ble_advertising:{
    hostname:'https://bipes.net.br/ide/pylibs/',
    file:'ble_advertising.py',
  },
  ble_uart_repl:{
    hostname:'https://bipes.net.br/ide/pylibs/',
    file:'ble_uart_repl.py',
  },
  ble_uart_peripheral:{
    hostname:'https://bipes.net.br/ide/pylibs/',
    file:'ble_uart_peripheral.py',
  },
  rtttl:{
    hostname:'https://bipes.net.br/ide/pylibs/',
    file:'rtttl.py',
  },
  songs:{
    hostname:'https://bipes.net.br/ide/pylibs/',
    file:'songs.py',
  },
  MCP23017:{
    hostname:'https://bipes.net.br/ide/pylibs/',
    file:'mcp23017.py'
  }
}

const defautlDocsHostname = 'https://docs.google.com/document/d/e/2PACX-1vSk-9T56hP9K9EOhkF5SoNzsYl4TzDk-GEDnMssaFP_m-LEfI6IU-uRkkLP_HoONK0QmMrZVo_f27Fw'
export const knownDocs = {
  neopixel:{
    hostname:defautlDocsHostname,
    file:'pub'
  },
  TM1640:{
    hostname:defautlDocsHostname,
    file:'pub#h.iw35vui9vzi1'
  },
  sound:{
    hostname:defautlDocsHostname,
    file:'pub'
  },
  mpu6050:{
    hostname:defautlDocsHostname,
    file:'pub'
  },
  ds1820:{
    hostname:defautlDocsHostname,
    file:'pub#h.w84555jgod5j'
  },
  mfrc522:{
    hostname:defautlDocsHostname,
    file:'pub#h.owhbali4ayaj'
  },
  encoder:{
    hostname:defautlDocsHostname,
    file:'pub'
  },
  simple_pid:{
    hostname:'https://micropython-simple-pid.readthedocs.io',
    file:'en/latest/index.html'
  }
}
