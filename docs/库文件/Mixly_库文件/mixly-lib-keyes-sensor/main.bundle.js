/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/block.js":
/*!*****************************!*\
  !*** ./src/blocks/block.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BMP388_INIT: () => (/* binding */ BMP388_INIT),
/* harmony export */   BMP388_READ: () => (/* binding */ BMP388_READ),
/* harmony export */   TCS34725_Get_RGB: () => (/* binding */ TCS34725_Get_RGB),
/* harmony export */   TFT_SD_display: () => (/* binding */ TFT_SD_display),
/* harmony export */   TFT_SD_init: () => (/* binding */ TFT_SD_init),
/* harmony export */   encoder_button: () => (/* binding */ encoder_button),
/* harmony export */   ke_1602lcd: () => (/* binding */ ke_1602lcd),
/* harmony export */   ke_1602lcd_clear: () => (/* binding */ ke_1602lcd_clear),
/* harmony export */   ke_1602lcd_init: () => (/* binding */ ke_1602lcd_init),
/* harmony export */   ke_1602lcd_left: () => (/* binding */ ke_1602lcd_left),
/* harmony export */   ke_1602lcd_print2: () => (/* binding */ ke_1602lcd_print2),
/* harmony export */   ke_1602lcd_right: () => (/* binding */ ke_1602lcd_right),
/* harmony export */   ke_18b20: () => (/* binding */ ke_18b20),
/* harmony export */   ke_2004lcd: () => (/* binding */ ke_2004lcd),
/* harmony export */   ke_4digitdisplay_Brightness: () => (/* binding */ ke_4digitdisplay_Brightness),
/* harmony export */   ke_4digitdisplay_Time: () => (/* binding */ ke_4digitdisplay_Time),
/* harmony export */   ke_4digitdisplay_displayNumber: () => (/* binding */ ke_4digitdisplay_displayNumber),
/* harmony export */   ke_4digitdisplay_displayString: () => (/* binding */ ke_4digitdisplay_displayString),
/* harmony export */   ke_4digitdisplay_init: () => (/* binding */ ke_4digitdisplay_init),
/* harmony export */   ke_4digitdisplay_power: () => (/* binding */ ke_4digitdisplay_power),
/* harmony export */   ke_4digitdisplay_showDot: () => (/* binding */ ke_4digitdisplay_showDot),
/* harmony export */   ke_ADKey: () => (/* binding */ ke_ADKey),
/* harmony export */   ke_BMP280_READ: () => (/* binding */ ke_BMP280_READ),
/* harmony export */   ke_Current: () => (/* binding */ ke_Current),
/* harmony export */   ke_DHT: () => (/* binding */ ke_DHT),
/* harmony export */   ke_Gesture_APDS: () => (/* binding */ ke_Gesture_APDS),
/* harmony export */   ke_MAX3010X_HR: () => (/* binding */ ke_MAX3010X_HR),
/* harmony export */   ke_MAX3010X_Value: () => (/* binding */ ke_MAX3010X_Value),
/* harmony export */   ke_MPU6050: () => (/* binding */ ke_MPU6050),
/* harmony export */   ke_MPU6050_update: () => (/* binding */ ke_MPU6050_update),
/* harmony export */   ke_Matrix_POS: () => (/* binding */ ke_Matrix_POS),
/* harmony export */   ke_Matrix_Rotation: () => (/* binding */ ke_Matrix_Rotation),
/* harmony export */   ke_OLED_circle: () => (/* binding */ ke_OLED_circle),
/* harmony export */   ke_OLED_fullcircle: () => (/* binding */ ke_OLED_fullcircle),
/* harmony export */   ke_OLED_fullrect: () => (/* binding */ ke_OLED_fullrect),
/* harmony export */   ke_OLED_fullroundrect: () => (/* binding */ ke_OLED_fullroundrect),
/* harmony export */   ke_OLED_fulltriangle: () => (/* binding */ ke_OLED_fulltriangle),
/* harmony export */   ke_OLED_init: () => (/* binding */ ke_OLED_init),
/* harmony export */   ke_OLED_line: () => (/* binding */ ke_OLED_line),
/* harmony export */   ke_OLED_piexl: () => (/* binding */ ke_OLED_piexl),
/* harmony export */   ke_OLED_rect: () => (/* binding */ ke_OLED_rect),
/* harmony export */   ke_OLED_roundrect: () => (/* binding */ ke_OLED_roundrect),
/* harmony export */   ke_OLED_string: () => (/* binding */ ke_OLED_string),
/* harmony export */   ke_OLED_triangle: () => (/* binding */ ke_OLED_triangle),
/* harmony export */   ke_Piezo: () => (/* binding */ ke_Piezo),
/* harmony export */   ke_UV: () => (/* binding */ ke_UV),
/* harmony export */   ke_Voltage: () => (/* binding */ ke_Voltage),
/* harmony export */   ke_a_Write: () => (/* binding */ ke_a_Write),
/* harmony export */   ke_adxl345: () => (/* binding */ ke_adxl345),
/* harmony export */   ke_alcohol: () => (/* binding */ ke_alcohol),
/* harmony export */   ke_alcohol_D: () => (/* binding */ ke_alcohol_D),
/* harmony export */   ke_analog_t: () => (/* binding */ ke_analog_t),
/* harmony export */   ke_avoid: () => (/* binding */ ke_avoid),
/* harmony export */   ke_bluetooth: () => (/* binding */ ke_bluetooth),
/* harmony export */   ke_bmp180: () => (/* binding */ ke_bmp180),
/* harmony export */   ke_button: () => (/* binding */ ke_button),
/* harmony export */   ke_buzzer: () => (/* binding */ ke_buzzer),
/* harmony export */   ke_crash: () => (/* binding */ ke_crash),
/* harmony export */   ke_dht11: () => (/* binding */ ke_dht11),
/* harmony export */   ke_ds1307_GetTime: () => (/* binding */ ke_ds1307_GetTime),
/* harmony export */   ke_ds1307_SetTime: () => (/* binding */ ke_ds1307_SetTime),
/* harmony export */   ke_ds1307_SetTime2: () => (/* binding */ ke_ds1307_SetTime2),
/* harmony export */   ke_ds3231_GetTime: () => (/* binding */ ke_ds3231_GetTime),
/* harmony export */   ke_ds3231_SetTime: () => (/* binding */ ke_ds3231_SetTime),
/* harmony export */   ke_ds3231_SetTime2: () => (/* binding */ ke_ds3231_SetTime2),
/* harmony export */   ke_dual: () => (/* binding */ ke_dual),
/* harmony export */   ke_film_p: () => (/* binding */ ke_film_p),
/* harmony export */   ke_fire2: () => (/* binding */ ke_fire2),
/* harmony export */   ke_flame: () => (/* binding */ ke_flame),
/* harmony export */   ke_hall: () => (/* binding */ ke_hall),
/* harmony export */   ke_ir_g: () => (/* binding */ ke_ir_g),
/* harmony export */   ke_ir_r: () => (/* binding */ ke_ir_r),
/* harmony export */   ke_ir_s: () => (/* binding */ ke_ir_s),
/* harmony export */   ke_jg: () => (/* binding */ ke_jg),
/* harmony export */   ke_joystick: () => (/* binding */ ke_joystick),
/* harmony export */   ke_joystick_btn: () => (/* binding */ ke_joystick_btn),
/* harmony export */   ke_knock: () => (/* binding */ ke_knock),
/* harmony export */   ke_led_b: () => (/* binding */ ke_led_b),
/* harmony export */   ke_led_g: () => (/* binding */ ke_led_g),
/* harmony export */   ke_led_r: () => (/* binding */ ke_led_r),
/* harmony export */   ke_led_w: () => (/* binding */ ke_led_w),
/* harmony export */   ke_led_y: () => (/* binding */ ke_led_y),
/* harmony export */   ke_light: () => (/* binding */ ke_light),
/* harmony export */   ke_light_b: () => (/* binding */ ke_light_b),
/* harmony export */   ke_lm35: () => (/* binding */ ke_lm35),
/* harmony export */   ke_matrix1: () => (/* binding */ ke_matrix1),
/* harmony export */   ke_matrix2: () => (/* binding */ ke_matrix2),
/* harmony export */   ke_matrix_clear: () => (/* binding */ ke_matrix_clear),
/* harmony export */   ke_matrix_init: () => (/* binding */ ke_matrix_init),
/* harmony export */   ke_matrix_text: () => (/* binding */ ke_matrix_text),
/* harmony export */   ke_motor: () => (/* binding */ ke_motor),
/* harmony export */   ke_motor001: () => (/* binding */ ke_motor001),
/* harmony export */   ke_motor002: () => (/* binding */ ke_motor002),
/* harmony export */   ke_motor2: () => (/* binding */ ke_motor2),
/* harmony export */   ke_music: () => (/* binding */ ke_music),
/* harmony export */   ke_notone: () => (/* binding */ ke_notone),
/* harmony export */   ke_oled: () => (/* binding */ ke_oled),
/* harmony export */   ke_oled_clear: () => (/* binding */ ke_oled_clear),
/* harmony export */   ke_pca9685: () => (/* binding */ ke_pca9685),
/* harmony export */   ke_potentiometer: () => (/* binding */ ke_potentiometer),
/* harmony export */   ke_qcd: () => (/* binding */ ke_qcd),
/* harmony export */   ke_reed_s: () => (/* binding */ ke_reed_s),
/* harmony export */   ke_relay: () => (/* binding */ ke_relay),
/* harmony export */   ke_rgb1_1: () => (/* binding */ ke_rgb1_1),
/* harmony export */   ke_rgb1_2: () => (/* binding */ ke_rgb1_2),
/* harmony export */   ke_rgb2812: () => (/* binding */ ke_rgb2812),
/* harmony export */   ke_rgb2_1: () => (/* binding */ ke_rgb2_1),
/* harmony export */   ke_rgb2_2: () => (/* binding */ ke_rgb2_2),
/* harmony export */   ke_servo: () => (/* binding */ ke_servo),
/* harmony export */   ke_servo_r: () => (/* binding */ ke_servo_r),
/* harmony export */   ke_shake: () => (/* binding */ ke_shake),
/* harmony export */   ke_sl_button: () => (/* binding */ ke_sl_button),
/* harmony export */   ke_slide_potentiometer: () => (/* binding */ ke_slide_potentiometer),
/* harmony export */   ke_smoke: () => (/* binding */ ke_smoke),
/* harmony export */   ke_smoke_D: () => (/* binding */ ke_smoke_D),
/* harmony export */   ke_sound: () => (/* binding */ ke_sound),
/* harmony export */   ke_speaker: () => (/* binding */ ke_speaker),
/* harmony export */   ke_speaker2: () => (/* binding */ ke_speaker2),
/* harmony export */   ke_speaker_notone: () => (/* binding */ ke_speaker_notone),
/* harmony export */   ke_sr04: () => (/* binding */ ke_sr04),
/* harmony export */   ke_steam: () => (/* binding */ ke_steam),
/* harmony export */   ke_temt6000: () => (/* binding */ ke_temt6000),
/* harmony export */   ke_tilt: () => (/* binding */ ke_tilt),
/* harmony export */   ke_tone01: () => (/* binding */ ke_tone01),
/* harmony export */   ke_track: () => (/* binding */ ke_track),
/* harmony export */   ke_tuoch: () => (/* binding */ ke_tuoch),
/* harmony export */   ke_v_motor: () => (/* binding */ ke_v_motor),
/* harmony export */   ke_w_buzzer1: () => (/* binding */ ke_w_buzzer1),
/* harmony export */   ke_w_buzzer2: () => (/* binding */ ke_w_buzzer2),
/* harmony export */   ke_w_buzzer3: () => (/* binding */ ke_w_buzzer3),
/* harmony export */   lcd128_clear: () => (/* binding */ lcd128_clear),
/* harmony export */   lcd128_cursor: () => (/* binding */ lcd128_cursor),
/* harmony export */   lcd128_d_pixel: () => (/* binding */ lcd128_d_pixel),
/* harmony export */   lcd128_init: () => (/* binding */ lcd128_init),
/* harmony export */   lcd128_pixel: () => (/* binding */ lcd128_pixel),
/* harmony export */   lcd128_string: () => (/* binding */ lcd128_string),
/* harmony export */   make_arduino_paj7620_ReadReg: () => (/* binding */ make_arduino_paj7620_ReadReg),
/* harmony export */   make_arduino_paj7620_begin: () => (/* binding */ make_arduino_paj7620_begin),
/* harmony export */   mlx90614_get_data: () => (/* binding */ mlx90614_get_data),
/* harmony export */   mlx90614_init: () => (/* binding */ mlx90614_init),
/* harmony export */   rc522_i2c_init: () => (/* binding */ rc522_i2c_init),
/* harmony export */   rc522_i2c_read: () => (/* binding */ rc522_i2c_read),
/* harmony export */   sensor_encoder_get: () => (/* binding */ sensor_encoder_get),
/* harmony export */   sensor_encoder_handle: () => (/* binding */ sensor_encoder_handle),
/* harmony export */   sensor_encoder_init: () => (/* binding */ sensor_encoder_init),
/* harmony export */   sensor_encoder_set: () => (/* binding */ sensor_encoder_set)
/* harmony export */ });
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly/core */ "blockly/core");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! profile */ "profile");
/* harmony import */ var profile__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(profile__WEBPACK_IMPORTED_MODULE_1__);



//////////////////颜色/////////////////////
const CONTROL_HUE = 120;
const DIGITAL_HUE = 230;
const ANALOG_HUE = 360;
const SPECIAL_HUE = 320;
const DISPLAY_HUE = 275;
const COMMUNICATE_HUE = 180;


/////////////////模拟输出//////////////////////
const ke_a_Write = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_anologWrite);
        //.appendField(new Blockly.FieldImage("../../media/KS0077/ks77_led3.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .setCheck(Number);
        this.appendValueInput("num", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_value)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .setCheck(Number);

        //.appendField(new Blockly.FieldDropdown([[Blockly.Msg.ke_ON, "HIGH"], [Blockly.Msg.ke_OFF, "LOW"]]), "STAT");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

//////////////////红色LED////////////////
const ke_led_r = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            //.appendField(Blockly.Msg.MIXLY_ke_LED1)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_red_led)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_led_red.png */ "./src/media/ke_led_red.png"), 52, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
//////////////////黄色LED////////////////
const ke_led_y = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_yellow_led)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_led_yellow.png */ "./src/media/ke_led_yellow.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
//////////////////白色LED////////////////
const ke_led_w = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_white_led)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_led_white.png */ "./src/media/ke_led_white.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
//////////////////绿色LED////////////////
const ke_led_g = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_green_led)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_led_g.png */ "./src/media/ke_led_g.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
//////////////////蓝色LED////////////////
const ke_led_b = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_blue_led)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_led_b.png */ "./src/media/ke_led_b.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

const ke_jg = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_jg1)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_jg.png */ "./src/media/ke_jg.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};


const ke_dual = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_dual_led)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_led_double.png */ "./src/media/ke_led_double.png"), 43, 32));
        this.appendValueInput("PIN1", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT1");
        this.appendValueInput("PIN2", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT2");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

const ke_qcd = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_QCD);
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

//////////////////RGB1////////////////////
const ke_rgb1_1 = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_RGB_A)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_rgb2.png */ "./src/media/ke_rgb2.png"), 43, 32));
        this.appendValueInput("PIN1", Number)
            .appendField("R:")
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "LOW"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "HIGH"]]), "STAT1");
        this.appendValueInput("PIN2", Number)
            .appendField("G:")
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "LOW"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "HIGH"]]), "STAT2");
        this.appendValueInput("PIN3", Number)
            .appendField("B:")
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "LOW"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "HIGH"]]), "STAT3");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};


////////////////////////rgb01///////////////////////////////////
const ke_rgb1_2 = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_RGB_A)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_rgb2.png */ "./src/media/ke_rgb2.png"), 43, 32));
        this.appendValueInput("R", Number)
            .appendField("R")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT);
        this.appendValueInput("r", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("R(0~255):");
        this.appendValueInput("G", Number)
            .appendField("G")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .setCheck(Number);
        this.appendValueInput("g", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("G(0~255):");
        this.appendValueInput("B", Number)
            .appendField("B")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .setCheck(Number);
        this.appendValueInput("b", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("B(0~255):");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

//////////////////RGB2///////////////////
const ke_rgb2_1 = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_RGB_B)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_rgb2.png */ "./src/media/ke_rgb2.png"), 43, 32));
        this.appendValueInput("PIN1", Number)
            .appendField("R:")
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT1");
        this.appendValueInput("PIN2", Number)
            .appendField("G:")
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT2");
        this.appendValueInput("PIN3", Number)
            .appendField("B:")
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT3");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};


////////////////////////rgb01///////////////////////////////////
const ke_rgb2_2 = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_RGB_B)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_rgb2.png */ "./src/media/ke_rgb2.png"), 43, 32));
        this.appendValueInput("R", Number)
            .appendField("R")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT);
        this.appendValueInput("r", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("R(0~255):");
        this.appendValueInput("G", Number)
            .appendField("G")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .setCheck(Number);
        this.appendValueInput("g", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("G(0~255):");
        this.appendValueInput("B", Number)
            .appendField("B")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .setCheck(Number);
        this.appendValueInput("b", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("B(0~255):");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};


/////////////////蜂鸣器//////////////////////
const ke_w_buzzer1 = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_BUZZER1)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_buzzer_y.png */ "./src/media/ke_buzzer_y.png"), 39, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
const ke_w_buzzer2 = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_BUZZER2)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_buzzer_w.png */ "./src/media/ke_buzzer_w.png"), 39, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendValueInput('FREQUENCY')
            .setCheck(Number)
            //.setAlign(Blockly.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_FREQUENCY);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};
const ke_w_buzzer3 = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_BUZZER2)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_buzzer_w.png */ "./src/media/ke_buzzer_w.png"), 39, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendValueInput('FREQUENCY')
            .setCheck(Number)
            //.setAlign(Blockly.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_FREQUENCY);
        this.appendValueInput('DURATION')
            .setCheck(Number)
            //.setAlign(Blockly.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DURATION);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

//////////////////蜂鸣器//////////////////
var TONE_NOTES = [
    ["NOTE_C3", "131"], ["NOTE_D3", "147"], ["NOTE_E3", "165"], ["NOTE_F3", "175"], ["NOTE_G3", "196"], ["NOTE_A3", "220"], ["NOTE_B3", "247"],
    ["NOTE_C4", "262"], ["NOTE_D4", "294"], ["NOTE_E4", "330"], ["NOTE_F4", "349"], ["NOTE_G4", "392"], ["NOTE_A4", "440"], ["NOTE_B4", "494"],
    ["NOTE_C5", "532"], ["NOTE_D5", "587"], ["NOTE_E5", "659"], ["NOTE_F5", "698"], ["NOTE_G5", "784"], ["NOTE_A5", "880"], ["NOTE_B5", "988"]
];


const ke_tone01 = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(TONE_NOTES), 'STAT');
        this.setOutput(true, Number);
    }
};

const ke_buzzer = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_BUZZER2)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_buzzer_w.png */ "./src/media/ke_buzzer_w.png"), 39, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendValueInput('FREQUENCY')
            .setCheck(Number)
            //.setAlign(Blockly.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.kids_tone);

        //this.appendValueInput('DURATION')
        //.setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        //.appendField(Blockly.Msg.kids_beat);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.kids_beat)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([["1/8", "125"], ["3/8", "375"], ["1/4", "250"], ["3/4", "750"], ["1/2", "500"], ["1", "1000"]]), 'beat1');

        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_TONE);
    }
};


///////////music////////////////////
const ke_music = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.kids_play_tone)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_buzzer_w.png */ "./src/media/ke_buzzer_w.png"), 39, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            //.appendField(new Blockly.FieldDropdown([["Birthday", "Birthday"],["City of Sky", "City of Sky"],["Ode to Joy", "Ode to Joy"]]), 'play');
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.kids_Ode_to_joy, "Ode to Joy"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.kids_birthday, "Birthday"]]), 'play');

        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
    }
};

////////////////////关闭蜂鸣器////////////////////////
const ke_notone = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.kids_notone)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_buzzer_w.png */ "./src/media/ke_buzzer_w.png"), 39, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        //this.setTooltip(Blockly.Msg.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
    }
};


///////////////////////继电器////////////////////////////
const ke_relay = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_RELAY)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_relay.png */ "./src/media/ke_relay.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

///////////////////////震动马达////////////////////////////
const ke_v_motor = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_v_motor)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_v_motor.png */ "./src/media/ke_v_motor.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

///////////////////////扬声器模块////////////////////////////
const ke_speaker = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_SPEAKER)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_speaker.png */ "./src/media/ke_speaker.png"), 57, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendValueInput('FREQUENCY', Number)
            .setCheck(Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_FREQUENCY);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};
// Speaker - 喇叭+持续时间
const ke_speaker2 = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_SPEAKER)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_speaker.png */ "./src/media/ke_speaker.png"), 57, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendValueInput('FREQUENCY')
            .setCheck(Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_FREQUENCY);
        this.appendValueInput('DURATION')
            .setCheck(Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DURATION);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DELAY_MS);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};
// Notone - 结束声音
const ke_speaker_notone = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_NOTONE_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
    }
};

////////////////////////电机///////////////////////////////////
const ke_motor = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_MOTOR01);
        this.appendValueInput("PIN1", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField('INA')
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT1");
        this.appendValueInput("PIN2", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField('INB')
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT2");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

////////////////////////电机001///////////////////////////////////
const ke_motor001 = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_MOTOR01);
        this.appendValueInput("PIN1", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField('INA')
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT1");
        this.appendValueInput("PIN2", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .setCheck(Number);
        this.appendValueInput("pwmb")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("PWMB:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

////////////////////////电机2///////////////////////////////////
const ke_motor2 = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_MOTOR)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_fs.png */ "./src/media/ke_fs.png"), 43, 32));
        this.appendValueInput("PIN1", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField('INA')
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT1");
        this.appendValueInput("PIN2", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField('INB')
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT2");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

////////////////////////电机002///////////////////////////////////
const ke_motor002 = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_MOTOR)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_fs.png */ "./src/media/ke_fs.png"), 43, 60));
        this.appendValueInput("PIN1", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField('INA')
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_ON, "HIGH"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_OFF, "LOW"]]), "STAT1");
        this.appendValueInput("PIN2", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .setCheck(Number);
        this.appendValueInput("pwmb")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("PWMB:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};


///////////////////////////舵机///////////////////////////////////
const ke_servo = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_SERVO)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_servo.png */ "./src/media/ke_servo.png"), 70, 32))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendValueInput("angle", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DEGREE_0_180);
        this.appendValueInput("time", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DELAY + '(' + blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DELAY_MS + ')');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_MOVE);
    }
};

const ke_servo_r = {
    init: function () {
        this.setColour(CONTROL_HUE);
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_SERVO)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_READ_DEGREES)
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_READ);
    }
};

/////////////////////数字传感器///////////////////////////////

///////////人体红外传感器////////////////////
const ke_ir_g = {
    init: function () {
        this.setColour(DIGITAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_IR_G)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_rentihongwai.png */ "./src/media/ke_rentihongwai.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

///////////火焰传感器////////////////////

const ke_flame = {
    init: function () {
        this.setColour(DIGITAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_FLAME)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_fire.png */ "./src/media/ke_fire.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

///////////霍尔传感器////////////////////
const ke_hall = {
    init: function () {
        this.setColour(DIGITAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_HALL)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_hall.png */ "./src/media/ke_hall.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

///////////敲击传感器////////////////////
const ke_crash = {
    init: function () {
        this.setColour(DIGITAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_KNOCK)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_zhengdong.png */ "./src/media/ke_zhengdong.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

///////////按键传感器////////////////////
const ke_button = {
    init: function () {
        this.setColour(DIGITAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_BUTTON)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_button.png */ "./src/media/ke_button.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

///////////自锁按键传感器////////////////////
const ke_sl_button = {
    init: function () {
        this.setColour(DIGITAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_sl_BUTTON)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_sl_button.png */ "./src/media/ke_sl_button.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};
///////////电容触摸传感器////////////////////
const ke_tuoch = {
    init: function () {
        this.setColour(DIGITAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_TUOCH)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_touch.png */ "./src/media/ke_touch.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

///////////碰撞传感器////////////////////
const ke_knock = {
    init: function () {
        this.setColour(DIGITAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_CRASH)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_pengzhuang.png */ "./src/media/ke_pengzhuang.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

///////////倾斜传感器////////////////////
const ke_tilt = {
    init: function () {
        this.setColour(DIGITAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_TILT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_qingxie.png */ "./src/media/ke_qingxie.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

///////////振动传感器////////////////////
const ke_shake = {
    init: function () {
        this.setColour(DIGITAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_SHAKE)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_qiaoji.png */ "./src/media/ke_qiaoji.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};



///////////干簧管传感器////////////////////
const ke_reed_s = {
    init: function () {
        this.setColour(DIGITAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_REED_S)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_ghg.png */ "./src/media/ke_ghg.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

///////////循迹传感器////////////////////
const ke_track = {
    init: function () {
        this.setColour(DIGITAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_TRACK)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_xunji.png */ "./src/media/ke_xunji.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

///////////避障传感器////////////////////
const ke_avoid = {
    init: function () {
        this.setColour(DIGITAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_AVOID)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_hongwaibz.png */ "./src/media/ke_hongwaibz.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

///////////光折断传感器////////////////////
const ke_light_b = {
    init: function () {
        this.setColour(DIGITAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_LIGHT_B)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_photo.png */ "./src/media/ke_photo.png"), 43, 32));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

///////////烟雾数字传感器////////////////////
const ke_smoke_D = {
    init: function () {
        this.setColour(DIGITAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_SMOKE)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_gas.png */ "./src/media/ke_gas.png"), 60, 48));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

///////////酒精数字传感器////////////////////
const ke_alcohol_D = {
    init: function () {
        this.setColour(DIGITAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_ALCOHOL)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_alcohol.png */ "./src/media/ke_alcohol.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};


///////////////////////////模拟传感器//////////////////////////
///////////模拟温度传感器///////////////
const ke_analog_t = {
    init: function () {
        this.setColour(ANALOG_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_ANALOG_T)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_mnwd.png */ "./src/media/ke_mnwd.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};

///////////声音传感器///////////////
const ke_sound = {
    init: function () {
        this.setColour(ANALOG_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_SOUND)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_sound.png */ "./src/media/ke_sound.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};

///////////光线传感器///////////////
const ke_light = {
    init: function () {
        this.setColour(ANALOG_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_LIGHT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_guangmin.png */ "./src/media/ke_guangmin.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};

///////////紫外线传感器///////////////
const ke_UV = {
    init: function () {
        this.setColour(ANALOG_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_UV)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_UV.png */ "./src/media/ke_UV.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};

///////////压电传感器///////////////
const ke_Piezo = {
    init: function () {
        this.setColour(ANALOG_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_Piezo)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_Piezo.png */ "./src/media/ke_Piezo.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};

///////////电位器///////////////
const ke_potentiometer = {
    init: function () {
        this.setColour(ANALOG_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_POTENTIOMETER)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_dianweiqi.png */ "./src/media/ke_dianweiqi.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};

///////////LM35///////////////
const ke_lm35 = {
    init: function () {
        this.setColour(ANALOG_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_LM35)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_lm35.png */ "./src/media/ke_lm35.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};

///////////滑动电位器///////////////
const ke_slide_potentiometer = {
    init: function () {
        this.setColour(ANALOG_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_SLIDE_POTENTIOMETER)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_hddwq.png */ "./src/media/ke_hddwq.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};

///////////TEMT6000环境光///////////////
const ke_temt6000 = {
    init: function () {
        this.setColour(ANALOG_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_TEMT6000)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_temt6000.png */ "./src/media/ke_temt6000.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};

///////////水蒸气传感器///////////////
const ke_steam = {
    init: function () {
        this.setColour(ANALOG_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_STEAM)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_steam.png */ "./src/media/ke_steam.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};

///////////薄膜压力传感器///////////////
const ke_film_p = {
    init: function () {
        this.setColour(ANALOG_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_FILM_P)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_tptouch.png */ "./src/media/ke_tptouch.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};

///////////摇杆传感器///////////////
var joystick = [
    ["x", "Lx"],
    ["y", "Ly"],
    // ["z", "Lz"],
];

const ke_joystick = {
    init: function () {
        this.setColour(ANALOG_HUE);
        //this.appendDummyInput("")
        this.appendDummyInput("").setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT).appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(joystick), "joy");
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_JOYSTICK)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_joys.png */ "./src/media/ke_joys.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};

///////////遥感按钮////////////////////
const ke_joystick_btn = {
    init: function () {
        this.setColour(DIGITAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_JOYSTICK_btn)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_joys.png */ "./src/media/ke_joys.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};


///////////烟雾传感器///////////////
const ke_smoke = {
    init: function () {
        this.setColour(ANALOG_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_SMOKE)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_gas.png */ "./src/media/ke_gas.png"), 60, 48));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};

///////////酒精传感器///////////////
const ke_alcohol = {
    init: function () {
        this.setColour(ANALOG_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_ALCOHOL)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_alcohol.png */ "./src/media/ke_alcohol.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};



///////////火焰模拟传感器///////////////
const ke_fire2 = {
    init: function () {
        this.setColour(ANALOG_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_FLAME)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_fire.png */ "./src/media/ke_fire.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};


///////////电压传感器///////////////
const ke_Voltage = {
    init: function () {
        this.setColour(ANALOG_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_Voltage)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_Voltage.png */ "./src/media/ke_Voltage.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};

///////////电流传感器///////////////
const ke_Current = {
    init: function () {
        this.setColour(ANALOG_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_Current)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_Current.png */ "./src/media/ke_Current.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};


///////////18B20温度模块///////////////
const ke_18b20 = {
    init: function () {
        var UNIT = [[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DS18B20_C, '0'], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DS18B20_F, '1']];
        this.setColour(SPECIAL_HUE);
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_18B20)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_18B20.png */ "./src/media/ke_18B20.png"), 50, 40))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_pin)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_18B20_R)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(UNIT), "UNIT");
        this.setOutput(true, Number);
    }
};

///////////////////////////////DHT11//////////////////////////////////
const ke_dht11 = {
    init: function () {
        var WHAT = [[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DHT11_T, 'temperature'], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DHT11_H, 'humidity']];
        this.setColour(SPECIAL_HUE);
        this.appendValueInput("PIN", Number)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([['DHT11', '11'], ['DHT21', '21'], ['DHT22', '22'], ['DHT33', '33'], ['DHT44', '44']]), 'TYPE')
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_dht11.png */ "./src/media/ke_dht11.png"), 50, 40))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(WHAT), "WHAT");
        this.setOutput(true, Number);
        var thisBlock = this;
        this.setTooltip(function () {
            var op = thisBlock.getFieldValue('WHAT');
            var TOOLTIPS = {
                'temperature': blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_GET_TEM,
                'humidity': blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_GET_HUM
            };
            return TOOLTIPS[op];
        });
    }
};

//DHT11温湿度传感器
const ke_DHT = {
    init: function () {
        var WHAT = [[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_GETTEMPERATUE, 'temperature'], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_GETHUMIDITY, 'humidity']];
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([['DHT11', '11'], ['DHT21', '21'], ['DHT22', '22']]), 'TYPE')
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_dht11.png */ "./src/media/ke_dht11.png"), 50, 40))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown((profile__WEBPACK_IMPORTED_MODULE_1___default()["default"]).digital), "PIN")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(WHAT), "WHAT");
        this.setOutput(true, Number);
        var thisBlock = this;
        this.setTooltip(function () {
            var op = thisBlock.getFieldValue('WHAT');
            var TOOLTIPS = {
                'temperature': blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_GET_TEM,
                'humidity': blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_GET_HUM
            };
            return TOOLTIPS[op];
        });
    }
};

//////////BMP180高度计模块///////////////
// export const ke_bmp180 = {
//     init: function () {
//         this.setColour(SPECIAL_HUE);
//         this.appendDummyInput("")
//             .appendField(Blockly.Msg.MIXLY_ke_BMP180)
//             .appendField(new Blockly.FieldImage(require("../media/ke_bmp180.png"), 50, 40));
//         this.appendValueInput("PIN", Number)
//             .appendField(Blockly.Msg.MIXLY_PIN)
//             .setCheck(Number);
//         this.setInputsInline(true);
//         this.setOutput(true, Number);
//         this.setTooltip('');
//     }
// };

/////////////////////////////////////////////
////////////////传感器////////////////////////
/////////////////////////////////////////////


///////////ADKey///////////////
const ke_ADKey = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.kids_ADkey)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_ADKey.png */ "./src/media/ke_ADKey.png"), 60, 48));
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip('');
    }
};




///////////////超声波/////////////////////////
const ke_sr04 = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_SR04)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_sr04.png */ "./src/media/ke_sr04.png"), 50, 40));
        this.appendValueInput("PIN1", Number)
            .appendField('Trig#')
            .setCheck(Number);
        this.appendValueInput("PIN2", Number)
            .appendField('Echo#')
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
    }
};



/////////////////////////////BMP280////////////////////////
// var BMP280_TP = [
//     [Blockly.Msg.MIXLY_ke_BMP280_T, "T"],
//     [Blockly.Msg.MIXLY_ke_BMP280_A, "P"],
//     [Blockly.Msg.MIXLY_ke_BMP180_H, "A"],
// ];
/////////////////////////////BMP280////////////////////////
// export const ke_bmp280 = {
//     init: function () {
//         this.setColour(SPECIAL_HUE);
//         this.appendDummyInput("")
//             .appendField(Blockly.Msg.MIXLY_ke_BMP280)
//             .appendField(new Blockly.FieldImage(require("../media/ke_bmp180.png"), 50, 40))
//             .appendField(Blockly.Msg.Kids_iic);
//         this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(BMP280_TP), "BMP280_PIN");
//         this.setInputsInline(true);
//         this.setOutput(true);
//     }
// };

//BME280读取
const ke_BMP280_READ = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_SERIAL_READ)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([["BMP280", "bmp"], ["BME280", "bme"]]), "TYPE")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_bmp280.png */ "./src/media/ke_bmp280.png"), 50, 40));
        this.appendValueInput("address")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_ADDRESS);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_GET)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.blynk_IOT_IR_TEMP, "readTemperature()"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_Humidity, "readHumidity()"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_Altitude, "readPressure()"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_HEIGHT, "readAltitude(SEALEVELPRESSURE_HPA)"]]), "BME_TYPE")
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//ADXL345传感器-重力感应块-获取数据
var ADXL345_ZHOU = [
    [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ADXL345_X, "x"],
    [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ADXL345_Y, "y"],
    [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ADXL345_Z, "z"],
    [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ADXL345_XA, "xa"],
    [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ADXL345_YA, "ya"]
    //, [Blockly.Msg.MIXLY_ADXL345_ZA, "za"]
];
//传感器-重力感应块-获取数据
const ke_adxl345 = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_Ke_ADXL345)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_345.png */ "./src/media/ke_345.png"), 50, 40));
        this.appendDummyInput("").setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT).appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(ADXL345_ZHOU), "ADXL345_PIN");
        this.setInputsInline(true);
        this.setOutput(true);
    }
};


//传感器-MPU6050-获取数据
const ke_MPU6050 = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_MPU6050)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_mpu6050.png */ "./src/media/ke_mpu6050.png"), 50, 40));
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_Accel_X, "normAccel.XAxis"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_Accel_Y, "normAccel.YAxis"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_Accel_Z, "normAccel.ZAxis"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_Gyro_X, "normGyro.XAxis"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_Gyro_Y, "normGyro.YAxis"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_Gyro_Z, "normGyro.ZAxis"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_readTempC, "mpu.readTemperature()"]
            ]), "MPU6050_TYPE");
        this.setInputsInline(true);
        this.setOutput(true);
    }
};

//传感器-MPU6050-更新数据
const ke_MPU6050_update = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_mpu6050.png */ "./src/media/ke_mpu6050.png"), 50, 40))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_MPU6050 + blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_update_data);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};


/////////////////////////////BMP180////////////////////////
var BMP180_TP = [
    [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_BMP180_T, "T"],
    [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_BMP180_A, "P"],
    [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_BMP180_H, "A"],
];
/////////////////////////////BMP180////////////////////////
const ke_bmp180 = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_BMP180)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_iic);
        //.appendField(new Blockly.FieldImage(require("../media/ke_bmp180.png"), 50, 40));
        this.appendDummyInput("").setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT).appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(BMP180_TP), "BMP180_PIN");
        this.setInputsInline(true);
        this.setOutput(true);
    }
};

/********************************************
TIME - 时钟模块
  - DS3231
  - DS1307
*********************************************/
// DS3231 real time clock  -- 设置时间
const ke_ds3231_SetTime = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DS3231)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_ds3231.png */ "./src/media/ke_ds3231.png"), 44, 32))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DS3231_SET_TIME);
        this.appendValueInput("year")
            .setCheck(Number).setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_YEAR);
        this.appendValueInput("month")
            .setCheck(Number).setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_MONTH);
        this.appendValueInput("day")
            .setCheck(Number).setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DAY);
        this.appendValueInput("hour")
            .setCheck(Number).setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_HOUR);
        this.appendValueInput("minute")
            .setCheck(Number).setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_MINUTE);
        this.appendValueInput("second")
            .setCheck(Number).setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_SECOND);
        this.setOutput(false, Number);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

// DS3231 real time clock  -- 设置当前时间
const ke_ds3231_SetTime2 = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DS3231)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_ds3231.png */ "./src/media/ke_ds3231.png"), 44, 32))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DS3231_SET_TIME)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DS3231_SET_TIME2);
        this.setOutput(false, Number);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

// DS3231 real time clock  -- 获取时间
const ke_ds3231_GetTime = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DS3231)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_ds3231.png */ "./src/media/ke_ds3231.png"), 44, 32))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DS3231_GET_TIME)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_YEAR, "Year"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_MONTH, "Month"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DAY, "Day"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_HOUR, "Hour"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_MINUTE, "Minute"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_SECOND, "Second"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DAYOFWEEK, "DayOfWeek"]
            ]), "TIME_TYPE");
        this.setOutput(true, Number);
        this.setInputsInline(true);
    }
};


// DS1307 real time clock  -- 设置时间
const ke_ds1307_SetTime = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DS1307)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_1307.png */ "./src/media/ke_1307.png"), 32, 32))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DS3231_SET_TIME);
        this.appendValueInput("year")
            .setCheck(Number).setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_YEAR);
        this.appendValueInput("month")
            .setCheck(Number).setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_MONTH);
        this.appendValueInput("day")
            .setCheck(Number).setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DAY);
        this.appendValueInput("hour")
            .setCheck(Number).setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_HOUR);
        this.appendValueInput("minute")
            .setCheck(Number).setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_MINUTE);
        this.appendValueInput("second")
            .setCheck(Number).setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_SECOND);
        this.setOutput(false, Number);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

// DS1307 real time clock  -- 设置当前时间
const ke_ds1307_SetTime2 = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DS1307)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_1307.png */ "./src/media/ke_1307.png"), 32, 32))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DS3231_SET_TIME)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DS3231_SET_TIME2);
        this.setOutput(false, Number);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

//DS1307 real time clock  -- 获取时间
const ke_ds1307_GetTime = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DS1307)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_1307.png */ "./src/media/ke_1307.png"), 32, 32))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DS3231_GET_TIME)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_YEAR, "Year"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_MONTH, "Month"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DAY, "Day"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_HOUR, "Hour"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_MINUTE, "Minute"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_SECOND, "Second"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_DAYOFWEEK, "DayOfWeek"]
            ]), "TIME_TYPE");
        this.setOutput(true, Number);
        this.setInputsInline(true);
    }
};
var Encoder_NO = [
    [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ENCODER + 1, "1"],
    [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ENCODER + 2, "2"],
    [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ENCODER + 3, "3"],
    [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ENCODER + 4, "4"]
];
//旋转编码器定义
const sensor_encoder_init = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_SETUP)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(Encoder_NO), "TYPE")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_MICROBIT_PY_STORAGE_MODE)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([["1", "2"], ["2", "4"]]), "mode");
        this.appendValueInput("CLK")
            .setCheck(null)
            .appendField("CLK#");
        this.appendValueInput("DT")
            .setCheck(null)
            .appendField("DT#");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 旋转编码器读取
const sensor_encoder_get = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput()
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(Encoder_NO), "TYPE")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_MICROBIT_PY_STORAGE_GET)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_GPS_LOCATION, "getPosition"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_MICROBIT_Direction, "getDirection"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_INCREMENT, "getIncrement"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_UPPERBOUND, "getUpperBound"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LOWERBOUND, "getLowerBound"]
            ]), "OPERATE_TYPE");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 旋转编码器设置
const sensor_encoder_set = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.setColour(SPECIAL_HUE);this.appendDummyInput()
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(Encoder_NO), "TYPE");
        this.appendValueInput("DATA")
            .setCheck(null)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_GPS_LOCATION, "resetPosition"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_INCREMENT, "setIncrement"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_UPPERBOUND, "setUpperBound"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LOWERBOUND, "setLowerBound"]
            ]), "OPERATE_TYPE")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_STAT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// 旋转编码器事件
const sensor_encoder_handle = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput()
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(Encoder_NO), "TYPE")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ENCODER_CHANGED, "setChangedHandler"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ENCODER_LEFT_ROTATION, "setLeftRotationHandler"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ENCODER_RIGHT_ROTATION, "setRightRotationHandler"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ENCODER_UPPER_OVERFLOW, "setUpperOverflowHandler"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ENCODER_LOWER_OVERFLOW, "setLowerOverflowHandler"]
            ]), "OPERATE_TYPE");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_MSTIMER2_DO);
        this.setInputsInline(true);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
const encoder_button = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput("")
            .appendField("读取旋转编码器按键值");
        this.appendValueInput("PIN", Number)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};
/////////////////pca9685////////////////////////////
const ke_pca9685 = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput("")
            .appendField("pca9685");
        this.appendValueInput("pin")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("pin0~15");
        this.appendValueInput("pwm")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_angle);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
///////////////////////////红外测温传感器/////////////////
//初始化MLX90614红外测温传感器
const mlx90614_init = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendValueInput("mlx90614_address")
            .setCheck(null)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_SETUP + " MLX90614" + blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MLX90614_TYPE)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_90614.png */ "./src/media/ke_90614.png"), 50, 40))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_ADDRESS);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
    }
};
//MLX90614获取数据
const mlx90614_get_data = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        var type = [
            [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MLX90614_TARGET_OBJECT_TEMP + "(℃)", "readObjectTempC"],
            [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MLX90614_TARGET_OBJECT_TEMP + "(℉)", "readObjectTempF"],
            [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MLX90614_AMBIENT_TEMP + "(℃)", "readAmbientTempC"],
            [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MLX90614_AMBIENT_TEMP + "(℉)", "readAmbientTempF"]];
        this.appendDummyInput()
            .appendField("MLX90614" + blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MLX90614_TYPE)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_90614.png */ "./src/media/ke_90614.png"), 50, 40))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_GET)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(type), "mlx90614_data");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TOOLTIP_MLX90614_GET_DATA);
    }
};
///////////////////////////颜色传感器/////////////////
//传感器-颜色识别-获取数据
var DF_TCS34725_COLOR = [
    [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.COLOUR_RGB_RED, "tcs34725.getRedToGamma()"],
    [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.COLOUR_RGB_GREEN, "tcs34725.getGreenToGamma()"],
    [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.COLOUR_RGB_BLUE, "tcs34725.getBlueToGamma()"],
];

// export const TCS34725_Get_RGB = {
//     init: function () {
//         this.setColour(SPECIAL_HUE);
//         this.appendDummyInput("")
//             .appendField(new Blockly.FieldImage(require("../media/ke_34725.png"), 50, 40))
//             .appendField(Blockly.Msg.TCS34725_Get_RGB)
//             .appendField(new Blockly.FieldDropdown(DF_TCS34725_COLOR), "DF_TCS34725_COLOR");
//         this.setInputsInline(true);
//         this.setOutput(true);
//     }
// };
const TCS34725_Get_RGB = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_34725.png */ "./src/media/ke_34725.png"), 50, 40))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.TCS34725_Get_RGB)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(DF_TCS34725_COLOR), "DF_TCS34725_COLOR");
        this.setInputsInline(true);
        this.setOutput(true);
    }
};
///////////////////////////MAX3010X心率传感器/////////////////
var ke_MAX30102_TYPE = [
    ["温度(℃)", "particleSensor.readTemperature()"],
    ["温度(℉))", "particleSensor.readTemperatureF()"],
    ["红光", "particleSensor.getRed()"],
    ["红外光", "particleSensor.getIR()"],
    ["绿光", "particleSensor.getGreen()"],
];

const ke_MAX3010X_Value = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_34725.png */ "./src/media/ke_34725.png"), 50, 40))
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(ke_MAX30102_TYPE), "MAX3010X_TYPE");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip();
    }
};

const ke_MAX3010X_HR = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_34725.png */ "./src/media/ke_34725.png"), 50, 40))
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('Bmp_value'), 'VAR')
        this.appendStatementInput('DO');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        // this.setTooltip(Blockly.Msg.MIXLY_IR_RECIEVE_TOOLTIP);
    },
    getVars: function () {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function (oldName, newName) {
        if (blockly_core__WEBPACK_IMPORTED_MODULE_0__.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};
///////////////////////////手势识别传感器/////////////////
//传感器-手势识别-获取数据
const ke_Gesture_APDS = {
    init: function () {
        var ke_APDS_PIN1 = [
            ["A4", "A4"]
        ];

        var ke_APDS_PIN2 = [
            ["A5", "A5"]
        ];
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_Gesture_APDS)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_Gesture_APDS.png */ "./src/media/ke_Gesture_APDS.png"), 32, 32)); //图片
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("SDA#")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(ke_APDS_PIN1), "APDS_PIN1");
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("SCL#")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(ke_APDS_PIN2), "APDS_PIN2");
        this.setInputsInline(true);
        this.setOutput(true);
    }
};
//初始化PAJ7620手势传感器
const make_arduino_paj7620_begin = {
    init: function () {
        this.appendDummyInput()
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/PAJ7620.png */ "./src/media/PAJ7620.png"), 32, 32)) 
            .appendField("初始化PAJ7620(I2C)");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(SPECIAL_HUE);
        this.setTooltip(
            "初始化PAJ7620手势传感器(I2C)\n"
            + "I2C接线:\n"
            + "①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
            + "②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
            + "③Arduino Leonardo:SDA - 2，SCL - 3"
        );
        this.setHelpUrl("");
    }
};   
//PAJ7620手势传感器 获取数据-返回请求结果
const make_arduino_paj7620_ReadReg = {
    init: function () {
        this.appendDummyInput()
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/PAJ7620.png */ "./src/media/PAJ7620.png"), 32, 32)) 
            .appendField("PAJ7620 读取手势");
        this.appendDummyInput()
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([["向上", "GES_UP_FLAG"], ["向下", "GES_DOWN_FLAG"], ["向左", "GES_LEFT_FLAG"], ["向右", "GES_RIGHT_FLAG"], ["向前", "GES_FORWARD_FLAG"], ["向后", "GES_BACKWARD_FLAG"], ["顺时针", "GES_CLOCKWISE_FLAG"], ["逆时针", "GES_COUNT_CLOCKWISE_FLAG"], ["挥手", "GES_WAVE_FLAG"]]), "data");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(SPECIAL_HUE);
        this.setTooltip("PAJ7620手势传感器 获取数据，返回请求结果，返回数据的类型为uint8_t");
        this.setHelpUrl("");
    }
};
//BMP388初始化  
const BMP388_INIT = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_BMP388_init)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_bmp280.png */ "./src/media/ke_bmp280.png"), 50, 40));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};
//BMP388读取
const BMP388_READ = {
    init: function () {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_BMP388_read)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_bmp280.png */ "./src/media/ke_bmp280.png"), 50, 40));
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_GET)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TEMP, "(float)s32TemperatureVal / 100"],[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_Altitude, "(float)s32PressureVal / 100"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_HEIGHT, "(float)s32AltitudeVal / 100"]]), "unit")
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
const TFT_SD_init= {
    init: function() {
        this.setColour(SPECIAL_HUE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TFT_SD_INIT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("TFT接线RST -1 CS 8 DC 10 MOSI 11 SCLK 13 SD卡接线 MISO 12 MOSI 11 CLK 13 CS 9");
        this.setHelpUrl("");
    }
};
const TFT_SD_display= {
    init: function() {
        this.appendValueInput("SD_TUPIAN")
            .setCheck(null)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TFT_SD_display_1);
        this.appendValueInput("SD_X")
            .setCheck(null)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TFT_SD_display_2);
        this.appendValueInput("SD_Y")
            .setCheck(null)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TFT_SD_display_3);
        this.appendDummyInput();
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(SPECIAL_HUE);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_TFT_SD_display_4);
        this.setHelpUrl("");
    }
};
////////////////////////显示屏///////////////////////
//////////////////RGB灯////////////////////////////
const ke_rgb2812 = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_2812RGB)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_rgb2812.png */ "./src/media/ke_rgb2812.png"), 50, 40));
        this.appendValueInput("PIN", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN);
        this.appendValueInput("num01")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_Count);
        this.appendValueInput("red")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("R：");
        this.appendValueInput("green")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("G：");
        this.appendValueInput("blue")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("B：");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};


//TM1650 4 digital display  -- 初始化
const ke_4digitdisplay_init = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_4DIGITDISPLAY + "")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_shumaguan.png */ "./src/media/ke_shumaguan.png"), 84, 32))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_SETUP)
        this.appendValueInput("PIN1")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            // .appendField(Blockly.YF_TM1637_INIT)
            .appendField("CLK")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN);
        this.appendValueInput("PIN2")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("DIO")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

// TM1650 4 digital display  -- 开关 清屏
const ke_4digitdisplay_power = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_4DIGITDISPLAY + "")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_shumaguan.png */ "./src/media/ke_shumaguan.png"), 84, 32))
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_STAT_ON, "displayOn"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_STAT_OFF, "displayOff"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_STAT_CLEAR, "clear"]
            ]), "STAT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
// TM1650 4 digital display  -- 显示字符串
const ke_4digitdisplay_displayString = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_4DIGITDISPLAY + "")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_shumaguan.png */ "./src/media/ke_shumaguan.png"), 84, 32))
        this.appendValueInput("VALUE", String)
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_YF_4DIGITDISPLAY_DISPLAYSTRING);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
// TM1650 4 digital display  -- 显示数字
const ke_4digitdisplay_displayNumber = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_4DIGITDISPLAY + "")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_shumaguan.png */ "./src/media/ke_shumaguan.png"), 84, 32));
        this.appendValueInput("VALUE")
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_YF_4DIGITDISPLAY_DISPLAYNUMBER);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("支持类型：int、float、double");
    }
};
// TM1650 4 digital display  -- 小数点显示
const ke_4digitdisplay_showDot = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_4DIGITDISPLAY + "")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_shumaguan.png */ "./src/media/ke_shumaguan.png"), 84, 32));
        this.appendValueInput('DOTNUM')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_4DIGITDISPLAY_NOMBER1);
        //.appendField(new Blockly.FieldDropdown([["1", "0"], ["2", "1"], ["3", "2"], ["4", "3"]]), "NO")
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_4DIGITDISPLAY_NOMBER2)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_4DIGITDISPLAY_DOT)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_4DIGITDISPLAY_ON, "true"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_4DIGITDISPLAY_OFF, "false"]
            ]), "STAT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("数字模式小数点：1~4");
    }
};

// TM1650 4 digital display  -- 设置亮度
const ke_4digitdisplay_Brightness = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_4DIGITDISPLAY + "")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_shumaguan.png */ "./src/media/ke_shumaguan.png"), 84, 32));
        this.appendValueInput('brightness')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_4DIGITDISPLAY_BRIGHTNESS);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_4DIGITDISPLAY_BRIGHTNESS_RANGE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("亮度等级范围：1~8");
    }
};

// TM1650 4 digital display  -- 时钟模式
const ke_4digitdisplay_Time = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_4DIGITDISPLAY + "");
        this.appendValueInput('time_hour')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_4DIGITDISPLAY_TIME_HOUR);
        this.appendValueInput('time_minute')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_4DIGITDISPLAY_TIME_MINUTE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_4DIGITDISPLAY_TIME_SECOND)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_TIME_SEC_ON, "displaySEC_ON"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_TIME_SEC_BLINK, "displaySEC_BLINK"],
                [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_TIME_SEC_OFF, "displaySEC_OFF"]
            ]), "STAT");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

/*
export const ke_display_TM1637_init = {
    init: function () {
      this.setColour(DISPLAY_HUE);
      this.appendDummyInput("")
      .appendField(Blockly.Msg.MIXLY_4DIGITDISPLAY_TM1637_INIT)
      .appendField(new Blockly.FieldImage(require("../media/ke_shumaguan.png"), 50, 40))
      .appendField('CLK')
      .appendField(Blockly.Msg.MIXLY_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "CLK")
      .appendField('DIO')
      .appendField(Blockly.Msg.MIXLY_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "DIO");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip(Blockly.Msg.MIXLY_4DIGITDISPLAY_TM1637_TIP);
      this.setHelpUrl('');
//    this.setFieldValue("2", "CLK");
 //   this.setFieldValue("4", "DIO");
}
};

export const ke_display_TM1637_displyPrint = {
  init: function () {
    this.setColour(DISPLAY_HUE);
    this.appendValueInput("VALUE")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(new Blockly.FieldImage(require("../media/ke_shumaguan.png"), 50, 40))
    .appendField(Blockly.Msg.MIXLY_4DIGITDISPLAY + " TM1637"+Blockly.Msg.OLEDDISPLAY);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MIXLY_4DIGITDISPLAY_TM1637_DISPLAYSTRING_TIP);
  }
};
var display_Time_Point = [
[Blockly.Msg.MIXLY_4DIGITDISPLAY_ON, "true"],
[Blockly.Msg.MIXLY_4DIGITDISPLAY_OFF, "false"]
];

export const ke_display_TM1637_displayTime = {
  init: function () {
    this.setColour(DISPLAY_HUE);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage(require("../media/ke_shumaguan.png"), 50, 40))
    .appendField(Blockly.Msg.MIXLY_4DIGITDISPLAY + " TM1637"+Blockly.Msg.MIXLY_SHOW_FACE_TIME);
    this.appendValueInput("hour")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput("")
    .appendField(Blockly.Msg.MIXLY_HOUR);
    this.appendValueInput("minute")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput("")
    .appendField(Blockly.Msg.MIXLY_MINUTE);
     //  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MIXLY_ON, "displayOn"], [Blockly.Msg.MIXLY_OFF, "displayOff"], [Blockly.Msg.MIXLY_LCD_STAT_CLEAR, "clear"]]), "STAT");
    this.appendDummyInput("").appendField(Blockly.Msg.MIXLY_DISPLAY_TM1637_Time_Point).appendField(new Blockly.FieldDropdown([[Blockly.Msg.MIXLY_ON, "true"], [Blockly.Msg.MIXLY_OFF, "false"]]), "STAT");


    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MIXLY_4DIGITDISPLAY_TM1637_DISPLAYTIME_TOOLTIP);
  }
};

export const ke_display_TM1637_Brightness = {
  init: function () {
    this.setColour(DISPLAY_HUE);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage(require("../media/ke_shumaguan.png"), 50, 40))
    .appendField(Blockly.Msg.MIXLY_4DIGITDISPLAY + " TM1637"+Blockly.Msg.MIXLY_MICROBIT_JS_MONITOR_SET_BRIGHTNESS);

    this.appendValueInput("Brightness")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT);
    this.setTooltip(Blockly.Msg.MIXLY_4DIGITDISPLAY_4DIGITDISPLAY_BRIGHTNESS_TOOLTIP);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.MIXLY_TOOPTIP_4DIGITDISPLAY_TM1637_BRIGHTNESS);
  }
};

export const ke_display_TM1637_clearDisplay = {
  init: function () {
    this.setColour(DISPLAY_HUE);
     this.appendDummyInput()
     .appendField(new Blockly.FieldImage(require("../media/ke_shumaguan.png"), 50, 40))
    .appendField(Blockly.Msg.MIXLY_4DIGITDISPLAY + " TM1637")

    .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MIXLY_LCD_STAT_CLEAR, "clear"],[Blockly.Msg.MIXLY_LCD_STAT_BLINK, "blink"],[Blockly.Msg.MIXLY_ON, "on"], [Blockly.Msg.MIXLY_OFF, "off"], ]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MIXLY_4DIGITDISPLAY_TM1637_CLEARDISPLAY);
  }
};

/////////////////////TM1637数码管初始化//放弃//////////////////////////////////
export const ke_tm1637_init = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ke_TM1637)
            .appendField(new Blockly.FieldImage(require("../media/ke_shumaguan.png"), 50, 40));
        this.appendValueInput("PIN1", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("#CLK:");
        this.appendValueInput("PIN2", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("#DIO:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        //this.setTooltip(Blockly.Msg.MIXLY_4DIGITDISPLAY_TM1637_TIP);
        //this.setHelpUrl('');
    }
};

//////////////////TM1637数码自定义显示////////////////////////////
export const ke_tm1637_dy = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ke_TM1637)
            .appendField(new Blockly.FieldImage(require("../media/ke_shumaguan.png"), 50, 40));

        this.appendValueInput("num")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ke_value);

        this.appendValueInput("weishu")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ke_ws);
        this.appendValueInput("wei")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ke_begin);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//////////////////TM1637数码自定义显示是否填充////////////////////////////
export const ke_tm1637_tc = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ke_TM1637)
            .appendField(new Blockly.FieldImage(require("../media/ke_shumaguan.png"), 50, 40));

        this.appendValueInput("num")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ke_value);

        this.appendValueInput('0and1')
            .setCheck([Number,Boolean])
            .appendField(Blockly.Msg.ke_fill0);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//////////////////TM1637数码管亮度////////////////////////////
export const ke_tm1637_ld = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ke_TM1637)
            .appendField(new Blockly.FieldImage(require("../media/ke_shumaguan.png"), 50, 40));

        this.appendValueInput("num")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ke_light);

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//////////////////TM1637数码管是否隐藏////////////////////////////
export const ke_tm1637_yc = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ke_TM1637)
            .appendField(new Blockly.FieldImage(require("../media/ke_shumaguan.png"), 50, 40));

        this.appendValueInput('BOOL')
            .setCheck([Number,Boolean])
            .appendField(Blockly.Msg.ke_XY);

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//////////////////TM1637数码管是否显示冒号////////////////////////////
export const ke_tm1637_mh = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ke_TM1637)
            .appendField(new Blockly.FieldImage(require("../media/ke_shumaguan.png"), 50, 40));
        this.appendValueInput("num1")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ke_L);
        this.appendValueInput('BOOL')
            .setCheck([Number,Boolean])
            .appendField(Blockly.Msg.ke_MH);
        this.appendValueInput("num2")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ke_R);

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
*/
/////////////////////8*8点阵/////////////////////

const ke_matrix_init = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("").appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_INIT).appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_matrix.png */ "./src/media/ke_matrix.png"), 70, 32));
        this.appendDummyInput("").setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT).appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('myMatrix'), 'matrixName');
        this.appendValueInput("address", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("address:");
        this.appendValueInput("PIN1").setCheck(Number).setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT).appendField("SDA#");
        this.appendValueInput("PIN2").setCheck(Number).setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT).appendField("SCL#");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //   this.setTooltip("display_点阵屏初始化");
    }
};


//执行器_点阵屏显示_画点变量
var ke_DrawPixel_NUM = [
    [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_4DIGITDISPLAY_ON, "1"],
    [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_4DIGITDISPLAY_OFF, "0"]
];

//执行器_点阵屏显示_画点显示
const ke_Matrix_POS = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('myMatrix'), 'matrixName').appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_SHOW);
        this.appendValueInput("XVALUE").setCheck(Number).setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT).appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_X);
        this.appendValueInput("YVALUE").setCheck(Number).setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT).appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_Y);
        this.appendDummyInput("").setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT).appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_SHOWPOINT).appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(ke_DrawPixel_NUM), "DrawPixel_TYPE");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        //this.setTooltip(Blockly.Msg.MIXLY_DISPLAY_MATRIX_SHOWPOINT_TOOLTIP);
    }
};
//执行器_点阵屏显示_旋转变量
var ke_Rotation_NUM = [
    ["0°", "0"],
    ["-90°", "1"],
    ["+90°", "3"],
    ["180°", "2"]
];

//执行器_点阵屏显示_显示旋转
const ke_Matrix_Rotation = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('myMatrix'), 'matrixName').appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_SHOW);
        this.appendDummyInput("").setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT).appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_ROTATE).appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown(ke_Rotation_NUM), "Rotation_TYPE");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        //   this.setTooltip("");
    }
};
//执行器_点阵屏显示_字符显示
const ke_matrix_text = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('myMatrix'), 'matrixName').appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_SHOW);
        this.appendValueInput("TEXT", String).setCheck([Number, String]).setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT).appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_string);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        //this.setTooltip("");
    }
};
//执行器_点阵屏显示_显示图案
const ke_matrix1 = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('myMatrix'), 'matrixName').appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_SHOW).appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_matrix.png */ "./src/media/ke_matrix.png"), 70, 32));
        this.appendValueInput("LEDArray").setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT).appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_PICARRAY);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setTooltip();
    }
};
//执行器_点阵屏显示_图案数组
const ke_matrix2 = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("").appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_ARRAYVAR).appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput("LedArray1"), "VAR");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a81").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a82").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a83").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a84").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a85").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a86").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a87").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a88");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a71").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a72").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a73").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a74").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a75").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a76").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a77").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a78");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a61").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a62").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a63").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a64").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a65").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a66").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a67").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a68");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a51").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a52").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a53").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a54").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a55").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a56").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a57").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a58");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a41").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a42").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a43").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a44").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a45").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a46").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a47").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a48");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a31").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a32").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a33").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a34").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a35").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a36").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a37").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a38");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a21").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a22").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a23").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a24").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a25").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a26").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a27").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a28");
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a11").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a12").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a13").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a14").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a15").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a16").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a17").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldCheckbox("FALSE"), "a18");
        this.setOutput(true, Number);
        //this.setTooltip();
    }
};


//执行器_点阵屏显示_清除屏幕
const ke_matrix_clear = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("").appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('myMatrix'), 'matrixName').appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_SHOW);
        this.appendDummyInput("").setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT).appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_MATRIX_CLEAR);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        //this.setTooltip();
    }
};

///////////////////1602LCD无IIC//////////////////////
/*export const ke_1602lcd_w = {
  init: function() {
      this.setColour(DISPLAY_HUE);
      this.appendDummyInput("")
          .appendField("LCD1602")
          .appendField(new Blockly.FieldImage(require("../media/ke_lcd1602.png"), 70, 32));
    this.appendValueInput("TEXT1", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        //.appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(Blockly.Msg.MIXLY_LCD_PRINT1);
    this.appendValueInput("TEXT2", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MIXLY_LCD_PRINT2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
*/


///////////////////1602LCD_init//////////////////////
const ke_1602lcd_init = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendValueInput("address", Number)
            //.setCheck(Number)
            //.setAlign(Blockly.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_SETUP)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_lcd_p)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([['1602', '16,2'], ['2004', '20,4']]), 'TYPE')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_shilihua)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('mylcd'), 'VAR')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_iic_pin)
            //.appendField("address:");

            //.setCheck(Number)
            //.setAlign(Blockly.ALIGN_RIGHT)
            //.appendField("address:");
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_ADDRESS);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
    }
};


const ke_1602lcd = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DF_LCD)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_lcd1602.png */ "./src/media/ke_lcd1602.png"), 70, 32));
        this.appendValueInput("TEXT", String)
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            // .appendField(Blockly.Msg.MIXLY_DF_LCD)

            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('mylcd'), 'VAR')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_PRINT1);
        this.appendValueInput("TEXT2", String)
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_PRINT2);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

const ke_1602lcd_print2 = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendValueInput("row", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DF_LCD)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('mylcd'), 'VAR')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_ROW);
        this.appendValueInput("column", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_COLUMN);
        this.appendValueInput("TEXT", String)
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_PRINT);
        this.setPreviousStatement(true, null);
        this.setInputsInline(true);
        this.setNextStatement(true, null);
    }
};




///////////////////1602LCD//////////////////////
/*export const ke_1602lcd = {
  init: function() {
    this.setColour(DISPLAY_HUE);
    this.appendDummyInput("")
    .appendField(Blockly.Msg.MIXLY_ke_1602LCD)
    .appendField(new Blockly.FieldImage(require("../media/ke_lcd1602.png"), 70, 32));
    this.appendValueInput("TEXT1", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.Msg.MIXLY_ke_print1);
    this.appendValueInput("TEXT2", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.Msg.MIXLY_ke_print2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};*/

const ke_1602lcd_left = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_lcd_left)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('mylcd'), 'VAR');

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

const ke_1602lcd_right = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_lcd_right)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('mylcd'), 'VAR');

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

const ke_1602lcd_clear = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput()
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DF_LCD)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('mylcd'), 'VAR')
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldDropdown([[blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_STAT_ON, "display"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_STAT_OFF, "noDisplay"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_STAT_CURSOR, "cursor"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_STAT_NOCURSOR, "noCursor"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_STAT_BLINK, "blink"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_STAT_NOBLINK, "noBlink"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_STAT_CLEAR, "clear"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_NOBACKLIGHT, "noBacklight"], [blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_BACKLIGHT, "backlight"]]), "STAT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

//128X32 LCD display  -- 初始化

const lcd128_init = {
    init: function () {
        this.appendDummyInput("")
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/12832.png */ "./src/media/12832.png"), 84, 32))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD128_SETUP);
        this.setColour(DISPLAY_HUE);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

//128X32 LCD display 显示第几行第几列
const lcd128_cursor = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD128_CURSOR)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/12832.png */ "./src/media/12832.png"), 84, 32));
        this.appendValueInput("row", Number)  //数字输入和上面的图片分开写
            .setCheck(Number)  //少了这个
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_ROW);
        this.appendValueInput("col", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD_COLUMN);
        this.setPreviousStatement(true, null);
        this.setInputsInline(true);
        this.setNextStatement(true, null);
    }
};


//128X32 LCD display 显示字符
const lcd128_string = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_DISPLAY_STRING)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/12832.png */ "./src/media/12832.png"), 84, 32));
        this.appendValueInput("string", String)
            .setCheck([Number, String])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
    }
};


//128X32 LCD display 画点坐标
const lcd128_pixel = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput()
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/12832.png */ "./src/media/12832.png"), 84, 32))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_LCD128_PIXLE);
        this.appendValueInput("row", Number)
            .setCheck()
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT);
        this.appendValueInput("col", Number)
            .setCheck()
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};


//128X32 LCD display 删除点坐标
const lcd128_d_pixel = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput()
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/12832.png */ "./src/media/12832.png"), 84, 32))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_LCD128_D);
        this.appendValueInput("row", Number)
            .setCheck()
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT);
        this.appendValueInput("col", Number)
            .setCheck()
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

//128X32 LCD display 清屏
const lcd128_clear = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_LCD128_CLEAR)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/12832.png */ "./src/media/12832.png"), 84, 32));
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

///////////////////LCD1602清屏///////////////////////
/*export const ke_1602lcd_clear = {
  init: function() {
    this.setColour(DISPLAY_HUE);
    this.appendDummyInput("")
    .appendField("1602LCD_clear")
    //.appendField(new Blockly.FieldDropdown([[Blockly.Msg.Kids_ON, "HIGH"], [Blockly.Msg.Kids_OFF, "LOW"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};*/


/////////////////2004LCD//////////////////////
const ke_2004lcd = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_2004LCD);
        this.appendValueInput("TEXT1", String)
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_print1);
        this.appendValueInput("TEXT2", String)
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_print2)
        this.appendValueInput("TEXT3", String)
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_print3);
        this.appendValueInput("TEXT4", String)
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_print4)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};


///////////////////OLED_init///////////////////////
const ke_OLED_init = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_init)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_iic_pin);
        //.appendField(new Blockly.FieldDropdown([[Blockly.Msg.Kids_ON, "HIGH"], [Blockly.Msg.Kids_OFF, "LOW"]]), "STAT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

///////////////////OLED_piexl///////////////////////
const ke_OLED_piexl = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_piexl);
        this.appendValueInput("val_x", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendValueInput("val_y", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);
        //.appendField(new Blockly.FieldImage(require("../media/ke_oled.png"), 70, 32))
        //.appendField(Blockly.Msg.Kids_iic_pin);
        //.appendField(new Blockly.FieldDropdown([[Blockly.Msg.Kids_ON, "HIGH"], [Blockly.Msg.Kids_OFF, "LOW"]]), "STAT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

///////////////////OLED_line///////////////////////
const ke_OLED_line = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_line)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_cong);
        this.appendValueInput("val_x1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendValueInput("val_y1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_dao);
        this.appendValueInput("val_x2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendValueInput("val_y2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};


///////////////////OLED_rect///////////////////////
const ke_OLED_rect = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_rect);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_kai);
        this.appendValueInput("val_x1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendValueInput("val_y1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_chang);
        this.appendValueInput("val_x2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_kuan);
        this.appendValueInput("val_y2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

///////////////////OLED_fullrect///////////////////////
const ke_OLED_fullrect = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_fil_lrect);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_kai);
        this.appendValueInput("val_x1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendValueInput("val_y1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_chang);
        this.appendValueInput("val_x2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_kuan);
        this.appendValueInput("val_y2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};



///////////////////OLED_roundrect///////////////////////
const ke_OLED_roundrect = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_r_rect);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_kai);
        this.appendValueInput("val_x1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendValueInput("val_y1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_chang);
        this.appendValueInput("val_x2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_kuan);
        this.appendValueInput("val_y2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);
        this.appendValueInput("val_round", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_radius);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};


///////////////////OLED_fullroundrect///////////////////////
const ke_OLED_fullroundrect = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_r_fill_rect);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_kai);
        this.appendValueInput("val_x1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendValueInput("val_y1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_chang);
        this.appendValueInput("val_x2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_kuan);
        this.appendValueInput("val_y2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);
        this.appendValueInput("val_round", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_radius);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};



///////////////////OLED_circle///////////////////////
const ke_OLED_circle = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_circle);
        this.appendValueInput("val_x1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendValueInput("val_y1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);

        this.appendValueInput("val_circle", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_circle_radius);

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

///////////////////OLED_fullcircle///////////////////////
const ke_OLED_fullcircle = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_fill_circle);
        this.appendValueInput("val_x1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendValueInput("val_y1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);

        this.appendValueInput("val_circle", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_circle_radius);

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

///////////////////OLED_三角形///////////////////////
const ke_OLED_triangle = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_triangle)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_angle1);
        this.appendValueInput("val_x1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendValueInput("val_y1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);

        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_angle2);
        this.appendValueInput("val_x2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendValueInput("val_y2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);

        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_angle3);
        this.appendValueInput("val_x3", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendValueInput("val_y3", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};



///////////////////OLED_填充三角形///////////////////////
const ke_OLED_fulltriangle = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_fill_triangle)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_angle1);
        this.appendValueInput("val_x1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendValueInput("val_y1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);

        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_angle2);
        this.appendValueInput("val_x2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendValueInput("val_y2", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);

        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_angle3);
        this.appendValueInput("val_x3", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendValueInput("val_y3", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

///////////////////OLED_string///////////////////////
const ke_OLED_string = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_string1);
        this.appendValueInput("size", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_size);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_weizhi);
        this.appendValueInput("val_x1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_x);
        this.appendValueInput("val_y1", Number)
            .setCheck(Number);
        this.appendDummyInput("")
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_y);
        this.appendValueInput("TEXT1", String)
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_print);
        //.appendField(new Blockly.FieldImage(require("../media/ke_oled.png"), 70, 32))
        //.appendField(Blockly.Msg.Kids_iic_pin);
        //.appendField(new Blockly.FieldDropdown([[Blockly.Msg.Kids_ON, "HIGH"], [Blockly.Msg.Kids_OFF, "LOW"]]), "STAT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};


////////////////////OLED////////////////////////
const ke_oled = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_OLED);


        this.appendValueInput("size", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.Kids_size);

        this.appendValueInput("TEXT1", String)
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_print1);
        this.appendValueInput("TEXT2", String)
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_print2);
        this.appendValueInput("TEXT3", String)
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_print3);
        this.appendValueInput("TEXT4", String)
            .setCheck([String, Number])
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_print4);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

///////////////////OLED清屏///////////////////////
const ke_oled_clear = {
    init: function () {
        this.setColour(DISPLAY_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.ke_oled_clear)
        //.appendField(new Blockly.FieldDropdown([[Blockly.Msg.Kids_ON, "HIGH"], [Blockly.Msg.Kids_OFF, "LOW"]]), "STAT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};


/////////////////////////////通讯/////////////////////////////////////////////

////////////////红外接收////////////////////////////
//红外接收模块
const ke_ir_r = {
    init: function () {
        this.setColour(COMMUNICATE_HUE);
        this.appendValueInput("PIN", Number)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('ir_rec'), 'VAR')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_IR_R)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_irr.png */ "./src/media/ke_irr.png"), 70, 32))
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_PIN)
            .setCheck(Number);
        this.appendStatementInput('DO')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_read);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_IR_RECIEVE_TOOLTIP);
    },
    getVars: function () {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function (oldName, newName) {
        if (blockly_core__WEBPACK_IMPORTED_MODULE_0__.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

////////////////////红外发射/////////////////////
const ke_ir_s = {
    init: function () {
        this.setColour(COMMUNICATE_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_IR_E)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_irs.png */ "./src/media/ke_irs.png"), 43, 32));

        this.appendValueInput("num1", Number)
            .setCheck(Number)
            .setAlign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.ALIGN_RIGHT)
            .appendField("Send");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};


//////////////////////RFID////////////////////////////
const rc522_i2c_init = {
    init: function () {
        this.setColour(COMMUNICATE_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_rc522_iic_init)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/rc522_iic.png */ "./src/media/rc522_iic.png"), 60, 40));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

const rc522_i2c_read = {
    init: function () {
        this.setColour(COMMUNICATE_HUE);
        this.appendDummyInput("")
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_rc522_iic_read)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/rc522_iic.png */ "./src/media/rc522_iic.png"), 60, 40));
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

//////////////////////蓝牙////////////////////////////
const ke_bluetooth = {
    init: function () {
        this.setColour(COMMUNICATE_HUE);
        this.appendValueInput("PIN1", Number)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldTextInput('val'), 'VAL')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_BLUETOOTH)
            .appendField(new blockly_core__WEBPACK_IMPORTED_MODULE_0__.FieldImage(__webpack_require__(/*! ../media/ke_bluetooth.png */ "./src/media/ke_bluetooth.png"), 70, 32))
            .appendField("RX:")
            .setCheck(Number);
        this.appendValueInput("PIN2", Number)
            .appendField("TX:")
            .setCheck(Number);
        this.appendStatementInput('DO')
            .appendField(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Msg.MIXLY_ke_read);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("bluetooth");
    },
    getVars: function () {
        return [this.getFieldValue('VAL')];
    },
    renameVar: function (oldName, newName) {
        if (blockly_core__WEBPACK_IMPORTED_MODULE_0__.Names.equals(oldName, this.getFieldValue('VAL'))) {
            this.setTitleValue(newName, 'VAL');
        }
    }
};

/***/ }),

/***/ "./src/generators/generator.js":
/*!*************************************!*\
  !*** ./src/generators/generator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BMP388_INIT: () => (/* binding */ BMP388_INIT),
/* harmony export */   BMP388_READ: () => (/* binding */ BMP388_READ),
/* harmony export */   Current: () => (/* binding */ Current),
/* harmony export */   TCS34725_Get_RGB: () => (/* binding */ TCS34725_Get_RGB),
/* harmony export */   TFT_SD_display: () => (/* binding */ TFT_SD_display),
/* harmony export */   TFT_SD_init: () => (/* binding */ TFT_SD_init),
/* harmony export */   Voltage: () => (/* binding */ Voltage),
/* harmony export */   encoder_button: () => (/* binding */ encoder_button),
/* harmony export */   ke_1602lcd: () => (/* binding */ ke_1602lcd),
/* harmony export */   ke_1602lcd_clear: () => (/* binding */ ke_1602lcd_clear),
/* harmony export */   ke_1602lcd_init: () => (/* binding */ ke_1602lcd_init),
/* harmony export */   ke_1602lcd_left: () => (/* binding */ ke_1602lcd_left),
/* harmony export */   ke_1602lcd_print2: () => (/* binding */ ke_1602lcd_print2),
/* harmony export */   ke_1602lcd_right: () => (/* binding */ ke_1602lcd_right),
/* harmony export */   ke_1602lcd_w: () => (/* binding */ ke_1602lcd_w),
/* harmony export */   ke_18b20: () => (/* binding */ ke_18b20),
/* harmony export */   ke_2004lcd: () => (/* binding */ ke_2004lcd),
/* harmony export */   ke_4digitdisplay_Brightness: () => (/* binding */ ke_4digitdisplay_Brightness),
/* harmony export */   ke_4digitdisplay_Time: () => (/* binding */ ke_4digitdisplay_Time),
/* harmony export */   ke_4digitdisplay_displayNumber: () => (/* binding */ ke_4digitdisplay_displayNumber),
/* harmony export */   ke_4digitdisplay_displayString: () => (/* binding */ ke_4digitdisplay_displayString),
/* harmony export */   ke_4digitdisplay_init: () => (/* binding */ ke_4digitdisplay_init),
/* harmony export */   ke_4digitdisplay_power: () => (/* binding */ ke_4digitdisplay_power),
/* harmony export */   ke_4digitdisplay_showDot: () => (/* binding */ ke_4digitdisplay_showDot),
/* harmony export */   ke_ADKey: () => (/* binding */ ke_ADKey),
/* harmony export */   ke_BMP280_READ: () => (/* binding */ ke_BMP280_READ),
/* harmony export */   ke_DHT: () => (/* binding */ ke_DHT),
/* harmony export */   ke_Gesture_APDS: () => (/* binding */ ke_Gesture_APDS),
/* harmony export */   ke_MPU6050: () => (/* binding */ ke_MPU6050),
/* harmony export */   ke_MPU6050_update: () => (/* binding */ ke_MPU6050_update),
/* harmony export */   ke_Matrix_POS: () => (/* binding */ ke_Matrix_POS),
/* harmony export */   ke_Matrix_Rotation: () => (/* binding */ ke_Matrix_Rotation),
/* harmony export */   ke_OLED_circle: () => (/* binding */ ke_OLED_circle),
/* harmony export */   ke_OLED_fullcircle: () => (/* binding */ ke_OLED_fullcircle),
/* harmony export */   ke_OLED_fullrect: () => (/* binding */ ke_OLED_fullrect),
/* harmony export */   ke_OLED_fullroundrect: () => (/* binding */ ke_OLED_fullroundrect),
/* harmony export */   ke_OLED_fulltriangle: () => (/* binding */ ke_OLED_fulltriangle),
/* harmony export */   ke_OLED_init: () => (/* binding */ ke_OLED_init),
/* harmony export */   ke_OLED_line: () => (/* binding */ ke_OLED_line),
/* harmony export */   ke_OLED_piexl: () => (/* binding */ ke_OLED_piexl),
/* harmony export */   ke_OLED_rect: () => (/* binding */ ke_OLED_rect),
/* harmony export */   ke_OLED_roundrect: () => (/* binding */ ke_OLED_roundrect),
/* harmony export */   ke_OLED_string: () => (/* binding */ ke_OLED_string),
/* harmony export */   ke_OLED_triangle: () => (/* binding */ ke_OLED_triangle),
/* harmony export */   ke_Piezo: () => (/* binding */ ke_Piezo),
/* harmony export */   ke_UV: () => (/* binding */ ke_UV),
/* harmony export */   ke_a_Write: () => (/* binding */ ke_a_Write),
/* harmony export */   ke_adxl345: () => (/* binding */ ke_adxl345),
/* harmony export */   ke_alcohol: () => (/* binding */ ke_alcohol),
/* harmony export */   ke_alcohol_D: () => (/* binding */ ke_alcohol_D),
/* harmony export */   ke_analog_t: () => (/* binding */ ke_analog_t),
/* harmony export */   ke_avoid: () => (/* binding */ ke_avoid),
/* harmony export */   ke_bluetooth: () => (/* binding */ ke_bluetooth),
/* harmony export */   ke_bmp180: () => (/* binding */ ke_bmp180),
/* harmony export */   ke_bmp280: () => (/* binding */ ke_bmp280),
/* harmony export */   ke_button: () => (/* binding */ ke_button),
/* harmony export */   ke_buzzer: () => (/* binding */ ke_buzzer),
/* harmony export */   ke_controls_tone2: () => (/* binding */ ke_controls_tone2),
/* harmony export */   ke_crash: () => (/* binding */ ke_crash),
/* harmony export */   ke_dht11: () => (/* binding */ ke_dht11),
/* harmony export */   ke_ds1307_GetTime: () => (/* binding */ ke_ds1307_GetTime),
/* harmony export */   ke_ds1307_SetTime: () => (/* binding */ ke_ds1307_SetTime),
/* harmony export */   ke_ds1307_SetTime2: () => (/* binding */ ke_ds1307_SetTime2),
/* harmony export */   ke_ds3231: () => (/* binding */ ke_ds3231),
/* harmony export */   ke_ds3231_GetTime: () => (/* binding */ ke_ds3231_GetTime),
/* harmony export */   ke_ds3231_SetTime: () => (/* binding */ ke_ds3231_SetTime),
/* harmony export */   ke_ds3231_SetTime2: () => (/* binding */ ke_ds3231_SetTime2),
/* harmony export */   ke_dual: () => (/* binding */ ke_dual),
/* harmony export */   ke_film_p: () => (/* binding */ ke_film_p),
/* harmony export */   ke_fire2: () => (/* binding */ ke_fire2),
/* harmony export */   ke_flame: () => (/* binding */ ke_flame),
/* harmony export */   ke_hall: () => (/* binding */ ke_hall),
/* harmony export */   ke_ir_g: () => (/* binding */ ke_ir_g),
/* harmony export */   ke_ir_r: () => (/* binding */ ke_ir_r),
/* harmony export */   ke_ir_s: () => (/* binding */ ke_ir_s),
/* harmony export */   ke_jg: () => (/* binding */ ke_jg),
/* harmony export */   ke_joystick: () => (/* binding */ ke_joystick),
/* harmony export */   ke_joystick_btn: () => (/* binding */ ke_joystick_btn),
/* harmony export */   ke_knock: () => (/* binding */ ke_knock),
/* harmony export */   ke_led4: () => (/* binding */ ke_led4),
/* harmony export */   ke_led_b: () => (/* binding */ ke_led_b),
/* harmony export */   ke_led_g: () => (/* binding */ ke_led_g),
/* harmony export */   ke_led_r: () => (/* binding */ ke_led_r),
/* harmony export */   ke_led_w: () => (/* binding */ ke_led_w),
/* harmony export */   ke_led_y: () => (/* binding */ ke_led_y),
/* harmony export */   ke_light: () => (/* binding */ ke_light),
/* harmony export */   ke_light_b: () => (/* binding */ ke_light_b),
/* harmony export */   ke_lm35: () => (/* binding */ ke_lm35),
/* harmony export */   ke_matrix1: () => (/* binding */ ke_matrix1),
/* harmony export */   ke_matrix2: () => (/* binding */ ke_matrix2),
/* harmony export */   ke_matrix_clear: () => (/* binding */ ke_matrix_clear),
/* harmony export */   ke_matrix_init: () => (/* binding */ ke_matrix_init),
/* harmony export */   ke_matrix_text: () => (/* binding */ ke_matrix_text),
/* harmony export */   ke_motor: () => (/* binding */ ke_motor),
/* harmony export */   ke_motor001: () => (/* binding */ ke_motor001),
/* harmony export */   ke_motor002: () => (/* binding */ ke_motor002),
/* harmony export */   ke_motor2: () => (/* binding */ ke_motor2),
/* harmony export */   ke_music: () => (/* binding */ ke_music),
/* harmony export */   ke_notone: () => (/* binding */ ke_notone),
/* harmony export */   ke_oled: () => (/* binding */ ke_oled),
/* harmony export */   ke_oled_clear: () => (/* binding */ ke_oled_clear),
/* harmony export */   ke_pca9685: () => (/* binding */ ke_pca9685),
/* harmony export */   ke_potentiometer: () => (/* binding */ ke_potentiometer),
/* harmony export */   ke_qcd: () => (/* binding */ ke_qcd),
/* harmony export */   ke_reed_s: () => (/* binding */ ke_reed_s),
/* harmony export */   ke_relay: () => (/* binding */ ke_relay),
/* harmony export */   ke_rgb1_1: () => (/* binding */ ke_rgb1_1),
/* harmony export */   ke_rgb1_2: () => (/* binding */ ke_rgb1_2),
/* harmony export */   ke_rgb2812: () => (/* binding */ ke_rgb2812),
/* harmony export */   ke_rgb2_1: () => (/* binding */ ke_rgb2_1),
/* harmony export */   ke_rgb2_2: () => (/* binding */ ke_rgb2_2),
/* harmony export */   ke_servo: () => (/* binding */ ke_servo),
/* harmony export */   ke_servo_r: () => (/* binding */ ke_servo_r),
/* harmony export */   ke_shake: () => (/* binding */ ke_shake),
/* harmony export */   ke_sl_button: () => (/* binding */ ke_sl_button),
/* harmony export */   ke_slide_potentiometer: () => (/* binding */ ke_slide_potentiometer),
/* harmony export */   ke_smoke: () => (/* binding */ ke_smoke),
/* harmony export */   ke_smoke_D: () => (/* binding */ ke_smoke_D),
/* harmony export */   ke_soil: () => (/* binding */ ke_soil),
/* harmony export */   ke_sound: () => (/* binding */ ke_sound),
/* harmony export */   ke_speaker: () => (/* binding */ ke_speaker),
/* harmony export */   ke_speaker2: () => (/* binding */ ke_speaker2),
/* harmony export */   ke_speaker_notone: () => (/* binding */ ke_speaker_notone),
/* harmony export */   ke_sr04: () => (/* binding */ ke_sr04),
/* harmony export */   ke_steam: () => (/* binding */ ke_steam),
/* harmony export */   ke_temt6000: () => (/* binding */ ke_temt6000),
/* harmony export */   ke_tilt: () => (/* binding */ ke_tilt),
/* harmony export */   ke_tone01: () => (/* binding */ ke_tone01),
/* harmony export */   ke_track: () => (/* binding */ ke_track),
/* harmony export */   ke_tuoch: () => (/* binding */ ke_tuoch),
/* harmony export */   ke_v_motor: () => (/* binding */ ke_v_motor),
/* harmony export */   ke_w_buzzer1: () => (/* binding */ ke_w_buzzer1),
/* harmony export */   ke_w_buzzer2: () => (/* binding */ ke_w_buzzer2),
/* harmony export */   ke_w_buzzer3: () => (/* binding */ ke_w_buzzer3),
/* harmony export */   ke_water: () => (/* binding */ ke_water),
/* harmony export */   lcd128_clear: () => (/* binding */ lcd128_clear),
/* harmony export */   lcd128_cursor: () => (/* binding */ lcd128_cursor),
/* harmony export */   lcd128_d_pixel: () => (/* binding */ lcd128_d_pixel),
/* harmony export */   lcd128_init: () => (/* binding */ lcd128_init),
/* harmony export */   lcd128_pixel: () => (/* binding */ lcd128_pixel),
/* harmony export */   lcd128_string: () => (/* binding */ lcd128_string),
/* harmony export */   make_arduino_paj7620_ReadReg: () => (/* binding */ make_arduino_paj7620_ReadReg),
/* harmony export */   make_arduino_paj7620_begin: () => (/* binding */ make_arduino_paj7620_begin),
/* harmony export */   mlx90614_get_data: () => (/* binding */ mlx90614_get_data),
/* harmony export */   mlx90614_init: () => (/* binding */ mlx90614_init),
/* harmony export */   rc522_i2c_init: () => (/* binding */ rc522_i2c_init),
/* harmony export */   rc522_i2c_read: () => (/* binding */ rc522_i2c_read),
/* harmony export */   sensor_encoder_get: () => (/* binding */ sensor_encoder_get),
/* harmony export */   sensor_encoder_handle: () => (/* binding */ sensor_encoder_handle),
/* harmony export */   sensor_encoder_init: () => (/* binding */ sensor_encoder_init),
/* harmony export */   sensor_encoder_set: () => (/* binding */ sensor_encoder_set)
/* harmony export */ });
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly/core */ "blockly/core");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);


////////////////////模拟输出////////////////////
const ke_a_Write = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var dropdown_val = generator.valueToCode(this, 'num', generator.ORDER_ATOMIC);
    //generator.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
    var code = 'analogWrite(' + dropdown_pin + ',' + dropdown_val + ');\n'
    return code;
};

////////////////////红黄绿蓝白LED////////////////////
const ke_led_r = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');
    generator.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
    return code;
};

const ke_led_g = ke_led_r;
const ke_led_b = ke_led_r;
const ke_led_y = ke_led_r;
const ke_led_w = ke_led_r;
const ke_led4 = ke_led_r;
const ke_jg = ke_led_r;
const ke_qcd = ke_led_r;


////////////////////双色LED////////////////////
const ke_dual = function (_, generator) {
    var dropdown_pin1 = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    var dropdown_pin2 = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);
    var dropdown_stat1 = this.getFieldValue('STAT1');
    var dropdown_stat2 = this.getFieldValue('STAT2');
    generator.setups_['setup_output_' + dropdown_pin1] = 'pinMode(' + dropdown_pin1 + ', OUTPUT);';
    generator.setups_['setup_output_' + dropdown_pin2] = 'pinMode(' + dropdown_pin2 + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin1 + ',' + dropdown_stat1 + ');\ndigitalWrite(' + dropdown_pin2 + ',' + dropdown_stat2 + ');\n'
    return code;
};

////////////////////RGB01////////////////////
const ke_rgb1_1 = function (_, generator) {
    var dropdown_pin1 = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    var dropdown_pin2 = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);
    var dropdown_pin3 = generator.valueToCode(this, 'PIN3', generator.ORDER_ATOMIC);
    var dropdown_stat1 = this.getFieldValue('STAT1');
    var dropdown_stat2 = this.getFieldValue('STAT2');
    var dropdown_stat3 = this.getFieldValue('STAT3');
    generator.setups_['setup_output_' + dropdown_pin1] = 'pinMode(' + dropdown_pin1 + ', OUTPUT);';
    generator.setups_['setup_output_' + dropdown_pin2] = 'pinMode(' + dropdown_pin2 + ', OUTPUT);';
    generator.setups_['setup_output_' + dropdown_pin3] = 'pinMode(' + dropdown_pin3 + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin1 + ',' + dropdown_stat1 + ');\ndigitalWrite(' + dropdown_pin2 + ',' + dropdown_stat2 + ');\ndigitalWrite(' + dropdown_pin3 + ',' + dropdown_stat3 + ');\n'
    return code;
};


//////////////////////////RGB//////////////////////////////
const ke_rgb1_2 = function (_, generator) {
    var dropdown_pin1 = generator.valueToCode(this, 'R', generator.ORDER_ATOMIC);
    var red_pwm = generator.valueToCode(this, 'r', generator.ORDER_ATOMIC);
    generator.setups_['setup_output_' + dropdown_pin1] = 'pinMode(' + dropdown_pin1 + ', OUTPUT);';

    var dropdown_pin2 = generator.valueToCode(this, 'G', generator.ORDER_ATOMIC);
    var green_pwm = generator.valueToCode(this, 'g', generator.ORDER_ATOMIC);
    generator.setups_['setup_output_' + dropdown_pin2] = 'pinMode(' + dropdown_pin2 + ', OUTPUT);';

    var dropdown_pin3 = generator.valueToCode(this, 'B', generator.ORDER_ATOMIC);
    var blue_pwm = generator.valueToCode(this, 'b', generator.ORDER_ATOMIC);
    generator.setups_['setup_output_' + dropdown_pin3] = 'pinMode(' + dropdown_pin3 + ', OUTPUT);';

    var code = 'analogWrite(' + dropdown_pin1 + ',255-' + red_pwm + ');\nanalogWrite(' + dropdown_pin2 + ',255-' + green_pwm + ');\nanalogWrite(' + dropdown_pin3 + ',255-' + blue_pwm + ');\n'
    return code;
};

////////////////////RGB2////////////////////
const ke_rgb2_1 = function (_, generator) {
    var dropdown_pin1 = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    var dropdown_pin2 = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);
    var dropdown_pin3 = generator.valueToCode(this, 'PIN3', generator.ORDER_ATOMIC);
    var dropdown_stat1 = this.getFieldValue('STAT1');
    var dropdown_stat2 = this.getFieldValue('STAT2');
    var dropdown_stat3 = this.getFieldValue('STAT3');
    generator.setups_['setup_output_' + dropdown_pin1] = 'pinMode(' + dropdown_pin1 + ', OUTPUT);';
    generator.setups_['setup_output_' + dropdown_pin2] = 'pinMode(' + dropdown_pin2 + ', OUTPUT);';
    generator.setups_['setup_output_' + dropdown_pin3] = 'pinMode(' + dropdown_pin3 + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin1 + ',' + dropdown_stat1 + ');\ndigitalWrite(' + dropdown_pin2 + ',' + dropdown_stat2 + ');\ndigitalWrite(' + dropdown_pin3 + ',' + dropdown_stat3 + ');\n'
    return code;
};


//////////////////////////RGB2//////////////////////////////
const ke_rgb2_2 = function (_, generator) {
    var dropdown_pin1 = generator.valueToCode(this, 'R', generator.ORDER_ATOMIC);
    var red_pwm = generator.valueToCode(this, 'r', generator.ORDER_ATOMIC);
    generator.setups_['setup_output_' + dropdown_pin1] = 'pinMode(' + dropdown_pin1 + ', OUTPUT);';

    var dropdown_pin2 = generator.valueToCode(this, 'G', generator.ORDER_ATOMIC);
    var green_pwm = generator.valueToCode(this, 'g', generator.ORDER_ATOMIC);
    generator.setups_['setup_output_' + dropdown_pin2] = 'pinMode(' + dropdown_pin2 + ', OUTPUT);';

    var dropdown_pin3 = generator.valueToCode(this, 'B', generator.ORDER_ATOMIC);
    var blue_pwm = generator.valueToCode(this, 'b', generator.ORDER_ATOMIC);
    generator.setups_['setup_output_' + dropdown_pin3] = 'pinMode(' + dropdown_pin3 + ', OUTPUT);';

    var code = 'analogWrite(' + dropdown_pin1 + ',' + red_pwm + ');\nanalogWrite(' + dropdown_pin2 + ',' + green_pwm + ');\nanalogWrite(' + dropdown_pin3 + ',' + blue_pwm + ');\n'
    return code;
};

////////////////////蜂鸣器////////////////////
const ke_w_buzzer1 = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');
    generator.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
    return code;
};

const ke_w_buzzer2 = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var fre = generator.valueToCode(this, 'FREQUENCY',
        generator.ORDER_ASSIGNMENT) || '0';
    var code = "tone(" + dropdown_pin + "," + fre + ");\n";
    generator.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    return code;
};

const ke_w_buzzer3 = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var fre = generator.valueToCode(this, 'FREQUENCY',
        generator.ORDER_ASSIGNMENT) || '0';
    var dur = generator.valueToCode(this, 'DURATION',
        generator.ORDER_ASSIGNMENT) || '0';
    var code = "tone(" + dropdown_pin + "," + fre + "," + dur + ");\n";
    generator.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    return code;
};

////////////////////蜂鸣器//////////////////////
const ke_tone01 = function (_, generator) {
    var code = this.getFieldValue('STAT');
    return [code, generator.ORDER_ATOMIC];
};

const ke_buzzer = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var fre = generator.valueToCode(this, 'FREQUENCY',
        generator.ORDER_ASSIGNMENT) || '0';
    generator.setups_['setup_output'] = 'pinMode(' + dropdown_pin + ', OUTPUT);';

    var dropdown_type = this.getFieldValue('beat1');

    var code = 'tone(' + dropdown_pin + ',' + fre + ');\ndelay(' + dropdown_type + ');\n';
    /*if(window.isNaN(dropdown_pin)){
       code = code+'pinMode('+dropdown_pin+', OUTPUT);\n';
    }else{
       generator.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
    }*/
    //code += "tone("+dropdown_pin+","+fre+");\n";
    return code;
};

const ke_controls_tone2 = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var fre = generator.valueToCode(this, 'FREQUENCY',
        generator.ORDER_ASSIGNMENT) || '0';
    var dur = generator.valueToCode(this, 'DURATION',
        generator.ORDER_ASSIGNMENT) || '0';
    var code = "";
    if (window.isNaN(dropdown_pin)) {
        code = code + 'pinMode(' + dropdown_pin + ', OUTPUT);\n';
    } else {
        generator.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    }
    code += "tone(" + dropdown_pin + "," + fre + "," + dur + ");\n";
    return code;
};

//////////////////////////music///////////////////////////
const ke_music = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    generator.setups_['setup_output_music'] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    generator.definitions_['include_birthday'] = 'void birthday()\n{\n  tone(' + dropdown_pin + ',294);\n  delay(250);\n  tone(' + dropdown_pin + ',440);\n  delay(250);\n  tone(' + dropdown_pin + ',392);\n  delay(250);\n  tone(' + dropdown_pin + ',532);\n  delay(250);\n  tone(' + dropdown_pin + ',494);\n  delay(500);\n  tone(' + dropdown_pin + ',392);\n  delay(250);\n  tone(' + dropdown_pin + ',440);\n  delay(250);\n  tone(' + dropdown_pin + ',392);\n  delay(250);\n  tone(' + dropdown_pin + ',587);\n  delay(250);\n  tone(' + dropdown_pin + ',532);\n  delay(500);\n  tone(' + dropdown_pin + ',392);\n  delay(250);\n  tone(' + dropdown_pin + ',784);\n  delay(250);\n  tone(' + dropdown_pin + ',659);\n  delay(250);\n  tone(' + dropdown_pin + ',532);\n  delay(250);\n  tone(' + dropdown_pin + ',494);\n  delay(250);\n  tone(' + dropdown_pin + ',440);\n  delay(250);\n  tone(' + dropdown_pin + ',698);\n  delay(375);\n  tone(' + dropdown_pin + ',659);\n  delay(250);\n  tone(' + dropdown_pin + ',532);\n  delay(250);\n  tone(' + dropdown_pin + ',587);\n  delay(250);\n  tone(' + dropdown_pin + ',532);\n  delay(500);\n}\n';
    generator.definitions_['include_tone'] = '//tone\n#define D0 -1\n#define D1 262\n#define D2 293\n#define D3 329\n#define D4 349\n#define D5 392\n#define D6 440\n#define D7 494\n#define M1 523\n#define M2 586\n#define M3 658\n#define M4 697\n#define M5 783\n#define M6 879\n#define M7 987\n#define H1 1045\n#define H2 1171\n#define H3 1316\n#define H4 1393\n#define H5 1563\n#define H6 1755\n#define H7 1971\n\n#define WHOLE 1\n#define HALF 0.5\n#define QUARTER 0.25\n#define EIGHTH 0.25\n#define SIXTEENTH 0.625\n ';

    generator.definitions_['include_tune'] = '\nint tune[]= \n{\n  M3,M3,M4,M5,\n  M5,M4,M3,M2,\n  M1,M1,M2,M3,\n  M3,M2,M2,\n  M3,M3,M4,M5,\n  M5,M4,M3,M2,\n  M1,M1,M2,M3,\n  M2,M1,M1,\n  M2,M2,M3,M1,\n  M2,M3,M4,M3,M1,\n  M2,M3,M4,M3,M2,\n  M1,M2,D5,D0,\n  M3,M3,M4,M5,\n  M5,M4,M3,M4,M2,\n  M1,M1,M2,M3,\n  M2,M1,M1\n};';
    generator.definitions_['include_durt'] = '\nfloat durt[]= \n {\n  1,1,1,1,\n  1,1,1,1,\n  1,1,1,1,\n  1+0.5,0.5,1+1,\n  1,1,1,1,\n  1,1,1,1,\n  1,1,1,1,\n  1+0.5,0.5,1+1,\n  1,1,1,1,\n  1,0.5,0.5,1,1,\n  1,0.5,0.5,1,1,\n  1,1,1,1,\n  1,1,1,1,\n  1,1,1,0.5,0.5,\n  1,1,1,1,\n  1+0.5,0.5,1+1,\n };';
    generator.definitions_['include_io1'] = '\n int length;\n int tonepin=' + dropdown_pin + '; \n';
    generator.definitions_['include_Ode_to_Joy'] = 'void Ode_to_Joy()\n{\n  for(int x=0;x<length;x++)\n  {\n    tone(tonepin,tune[x]);\n    delay(300*durt[x]);   \n  }\n}\n';

    generator.setups_['setup_output_Ode'] = 'length=sizeof(tune)/sizeof(tune[0]);\n';
    var dropdown_type = this.getFieldValue('play');

    var code = '';
    if (dropdown_type == "Birthday") code += 'birthday();\n';
    if (dropdown_type == "Ode to Joy") code += 'Ode_to_Joy();\n';
    //if (dropdown_type == "City of Sky") code += 'digitalRead(8)';
    return code;
    //return [code, generator.ORDER_ATOMIC];
};

const ke_notone = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    generator.setups_['setup_output'] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = '';
    code += "noTone(" + dropdown_pin + ");\n";
    return code;
};



////////////////////继电器////////////////////
const ke_relay = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');
    generator.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
    return code;
};


///////////////////震动马达////////////////////
const ke_v_motor = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');
    generator.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
    return code;
};

///////////////////////扬声器模块////////////////////////////

const ke_speaker = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var fre = generator.valueToCode(this, 'FREQUENCY', generator.ORDER_ASSIGNMENT) || '0';
    var code = "tone(" + dropdown_pin + "," + fre + ");\n";
    generator.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    return code;
};

const ke_speaker2 = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var fre = generator.valueToCode(this, 'FREQUENCY',
        generator.ORDER_ASSIGNMENT) || '0';
    var dur = generator.valueToCode(this, 'DURATION',
        generator.ORDER_ASSIGNMENT) || '0';
    var code = "tone(" + dropdown_pin + "," + fre + "," + dur + ");\n";
    generator.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    return code;
};

// Notone 结束声音
const ke_speaker_notone = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var code = '';
    if (window.isNaN(dropdown_pin)) {
        code = code + 'pinMode(' + dropdown_pin + ', OUTPUT);\n';
    } else {
        generator.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    }
    code += "noTone(" + dropdown_pin + ");\n";
    return code;
};
////////////////////电机////////////////////
const ke_motor = function (_, generator) {
    var dropdown_pin1 = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    var dropdown_stat1 = this.getFieldValue('STAT1');
    generator.setups_['setup_output_' + dropdown_pin1] = 'pinMode(' + dropdown_pin1 + ', OUTPUT);';

    var dropdown_pin2 = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);
    var dropdown_stat2 = this.getFieldValue('STAT2');
    generator.setups_['setup_output_' + dropdown_pin2] = 'pinMode(' + dropdown_pin2 + ', OUTPUT);';

    var code = 'digitalWrite(' + dropdown_pin1 + ',' + dropdown_stat1 + ');\ndigitalWrite(' + dropdown_pin2 + ',' + dropdown_stat2 + ');\n'
    return code;
};

const ke_motor001 = function (_, generator) {
    var dropdown_pin1 = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    var data_a = this.getFieldValue('STAT1');
    generator.setups_['setup_output_' + dropdown_pin1] = 'pinMode(' + dropdown_pin1 + ', OUTPUT);';

    var dropdown_pin2 = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);
    var value_pwmb = generator.valueToCode(this, 'pwmb', generator.ORDER_ATOMIC);
    generator.setups_['setup_output_' + dropdown_pin2] = 'pinMode(' + dropdown_pin2 + ', OUTPUT);';

    var code = 'digitalWrite(' + dropdown_pin1 + ',' + data_a + ');\nanalogWrite(' + dropdown_pin2 + ',' + value_pwmb + ');\n'
    return code;
};


const ke_motor2 = function (_, generator) {
    var dropdown_pin1 = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    var dropdown_stat1 = this.getFieldValue('STAT1');
    generator.setups_['setup_output_' + dropdown_pin1] = 'pinMode(' + dropdown_pin1 + ', OUTPUT);';

    var dropdown_pin2 = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);
    var dropdown_stat2 = this.getFieldValue('STAT2');
    generator.setups_['setup_output_' + dropdown_pin2] = 'pinMode(' + dropdown_pin2 + ', OUTPUT);';

    var code = 'digitalWrite(' + dropdown_pin1 + ',' + dropdown_stat1 + ');\ndigitalWrite(' + dropdown_pin2 + ',' + dropdown_stat2 + ');\n'
    return code;
};

const ke_motor002 = function (_, generator) {
    var dropdown_pin1 = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    var data_a = this.getFieldValue('STAT1');
    generator.setups_['setup_output_' + dropdown_pin1] = 'pinMode(' + dropdown_pin1 + ', OUTPUT);';

    var dropdown_pin2 = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);
    var value_pwmb = generator.valueToCode(this, 'pwmb', generator.ORDER_ATOMIC);
    generator.setups_['setup_output_' + dropdown_pin2] = 'pinMode(' + dropdown_pin2 + ', OUTPUT);';

    var code = 'digitalWrite(' + dropdown_pin1 + ',' + data_a + ');\nanalogWrite(' + dropdown_pin2 + ',' + value_pwmb + ');\n'
    return code;
};


////////////////////舵机////////////////////
const ke_servo = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var value_degree = generator.valueToCode(this, 'angle', generator.ORDER_ATOMIC);
    //value_degree = value_degree.replace('(','').replace(')','')
    var delay_time = generator.valueToCode(this, 'time', generator.ORDER_ATOMIC) || '0'
    //delay_time = delay_time.replace('(','').replace(')','');

    generator.definitions_['include_Servo'] = '#include <Servo.h>';
    generator.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';';
    generator.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');';

    var code = 'servo_' + dropdown_pin + '.write(' + value_degree + ');\n' + 'delay(' + delay_time + ');\n';
    return code;
};

const ke_servo_r = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);

    generator.definitions_['include_Servo'] = '#include <Servo.h>';
    generator.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';';
    generator.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');';

    var code = 'servo_' + dropdown_pin + '.read()';
    return [code, generator.ORDER_ATOMIC];
};


//////////////////////////数字传感器////////////////////////////////

const ke_ir_g = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    generator.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'digitalRead(' + dropdown_pin + ')';
    return [code, generator.ORDER_ATOMIC];
};
/////////////////火焰传感器////////////////
const ke_flame = ke_ir_g;


/////////////////霍尔传感器////////////////
const ke_hall = ke_ir_g;


/////////////////碰撞传感器////////////////
const ke_crash = ke_ir_g;


/////////////////按键传感器////////////////
const ke_button = ke_ir_g;


/////////////////自锁按键传感器////////////////
const ke_sl_button = ke_ir_g;

/////////////////电容触摸传感器////////////////
const ke_tuoch = ke_ir_g;

/////////////////敲击传感器////////////////
const ke_knock = ke_ir_g;


/////////////////倾斜传感器////////////////
const ke_tilt = ke_ir_g;


/////////////////振动传感器////////////////
const ke_shake = ke_ir_g;


/////////////////干簧管传感器////////////////
const ke_reed_s = ke_ir_g;


/////////////////循迹传感器////////////////
const ke_track = ke_ir_g;


/////////////////避障传感器////////////////
const ke_avoid = ke_ir_g;

/////////////////光折断传感器////////////////
const ke_light_b = ke_ir_g;

/////////////////烟雾数字传感器/////////////////
const ke_smoke_D = ke_ir_g;

/////////////////////酒精数字传感器///////////////
const ke_alcohol_D = ke_ir_g;


//////////////////////模拟传感器/////////////////////////
const ke_sound = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    generator.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'analogRead(' + dropdown_pin + ')';
    return [code, generator.ORDER_ATOMIC];
};

////////////////////LM35温度////////////////////
const ke_lm35 = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    generator.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'analogRead(' + dropdown_pin + ')*0.488';
    return [code, generator.ORDER_ATOMIC];
};


const ke_analog_t = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);

    generator.definitions_['include_math'] = '#include <math.h>';

    generator.definitions_['func_temp'] = 'double Thermister(int RawADC) {\n  double Temp;\n  Temp = log(((10240000/RawADC) - 10000));\n  Temp = 1 / (0.001129148 + (0.000234125 + (0.0000000876741 * Temp * Temp ))* Temp );\n  Temp = Temp - 273.15; // Convert Kelvin to Celcius\n  return Temp;\n}\n';

    var code = 'Thermister(analogRead(' + dropdown_pin + '))';
    return [code, generator.ORDER_ATOMIC];
};


////////////////////光线////////////////////

const ke_light = ke_sound;

////////////////////紫外线////////////////////

const ke_UV = ke_sound;

////////////////////压电////////////////////

const ke_Piezo = ke_sound;

////////////////////水位////////////////////

const ke_water = ke_sound;

////////////////////土壤////////////////////

const ke_soil = ke_sound;

////////////////////电位器////////////////////

const ke_potentiometer = ke_sound;

////////////////////滑动电位器////////////////////


const ke_slide_potentiometer = ke_sound;

////////////////////TEMT6000光线////////////////////

const ke_temt6000 = ke_sound;

////////////////////水蒸气////////////////////
///
const ke_steam = ke_sound;

//////////////////// 压力传感器////////////////////
const ke_film_p = ke_sound;

////////////////////烟雾////////////////////

const ke_smoke = ke_sound;

////////////////////酒精////////////////////
const ke_alcohol = ke_sound;

////////////////////18B20温度////////////////////
// export const ke_18b20 = ke_sound;

////////////////////温度湿度////////////////////
// export const ke_dht11 = ke_sound;

////////////////////高度////////////////////
// export const ke_bmp180 = ke_sound;

////////////////////火焰////////////////////
const ke_fire2 = ke_sound;


////////////////////电压////////////////////

const Voltage = ke_sound;

////////////////////电流////////////////////

const Current = ke_sound;
///////////////////////////////////////////////////
///////////////////其他传感器/////////////////////////
////////////////////////////////////////////////////

////////////////ADKey///////////////////////
const ke_ADKey = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    generator.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'analogRead(' + dropdown_pin + ')';
    return [code, generator.ORDER_ATOMIC];
};


///////////////////////超声波//////////////////////
const ke_sr04 = function (_, generator) {
    var dropdown_pin1 = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    var dropdown_pin2 = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);
    generator.setups_['setup_output_' + dropdown_pin1] = 'pinMode(' + dropdown_pin1 + ', OUTPUT);';
    generator.setups_['setup_output_' + dropdown_pin2] = 'pinMode(' + dropdown_pin2 + ', INPUT);';
    var funcName = 'checkdistance_' + dropdown_pin1 + '_' + dropdown_pin2;
    var code = 'float' + ' ' + funcName + '() {\n'
        + '  digitalWrite(' + dropdown_pin1 + ', LOW);\n' + '  delayMicroseconds(2);\n'
        + '  digitalWrite(' + dropdown_pin1 + ', HIGH);\n' + '  delayMicroseconds(10);\n'
        + '  digitalWrite(' + dropdown_pin1 + ', LOW);\n'
        + '  float distance = pulseIn(' + dropdown_pin2 + ', HIGH) / 58.00;\n'
        + '  delay(10);\n' + '  return distance;\n'
        + '}\n';
    generator.definitions_[funcName] = code;
    return [funcName + '()', generator.ORDER_ATOMIC];
};

///////////////////18B20////////////////////////////
const ke_18b20 = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var unit = this.getFieldValue('UNIT');
    generator.definitions_['include_OneWire'] = '#include <OneWire.h>';
    generator.definitions_['include_DallasTemperature'] = '#include <DallasTemperature.h>';
    generator.definitions_['var_OneWire_oneWire_' + dropdown_pin] = 'OneWire oneWire_' + dropdown_pin + '(' + dropdown_pin + ');';
    generator.definitions_['var_DallasTemperature_sensors_' + dropdown_pin] = 'DallasTemperature sensors_' + dropdown_pin + '(&oneWire_' + dropdown_pin + ');';
    generator.definitions_['var_DeviceAddress_insideThermometer'] = 'DeviceAddress insideThermometer;';
    generator.setups_['setup_sensors_' + dropdown_pin + '_getAddress'] = 'sensors_' + dropdown_pin + '.getAddress(insideThermometer, 0);';
    generator.setups_['setup_sensors_' + dropdown_pin + '_setResolution'] = 'sensors_' + dropdown_pin + '.setResolution(insideThermometer, 9);';
    var funcName = 'ds18b20_' + dropdown_pin + '_getTemp';
    var code = 'float' + ' ' + funcName + '(int w) {\n'
        + '  sensors_' + dropdown_pin + '.requestTemperatures();\n'
        + '  if(w==0) {\nreturn sensors_' + dropdown_pin + '.getTempC(insideThermometer);\n}\n'
        + '  else {\nreturn sensors_' + dropdown_pin + '.getTempF(insideThermometer);\n}\n'
        + '}\n';
    generator.definitions_[funcName] = code;
    return ['ds18b20_' + dropdown_pin + '_getTemp(' + unit + ')', generator.ORDER_ATOMIC];
}

//////////////////////////DHT11///////////////////////////
const ke_dht11 = function (_, generator) {
    var sensor_type = this.getFieldValue('TYPE');
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var what = this.getFieldValue('WHAT');
    generator.definitions_['include_dht'] = '#include <dht.h>';
    generator.definitions_['var_dht_' + dropdown_pin] = 'dht myDHT_' + dropdown_pin + ';';
    var funcName = 'dht_' + dropdown_pin + '_get' + what;
    var code = 'int' + ' ' + funcName + '() {\n'
        + '  int chk = myDHT_' + dropdown_pin + '.read' + sensor_type + '(' + dropdown_pin + ');\n'
        + '  int value = myDHT_' + dropdown_pin + '.' + what + ';\n'
        + '  return value;\n'
        + '}\n';
    generator.definitions_[funcName] = code;
    return [funcName + '()', generator.ORDER_ATOMIC];
}

const ke_DHT = function (_, generator) {
    var sensor_type = this.getFieldValue('TYPE');
    var dropdown_pin = this.getFieldValue('PIN');
    var what = this.getFieldValue('WHAT');
    generator.definitions_['include_DHT'] = '#include <DHT.h>';
    generator.definitions_['var_declare_dht' + dropdown_pin] = 'DHT dht' + dropdown_pin + '(' + dropdown_pin + ', ' + sensor_type + ');'
    generator.setups_['DHT_SETUP' + dropdown_pin] = ' dht' + dropdown_pin + '.begin();';
    var code;
    if (what == "temperature")
        code = 'dht' + dropdown_pin + '.readTemperature()'
    else
        code = 'dht' + dropdown_pin + '.readHumidity()'
    return [code, generator.ORDER_ATOMIC];
}


/////////////////////////BMP280////////////////////////////
const ke_bmp280 = function (_, generator) {
    generator.definitions_['include_BMP280'] = '#include <Adafruit_BMP280.h>';
    generator.definitions_['include_Wire'] = '#include <Wire.h>';
    generator.definitions_['include_spi'] = '#include <SPI.h>';
    generator.definitions_['include_Sensor'] = '#include <Adafruit_Sensor.h>';

    generator.definitions_['include_SCK'] = '#define BMP_SCK 13';
    generator.definitions_['include_MISO'] = '#define BMP_MISO 12';
    generator.definitions_['include_MOSI'] = '#define BMP_MOSI 11';
    generator.definitions_['include_CS'] = '#define BMP_CS 10';

    generator.definitions_['include_bme'] = 'Adafruit_BMP280 bme; // I2C';

    generator.definitions_['readPressure'] = 'int readPressure()\n{\n long int  pressure = 0;\n  int temp = 0;\n  temp = bme.readTemperature();\n  pressure = bme.readPressure();\n  return pressure;\n}\n';

    generator.definitions_['readAltitude'] = 'int readAltitude()\n{\nint temp = 0;\n  temp = bme.readTemperature();\n  int altitude1 = 0;\n  altitude1 = (101325-bme.readPressure()) * 0.09;\n  return altitude1;\n}\n';

    generator.setups_['setup_!bme'] = 'bme.begin();\n';

    var dropdown_type = this.getFieldValue('BMP280_PIN');
    var code = '';

    if (dropdown_type == "T") code += 'bme.readTemperature()';
    if (dropdown_type == "P") code += 'bme.readPressure();bme.readTemperature()';
    if (dropdown_type == "A") code += 'readAltitude()';

    return [code, generator.ORDER_ATOMIC];
};

//BME280读取
const ke_BMP280_READ = function (_, generator) {
    var TYPE = this.getFieldValue('TYPE');
    var address = generator.valueToCode(this, 'address', generator.ORDER_ATOMIC);
    generator.definitions_['include_Wire'] = '#include <Wire.h>';
    generator.definitions_['include_SPI'] = '#include <SPI.h>';
    generator.definitions_['include_Adafruit_Sensor'] = '#include <Adafruit_Sensor.h>';
    if (TYPE == "bme") {
        generator.definitions_['include_Adafruit_BME280'] = '#include <Adafruit_BME280.h>';
        generator.definitions_['var_declare_Adafruit_BME280'] = 'Adafruit_BME280 bme;';

    }
    else {
        generator.definitions_['include_Adafruit_BME280'] = '#include <Adafruit_BMP280.h>';
        generator.definitions_['var_declare_Adafruit_BME280'] = 'Adafruit_BMP280 bmp;';
    }
    generator.setups_['setup_status'] = 'unsigned status;\n  status = ' + TYPE + '.begin(' + address + ');';
    generator.definitions_['include_SEALEVELPRESSURE_HPA'] = '#define SEALEVELPRESSURE_HPA (1013.25)';
    var code = this.getFieldValue('BME_TYPE');
    return [TYPE + "." + code, generator.ORDER_ATOMIC];
};

//传感器-重力感应块-获取数据
const ke_adxl345 = function (_, generator) {
    generator.definitions_['include_ADXL345'] = '#include <ADXL345.h>';
    generator.definitions_['include_Wire'] = '#include <Wire.h>';
    generator.definitions_['include_I2Cdev'] = '#include <I2Cdev.h>';
    generator.definitions_['var_ADXL345'] = 'ADXL345 accel;';
    generator.setups_['setup_ADXL345-A'] = 'Wire.begin();';
    generator.setups_['setup_ADXL345-B'] = 'accel.initialize();';
    var dropdown_type = this.getFieldValue('ADXL345_PIN');
    var code = '';
    if (dropdown_type == "xa") code += 'accel.X_angle()';
    if (dropdown_type == "ya") code += 'accel.Y_angle()';
    if (dropdown_type == "x") code += 'accel.getAccelerationX()';
    if (dropdown_type == "y") code += 'accel.getAccelerationY()';
    if (dropdown_type == "z") code += 'accel.getAccelerationZ()';
    return [code, generator.ORDER_ATOMIC];
};



//传感器-MPU6050-获取数据
const ke_MPU6050 = function (_, generator) {
    generator.definitions_['includeMPU6050'] = '#include <MPU6050.h>';
    generator.definitions_['include_Wire'] = '#include <Wire.h>';
    generator.definitions_['var_declare_MPU6050'] = 'MPU6050 mpu;';
    generator.setups_['setup_ngyro'] = 'mpu.begin(MPU6050_SCALE_2000DPS, MPU6050_RANGE_2G);';
    var MPU6050_TYPE = this.getFieldValue('MPU6050_TYPE');
    var code = MPU6050_TYPE;
    return [code, generator.ORDER_ATOMIC];
};
//传感器-MPU6050-更新数据
const ke_MPU6050_update = function () {
    var code = 'Vector normAccel = mpu.readNormalizeAccel();\nVector normGyro = mpu.readNormalizeGyro();\n';
    return code;
};


///////////////////////BMP180温度大气压/////////////////////////////
const ke_bmp180 = function (_, generator) {
    generator.definitions_['define_bmp180'] = '#define BMP180ADD 0xEE>>1';
    generator.definitions_['include_Wire'] = '#include <Wire.h>';
    generator.definitions_['char_OSS'] = 'unsigned char OSS;';
    generator.definitions_['int'] = 'int ac1,ac2,ac3,b1,b2,mb,mc,md;';
    generator.definitions_['unsight_int'] = 'unsigned int ac4,ac5,ac6;';
    generator.definitions_['float'] = 'float temperature;';
    generator.definitions_['double'] = 'double pressure,pressure2,altitude;';
    generator.definitions_['long'] = 'long b5;';

    //generator.definitions_['calculate'] = 'void calculate()\n{\n  temperature = bmp180GetTemperature(bmp180ReadUT());\ntemperature = temperature*0.1;\npressure = bmp180GetPressure(bmp180ReadUP());\npressure2 = pressure/101325;\npressure2 = pow(pressure2,0.19029496);\naltitude = 44330*(1-pressure2);\n}';

    //generator.definitions_['show'] = 'void show()\n{\n  Serial.print("Temperature: ");\nSerial.print(temperature, 1);\nSerial.println(" C");\nSerial.print("Pressure: ");\nSerial.print(pressure, 0);\nSerial.println(" Pa");\nSerial.print("altitude:");\nSerial.print(altitude);\nSerial.println("m");\n}';

    generator.definitions_['BMP180start'] = 'void BMP180start()\n{\nac1 = bmp180ReadDate(0xAA);\nac2 = bmp180ReadDate(0xAC);\nac3 = bmp180ReadDate(0xAE);\nac4 = bmp180ReadDate(0xB0);\nac5 = bmp180ReadDate(0xB2);\nac6 = bmp180ReadDate(0xB4);\nb1  = bmp180ReadDate(0xB6);\nb2  = bmp180ReadDate(0xB8);\nmb  = bmp180ReadDate(0xBA);\nmc  = bmp180ReadDate(0xBC);\nmd  = bmp180ReadDate(0xBE);\n}';

    generator.definitions_['bmp180GetTemperature'] = 'short bmp180GetTemperature(unsigned int ut)\n{\nlong x1, x2;\nx1 = (((long)ut - (long)ac6)*(long)ac5) >> 15;\nx2 = ((long)mc << 11)/(x1 + md);\nb5 = x1 + x2;\nreturn ((b5 + 8)>>4);\n}';

    generator.definitions_['bmp180GetPressure'] = 'long bmp180GetPressure(unsigned long up)\n{\nlong x1, x2, x3, b3, b6, p;\nunsigned long b4, b7;\nb6 = b5 - 4000;\nx1 = (b2 * (b6 * b6)>>12)>>11;\nx2 = (ac2 * b6)>>11;\nx3 = x1 + x2;\nb3 = (((((long)ac1)*4 + x3)<<OSS) + 2)>>2;\nx1 = (ac3 * b6)>>13;\nx2 = (b1 * ((b6 * b6)>>12))>>16;\nx3 = ((x1 + x2) + 2)>>2;\nb4 = (ac4 * (unsigned long)(x3 + 32768))>>15;\nb7 = ((unsigned long)(up - b3) * (50000>>OSS));\nif (b7 < 0x80000000)\n  p = (b7<<1)/b4;\nelse\n  p = (b7/b4)<<1;\nx1 = (p>>8) * (p>>8);\nx1 = (x1 * 3038)>>16;\nx2 = (-7357 * p)>>16;\np += (x1 + x2 + 3791)>>4;\nreturn p;\n}';

    generator.definitions_['bmp180Read'] = 'int bmp180Read(unsigned char address)\n{\nunsigned char data;\nWire.beginTransmission(BMP180ADD);\nWire.write(address);\nWire.endTransmission();\nWire.requestFrom(BMP180ADD, 1);\nwhile(!Wire.available());\nreturn Wire.read();\n}';

    generator.definitions_['bmp180ReadDate'] = 'int bmp180ReadDate(unsigned char address)\n{\nunsigned char msb, lsb;\nWire.beginTransmission(BMP180ADD);\nWire.write(address);\nWire.endTransmission();\nWire.requestFrom(BMP180ADD, 2);\nwhile(Wire.available()<2);\nmsb = Wire.read();\nlsb = Wire.read();\nreturn (int) msb<<8 | lsb;\n}';

    generator.definitions_['bmp180ReadUT'] = 'unsigned int bmp180ReadUT()\n{\nunsigned int ut;\nWire.beginTransmission(BMP180ADD);\nWire.write(0xF4);\nWire.write(0x2E);\nWire.endTransmission();\ndelay(5);\nut = bmp180ReadDate(0xF6);\nreturn ut;\n}';

    generator.definitions_['bmp180ReadUP'] = 'unsigned long bmp180ReadUP()\n{\nunsigned char msb, lsb, xlsb;\nunsigned long up = 0;\nWire.beginTransmission(BMP180ADD);\nWire.write(0xF4);\nWire.write(0x34 + (OSS<<6));\nWire.endTransmission();\ndelay(2 + (3<<OSS));\nWire.beginTransmission(BMP180ADD);\nWire.write(0xF6);\nWire.endTransmission();\nWire.requestFrom(BMP180ADD, 3);\nwhile(Wire.available() < 3);\nmsb = Wire.read();\nlsb = Wire.read();\nxlsb = Wire.read();\nup = (((unsigned long) msb << 16) | ((unsigned long) lsb << 8) | (unsigned long) xlsb) >> (8-OSS);\nreturn up;\n}';

    generator.definitions_['temperature1'] = 'float temperature1()\n{\ntemperature = bmp180GetTemperature(bmp180ReadUT());\ntemperature = temperature*0.1;\nreturn temperature;\n}';

    generator.definitions_['pressure1'] = 'double pressure1()\n{\nbmp180GetTemperature(bmp180ReadUT());\npressure = bmp180GetPressure(bmp180ReadUP());\nreturn pressure;\n}\n'

    generator.definitions_['altitude1'] = 'double altitude1()\n{\nbmp180GetTemperature(bmp180ReadUT());\npressure = bmp180GetPressure(bmp180ReadUP());\npressure2 = pressure/101325;\npressure2 = pow(pressure2,0.19029496);\naltitude = 44330*(1-pressure2);\nreturn altitude;\n}\n'

    generator.setups_['wire.begin'] = 'Wire.begin();';
    generator.setups_['OSS'] = 'OSS = 2;';
    generator.setups_['BMP180start'] = 'BMP180start();';


    var dropdown_type = this.getFieldValue('BMP180_PIN');
    var code = '';

    if (dropdown_type == "T") code += 'temperature1()';
    if (dropdown_type == "P") code += 'pressure1()';
    if (dropdown_type == "A") code += 'altitude1()';
    //return code;
    return [code, generator.ORDER_ATOMIC];
};

/////////////////////////////DS3231时钟/////////////////////////////
const ke_ds3231 = function (_, generator) {
    var RTCName = this.getFieldValue('RTCName');
    var year = generator.valueToCode(this, "year", generator.ORDER_ATOMIC);
    var month = generator.valueToCode(this, "month", generator.ORDER_ATOMIC);
    var day = generator.valueToCode(this, "day", generator.ORDER_ATOMIC);
    var dow = generator.valueToCode(this, "dow", generator.ORDER_ATOMIC)
    var hour = generator.valueToCode(this, "hour", generator.ORDER_ATOMIC);
    var minute = generator.valueToCode(this, "minute", generator.ORDER_ATOMIC);
    var second = generator.valueToCode(this, "second", generator.ORDER_ATOMIC);


    generator.definitions_['include_DS3231_h'] = '#include <DS3231.h>';
    generator.definitions_['DS3231'] = 'DS3231  ' + RTCName + '(A4, A5);';

    generator.setups_['begin1'] = '' + RTCName + '.begin();';
    generator.setups_['setDOW'] = '' + RTCName + '.setDOW(' + dow + ');';
    generator.setups_['setTime'] = '' + RTCName + '.setTime(' + hour + ', ' + minute + ', ' + second + ');';
    generator.setups_['setDate'] = '' + RTCName + '.setDate(' + day + ', ' + month + ', ' + year + ');';

    var code = 'Serial.print(' + RTCName + '.getDOWStr());\nSerial.print(" ");\nSerial.print(' + RTCName + '.getDateStr());\nSerial.print(" -- ");\nSerial.println(' + RTCName + '.getTimeStr());\ndelay (1000);';

    return code;
};

/********************************************
TIME - 时钟模块
  - DS3231
  - DS1307
*********************************************/
// DS3231 real time clock  -- 设置时间
const ke_ds3231_SetTime = function (_, generator) {
    generator.definitions_['define_i2c'] = '#include <Wire.h>';
    generator.definitions_['include_ds3231'] = '#include "RtcDS3231.h"';
    generator.definitions_['var_ds3231'] = 'RtcDS3231<TwoWire> Rtc(Wire);';
    generator.setups_['setup_init_rtc'] = 'Rtc.Begin();\n';
    var year = generator.valueToCode(this, 'year', generator.ORDER_ATOMIC);
    var month = generator.valueToCode(this, 'month', generator.ORDER_ATOMIC);
    var day = generator.valueToCode(this, 'day', generator.ORDER_ATOMIC);
    var hour = generator.valueToCode(this, 'hour', generator.ORDER_ATOMIC);
    var minute = generator.valueToCode(this, 'minute', generator.ORDER_ATOMIC);
    var second = generator.valueToCode(this, 'second', generator.ORDER_ATOMIC);
    generator.setups_['setup_set_time'] = 'Rtc.SetDateTime(RtcDateTime(' + year + ', ' + month + ', '
        + day + ', ' + hour + ', ' + minute + ', ' + second + '));\n';
    return '';
};

// DS3231 real time clock  -- 设置当前时间
const ke_ds3231_SetTime2 = function (_, generator) {
    generator.definitions_['define_i2c'] = '#include <Wire.h>';
    generator.definitions_['include_ds3231'] = '#include "RtcDS3231.h"';
    generator.definitions_['var_ds3231'] = 'RtcDS3231<TwoWire> Rtc(Wire);';
    generator.setups_['setup_init_rtc'] = 'Rtc.Begin();\n';
    generator.setups_['setup_set_time'] = 'Rtc.SetDateTime(RtcDateTime(__DATE__, __TIME__));\n';
    return '';
};

// DS3231 real time clock  -- 获取
const ke_ds3231_GetTime = function (_, generator) {
    var dropdown_type = this.getFieldValue('TIME_TYPE');
    var code = 'Rtc.GetDateTime().' + dropdown_type + '()';
    // return code;
    return [code, generator.ORDER_ATOMIC];
};

// DS1307 real time clock  -- 设置时间
const ke_ds1307_SetTime = function (_, generator) {
    generator.definitions_['define_i2c'] = '#include <Wire.h>';
    generator.definitions_['include_ds1307'] = '#include "RtcDS1307.h"';
    generator.definitions_['var_ds1307'] = 'RtcDS1307<TwoWire> Rtc(Wire);';
    generator.setups_['setup_init_rtc'] = 'Rtc.Begin();\n  Rtc.SetIsRunning(true);\n';
    var year = generator.valueToCode(this, 'year', generator.ORDER_ATOMIC);
    var month = generator.valueToCode(this, 'month', generator.ORDER_ATOMIC);
    var day = generator.valueToCode(this, 'day', generator.ORDER_ATOMIC);
    var hour = generator.valueToCode(this, 'hour', generator.ORDER_ATOMIC);
    var minute = generator.valueToCode(this, 'minute', generator.ORDER_ATOMIC);
    var second = generator.valueToCode(this, 'second', generator.ORDER_ATOMIC);
    generator.setups_['setup_set_time'] = 'Rtc.SetDateTime(RtcDateTime(' + year + ', ' + month + ', '
        + day + ', ' + hour + ', ' + minute + ', ' + second + '));\n';
    return '';
};

// DS1307 real time clock  -- 设置当前时间
const ke_ds1307_SetTime2 = function (_, generator) {
    generator.definitions_['define_i2c'] = '#include <Wire.h>';
    generator.definitions_['include_ds1307'] = '#include "RtcDS1307.h"';
    generator.definitions_['var_ds1307'] = 'RtcDS1307<TwoWire> Rtc(Wire);';
    generator.setups_['setup_init_rtc'] = 'Rtc.Begin();\n  Rtc.SetIsRunning(true);\n';
    generator.setups_['setup_set_time'] = 'Rtc.SetDateTime(RtcDateTime(__DATE__, __TIME__));\n';
    return '';
};

// DS1307 real time clock  -- 获取
const ke_ds1307_GetTime = function (_, generator) {
    var dropdown_type = this.getFieldValue('TIME_TYPE');
    var code = 'Rtc.GetDateTime().' + dropdown_type + '()';
    // return code;
    return [code, generator.ORDER_ATOMIC];
};
// 旋转编码器初始化
const sensor_encoder_init = function (_, generator) {
    var dropdownType = this.getFieldValue('TYPE');
    var mode = this.getFieldValue('mode');
    var valueClk = generator.valueToCode(this, 'CLK', generator.ORDER_ATOMIC);
    var valueDt = generator.valueToCode(this, 'DT', generator.ORDER_ATOMIC);
    generator.definitions_['include_ESPRotary'] = '#include <ESPRotary.h>';
    generator.definitions_['var_declare_encoder' + dropdownType] = `ESPRotary encoder${dropdownType};`;
    generator.setups_['setup_encoder' + dropdownType] = `encoder${dropdownType}.begin(${valueDt}, ${valueClk});\n  encoder${dropdownType}.setStepsPerClick(${mode});`;
    generator.loops_begin_['loop_encoder' + dropdownType] = `encoder${dropdownType}.loop();\n`;
    return '';
};
// 旋转编码器读取
const sensor_encoder_get = function (_, generator) {
    var dropdownType = this.getFieldValue('TYPE');
    var dropdownOperateType = this.getFieldValue('OPERATE_TYPE');
    var code = `encoder${dropdownType}.${dropdownOperateType}()`;
    return [code, generator.ORDER_ATOMIC];
};
// 旋转编码器设置
const sensor_encoder_set = function (_, generator) {
    var dropdownType = this.getFieldValue('TYPE');
    var valueData = generator.valueToCode(this, 'DATA', generator.ORDER_ATOMIC);
    var dropdownOperateType = this.getFieldValue('OPERATE_TYPE');
    var code = `encoder${dropdownType}.${dropdownOperateType}(${valueData});\n`;
    return code;
};
// 旋转编码器事件
const sensor_encoder_handle = function (_, generator) {
    var dropdownType = this.getFieldValue('TYPE');
    var dropdownOperateType = this.getFieldValue('OPERATE_TYPE');
    var statementsDo = generator.statementToCode(this, 'DO');
    var cbFuncName = 'encoder' + dropdownType;
    switch (dropdownOperateType) {
    case 'setChangedHandler':
        cbFuncName += 'OnChanged';
        break;
    case 'setRightRotationHandler':
        cbFuncName += 'OnRightRotation';
        break;
    case 'setLeftRotationHandler':
        cbFuncName += 'OnLeftRotation';
        break;
    case 'setUpperOverflowHandler':
        cbFuncName += 'OnUpperOverflow';
        break;
    case 'setLowerOverflowHandler':
    default:
        cbFuncName += 'OnLowerOverflow';
    }
    generator.definitions_['function_' + cbFuncName] = `void ${cbFuncName}(ESPRotary& encoder${dropdownType}) {\n`
        + `  ${statementsDo}`
        + `}\n`;
    generator.setups_['setup_' + cbFuncName] = `encoder${dropdownType}.${dropdownOperateType}(${cbFuncName});`;
    var code = '';
    return code;
};
const encoder_button = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    generator.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'digitalRead(' + dropdown_pin + ')';
    return [code, generator.ORDER_ATOMIC];
};
/////////////////////遥杆///////////////////////////
const ke_joystick = function (_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    generator.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    //var code = 'analogRead('+dropdown_pin+')';

    var dropdown_type = this.getFieldValue('joy');
    var code = '';
    if (dropdown_type == "Lx") code += 'analogRead(' + dropdown_pin + ')';
    if (dropdown_type == "Ly") code += 'analogRead(' + dropdown_pin + ')';
    //if (dropdown_type == "Lz") code += 'digitalRead('+dropdown_pin+')';
    //if (dropdown_type == "Rx") code += 'analogRead('+dropdown_pin+')';

    return [code, generator.ORDER_ATOMIC];
};
/////////////////遥杆///////////////
const ke_joystick_btn = ke_ir_g;

///////////////////////////pca9685/////////////////
const ke_pca9685 = function (_, generator) {

    var value_pin = generator.valueToCode(this, 'pin', generator.ORDER_ATOMIC);
    var value_pwm = generator.valueToCode(this, 'pwm', generator.ORDER_ATOMIC);

    generator.definitions_['include_Wire'] = '#include <Wire.h>';
    generator.definitions_['include_PWMServoDriver'] = '#include <Adafruit_PWMServoDriver.h>';

    generator.definitions_['PWMServo'] = 'Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver();';

    generator.definitions_['PWMangle'] = 'void servo_9g_write(uint8_t n,int Angle)\n{\n  double pulse = Angle;\n  pulse = pulse/100+0.5;\n  setServoPulse(n,pulse); \n}\n';

    generator.definitions_['setServoPulse'] = 'void setServoPulse(uint8_t n, double pulse) \n {\n  double pulselength;\n  pulselength = 1000000;   // 1,000,000 us per second\n  pulselength /= 50;   // 60 Hz\n  Serial.print(pulselength); Serial.println(" us per period"); \n  pulselength /= 4096;  // 12 bits of resolution\n  Serial.print(pulselength); Serial.println(" us per bit"); \n  pulse *= 1000;  // convert to us\n  pulse /= pulselength;\n  Serial.println(pulse);\n  pwm.setPWM(n, 0, pulse);\n}\n';

    //generator.definitions_['pulselen'] = 'uint16_t pulselen ='+value_pwm+';';

    generator.setups_['setup_begin'] = 'pwm.begin();\npwm.setPWMFreq(50);\ndelay(10);\n';

    var code = 'servo_9g_write(' + value_pin + ',' + value_pwm + ');\n';

    return code;
};
///////////////////////////红外测温传感器/////////////////
//初始化MLX90614红外测温传感器
const mlx90614_init = function (_, generator) {
    var value_mlx90614_address = generator.valueToCode(this, 'mlx90614_address', generator.ORDER_ATOMIC);
    var text_mlx90614_name = 'MLX';
    generator.definitions_['include_Wire'] = '#include <Wire.h>';
    generator.definitions_['include_Adafruit_MLX90614'] = '#include <Adafruit_MLX90614.h>';
    generator.definitions_['var_declare_MLX90614_' + text_mlx90614_name] = 'Adafruit_MLX90614 ' + text_mlx90614_name + ' = Adafruit_MLX90614(' + value_mlx90614_address + ');';
    generator.setups_['setup_MLX90614_' + text_mlx90614_name] = '' + text_mlx90614_name + '.begin();';
    var code = '';
    return code;
};
//MLX90614获取数据
const mlx90614_get_data = function (_, generator) {
    var text_mlx90614_name = 'MLX';
    var dropdown_mlx90614_data = this.getFieldValue('mlx90614_data');
    var code = '' + text_mlx90614_name + '.' + dropdown_mlx90614_data + '()';
    return [code, generator.ORDER_ATOMIC];
};
//////////////////////////颜色传感器//////////////////////////

//颜色识别传感器库
const TCS34725_Get_RGB = function (_, generator) {
    generator.definitions_['include_DFRobot_TCS34725'] = '#include <DFRobot_TCS34725.h>';
    generator.definitions_['var_DFRobot_TCS34725'] = 'DFRobot_TCS34725 tcs34725;\n';
    // generator.setups_['setup_DFRobot_TCS34725' ] = 'if (tcs34725.begin()) {\n  Serial.println("Found sensor");\n} \nelse { \nSerial.println("No TCS34725 found ... check your connections");\nwhile (1);\n}';
    generator.setups_['setup_DFRobot_TCS34725'] = 'tcs34725.begin();';
    var RGB = this.getFieldValue('DF_TCS34725_COLOR');
    return [RGB, generator.ORDER_ATOMIC];
};
///////////////////////////手势识别传感器/////////////////
//传感器-手势识别-获取数据
const ke_Gesture_APDS = function (_, generator) {
    generator.definitions_['include_SparkFun_APDS9960'] = '#include "SparkFun_APDS9960.h"';
    generator.definitions_['var_APDS'] = 'SparkFun_APDS9960 apds;';
    generator.setups_['setup_APDS'] = 'apds.init();';
    generator.setups_['setup_APDS1'] = 'apds.enableGestureSensor(true);';
    var code = '';
    code += 'apds.handleGesture()';
    return [code, generator.ORDER_ATOMIC];
};
//初始化PAJ7620手势传感器
const make_arduino_paj7620_begin = function (_, generator) {
    generator.definitions_['include_Wire'] = '#include <Wire.h>';
    generator.definitions_['include_paj7620'] = '#include "paj7620.h"';
    generator.definitions_['define_GES_REACTION_TIME'] = '#define GES_REACTION_TIME    500 ';
    generator.definitions_['define_GES_ENTRY_TIME'] = '#define GES_ENTRY_TIME     800   ';
    generator.definitions_['define_GES_QUIT_TIME'] = '#define GES_QUIT_TIME      1000';
    generator.definitions_['var_gesturesDetection'] = 'int gesturesDetection()\n'
    + '{\n'
    + '  uint8_t data = 0, data1 = 0, error;\n'
    + '  error = paj7620ReadReg(0x43, 1, &data);\n'
    + '  if (!error)\n'
    + '  {\n'
    + '    switch (data)\n'
    + '    {\n'
    + '      case GES_RIGHT_FLAG:\n'
    + '        delay(GES_ENTRY_TIME);\n'
    + '        paj7620ReadReg(0x43, 1, &data);\n'
    + '        if (data == GES_FORWARD_FLAG)\n'
    + '        {\n'
    + '          return 0;\n'
    + '          delay(GES_QUIT_TIME);\n'
    + '        }\n'
    + '        else if (data == GES_BACKWARD_FLAG)\n'
    + '        {\n'
    + '          return 1;\n'
    + '          delay(GES_QUIT_TIME);\n'
    + '        }\n'
    + '        else\n'
    + '        {\n'
    + '          return 3;\n'
    + '        }\n'
    + '        break;\n'
    + '      case GES_LEFT_FLAG:\n'
    + '        delay(GES_ENTRY_TIME);\n'
    + '        paj7620ReadReg(0x43, 1, &data);\n'
    + '        if (data == GES_FORWARD_FLAG)\n'
    + '        {\n'
    + '          return 0;\n'
    + '          delay(GES_QUIT_TIME);\n'
    + '        }\n'
    + '        else if (data == GES_BACKWARD_FLAG)\n'
    + '        {\n'
    + '          return 1;\n'
    + '          delay(GES_QUIT_TIME);\n'
    + '        }\n'
    + '        else\n'
    + '        {\n'
    + '          return 2;\n'
    + '        }\n'
    + '        break;\n'
    + '      case GES_UP_FLAG:\n'
    + '        delay(GES_ENTRY_TIME);\n'
    + '        paj7620ReadReg(0x43, 1, &data);\n'
    + '        if (data == GES_FORWARD_FLAG)\n'
    + '        {\n'
    + '          return 0;\n'
    + '          delay(GES_QUIT_TIME);\n'
    + '        }\n'
    + '        else if (data == GES_BACKWARD_FLAG)\n'
    + '        {\n'
    + '          return 1;\n'
    + '          delay(GES_QUIT_TIME);\n'
    + '        }\n'
    + '        else\n'
    + '        {\n'
    + '          return 4;\n'
    + '        }\n'
    + '        break;\n'
    + '      case GES_DOWN_FLAG:\n'
    + '        delay(GES_ENTRY_TIME);\n'
    + '        paj7620ReadReg(0x43, 1, &data);\n'
    + '        if (data == GES_FORWARD_FLAG)\n'
    + '        {\n'
    + '          return 0;\n'
    + '          delay(GES_QUIT_TIME);\n'
    + '        }\n'
    + '        else if (data == GES_BACKWARD_FLAG)\n'
    + '        {\n'
    + '          return 1;\n'
    + '          delay(GES_QUIT_TIME);\n'
    + '        }\n'
    + '        else\n'
    + '        {\n'
    + '          return 5;\n'
    + '        }\n'
    + '        break;\n'
    + '      case GES_FORWARD_FLAG:\n'
    + '        return 0;\n'
    + '        delay(GES_QUIT_TIME);\n'
    + '        break;\n'
    + '      case GES_BACKWARD_FLAG:\n'
    + '        return 1;\n'
    + '        delay(GES_QUIT_TIME);\n'
    + '        break;\n'
    + '      case GES_CLOCKWISE_FLAG:\n'
    + '        return 6;\n'
    + '        break;\n'
    + '      case GES_COUNT_CLOCKWISE_FLAG:\n'
    + '        return 7;\n'
    + '        break;\n'
    + '      default:\n'
    + '        paj7620ReadReg(0x44, 1, &data1);\n'
    + '        if (data1 == GES_WAVE_FLAG)\n'
    + '        {\n'
    + '          return 8;\n'
    + '        }\n'
    + '        break;\n'
    + '    }\n'
    + '  }\n'
    + '  return -1;\n'
    + '}\n'
    generator.setups_['setup_paj7620'] = 'paj7620Init();';
    var code = 'int gesturesNum = gesturesDetection();\n';
    return code;
};
//PAJ7620手势传感器读取手势
const make_arduino_paj7620_ReadReg = function (_, generator) {
    var data = this.getFieldValue('data');
    var code = 'gesturesNum == '+data;
    return [code, generator.ORDER_ATOMIC];
};
const BMP388_INIT = function (_, generator) {
    generator.definitions_['include_bmp388_init'] = '#include <BMP388.h>';
    generator.definitions_['bmp388_var'] = 'int32_t s32PressureVal = 0, s32TemperatureVal = 0, s32AltitudeVal = 0;\n';
    generator.setups_['getAddress'] = 'bool bRet;\n'
    + '  PRESS_EN_SENSOR_TYPY enPressureType;\n'
    + '  pressSensorInit( &enPressureType );\n'
    + '  if(PRESS_EN_SENSOR_TYPY_BMP388 == enPressureType)\n'
    + '  {\n'
    + '    Serial.println("Pressure sersor is BMP388");\n'
    + '  }\n'
    + '  else\n'
    + '  {\n'
    + '   Serial.println("Pressure sersor NULL");\n'
    + '  }\n';

    return ' pressSensorDataGet(&s32TemperatureVal, &s32PressureVal, &s32AltitudeVal);\n';
};
const BMP388_READ = function (_, generator) {
    const unit = this.getFieldValue('unit');
    return [`${unit}`, generator.ORDER_ATOMIC];
};
const TFT_SD_init = function(_, generator) {
    generator.definitions_['include_'+'LIB1'] = '#include <Adafruit_GFX.h>\n #include <Adafruit_ST7735.h>\n #include <SD.h>\n #include <SPI.h>\n #if defined(__SAM3X8E__)\n     #undef __FlashStringHelper::F(string_literal)\n     #define F(string_literal) string_literal\n #endif\n #define SD_CS    7  \n #define TFT_CS  8  \n #define TFT_DC   10  \n #define TFT_RST  9  \n   Adafruit_ST7735 tft = Adafruit_ST7735(TFT_CS, TFT_DC, TFT_RST);\n   #define BUFFPIXEL 20\n';
    generator.definitions_['var_declare_'+'TFT_SD'] = 'void bmpDraw(char *filename, uint8_t x, uint8_t y) {\n   File     bmpFile;\n   int      bmpWidth, bmpHeight;   \n   uint8_t  bmpDepth;              \n   uint32_t bmpImageoffset;        \n   uint32_t rowSize;               \n   uint8_t  sdbuffer[3*BUFFPIXEL]; \n   uint8_t  buffidx = sizeof(sdbuffer); \n   boolean  goodBmp = false;       \n   boolean  flip    = true;        \n   int      w, h, row, col;\n   uint8_t  r, g, b;\n   uint32_t pos = 0, startTime = millis();\n   if((x >= tft.width()) || (y >= tft.height())) return;\n   Serial.println();\n   Serial.print("Loading image");\n   Serial.println(filename);\n   if ((bmpFile = SD.open(filename)) == NULL) {\n     Serial.print("File not found");\n     return;\n   }\n   if(read16(bmpFile) == 0x4D42) { \n     Serial.print("File size: "); Serial.println(read32(bmpFile));\n     (void)read32(bmpFile); \n     bmpImageoffset = read32(bmpFile); \n     Serial.print("Image Offset: "); Serial.println(bmpImageoffset, DEC);\n     Serial.print("Header size: "); Serial.println(read32(bmpFile));\n     bmpWidth  = read32(bmpFile);\n     bmpHeight = read32(bmpFile);\n     if(read16(bmpFile) == 1) { \n       bmpDepth = read16(bmpFile);\n       Serial.print("Bit Depth: "); Serial.println(bmpDepth);\n       if((bmpDepth == 24) && (read32(bmpFile) == 0)) { \n         goodBmp = true; \n         rowSize = (bmpWidth * 3 + 3) & ~3;\n         if(bmpHeight < 0) {\n           bmpHeight = -bmpHeight;\n           flip      = false;\n         }\n         w = bmpWidth;\n         h = bmpHeight;\n         if((x+w-1) >= tft.width())  w = tft.width()  - x;\n         if((y+h-1) >= tft.height()) h = tft.height() - y;\n         tft.startWrite();\n         tft.setAddrWindow(x, y, w, h);\n         for (row=0; row<h; row++) {\n           if(flip)\n             pos = bmpImageoffset + (bmpHeight - 1 - row) * rowSize;\n           else     \n             pos = bmpImageoffset + row * rowSize;\n           if(bmpFile.position() != pos) { \n             tft.endWrite();\n             bmpFile.seek(pos);\n             buffidx = sizeof(sdbuffer); \n           }\n           for (col=0; col<w; col++) { \n             if (buffidx >= sizeof(sdbuffer)) { \n               bmpFile.read(sdbuffer, sizeof(sdbuffer));\n               buffidx = 0; \n               tft.startWrite();\n             }             r = sdbuffer[buffidx++];\n             g = sdbuffer[buffidx++];\n             b = sdbuffer[buffidx++];\n             tft.pushColor(tft.color565(r,g,b));\n           } \n         } \n         tft.endWrite();\n         Serial.print("Loaded in ");\n         Serial.print(millis() - startTime);\n         Serial.println(" ms");\n       }\n     }\n   }\n   bmpFile.close();\n   if(!goodBmp) Serial.println("BMP format not recognized.");\n }\n uint16_t read16(File f) {\n   uint16_t result;\n   ((uint8_t *)&result)[0] = f.read(); \n   ((uint8_t *)&result)[1] = f.read();\n   return result;\n }\n   uint32_t read32(File f) {\n   uint32_t result;\n   ((uint8_t *)&result)[0] = f.read(); \n   ((uint8_t *)&result)[1] = f.read();\n   ((uint8_t *)&result)[2] = f.read();\n   ((uint8_t *)&result)[3] = f.read(); \n   return result;\n }\n';
    generator.setups_['SET1'] = '  pinMode(12,INPUT);\n   Serial.begin(9600); \n   tft.initR(INITR_GREENTAB);\n   tft.setRotation(3);\n   Serial.println("OK!");\n   tft.fillScreen(ST7735_BLACK);\n';
    var code = '';
    return code;
};
const TFT_SD_display = function(_, generator) {
    var value_SD_TUPIAN = generator.valueToCode(this, 'SD_TUPIAN', generator.ORDER_ATOMIC);
    var value_SD_X = generator.valueToCode(this, 'SD_X', generator.ORDER_ATOMIC);
    var value_SD_Y = generator.valueToCode(this, 'SD_Y', generator.ORDER_ATOMIC);
    var code = '    Serial.print("Initializing SD card...");\n     if (!SD.begin(SD_CS)) {\n       Serial.println("failed!");\n       tft.setTextSize(2);\n       tft.fillScreen(ST7735_BLACK);\n       tft.setCursor(0, 0);\n       tft.setTextColor(ST7735_BLUE);\n       tft.print("SD Card init error!");\n       return;\n     }\n'
               + 'bmpDraw('
               + value_SD_TUPIAN
               + ','
               + value_SD_X
               + ','
               + value_SD_Y
               + ');';
    return code;
};
////////////////////////////////////////////////////
//////////////////////////显示屏///////////////////
///////////////////////////RGB灯/////////////////
const ke_rgb2812 = function (_, generator) {
    var dropdown_rgbpin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var value_led = generator.valueToCode(this, 'num01', generator.ORDER_ATOMIC);
    var value_rvalue = generator.valueToCode(this, 'red', generator.ORDER_ATOMIC);
    var value_gvalue = generator.valueToCode(this, 'green', generator.ORDER_ATOMIC);
    var value_bvalue = generator.valueToCode(this, 'blue', generator.ORDER_ATOMIC);
    generator.definitions_['include_Wire'] = '#include <Wire.h>';
    generator.definitions_['include_Adafruit_NeoPixel'] = '#include <Adafruit_NeoPixel.h>';
    if (!generator.definitions_['var_rgb_display' + dropdown_rgbpin]) {
        generator.definitions_['var_rgb_display' + dropdown_rgbpin] = 'Adafruit_NeoPixel  rgb_display_' + dropdown_rgbpin + '' + '(8);';
        generator.setups_['setup_rgb_display_begin_' + dropdown_rgbpin] = 'rgb_display_' + dropdown_rgbpin + '.begin();';
        generator.setups_['setup_rgb_display_setpin' + dropdown_rgbpin] = 'rgb_display_' + dropdown_rgbpin + '.setPin(' + dropdown_rgbpin + ');';
    }

    var code = 'rgb_display_' + dropdown_rgbpin + '.setPixelColor(' + value_led + '-1, ' + value_rvalue + ',' + value_gvalue + ',' + value_bvalue + ');\n';
    code += 'rgb_display_' + dropdown_rgbpin + '.show();\n';
    return code;
};

//TM1650 4 digital display  -- 初始化
const ke_4digitdisplay_init = function (_, generator) {
    var CLK = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC || '10');
    var DIO = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC || '11');
    generator.definitions_['include_TM1650'] = '#include "KETM1650.h"';
    generator.definitions_['var_display_4display'] = 'KETM1650 tm_4display(' + CLK + ',' + DIO + ');';
    generator.setups_['setup_tm1637_init'] = 'tm_4display.init();\n';
    return '';
};

// TM1650 4 digital display  -- 开关 清屏
const ke_4digitdisplay_power = function () {
    var stat = this.getFieldValue("STAT");
    return 'tm_4display.' + stat + '();\n';
}

// TM1650 4 digital display  -- 显示字符串
const ke_4digitdisplay_displayString = function (_, generator) {
    // var value = generator.valueToCode(this, 'VALUE', generator.ORDER_ATOMIC);
    var value = generator.valueToCode(this, 'VALUE', generator.ORDER_ATOMIC) || '""';
    return 'tm_4display.displayString(' + value + ');\n';
}

// TM1650 4 digital display  -- 显示数字
const ke_4digitdisplay_displayNumber = function (_, generator) {
    // var pos = generator.valueToCode(this, 'POS', generator.ORDER_ATOMIC);
    var value = generator.valueToCode(this, 'VALUE', generator.ORDER_ATOMIC);
    // generator.definitions_['value_buf'] = 'char buf[5];';
    // return 'snprintf_P(buf, sizeof(buf), PSTR("%u"), '+value+');\n'
    //  + 'tm_4display.displayString(buf);\n';
    return 'tm_4display.displayString(' + value + ');\n';
}

// TM1650 4 digital display  -- 小数点显示
const ke_4digitdisplay_showDot = function (_, generator) {
    //var no=this.getFieldValue("NO");
    var dotNum = generator.valueToCode(this, 'DOTNUM', generator.ORDER_ASSIGNMENT) || '2';
    var stat = this.getFieldValue("STAT");
    return 'tm_4display.setDot(' + dotNum + '-1 ,' + stat + ');\n';
}

// TM1650 4 digital display  -- 设置亮度
const ke_4digitdisplay_Brightness = function (_, generator) {
    var brightness = generator.valueToCode(this, 'brightness', generator.ORDER_ASSIGNMENT) || '8';
    var code = 'tm_4display.setBrightness(' + brightness + ');\n';
    return code;
};

// TM1650 4 digital display  -- 时钟模式
const ke_4digitdisplay_Time = function (_, generator) {
    var time_hour = generator.valueToCode(this, 'time_hour', generator.ORDER_ASSIGNMENT);
    var time_minute = generator.valueToCode(this, 'time_minute', generator.ORDER_ASSIGNMENT);
    var time_second = this.getFieldValue('STAT');
    generator.definitions_['value_buf'] = 'char buf[5];';
    var code = 'snprintf_P(buf, sizeof(buf), PSTR("%02u%02u"), ' + time_hour + ', ' + time_minute + ');\n'
        + 'tm_4display.displayString(buf);\n';
    if (time_second == 'displaySEC_BLINK') {
        code += 'tm_4display.setDot(1,true);\n' + 'delay(500);\n' + 'tm_4display.setDot(1,false);\n' + 'delay(500);\n';
    } else if (time_second == 'displaySEC_ON') {
        generator.setups_['setup_display_4display_init'] = 'tm_4display.setDot(1,true);\n';
    }
    return code;
};

/*
export const ke_display_TM1637_init = function (_, generator) {
 tm1637_CLK = this.getFieldValue('CLK');
 tm1637_DIO = this.getFieldValue('DIO');
 generator.definitions_['include_SevenSegmentTM1637'] = '#include <SevenSegmentTM1637.h>';
 generator.definitions_['var_declare_SevenSegmentTM1637'] = 'SevenSegmentTM1637  display(' + tm1637_CLK + ',' + tm1637_DIO + ');';
 generator.setups_['setup_ display.begin()'] = ' display.begin();';
 return '';
};

export const ke_display_TM1637_displyPrint = function (_, generator) {
    //var Speed = generator.valueToCode(this, 'Speed', generator.ORDER_ATOMIC);
    var VALUE = generator.valueToCode(this, 'VALUE', generator.ORDER_ATOMIC);
    var code = 'display.print(' + VALUE + ');' + '\n';
    return code;
  };

  export const ke_display_TM1637_displayTime = function (_, generator) {
    generator.definitions_['include_SevenSegmentExtended'] = '#include <SevenSegmentExtended.h>';
    generator.definitions_['var_declare_SevenSegmentTM1637'] = 'SevenSegmentExtended  display(' + tm1637_CLK + ',' + tm1637_DIO + ');';
    var hour = generator.valueToCode(this, 'hour', generator.ORDER_ATOMIC);
    var minute = generator.valueToCode(this, 'minute', generator.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue("STAT");
    var code = 'display.printTime(' + hour + ',' + minute +','+dropdown_stat+');\n';
    return code;
  };

  export const ke_display_TM1637_clearDisplay = function (_, generator) {
    var stat=this.getFieldValue("STAT");
    return 'display.'+stat+'();\n';
  };

  export const ke_display_TM1637_Brightness = function (_, generator) {
    var BRIGHTNESS = generator.valueToCode(this, 'Brightness', generator.ORDER_ATOMIC);
    var code = 'display.setBacklight(' + BRIGHTNESS + ');\n';
    return code;
  };

////////////////////////////TM1637数码管初始化//////////////////////////
export const ke_tm1637_init = function(){
  var CLK = generator.valueToCode(this, 'PIN1',generator.ORDER_ATOMIC);
  var DIO = generator.valueToCode(this, 'PIN2',generator.ORDER_ATOMIC);

  generator.definitions_['include_TM1637.h'] = '#include <TM1637.h>';
  generator.definitions_['TM1637'] = 'TM1637 TM('+CLK+', '+DIO+');';
  return '';
};

///////////////////////////TM1637数码管自定义显示/////////////////
export const ke_tm1637_dy = function(){
  var num = generator.valueToCode(this, 'num', generator.ORDER_ATOMIC);
  //var tc = generator.valueToCode(this, 'tc', generator.ORDER_ATOMIC);
  var weishu = generator.valueToCode(this, 'weishu', generator.ORDER_ATOMIC);
  var wei = generator.valueToCode(this, 'wei', generator.ORDER_ATOMIC);
  var code = 'TM.cls();\nTM.Num('+num+',0,'+weishu+','+wei+');'+'\n';
  return code;
};

///////////////////////////TM1637数码管自定义显示是否填充/////////////////
export const ke_tm1637_tc = function(){
  var num = generator.valueToCode(this, 'num', generator.ORDER_ATOMIC);
  //var tc = generator.valueToCode(this, 'tc', generator.ORDER_ATOMIC);
  var tc = generator.valueToCode(this, '0and1', generator.ORDER_ATOMIC);
  var code = 'TM.cls();\nTM.Num('+num+','+tc+');'+'\n';
  return code;
};

///////////////////////////TM1637数码管亮度/////////////////
export const ke_tm1637_ld = function(){
  var num = generator.valueToCode(this, 'num', generator.ORDER_ATOMIC);
  var code = 'TM.BL('+num+');'+'\n';
  return code;
};


///////////////////////////TM1637数码管是否隐藏/////////////////
export const ke_tm1637_yc = function(){
  var bool = generator.valueToCode(this, 'BOOL', generator.ORDER_ATOMIC);
  var code = 'TM.show('+bool+');'+'\n';
  return code;
};

///////////////////////////TM1637数码管是否显示冒号////////////////
export const ke_tm1637_mh = function(){
  var bool = generator.valueToCode(this, 'BOOL', generator.ORDER_ATOMIC);
  var num1 = generator.valueToCode(this, 'num1', generator.ORDER_ATOMIC);
  var num2 = generator.valueToCode(this, 'num2', generator.ORDER_ATOMIC);


  var code = 'TM.DNum('+num1+','+num2+','+bool+');'+'\n';
  return code;
};
*/


////////////////////////1602LCD无IIC///////////////////////////
const ke_1602lcd_w = function (_, generator) {
    var str1 = generator.valueToCode(this, 'TEXT1', generator.ORDER_ATOMIC) || 'String("")'
    var str2 = generator.valueToCode(this, 'TEXT2', generator.ORDER_ATOMIC) || 'String("")'


    generator.definitions_['DRE'] = 'int DI = 12,RW = 11,Enable = 2;';
    generator.definitions_['DB'] = 'int DB[] = {3, 4, 5, 6, 7, 8, 9, 10};';
    generator.definitions_['STR'] = 'char *string = "0";';
    generator.definitions_['LcdCommandWrite'] = 'void LcdCommandWrite(int value) \n{\nint i = 0;\nfor (i=DB[0]; i <= DI; i++) \n{\ndigitalWrite(i,value & 01);\nvalue >>= 1;\n}\ndigitalWrite(Enable,LOW);\ndelayMicroseconds(1);\ndigitalWrite(Enable,HIGH);\ndelayMicroseconds(1); \ndigitalWrite(Enable,LOW);\ndelayMicroseconds(1); \n}\n';
    generator.definitions_['LcdDataWrite'] = 'void LcdDataWrite(int value) \n{\nint i = 0;\ndigitalWrite(DI, HIGH); \ndigitalWrite(RW, LOW); \nfor (i=DB[0]; i <= DB[7]; i++) \n{\ndigitalWrite(i,value & 01);\nvalue >>= 1;\n}\ndigitalWrite(Enable,LOW);  \ndelayMicroseconds(1);\ndigitalWrite(Enable,HIGH); \ndelayMicroseconds(1);\ndigitalWrite(Enable,LOW); \ndelayMicroseconds(1); \n}\n';
    //generator.definitions_['LcdStringWrite'] = 'void LcdStringWrite(char *a)\n{\nfor(int i = 0;i < 14; i++)\n{\nif(*(a+i) == '\0')\n {\nbreak;\n}\nLcdDataWrite(*(a+i));\n}\n}\n';
    generator.definitions_['lsw'] = 'void LcdStringWrite(char *a)\n{\nfor(int i = 0;i < strlen(a); i++){\nLcdDataWrite(*(a+i));\n}\n}\n';

    generator.setups_['setup_lcd'] = 'int i = 0;\nfor (i=Enable; i <= DI; i++) \n{\n    pinMode(i,OUTPUT);\n}\ndelay(100);\nLcdCommandWrite(0x38);\ndelay(64);  \nLcdCommandWrite(0x38); \ndelay(50);  \nLcdCommandWrite(0x38); \ndelay(20);  \nLcdCommandWrite(0x06); \ndelay(20);  \nLcdCommandWrite(0x0E);\ndelay(20);  \nLcdCommandWrite(0x01);  \ndelay(100); \nLcdCommandWrite(0x80); \ndelay(20);  \n';

    var code = 'LcdCommandWrite(0x01); \ndelay(10); \nLcdCommandWrite(0x80+0); \ndelay(10); \nstring = ' + str1 + ';\nLcdStringWrite(string);\ndelay(10);\nLcdCommandWrite(0xc0+0); \n string = ' + str2 + ';\nLcdStringWrite(string);\ndelay(10);\ndelay(300);';

    return code;
};


const ke_1602lcd_init = function (_, generator) {
    var varName = this.getFieldValue('VAR');
    var TYPE = this.getFieldValue('TYPE');
    var device = generator.valueToCode(this, 'address', generator.ORDER_ATOMIC) || '0x27';
    generator.definitions_['include_Wire'] = '#include <Wire.h>';
    generator.definitions_['include_LiquidCrystal_I2C'] = '#include <LiquidCrystal_I2C.h>';
    generator.definitions_['var_LiquidCrystal_I2C_' + varName] = 'LiquidCrystal_I2C ' + varName + '(' + device + ',' + TYPE + ');';
    return '';
};

const ke_1602lcd = function (_, generator) {
    var varName = this.getFieldValue('VAR');
    var str1 = generator.valueToCode(this, 'TEXT', generator.ORDER_ATOMIC) || '""';
    var str2 = generator.valueToCode(this, 'TEXT2', generator.ORDER_ATOMIC) || '""';
    //var str3 = generator.valueToCode(this, 'TEXT3', generator.ORDER_ATOMIC) || '""';
    //var str4 = generator.valueToCode(this, 'TEXT4', generator.ORDER_ATOMIC) || '""';
    if (generator.definitions_['var_LiquidCrystal_SoftI2C_' + varName] || generator.definitions_['var_LiquidCrystal_I2C_' + varName]) {
        generator.setups_['setup_lcd_init_' + varName] = varName + '.init();';
        generator.setups_['setup_lcd_backlight_' + varName] = varName + '.backlight();';
    }
    var code = varName + '.setCursor(0, 0);\n'
    code += varName + '.print(' + str1 + ');\n';
    code += varName + '.setCursor(0, 1);\n';
    code += varName + '.print(' + str2 + ');\n';
    //code+=varName+'.setCursor(0, 2);\n';
    //code+=varName+'.print('+str3+');\n';
    //code+=varName+'.setCursor(0, 3);\n';
    //code+=varName+'.print('+str4+');\n';
    return code;
};

const ke_1602lcd_print2 = function (_, generator) {
    var varName = this.getFieldValue('VAR');
    var str = generator.valueToCode(this, 'TEXT', generator.ORDER_ATOMIC) || 'String("")';
    var row = generator.valueToCode(this, 'row', generator.ORDER_ATOMIC) || '1';
    var column = generator.valueToCode(this, 'column', generator.ORDER_ATOMIC) || '1';
    if (generator.definitions_['var_LiquidCrystal_SoftI2C_' + varName] || generator.definitions_['var_LiquidCrystal_I2C_' + varName]) {
        generator.setups_['setup_lcd_init_' + varName] = varName + '.init();';
        generator.setups_['setup_lcd_backlight_' + varName] = varName + '.backlight();';
    }
    var code = varName + '.setCursor(' + column + '-1, ' + row + '-1);\n'
    code += varName + '.print(' + str + ');\n';
    return code;
};

const ke_1602lcd_left = function () {
    var varName = this.getFieldValue('VAR');
    var code = '' + varName + '.scrollDisplayLeft();\n'
    return code;
};

const ke_1602lcd_right = function () {
    var varName = this.getFieldValue('VAR');
    var code = '' + varName + '.scrollDisplayRight();\n'
    return code;
};


////////////////////////1602LCD///////////////////////////
/*export const ke_1602lcd = function() {
  var str1 = generator.valueToCode(this, 'TEXT1', generator.ORDER_ATOMIC) || 'String("")'
  var str2 = generator.valueToCode(this, 'TEXT2', generator.ORDER_ATOMIC) || 'String("")'
  var dropdown_stat = this.getFieldValue('STAT');
  //var bool = generator.valueToCode(this, 'BOOL', generator.ORDER_ATOMIC);
  generator.definitions_['define_i2c'] = '#include <Wire.h>';
  generator.definitions_['define_lcd'] = '#include <LiquidCrystal_I2C.h>';
  generator.definitions_['var_lcd'] = 'LiquidCrystal_I2C lcd(0x27,16,2);';
  generator.setups_['setup_lcd1'] = 'lcd.init();';
  generator.setups_['setup_lcd2'] = 'lcd.backlight();';
  var code = 'lcd.setCursor(0, 0);\n'
  code+='lcd.print('+str1+');\n';
  code+='lcd.setCursor(0, 1);\n';
  code+='lcd.print('+str2+');\n';
  return code;
};*/

const ke_1602lcd_clear = function (_, generator) {
    var varName = this.getFieldValue('VAR');
    var dropdown_stat = this.getFieldValue('STAT');
    if (generator.definitions_['var_LiquidCrystal_SoftI2C_' + varName] || generator.definitions_['var_LiquidCrystal_I2C_' + varName]) {
        generator.setups_['setup_lcd_init_' + varName] = varName + '.init();';
        generator.setups_['setup_lcd_backlight_' + varName] = varName + '.backlight();';
    }
    var code = varName + '.' + dropdown_stat + '();\n'
    return code;
};

////////////////////////1602LCD///////////////////////////
/*export const ke_1602lcd_clear = function() {

  var code = 'lcd.clear();\n'

  return code;
};*/


const lcd128_init = function (_, generator) {
    //generator.includes_.include_lcd128_init = '#include <lcd.h>\n';  Mixly没有这条语句
    generator.definitions_['1lcd128_init'] = '#include <lcd.h>\nlcd Lcd;\n';
    generator.setups_['lcd128_setup'] = 'Lcd.Init();\n';
    var code = '';
    return code;
};



const lcd128_cursor = function (_, generator) {
    var row = generator.valueToCode(this, 'row', generator.ORDER_ATOMIC);
    var col = generator.valueToCode(this, 'col', generator.ORDER_ATOMIC);

    var code = 'Lcd.Cursor(' + row + ',' + col + ');\n';
    return code;
};

const lcd128_string = function (_, generator) {
    //var lcd128str = generator.valueToCode(this, 'TEXT1', generator.ORDER_ATOMIC) || 'String("")'
    //const lcd128str = generator.valueToCode(block, 'string', generator.ORDER_ATOMIC);
    const lcd128str = generator.valueToCode(this, 'string', generator.ORDER_ATOMIC);
    var code = 'Lcd.Display(' + lcd128str + ');\n';
    return code;
};

const lcd128_pixel = function (_, generator) {
    const row = generator.valueToCode(this, 'row', generator.ORDER_ATOMIC);
    const col = generator.valueToCode(this, 'col', generator.ORDER_ATOMIC);
    var code = `Lcd.DisplayPixel(${row},${col});\n`;
    return code;
};

const lcd128_d_pixel = function (_, generator) {
    const row = generator.valueToCode(this, 'row', generator.ORDER_ATOMIC);
    const col = generator.valueToCode(this, 'col', generator.ORDER_ATOMIC);
    var code = `Lcd.ClearPixel(${row},${col});\n`
    return code;
};


const lcd128_clear = function () {
    var code = 'Lcd.Clear();\n'
    return code;
};




////////////////////////2004LCD///////////////////////////
const ke_2004lcd = function (_, generator) {
    var str1 = generator.valueToCode(this, 'TEXT1', generator.ORDER_ATOMIC) || 'String("")'
    var str2 = generator.valueToCode(this, 'TEXT2', generator.ORDER_ATOMIC) || 'String("")'
    var str3 = generator.valueToCode(this, 'TEXT3', generator.ORDER_ATOMIC) || 'String("")'
    var str4 = generator.valueToCode(this, 'TEXT4', generator.ORDER_ATOMIC) || 'String("")'

    generator.definitions_['define_i2c'] = '#include <Wire.h>';
    generator.definitions_['define_df_lcd'] = '#include <LiquidCrystal_I2C.h>';
    generator.definitions_['var_df_lcd'] = 'LiquidCrystal_I2C df_lcd(0x27,16,4);';
    generator.setups_['setup_df_lcd1'] = 'df_lcd.init();';
    generator.setups_['setup_df_lcd2'] = 'df_lcd.backlight();';
    var code = 'df_lcd.setCursor(0, 0);\n'
    code += 'df_lcd.print(' + str1 + ');\n';
    code += 'df_lcd.setCursor(0, 1);\n';
    code += 'df_lcd.print(' + str2 + ');\n';
    code += 'df_lcd.setCursor(0, 2);\n';
    code += 'df_lcd.print(' + str3 + ');\n';
    code += 'df_lcd.setCursor(0, 3);\n';
    code += 'df_lcd.print(' + str4 + ');\n';
    return code;
};

////////////////////////oled_init///////////////////////////
const ke_OLED_init = function (_, generator) {
    generator.definitions_['define_Wire'] = '#include <Wire.h>';
    generator.definitions_['define_GFX'] = '#include <Adafruit_GFX.h>';
    generator.definitions_['define_SSD1306'] = '#include <Adafruit_SSD1306.h>';

    generator.definitions_['OLED_RESET'] = '#define OLED_RESET 4';
    generator.definitions_['display'] = 'Adafruit_SSD1306 display(OLED_RESET);';

    generator.setups_['setup_oled1'] = 'display.begin(SSD1306_SWITCHCAPVCC, 0x3C);';
    generator.setups_['setup_oled2'] = 'display.display();';
    generator.setups_['setup_oled3'] = 'delay(2000);';
    generator.setups_['setup_oled4'] = 'display.clearDisplay();';

    var code = ''

    return code;
};

////////////////////////oled_pixel///////////////////////////
const ke_OLED_piexl = function (_, generator) {
    var valx = generator.valueToCode(this, 'val_x', generator.ORDER_ATOMIC);
    var valy = generator.valueToCode(this, 'val_y', generator.ORDER_ATOMIC);

    var code = 'display.drawPixel(' + valx + ', ' + valy + ', WHITE);\ndisplay.display();\n'

    return code;
};

////////////////////////oled_line///////////////////////////
const ke_OLED_line = function (_, generator) {
    var valx1 = generator.valueToCode(this, 'val_x1', generator.ORDER_ATOMIC);
    var valy1 = generator.valueToCode(this, 'val_y1', generator.ORDER_ATOMIC);
    var valx2 = generator.valueToCode(this, 'val_x2', generator.ORDER_ATOMIC);
    var valy2 = generator.valueToCode(this, 'val_y2', generator.ORDER_ATOMIC);

    var code = 'display.drawLine(' + valx1 + ', ' + valy1 + ', ' + valx2 + ', ' + valy2 + ', WHITE);\ndisplay.display();\n'

    return code;
};

////////////////////////oled_drawRect///////////////////////////
const ke_OLED_rect = function (_, generator) {
    var valx1 = generator.valueToCode(this, 'val_x1', generator.ORDER_ATOMIC);
    var valy1 = generator.valueToCode(this, 'val_y1', generator.ORDER_ATOMIC);
    var valx2 = generator.valueToCode(this, 'val_x2', generator.ORDER_ATOMIC);
    var valy2 = generator.valueToCode(this, 'val_y2', generator.ORDER_ATOMIC);

    var code = 'display.drawRect(' + valx1 + ', ' + valy1 + ', ' + valx2 + ', ' + valy2 + ', WHITE);\ndisplay.display();\n'

    return code;
};

////////////////////////oled_drawfullRect///////////////////////////
const ke_OLED_fullrect = function (_, generator) {
    var valx1 = generator.valueToCode(this, 'val_x1', generator.ORDER_ATOMIC);
    var valy1 = generator.valueToCode(this, 'val_y1', generator.ORDER_ATOMIC);
    var valx2 = generator.valueToCode(this, 'val_x2', generator.ORDER_ATOMIC);
    var valy2 = generator.valueToCode(this, 'val_y2', generator.ORDER_ATOMIC);

    var code = 'display.fillRect(' + valx1 + ', ' + valy1 + ', ' + valx2 + ', ' + valy2 + ', 1);\ndisplay.display();\n'

    return code;
};

////////////////////////oled_roundrect///////////////////////////
const ke_OLED_roundrect = function (_, generator) {
    var valx1 = generator.valueToCode(this, 'val_x1', generator.ORDER_ATOMIC);
    var valy1 = generator.valueToCode(this, 'val_y1', generator.ORDER_ATOMIC);
    var valx2 = generator.valueToCode(this, 'val_x2', generator.ORDER_ATOMIC);
    var valy2 = generator.valueToCode(this, 'val_y2', generator.ORDER_ATOMIC);
    var val_round = generator.valueToCode(this, 'val_round', generator.ORDER_ATOMIC);

    var code = 'display.drawRoundRect(' + valx1 + ', ' + valy1 + ', ' + valx2 + ', ' + valy2 + ', ' + val_round + ',  WHITE);\ndisplay.display();\n'

    return code;
};

////////////////////////oled_fullroundrect///////////////////////////
const ke_OLED_fullroundrect = function (_, generator) {
    var valx1 = generator.valueToCode(this, 'val_x1', generator.ORDER_ATOMIC);
    var valy1 = generator.valueToCode(this, 'val_y1', generator.ORDER_ATOMIC);
    var valx2 = generator.valueToCode(this, 'val_x2', generator.ORDER_ATOMIC);
    var valy2 = generator.valueToCode(this, 'val_y2', generator.ORDER_ATOMIC);
    var val_round = generator.valueToCode(this, 'val_round', generator.ORDER_ATOMIC);

    var code = 'display.fillRoundRect(' + valx1 + ', ' + valy1 + ', ' + valx2 + ', ' + valy2 + ', ' + val_round + ',  WHITE);\ndisplay.display();\n'

    return code;
};

////////////////////////oled_drawcircle///////////////////////////
const ke_OLED_circle = function (_, generator) {
    var valx1 = generator.valueToCode(this, 'val_x1', generator.ORDER_ATOMIC);
    var valy1 = generator.valueToCode(this, 'val_y1', generator.ORDER_ATOMIC);
    var valx2 = generator.valueToCode(this, 'val_circle', generator.ORDER_ATOMIC);

    var code = 'display.drawCircle(' + valx1 + ', ' + valy1 + ', ' + valx2 + ', WHITE);\ndisplay.display();\n'

    return code;
};

////////////////////////oled_drawfillcircle///////////////////////////
const ke_OLED_fullcircle = function (_, generator) {
    var valx1 = generator.valueToCode(this, 'val_x1', generator.ORDER_ATOMIC);
    var valy1 = generator.valueToCode(this, 'val_y1', generator.ORDER_ATOMIC);
    var valx2 = generator.valueToCode(this, 'val_circle', generator.ORDER_ATOMIC);

    var code = 'display.fillCircle(' + valx1 + ', ' + valy1 + ', ' + valx2 + ', WHITE);\ndisplay.display();\n'

    return code;
};

////////////////////////oled_triangle///////////////////////////
const ke_OLED_triangle = function (_, generator) {
    var valx1 = generator.valueToCode(this, 'val_x1', generator.ORDER_ATOMIC);
    var valy1 = generator.valueToCode(this, 'val_y1', generator.ORDER_ATOMIC);
    var valx2 = generator.valueToCode(this, 'val_x2', generator.ORDER_ATOMIC);
    var valy2 = generator.valueToCode(this, 'val_y2', generator.ORDER_ATOMIC);
    var valx3 = generator.valueToCode(this, 'val_x3', generator.ORDER_ATOMIC);
    var valy3 = generator.valueToCode(this, 'val_y3', generator.ORDER_ATOMIC);

    var code = 'display.drawTriangle(' + valx1 + ', ' + valy1 + ', ' + valx2 + ', ' + valy2 + ', ' + valx3 + ', ' + valy3 + ',WHITE);\ndisplay.display();\n'

    return code;
};

////////////////////////oled_fulltriangle///////////////////////////
const ke_OLED_fulltriangle = function (_, generator) {
    var valx1 = generator.valueToCode(this, 'val_x1', generator.ORDER_ATOMIC);
    var valy1 = generator.valueToCode(this, 'val_y1', generator.ORDER_ATOMIC);
    var valx2 = generator.valueToCode(this, 'val_x2', generator.ORDER_ATOMIC);
    var valy2 = generator.valueToCode(this, 'val_y2', generator.ORDER_ATOMIC);
    var valx3 = generator.valueToCode(this, 'val_x3', generator.ORDER_ATOMIC);
    var valy3 = generator.valueToCode(this, 'val_y3', generator.ORDER_ATOMIC);

    var code = 'display.fillTriangle(' + valx1 + ', ' + valy1 + ', ' + valx2 + ', ' + valy2 + ', ' + valx3 + ', ' + valy3 + ',WHITE);\ndisplay.display();\n'

    return code;
};

////////////////////////oled_string///////////////////////////
const ke_OLED_string = function (_, generator) {
    var valx1 = generator.valueToCode(this, 'val_x1', generator.ORDER_ATOMIC);
    var valy1 = generator.valueToCode(this, 'val_y1', generator.ORDER_ATOMIC);
    var val_size = generator.valueToCode(this, 'size', generator.ORDER_ATOMIC);
    var str1 = generator.valueToCode(this, 'TEXT1', generator.ORDER_ATOMIC);

    var code = 'display.setTextSize(' + val_size + ');\n  display.setTextColor(WHITE);\n  display.setCursor(' + valx1 + ',' + valy1 + ');\ndisplay.println(' + str1 + ');\ndisplay.display();\n'

    return code;
};



//////////////////////////OLED//////////////////////////////////////
const ke_oled = function (_, generator) {

    var s = generator.valueToCode(this, 'size', generator.ORDER_ATOMIC);

    var str1 = generator.valueToCode(this, 'TEXT1', generator.ORDER_ATOMIC);
    var str2 = generator.valueToCode(this, 'TEXT2', generator.ORDER_ATOMIC);
    var str3 = generator.valueToCode(this, 'TEXT3', generator.ORDER_ATOMIC);
    var str4 = generator.valueToCode(this, 'TEXT4', generator.ORDER_ATOMIC);
    var code = 'display.setTextSize(' + s + ');\ndisplay.setTextColor(WHITE);\ndisplay.setCursor(0,0);\ndisplay.println(' + str1 + ');\ndisplay.println(' + str2 + ');\ndisplay.println(' + str3 + ');\ndisplay.println(' + str4 + ');\ndisplay.display();\ndelay(250);';
    return code;
};


////////////////////////oled_clear///////////////////////////
const ke_oled_clear = function () {

    var code = 'display.clearDisplay();\n'

    return code;
};



//////////////////////////////点阵初始化/////////////////////////////
const ke_matrix_init = function (_, generator) {
    var SDA = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    var SCL = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);
    var addr = generator.valueToCode(this, 'address', generator.ORDER_ATOMIC);

    var matrixName = this.getFieldValue('matrixName');
    generator.definitions_['include_Matrix'] = '#include <Matrix.h>';
    generator.definitions_[matrixName] = 'Matrix ' + matrixName + '(' + SDA + ',' + SCL + ');';
    generator.setups_['setup_' + matrixName] = matrixName + '.begin(' + addr + '); \n';
    var code = matrixName + '.clear();\n';
    return code;
};

const ke_Matrix_POS = function (_, generator) {
    var pos_x = generator.valueToCode(this, 'XVALUE', generator.ORDER_ASSIGNMENT);
    var pos_y = generator.valueToCode(this, 'YVALUE', generator.ORDER_ASSIGNMENT);
    var matrixName = this.getFieldValue('matrixName');
    var dropdown_type = this.getFieldValue('DrawPixel_TYPE');
    var code = matrixName + '.drawPixel(' + pos_x + '-1,' + pos_y + '-1,' + dropdown_type + ');\n'
    code += matrixName + '.write();\n';
    return code;
};
const ke_Matrix_Rotation = function () {
    var matrixName = this.getFieldValue('matrixName');
    var dropdown_type = this.getFieldValue('Rotation_TYPE');
    var code = matrixName + '.setRotation(' + dropdown_type + ');\n'
    return code;
};
const ke_matrix_text = function (_, generator) {
    var matrixName = this.getFieldValue('matrixName');
    var textString = generator.valueToCode(this, 'TEXT', generator.ORDER_ASSIGNMENT);
    var code = matrixName + '.print(' + textString + ');\nmyMatrix.write();\n'
    return code;
};
//执行器_点阵屏显示_显示图案
const ke_matrix1 = function (_, generator) {
    var matrixName = this.getFieldValue('matrixName');
    var dotMatrixArray = generator.valueToCode(this, 'LEDArray', generator.ORDER_ASSIGNMENT);
    generator.definitions_['LEDArray'] = 'uint8_t  LEDArray[8];';
    //  var code='Matrix_'+SDA+'_'+SCL+'.clear()dotMatrix;\n';
    var code = '';
    code += 'for(int i=0; i<8; i++)\n';
    code += '{\n'
    code += '  LEDArray[i]=' + dotMatrixArray + '[i];\n';
    code += '  for(int j=7; j>=0; j--)\n'
    code += '  {\n'
    code += '    if((LEDArray[i]&0x01)>0)\n';
    code += '    ' + matrixName + '.drawPixel(j, i,1);\n';
    code += '    LEDArray[i] = LEDArray[i]>>1;\n';
    code += '  }  \n'
    code += '}\n'
    code += matrixName + '.write();\n'
    return code;
};
//执行器_点阵屏显示_点阵数组
const ke_matrix2 = function (_, generator) {
    var varName = this.getFieldValue('VAR');
    var a = new Array();
    for (let i = 1; i < 9; i++) {
        a[i] = new Array();
        for (let j = 1; j < 9; j++) {
            a[i][j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
        }
    }
    var code = '{';
    for (let i = 1; i < 9; i++) {
        var tmp = ""
        for (let j = 1; j < 9; j++) {
            tmp += a[i][j];
        }
        tmp = (parseInt(tmp, 2)).toString(16)
        if (tmp.length == 1) tmp = "0" + tmp;
        code += '0x' + tmp + ((i != 8) ? ',' : '');
    }
    code += '};';
    //generator.definitions_[this.id] = "byte LedArray_"+clearString(this.id)+"[]="+code;
    generator.definitions_[varName] = "uint8_t " + varName + "[8]=" + code;
    //return ["LedArray_"+clearString(this.id), generator.ORDER_ATOMIC];
    return [varName, generator.ORDER_ATOMIC];
};


////////////////////////清屏/////////////////////////////
const ke_matrix_clear = function () {
    var matrixName = this.getFieldValue('matrixName');
    var code = matrixName + '.clear();\n'
    code += matrixName + '.write();\n';
    return code;
};


////////////////////////////////点阵1////////////////////////////
//执行器_点阵屏显示_显示图案
/*export const ke_matrix1 = function() {
  var matrixName = this.getFieldValue('matrixName');
  var dotMatrixArray = generator.valueToCode(this, 'LEDArray', generator.ORDER_ASSIGNMENT);
  generator.definitions_['LEDArray'] = 'uint8_t  LEDArray[8];';
//  var code='Matrix_'+SDA+'_'+SCL+'.clear()dotMatrix;\n';
  var code='';
  code+='for(int i=0; i<8; i++)\n';
  code+='{\n'       //由于硬件横向引脚排序往左移了一位的问题，需要程序将数组往右移一位。
  code+='if('+dotMatrixArray+'[i] & 0x01)\n'   //如果数据最后一位是1，1是有效数值
  code+='{\n'
  code+='LEDArray[i]=('+dotMatrixArray+'[i] >> 1) | 0x80;\n' //这里先整体往右移了，就是把最后一个数（1）移掉了，就需要或上0x80,相当于把1放到前面去。
  code+='}\n'
  code+='else\n'    //如果最后一位是0
  code+='{'
  code+='LEDArray[i]='+dotMatrixArray+'[i]>>1;\n'   //就直接往右移一位就可以，前面会自动补0
  code+='}';
  //code+='  for(int j=7; j>=0; j--)\n'
  code+='  for(int j=0; j<=7; j++)\n'
  code+='  {\n'
  code+='    if((LEDArray[i]&0x01)>0)\n';
  code+='    '+ matrixName +'.drawPixel(j, i,1);\n';
  code+='    LEDArray[i] = LEDArray[i]>>1;\n';
  code+='  }  \n'
  code+='}\n'
  code+= matrixName+'.writeDisplay();\n'
  return code;
};
//执行器_点阵屏显示_点阵数组
export const ke_matrix2 = function() {
  var varName = this.getFieldValue('VAR');
  var a = new Array();
  for (var i = 1; i < 9; i++) {
    a[i] = new Array();
    for (var j = 1; j < 9; j++) {
      a[i][j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
    }
  }
  var code = '{';
  for (var i = 1; i < 9; i++) {
    var tmp = ""
    for (var j = 1; j < 9; j++) {
      tmp += a[i][j];

    }
    tmp = (parseInt(tmp, 2)).toString(16)
    if (tmp.length == 1) tmp = "0" + tmp;
    code += '0x' + tmp + ((i != 8) ? ',' : '');
  }
  code += '};';
  //generator.definitions_[this.id] = "byte LedArray_"+clearString(this.id)+"[]="+code;
  generator.definitions_[varName] = "uint8_t " + varName + "[8]=" + code;
  //return ["LedArray_"+clearString(this.id), generator.ORDER_ATOMIC];
  return [varName, generator.ORDER_ATOMIC];
};*/




////////////////////////////////通讯///////////////////////////////

///////////////////////红外接收///////////////////
const ke_ir_r = function (_, generator) {
    var variable = generator.variableDB_.getName(this.getFieldValue('VAR'), blockly_core__WEBPACK_IMPORTED_MODULE_0__.Variables.NAME_TYPE);
    generator.definitions_['var_declare' + variable] = 'long ' + variable + ';';
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var branch = generator.statementToCode(this, 'DO');
    var branch2 = generator.statementToCode(this, 'DO2');
    generator.definitions_['include_IRremote'] = '#include <IRremote.h>\n';
    //generator.definitions_['var_declare'+varName] = 'long '+varName+';\n';
    generator.definitions_['var_ir_recv' + dropdown_pin] = 'IRrecv irrecv_' + dropdown_pin + '(' + dropdown_pin + ');\ndecode_results results_' + dropdown_pin + ';\n';
    generator.setups_['setup_ir_recv_' + dropdown_pin] = 'irrecv_' + dropdown_pin + '.enableIRIn();';
    var code = "if (irrecv_" + dropdown_pin + ".decode(&results_" + dropdown_pin + ")) {\n"
    code += '  ' + variable + '=results_' + dropdown_pin + '.value;\n';
    code += '  String type="UNKNOWN";\n';
    ////////////////////////////////////////////////////////////////
    code += '  String typelist[14]={"UNKNOWN", "NEC", "SONY", "RC5", "RC6", "DISH", "SHARP", "PANASONIC", "JVC", "SANYO", "MITSUBISHI", "SAMSUNG", "LG", "WHYNTER"};\n';
    code += '  if(results_' + dropdown_pin + '.decode_type>=1&&results_' + dropdown_pin + '.decode_type<=13){\n';
    code += '    type=typelist[results_' + dropdown_pin + '.decode_type];\n'
    code += '  }\n';
    code += '  Serial.print("IR TYPE:"+type+"  ");\n';
    code += branch;
    code += '  irrecv_' + dropdown_pin + '.resume();\n'
    code += '} else {\n';
    code += branch2;
    code += '}\n';
    return code;
};

//////////////////////////////////////红外发射/////////////////////////////
const ke_ir_s = function (_, generator) {

    var num1 = generator.valueToCode(this, 'num1', generator.ORDER_ATOMIC);

    generator.definitions_['define_IRre.h'] = '#include <IRremote.h>';
    generator.definitions_['define_IRsend'] = 'IRsend irsend;';

    var code = 'irsend.sendRC5(' + num1 + ', 8);\ndelay(200);\n';
    return code;
};


//////////////////////RFID////////////////////////////
const rc522_i2c_init = function (_, generator) {
    generator.definitions_['1include_rc522_iic_init'] = '#include <Wire.h>\n#include <MFRC522_I2C.h>\nMFRC522 mfrc522(0x28);\nString rfid_str = "";\n';
    generator.definitions_['1include_rc522_iic_data'] = 'String return_rfid_data()\n' +
        '{\n' +
        '  if ( ! mfrc522.PICC_IsNewCardPresent() || ! mfrc522.PICC_ReadCardSerial() ) {\n' +
        '    delay(50);\n' +
        '    return "0";\n' +
        '  }\n' +
        '  rfid_str = "";\n' +
        '  for (byte i = 0; i < mfrc522.uid.size; i++) {\n' +
        '    rfid_str = rfid_str + String(mfrc522.uid.uidByte[i],HEX);\n' +
        '  }\n' +
        '  return rfid_str;\n' +
        '}\n';

    generator.setups_['1setup_rc522_iic'] = 'Wire.begin();\nmfrc522.PCD_Init();\n';

    return '';
};


const rc522_i2c_read = function (_, generator) {
    return ['return_rfid_data()', generator.ORDER_ATOMIC];
};


/////////////////////////////////////蓝牙////////////////////////////////////
const ke_bluetooth = function (_, generator) {
    var val = this.getFieldValue('VAL');
    var branch = generator.statementToCode(this, 'DO');
    var dropdown_pin1 = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    var dropdown_pin2 = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);


    generator.definitions_['include_Soft'] = '#include <SoftwareSerial.h>\n';
    generator.definitions_['mySerial'] = 'SoftwareSerial mySerial(' + dropdown_pin1 + ', ' + dropdown_pin2 + ');\n';
    generator.definitions_['char'] = 'char ' + val + ';\n';

    generator.setups_['mySerial23'] = 'mySerial.begin(9600);';

    var code = 'if (mySerial.available())\n{\n' + val + ' = mySerial.read();\n';
    code += branch;
    code += '}\n';
    return code;
};

/***/ }),

/***/ "./src/language/en.js":
/*!****************************!*\
  !*** ./src/language/en.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnCatgories: () => (/* binding */ EnCatgories),
/* harmony export */   EnMsg: () => (/* binding */ EnMsg)
/* harmony export */ });
const EnMsg = {};

EnMsg.ke_red_led = 'red_led';
EnMsg.ke_yellow_led='yellow_led';
EnMsg.ke_blue_led = 'blue_led';
EnMsg.ke_white_led='white_led';
EnMsg.ke_green_led='green_led';
EnMsg.ke_dual_led = 'dual_led';
EnMsg.ke_jg1='laser';
EnMsg.Kids_anologWrite = 'anologWrite';
EnMsg.Kids_value = 'value';


EnMsg.Kids_ON = 'HIGH';
EnMsg.Kids_OFF = 'LOW';
EnMsg.Kids_anologWrite = 'anologWrite';

EnMsg.Kids_iic = 'PIN：SDA# A4, SCL# A5';
EnMsg.Kids_rot = 'button_PIN';
EnMsg.Kids_rot_count = 'count';
EnMsg.Kids_bits = 'string';
EnMsg.Kids_pin = 'PIN';

EnMsg.Kids_iic_pin = 'PIN #SDA:A4,#SCL:A5';
EnMsg.Kids_lcd_p = 'LCD';
EnMsg.Kids_shilihua = 'Instantiation name';
EnMsg.Kids_size = 'font size';

EnMsg.Kids_printcount = 'Display digits';
EnMsg.ke_string = 'display character';

EnMsg.Kids_lcd_left = 'LCD_Scroll to the left';
EnMsg.Kids_lcd_right = 'LCD_Scroll to the right';

EnMsg.ke_TM1637='4 digit 8-segment LED digital';
EnMsg.ke_ws='digit';
EnMsg.ke_begin='Display position';
EnMsg.ke_fill0='add 0?';
EnMsg.ke_light='Brightness0~7';
EnMsg.ke_XY='Show or hide';
EnMsg.ke_L='left';
EnMsg.ke_R='right';
EnMsg.ke_MH='colon';
EnMsg.ke_value='value';

EnMsg.ke_oled_init = 'OLED_init';
EnMsg.ke_oled_piexl = 'OLED_point coordinates';
EnMsg.ke_oled_x = 'column';
EnMsg.ke_oled_y = 'row';
EnMsg.ke_oled_cong = 'from';
EnMsg.ke_oled_dao = 'to';
EnMsg.ke_oled_kai = 'initial point';
EnMsg.ke_oled_kuan = 'width';
EnMsg.ke_oled_chang = 'height';
EnMsg.ke_oled_angle1 = 'angle1';
EnMsg.ke_oled_angle2 = 'angle2';
EnMsg.ke_oled_angle3 = 'angle3';

EnMsg.ke_oled_line = 'OLED_line';
EnMsg.ke_oled_rect = 'OLED_hollow rectangle';
EnMsg.ke_oled_fil_lrect = 'OLED_solid rectangle';
EnMsg.ke_oled_r_rect = 'OLED_hollow rounded rectangle';
EnMsg.ke_oled_r_fill_rect = 'OLED_solid rounded rectangle';
EnMsg.ke_oled_circle = 'OLED_hollow circle  Center coordinates';
EnMsg.ke_oled_circle_radius = 'Circle radius';
EnMsg.ke_oled_radius = 'Corner radius';
EnMsg.ke_oled_fill_circle = 'OLED_solid circle  Center coordinates';
EnMsg.ke_oled_triangle = 'OLED_hollow triangle';
EnMsg.ke_oled_fill_triangle = 'OLED_solid triangle';
EnMsg.ke_oled_string1 = 'OLED_displays a string or number';
EnMsg.ke_oled_weizhi = 'display position';
EnMsg.ke_oled_print = 'display';
EnMsg.ke_oled_clear = 'OLED_clear';


EnMsg.MIXLY_ke_LED1='Piranha LED';
EnMsg.MIXLY_ke_LED2='Red Piranha LED';
EnMsg.MIXLY_ke_LED3='Green Piranha LED';
EnMsg.MIXLY_ke_LED4='Yellow Piranha LED';
EnMsg.MIXLY_ke_LED5='Blue Piranha LED';
EnMsg.MIXLY_ke_LED01='Straw cap LED';
EnMsg.MIXLY_ke_LED02='Red Straw cap LED';
EnMsg.MIXLY_ke_LED03='Green Straw cap LED';
EnMsg.MIXLY_ke_LED04='Yellow straw cap LED';
EnMsg.MIXLY_ke_LED05='Blue Straw cap LED';
EnMsg.MIXLY_ke_QCD='Colorful lights';
EnMsg.MIXLY_ke_RGB_A='Common anode RGB';
EnMsg.MIXLY_ke_RGB_B='Common cathode RGB';

EnMsg.MIXLY_ke_BUZZER1='Active buzzer';
EnMsg.MIXLY_ke_BUZZER2='Passive Buzzer';
EnMsg.MIXLY_ke_RELAY='Relay';
EnMsg.MIXLY_ke_v_motor='Vibration motor';
EnMsg.MIXLY_ke_SPEAKER='Speaker';
EnMsg.MIXLY_NOTONE_PIN = 'noTone PIN#';
EnMsg.MIXLY_ke_MOTOR='Fan';
EnMsg.MIXLY_ke_MOTOR01='geared motor';
EnMsg.MIXLY_ke_SERVO='servo';
EnMsg.MIXLY_ke_TB6612='TB6612motor';
EnMsg.MIXLY_H='front';
EnMsg.MIXLY_L='back';



EnMsg.MIXLY_ke_2812RGB='NeoPixel Led';

EnMsg.MIXLY_ke_IR_G='PIR Sensor';
EnMsg.MIXLY_ke_FLAME='Flame Sensor';
EnMsg.MIXLY_ke_HALL='Hall Sensor';
EnMsg.MIXLY_ke_CRASH='Crash Sensor';
EnMsg.MIXLY_ke_BUTTON='Button';
EnMsg.MIXLY_ke_sl_BUTTON='Self-locking button';
EnMsg.MIXLY_ke_TUOCH='Capacitive Touch';
EnMsg.MIXLY_ke_KNOCK='Knock Sensor';
EnMsg.MIXLY_ke_TILT='Tilt Sensor';
EnMsg.MIXLY_ke_SHAKE='Vibration Sensor';
EnMsg.MIXLY_ke_REED_S='Reed Switch Sensor';
EnMsg.MIXLY_ke_TRACK='Tracking Sensor';
EnMsg.MIXLY_ke_AVOID='Obstacle Avoidance MSensor';
EnMsg.MIXLY_ke_LIGHT_B='Light Interrupt Sensor';
EnMsg.MIXLY_ke_ROT='Rotation';


EnMsg.MIXLY_ke_ANALOG_T='Analog Temperature Sensor';
EnMsg.MIXLY_ke_SOUND='Sound Sensor';
EnMsg.MIXLY_ke_LIGHT='photocell Sensor';
EnMsg.MIXLY_ke_UV='UV Sensor';
EnMsg.MIXLY_ke_Piezo='Piezo Sensor';
EnMsg.MIXLY_ke_WATER='Water Level Sensor';
EnMsg.MIXLY_ke_SOIL='Soil Sensor';
EnMsg.MIXLY_ke_POTENTIOMETER='rotational potentiometer';
EnMsg.MIXLY_ke_LM35='LM35 Temperature Sensor';
EnMsg.MIXLY_ke_SLIDE_POTENTIOMETER='slide potentiometer';
EnMsg.MIXLY_ke_TEMT6000='TEMT6000 Ambient Light';
EnMsg.MIXLY_ke_STEAM='water vapor sensor';
EnMsg.MIXLY_ke_FILM_P='Thin-film Pressure Sensor';
EnMsg.MIXLY_ke_JOYSTICK='Joystick Sensor';
EnMsg.MIXLY_ke_JOYSTICK_btn='Joystick_button';
EnMsg.MIXLY_ke_SMOKE='Smoke Sensor';
EnMsg.MIXLY_ke_ALCOHOL='Alcohol Sensor';
EnMsg.MIXLY_ke_Voltage='Voltage Sensor';
EnMsg.MIXLY_ke_Current='Current Sensor';


EnMsg.MIXLY_ke_18B20='18B20 Temperature Sensor';
EnMsg.MIXLY_ke_18B20_R='Getting temperature';
EnMsg.MIXLY_ke_DHT11='temperature and humidity Sensor';
EnMsg.MIXLY_DHT11_H='getTemperature';    /////////////
EnMsg.MIXLY_DHT11_T='getHumidity';     ////////////
EnMsg.MIXLY_ke_BMP180='BMP180 altimeter Sensor';
EnMsg.MIXLY_ke_BMP180_T='temperature';
EnMsg.MIXLY_ke_BMP180_A='atmosphere';
EnMsg.MIXLY_ke_BMP180_H='height above sea level ';

EnMsg.MIXLY_ke_BMP280='BMP280 altimeter Sensor';
EnMsg.MIXLY_ke_BMP280_T='temperature';
EnMsg.MIXLY_ke_BMP280_A='atmosphere';
EnMsg.MIXLY_ke_BMP280_H='height above sea level';

EnMsg.MIXLY_ke_SR04='SR04 Ultrasound Module';
EnMsg.MIXLY_ke_3231='DS3231 clock';

//RTC-DS3231/DS1307
EnMsg.MIXLY_ke_DS3231='DS3231';
EnMsg.MIXLY_ke_DS1307='DS1307';
EnMsg.MIXLY_ke_DS3231_GET_TIME='Get';
EnMsg.MIXLY_ke_DS3231_SET_TIME='SetTime';
EnMsg.MIXLY_ke_DS3231_SET_TIME2='Compiled date and time';
EnMsg.MIXLY_ke_YEAR='Year';
EnMsg.MIXLY_ke_MONTH='Month';
EnMsg.MIXLY_ke_DAY='Day';
EnMsg.MIXLY_ke_HOUR='Hour';
EnMsg.MIXLY_ke_MINUTE='Minute';
EnMsg.MIXLY_ke_SECOND='Second';
EnMsg.MIXLY_ke_DAYOFWEEK='DayOfWeek';

EnMsg.MIXLY_ke_ADXL345='Acceleration Sensor';
EnMsg.MIXLY_ADXL345_X='X-axis acceleration'; ///
EnMsg.MIXLY_ADXL345_Y='Y-axis acceleration'; ///
EnMsg.MIXLY_ADXL345_Z='Z-axis acceleration'; ///
EnMsg.MIXLY_ADXL345_XA='X-axis angle';  ///
EnMsg.MIXLY_ADXL345_YA='Y-axis angle';  ///
EnMsg.MLX90614_TYPE = 'Infrared temperature sensor';
EnMsg.MLX90614_TARGET_OBJECT_TEMP = 'Target object temperature';
EnMsg.MLX90614_AMBIENT_TEMP = 'Ambient temperature';
EnMsg.TCS34725_Get_RGB='TCS347255 Sensor Get Color';
EnMsg.ke_Gesture_APDS='Gesture sensor';
EnMsg.MIXLY_BMP388_init='BPM388 Barometric Pressure Sensor Init';
EnMsg.MIXLY_BMP388_read='BPM388 Barometric Pressure Sensor Read Value';


EnMsg.MIXLY_ke_OLED='OLED_displays a string or number';
EnMsg.MIXLY_ke_1602LCD='IIC1602LCD';
EnMsg.MIXLY_SETUP='setup';  ////////////////
EnMsg.MIXLY_LCD_ADDRESS='address'; /////////
EnMsg.MIXLY_LCD_PRINT1='peint line1';  /////////
EnMsg.MIXLY_LCD_PRINT2='print line2'; ///////////
EnMsg.MIXLY_LCD_ROW='row'; /////
EnMsg.MIXLY_LCD_COLUMN='column'; /////////
EnMsg.MIXLY_LCD_PRINT='print'; ////
EnMsg.MIXLY_LCD_STAT_ON='On';  /////
EnMsg.MIXLY_LCD_STAT_OFF='Off';  /////
EnMsg.MIXLY_LCD_STAT_CURSOR='Cursor';  ////
EnMsg.MIXLY_LCD_STAT_NOCURSOR='noCursor';  ////
EnMsg.MIXLY_LCD_STAT_BLINK='Blink';  ////
EnMsg.MIXLY_LCD_STAT_NOBLINK='noBlink'; ///
EnMsg.MIXLY_LCD_STAT_CLEAR='Clear';  ///
EnMsg.MIXLY_LCD_NOBACKLIGHT='NoBackLight'; ///
EnMsg.MIXLY_LCD_BACKLIGHT='BackLight'; ///
EnMsg.MIXLY_ke_2004LCD='IIC2004LCD';
EnMsg.MIXLY_ke_print1='print line1';
EnMsg.MIXLY_ke_print2='print line2';
EnMsg.MIXLY_ke_print3='print line3';
EnMsg.MIXLY_ke_print4='print line4';

EnMsg.MIXLY_ke_MATRIX='8*8 dot matrix';

EnMsg.MIXLY_LCD128_SETUP='128X32 LCD start';  ////////////////
EnMsg.MIXLY_LCD128_CURSOR='128X32 LCD set cursor';
EnMsg.MIXLY_DISPLAY_STRING='128X32 LCD display String';
EnMsg.MIXLY_ke_LCD128_PIXLE='128X32 LCD draw pixel';
EnMsg.MIXLY_ke_LCD128_D='128X32 LCD delete pixel';
EnMsg.MIXLY_LCD128_CLEAR='128X32 LCD Clear';



EnMsg.MIXLY_ke_TM1637='4 digit 8-segment LED digital';
EnMsg.MIXLY_ke_TM1637_C='digit';
EnMsg.MIXLY_ke_TM1637_P='display position';
EnMsg.MIXLY_ke_TM1637_Fill='add 0?';
EnMsg.MIXLY_ke_TM1637_light='brightness 0~7';
EnMsg.MIXLY_ke_TM1637_xy='show or hide';
EnMsg.MIXLY_ke_TM1637_left='left';
EnMsg.MIXLY_ke_TM1637_maohao='colon';
EnMsg.MIXLY_ke_TM1637_right='right';
EnMsg.MIXLY_ke_value='value';

//4 Display
EnMsg.MIXLY_ke_4DIGITDISPLAY='DigitDisplay';
EnMsg.MIXLY_ke_4DIGITDISPLAY_DISPLAYSTRING='displayString';
EnMsg.MIXLY_ke_4DIGITDISPLAY_DISPLAYNUMBER='displayNumber';
EnMsg.MIXLY_ke_4DIGITDISPLAY_NOMBER1='No.';
EnMsg.MIXLY_ke_4DIGITDISPLAY_NOMBER2='';
EnMsg.MIXLY_ke_4DIGITDISPLAY_DOT='Dot';
EnMsg.MIXLY_ke_4DIGITDISPLAY_BRIGHTNESS='Brightness';
EnMsg.MIXLY_ke_4DIGITDISPLAY_BRIGHTNESS_RANGE='(1~8)';
EnMsg.MIXLY_ke_4DIGITDISPLAY_TIME_HOUR='Hour';
EnMsg.MIXLY_ke_4DIGITDISPLAY_TIME_MINUTE='Minute';
EnMsg.MIXLY_ke_4DIGITDISPLAY_TIME_SECOND='Second';
//4 Display time
EnMsg.MIXLY_ke_TIME_SEC_ON ='on';
EnMsg.MIXLY_ke_TIME_SEC_BLINK ='blink';
EnMsg.MIXLY_ke_TIME_SEC_OFF='off';


EnMsg.MIXLY_ke_IR_E='Infrared Transmitter Module';
EnMsg.MIXLY_ke_IR_R='Infrared Receiver Module';
EnMsg.MIXLY_ke_W5100='W5100 Ethernet Module';
EnMsg.MIXLY_rc522_iic_init='RFID RC522_I2C Init';
EnMsg.MIXLY_rc522_iic_read='RFID RC522_I2C Read';
EnMsg.MIXLY_ke_BLUETOOTH='Bluetooth 4.0 Module';
EnMsg.MIXLY_ke_read='Received signal';


//EnMsg.MIXLY_ke_kzsc = 'Control output';

EnMsg.MIXLY_ke_Count='count';

EnMsg.MIXLY_ke_YEAR = 'year';
EnMsg.MIXLY_ke_MONTH = 'month';
EnMsg.MIXLY_ke_DAY = 'day';
EnMsg.MIXLY_ke_HOUR = 'hour';
EnMsg.MIXLY_ke_MINUTE = 'minute';
EnMsg.MIXLY_ke_SECOND = 'second';
EnMsg.MIXLY_ke_WEEK = 'week';

EnMsg.MIXLY_ke_angle = 'angle';

EnMsg.kids_Ode_to_joy = "Ode_to_joy";
EnMsg.kids_birthday = "birthday";

EnMsg.kids_tone = "tone";
EnMsg.kids_beat = "beat";
EnMsg.kids_play_tone = "play_tone";
EnMsg.kids_notone = "no_tone";

EnMsg.kids_ADkey = "5 key module";

const EnCatgories = {};

/***/ }),

/***/ "./src/language/zh-hans.js":
/*!*********************************!*\
  !*** ./src/language/zh-hans.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZhHansCatgories: () => (/* binding */ ZhHansCatgories),
/* harmony export */   ZhHansMsg: () => (/* binding */ ZhHansMsg)
/* harmony export */ });
const ZhHansMsg = {};

ZhHansMsg.ke_red_led = '红色LED灯';
ZhHansMsg.ke_yellow_led='黄色LED灯';
ZhHansMsg.ke_white_led='白色LED灯';
ZhHansMsg.ke_blue_led = '蓝色LED灯';
ZhHansMsg.ke_green_led='绿色LED灯';
ZhHansMsg.ke_dual_led = '红绿双色灯';
ZhHansMsg.ke_jg1='激光';
ZhHansMsg.MIXLY_ke_QCD='七彩led灯';
ZhHansMsg.MIXLY_ke_RGB_A='共阳RGB';
ZhHansMsg.MIXLY_ke_RGB_B='共阴RGB';
ZhHansMsg.Kids_anologWrite = 'PWM输出';
ZhHansMsg.Kids_value = '赋值为';

ZhHansMsg.Kids_iic = '管脚：SDA# A4, SCL# A5';
ZhHansMsg.Kids_rot = '按钮管脚';
ZhHansMsg.Kids_rot_count = '计数变量';
ZhHansMsg.Kids_bits = '字符串';
ZhHansMsg.Kids_pin = '管脚';

ZhHansMsg.Kids_iic_pin = '管脚SDA:A4,SCL:A5';
ZhHansMsg.Kids_lcd_p = '液晶显示屏';
ZhHansMsg.Kids_shilihua = '实例化名称';
ZhHansMsg.Kids_size = '字体大小';
ZhHansMsg.Kids_printcount = '显示数字';

ZhHansMsg.ke_string = '显示字符';

ZhHansMsg.Kids_lcd_left = '液晶显示屏往左滚动';
ZhHansMsg.Kids_lcd_right = '液晶显示屏往右滚动';

ZhHansMsg.ke_TM1637='4位8段数码管';
ZhHansMsg.ke_ws='位数';
ZhHansMsg.ke_begin='显示的位置';
ZhHansMsg.ke_fill0='是否补充0';
ZhHansMsg.ke_light='亮度0~7';
ZhHansMsg.ke_XY='显或隐';
ZhHansMsg.ke_L='左边';
ZhHansMsg.ke_R='右边';
ZhHansMsg.ke_MH='冒号';
ZhHansMsg.ke_value='数值';


ZhHansMsg.ke_oled_init = 'OLED初始化';
ZhHansMsg.ke_oled_piexl = 'OLED_画点的坐标';
ZhHansMsg.ke_oled_x = '列';
ZhHansMsg.ke_oled_y = '行';
ZhHansMsg.ke_oled_cong = '从';
ZhHansMsg.ke_oled_dao = '到';
ZhHansMsg.ke_oled_kai = '起始位';
ZhHansMsg.ke_oled_kuan = '宽';
ZhHansMsg.ke_oled_chang = '长';
ZhHansMsg.ke_oled_angle1 = '角度1为';
ZhHansMsg.ke_oled_angle2 = '角度2为';
ZhHansMsg.ke_oled_angle3 = '角度3为';

ZhHansMsg.ke_oled_line = 'OLED_画两点连线';
ZhHansMsg.ke_oled_rect = 'OLED_画空心矩形';
ZhHansMsg.ke_oled_fil_lrect = 'OLED_画实心矩形';
ZhHansMsg.ke_oled_r_rect = 'OLED_画倒圆角的空心矩形';
ZhHansMsg.ke_oled_r_fill_rect = 'OLED_画倒圆角的实心矩形';
ZhHansMsg.ke_oled_circle = 'OLED_画空心圆形  圆心坐标';
ZhHansMsg.ke_oled_circle_radius = '圆半径';
ZhHansMsg.ke_oled_radius = '圆角半径';
ZhHansMsg.ke_oled_fill_circle = 'OLED_画实心的圆形  圆心坐标';
ZhHansMsg.ke_oled_triangle = 'OLED_画空心三角形';
ZhHansMsg.ke_oled_fill_triangle = 'OLED_画实心三角形';
ZhHansMsg.ke_oled_string1 = 'OLED_显示字符串或数字';
ZhHansMsg.ke_oled_weizhi = '显示的位置';
ZhHansMsg.ke_oled_print = '显示';
ZhHansMsg.ke_oled_clear = 'OLED_清屏';




ZhHansMsg.Kids_ON = '高';
ZhHansMsg.Kids_OFF = '低';
ZhHansMsg.Kids_anologWrite = 'PWM输出';



ZhHansMsg.MIXLY_ke_BUZZER1='有源蜂鸣器';
ZhHansMsg.MIXLY_ke_BUZZER2='无源蜂鸣器';
ZhHansMsg.MIXLY_ke_RELAY='继电器';
ZhHansMsg.MIXLY_ke_v_motor='震动马达';
ZhHansMsg.MIXLY_ke_SPEAKER='扬声器';
ZhHansMsg.MIXLY_NOTONE_PIN = '结束声音 管脚#';
ZhHansMsg.MIXLY_ke_MOTOR='小风扇';
ZhHansMsg.MIXLY_ke_MOTOR01='减速电机';
ZhHansMsg.MIXLY_ke_SERVO='舵机';
ZhHansMsg.MIXLY_ke_TB6612='TB6612电机驱动';
ZhHansMsg.MIXLY_H='正';
ZhHansMsg.MIXLY_L='反';


ZhHansMsg.MIXLY_ke_2812RGB='NeoPixel全彩LED';

ZhHansMsg.MIXLY_ke_IR_G='人体红外热传感器';
ZhHansMsg.MIXLY_ke_FLAME='火焰传感器';
ZhHansMsg.MIXLY_ke_HALL='霍尔传感器';
ZhHansMsg.MIXLY_ke_CRASH='碰撞传感器';
ZhHansMsg.MIXLY_ke_BUTTON='按键';
ZhHansMsg.MIXLY_ke_sl_BUTTON='自锁按键';
ZhHansMsg.MIXLY_ke_TUOCH='触摸传感器';
ZhHansMsg.MIXLY_ke_KNOCK='敲击传感器';
ZhHansMsg.MIXLY_ke_TILT='倾斜传感器';
ZhHansMsg.MIXLY_ke_SHAKE='震动传感器';
ZhHansMsg.MIXLY_ke_REED_S='干簧管传感器';
ZhHansMsg.MIXLY_ke_TRACK='循迹传感器';
ZhHansMsg.MIXLY_ke_AVOID='避障传感器';
ZhHansMsg.MIXLY_ke_LIGHT_B='光折断传感器';
ZhHansMsg.MIXLY_ENCODER = '旋转编码器';
ZhHansMsg.MIXLY_ke_ANALOG_T='模拟温度传感器';
ZhHansMsg.MIXLY_ke_SOUND='声音传感器';
ZhHansMsg.MIXLY_ke_LIGHT='光敏传感器';
ZhHansMsg.MIXLY_ke_UV='紫外线传感器';
ZhHansMsg.MIXLY_ke_Piezo='陶瓷压电传感器';
ZhHansMsg.MIXLY_ke_WATER='水位传感器';
ZhHansMsg.MIXLY_ke_SOIL='土壤传感器';
ZhHansMsg.MIXLY_ke_POTENTIOMETER='旋转电位器';
ZhHansMsg.MIXLY_ke_LM35='LM35温度传感器';
ZhHansMsg.MIXLY_ke_SLIDE_POTENTIOMETER='滑动电位器';
ZhHansMsg.MIXLY_ke_TEMT6000='TEMT6000环境光';
ZhHansMsg.MIXLY_ke_STEAM='水蒸气传感器';
ZhHansMsg.MIXLY_ke_FILM_P='薄膜压力传感器';
ZhHansMsg.MIXLY_ke_JOYSTICK='遥杆传感器';
ZhHansMsg.MIXLY_ke_JOYSTICK_btn='遥杆按钮';
ZhHansMsg.MIXLY_ke_SMOKE='烟雾传感器';
ZhHansMsg.MIXLY_ke_ALCOHOL='酒精传感器';
ZhHansMsg.MIXLY_ke_Voltage='电压传感器';
ZhHansMsg.MIXLY_ke_Current='电流传感器';


ZhHansMsg.MIXLY_ke_18B20='18B20温度传感器';
ZhHansMsg.MIXLY_ke_18B20_R='获取温度';
ZhHansMsg.MIXLY_ke_DHT11='温湿度传感器';
ZhHansMsg.MIXLY_DHT11_H='获取湿度';    /////////////
ZhHansMsg.MIXLY_DHT11_T='获取温度';     ////////////
ZhHansMsg.MIXLY_ke_BMP180='BMP180高度计传感器';

ZhHansMsg.MIXLY_ke_BMP180_T='温度';
ZhHansMsg.MIXLY_ke_BMP180_A='大气压';
ZhHansMsg.MIXLY_ke_BMP180_H='海拔高度';

ZhHansMsg.MIXLY_ke_BMP280='BMP280高度计传感器';
ZhHansMsg.MIXLY_ke_BMP280_T='温度';
ZhHansMsg.MIXLY_ke_BMP280_A='大气压';
ZhHansMsg.MIXLY_ke_BMP280_H='海拔高度';

ZhHansMsg.MIXLY_ke_SR04='SR04超声波模块';
ZhHansMsg.MIXLY_ke_3231='DS3231时钟';

//RTC-DS3231/DS1307
ZhHansMsg.MIXLY_ke_DS3231='DS3231';
ZhHansMsg.MIXLY_ke_DS1307='DS1307';
ZhHansMsg.MIXLY_ke_DS3231_GET_TIME='获取';
ZhHansMsg.MIXLY_ke_DS3231_SET_TIME='设置时间';
ZhHansMsg.MIXLY_ke_DS3231_SET_TIME2='编译的日期和时间';
ZhHansMsg.MIXLY_ke_YEAR='年';
ZhHansMsg.MIXLY_ke_MONTH='月';
ZhHansMsg.MIXLY_ke_DAY='日';
ZhHansMsg.MIXLY_ke_HOUR='时';
ZhHansMsg.MIXLY_ke_MINUTE='分';
ZhHansMsg.MIXLY_ke_SECOND='秒';
ZhHansMsg.MIXLY_ke_DAYOFWEEK='星期';

ZhHansMsg.MIXLY_Ke_ADXL345='加速度传感器';
ZhHansMsg.MIXLY_ADXL345_X='X轴加速度'; ///
ZhHansMsg.MIXLY_ADXL345_Y='Y轴加速度'; ///
ZhHansMsg.MIXLY_ADXL345_Z='Z轴加速度'; ///
ZhHansMsg.MIXLY_ADXL345_XA='X轴角度';  ///
ZhHansMsg.MIXLY_ADXL345_YA='Y轴角度';  ///

ZhHansMsg.MLX90614_TYPE = '红外测温传感器';
ZhHansMsg.MLX90614_TARGET_OBJECT_TEMP = '目标物体温度';
ZhHansMsg.MLX90614_AMBIENT_TEMP = '周围环境温度';
ZhHansMsg.TCS34725_Get_RGB = 'TCS34725颜色传感器 获取颜色';
ZhHansMsg.ke_Gesture_APDS='手势传感器获取手势';
ZhHansMsg.MIXLY_BMP388_init='BPM388气压传感器 初始化';
ZhHansMsg.MIXLY_BMP388_read='BPM388气压传感器 读取值';
ZhHansMsg.MIXLY_TFT_SD_INIT = 'TFT SD卡初始化';
ZhHansMsg.MIXLY_TFT_SD_display_1 = '显示图片 图片名称';
ZhHansMsg.MIXLY_TFT_SD_display_2 = 'X坐标';
ZhHansMsg.MIXLY_TFT_SD_display_3 = 'Y坐标';
ZhHansMsg.MIXLY_TFT_SD_display_4 = '图片格式为bmp格式';
ZhHansMsg.MIXLY_ke_YEAR = '年';
ZhHansMsg.MIXLY_ke_MONTH = '月';
ZhHansMsg.MIXLY_ke_DAY = '天';
ZhHansMsg.MIXLY_ke_TEXT = '周';
ZhHansMsg.MIXLY_ke_HOUR = '时';
ZhHansMsg.MIXLY_ke_MINUTE = '分';
ZhHansMsg.MIXLY_ke_SECOND = '秒';
ZhHansMsg.MIXLY_ke_GET = '获取时间';


ZhHansMsg.MIXLY_ke_OLED='OLED_显示字符串或数字';
ZhHansMsg.MIXLY_ke_1602LCD='IIC1602LCD';
ZhHansMsg.MIXLY_SETUP='初始化';  ////////////////
ZhHansMsg.MIXLY_LCD_ADDRESS='设备地址'; /////////
ZhHansMsg.MIXLY_LCD_PRINT1='打印第一行';  /////////
ZhHansMsg.MIXLY_LCD_PRINT2='打印第二行'; ///////////
ZhHansMsg.MIXLY_LCD_ROW='在第'; /////
ZhHansMsg.MIXLY_LCD_COLUMN='行第'; /////////
ZhHansMsg.MIXLY_LCD_PRINT='列打印'; ////
ZhHansMsg.MIXLY_LCD_STAT_ON='开';  /////
ZhHansMsg.MIXLY_LCD_STAT_OFF='关';  /////
ZhHansMsg.MIXLY_LCD_STAT_CURSOR='有光标';  ////
ZhHansMsg.MIXLY_LCD_STAT_NOCURSOR='无光标';  ////
ZhHansMsg.MIXLY_LCD_STAT_BLINK='闪烁';  ////
ZhHansMsg.MIXLY_LCD_STAT_NOBLINK='不闪烁'; ///
ZhHansMsg.MIXLY_LCD_STAT_CLEAR='清屏';  ///
ZhHansMsg.MIXLY_LCD_NOBACKLIGHT='关闭背光'; ///
ZhHansMsg.MIXLY_LCD_BACKLIGHT='打开背光'; ///

ZhHansMsg.MIXLY_LCD128_SETUP='128X32 LCD 初始化';  ////////////////
ZhHansMsg.MIXLY_LCD128_CURSOR='128X32 LCD 设置位置';
ZhHansMsg.MIXLY_DISPLAY_STRING='128X32 LCD 显示字符';
ZhHansMsg.MIXLY_ke_LCD128_PIXLE='128X32 LCD 画点坐标';
ZhHansMsg.MIXLY_ke_LCD128_D='128X32 LCD 删除点坐标';
ZhHansMsg.MIXLY_LCD128_CLEAR='128X32 LCD 清屏';


ZhHansMsg.MIXLY_ke_2004LCD='IIC2004LCD';
ZhHansMsg.MIXLY_ke_print1='打印第一行';
ZhHansMsg.MIXLY_ke_print2='打印第二行';
ZhHansMsg.MIXLY_ke_print3='打印第三行';
ZhHansMsg.MIXLY_ke_print4='打印第四行';


ZhHansMsg.MIXLY_ke_MATRIX='8*8点阵';
ZhHansMsg.MIXLY_ke_TM1637='4位8段数码管';
ZhHansMsg.MIXLY_ke_TM1637_C='位数';
ZhHansMsg.MIXLY_ke_TM1637_P='在第几位开始显示';
ZhHansMsg.MIXLY_ke_TM1637_Fill='是否填充0';
ZhHansMsg.MIXLY_ke_TM1637_light='亮度0~7';
ZhHansMsg.MIXLY_ke_TM1637_xy='显或隐';
ZhHansMsg.MIXLY_ke_TM1637_left='左边';
ZhHansMsg.MIXLY_ke_TM1637_maohao='冒号';
ZhHansMsg.MIXLY_ke_TM1637_right='右边';
ZhHansMsg.MIXLY_ke_value='数值';

//4 Display
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY='四位数码管';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_DISPLAYSTRING='显示字符串';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_DISPLAYNUMBER='显示数字';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_NOMBER1='第';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_NOMBER2='个';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_DOT='小数点';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_BRIGHTNESS='亮度';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_BRIGHTNESS_RANGE='(1~8)';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_TIME_HOUR='时';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_TIME_MINUTE='分';
ZhHansMsg.MIXLY_ke_4DIGITDISPLAY_TIME_SECOND='秒';
//4 Display time
ZhHansMsg.MIXLY_ke_TIME_SEC_ON ='亮';
ZhHansMsg.MIXLY_ke_TIME_SEC_BLINK ='闪';
ZhHansMsg.MIXLY_ke_TIME_SEC_OFF='灭';

ZhHansMsg.MIXLY_ke_IR_E='红外发射模块';
ZhHansMsg.MIXLY_ke_IR_R='红外接收模块';
ZhHansMsg.MIXLY_ke_W5100='W5100以太网模块';
ZhHansMsg.MIXLY_rc522_iic_init='RFID RC522_I2C 初始化';
ZhHansMsg.MIXLY_rc522_iic_read='RFID RC522_I2C 读取值';
ZhHansMsg.MIXLY_ke_BLUETOOTH='蓝牙4.0模块';
ZhHansMsg.MIXLY_ke_read='接收到信号';


//ZhHansMsg.MIXLY_ke_kzsc = '控制输出';

ZhHansMsg.MIXLY_ke_Count='灯号';

ZhHansMsg.MIXLY_ke_YEAR = '年';
ZhHansMsg.MIXLY_ke_MONTH = '月';
ZhHansMsg.MIXLY_ke_DAY = '日';
ZhHansMsg.MIXLY_ke_HOUR = '时';
ZhHansMsg.MIXLY_ke_MINUTE = '分';
ZhHansMsg.MIXLY_ke_SECOND = '秒';
ZhHansMsg.MIXLY_ke_WEEK = '周';

ZhHansMsg.MIXLY_ke_angle = '角度';

ZhHansMsg.kids_Ode_to_joy = "圣诞歌";
ZhHansMsg.kids_birthday = "生日快乐";

ZhHansMsg.kids_tone = "音调";
ZhHansMsg.kids_beat = "节拍";
ZhHansMsg.kids_play_tone = "播放乐曲";
ZhHansMsg.kids_notone = "关闭蜂鸣器";

ZhHansMsg.kids_ADkey = "5位按键模块";

const ZhHansCatgories = {};

/***/ }),

/***/ "./src/language/zh-hant.js":
/*!*********************************!*\
  !*** ./src/language/zh-hant.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZhHantCatgories: () => (/* binding */ ZhHantCatgories),
/* harmony export */   ZhHantMsg: () => (/* binding */ ZhHantMsg)
/* harmony export */ });
const ZhHantMsg = {};

ZhHantMsg.ke_red_led = '红色LED灯';
ZhHantMsg.ke_yellow_led='黄色LED灯';
ZhHantMsg.ke_blue_led = '蓝色LED灯';
ZhHantMsg.ke_green_led='绿色LED灯';
ZhHantMsg.ke_white_led='白色LED灯';
ZhHantMsg.ke_dual_led = '红绿双色灯';
ZhHantMsg.ke_jg1='激光';
ZhHantMsg.Kids_anologWrite = 'PWM输出';
ZhHantMsg.Kids_value = '赋值为';
ZhHantMsg.Kids_ON = '高';
ZhHantMsg.Kids_OFF = '低';
ZhHantMsg.Kids_anologWrite = 'PWM模拟输出';

ZhHantMsg.Kids_iic = '管脚：SDA# A4, SCL# A5';
ZhHantMsg.Kids_rot = '按钮管脚';
ZhHantMsg.Kids_rot_count = '计数变量';

ZhHantMsg.Kids_bits = '字符串';
ZhHantMsg.Kids_pin = '管脚';

ZhHantMsg.Kids_iic_pin = '管脚SDA:A4,SCL:A5';
ZhHantMsg.Kids_lcd_p = '液晶显示屏';
ZhHantMsg.Kids_shilihua = '实例化名称';
ZhHantMsg.Kids_size = '字体大小';
ZhHantMsg.Kids_printcount = '显示数字';
ZhHantMsg.ke_string = '显示字符';

ZhHantMsg.Kids_lcd_left = '液晶显示屏往左滚动';
ZhHantMsg.Kids_lcd_right = '液晶显示屏往右滚动';

ZhHantMsg.ke_TM1637='4位8段数码管';
ZhHantMsg.ke_ws='位数';
ZhHantMsg.ke_begin='显示的位置';
ZhHantMsg.ke_fill0='是否补充0';
ZhHantMsg.ke_light='亮度0~7';
ZhHantMsg.ke_XY='显或隐';
ZhHantMsg.ke_L='左边';
ZhHantMsg.ke_R='右边';
ZhHantMsg.ke_MH='冒号';
ZhHantMsg.ke_value='数值';

ZhHantMsg.ke_oled_init = 'OLED初始化';
ZhHantMsg.ke_oled_piexl = 'OLED_画点的坐标';
ZhHantMsg.ke_oled_x = '列';
ZhHantMsg.ke_oled_y = '行';
ZhHantMsg.ke_oled_cong = '从';
ZhHantMsg.ke_oled_dao = '到';
ZhHantMsg.ke_oled_kai = '起始位';
ZhHantMsg.ke_oled_kuan = '宽';
ZhHantMsg.ke_oled_chang = '长';
ZhHantMsg.ke_oled_angle1 = '角度1为';
ZhHantMsg.ke_oled_angle2 = '角度2为';
ZhHantMsg.ke_oled_angle3 = '角度3为';

ZhHantMsg.ke_oled_line = 'OLED_画两点连线';
ZhHantMsg.ke_oled_rect = 'OLED_画空心矩形';
ZhHantMsg.ke_oled_fil_lrect = 'OLED_画实心矩形';
ZhHantMsg.ke_oled_r_rect = 'OLED_画倒圆角的空心矩形';
ZhHantMsg.ke_oled_r_fill_rect = 'OLED_画倒圆角的实心矩形';
ZhHantMsg.ke_oled_circle = 'OLED_画空心圆形  圆心坐标';
ZhHantMsg.ke_oled_circle_radius = '圆半径';
ZhHantMsg.ke_oled_radius = '圆角半径';
ZhHantMsg.ke_oled_fill_circle = 'OLED_画实心的圆形  圆心坐标';
ZhHantMsg.ke_oled_triangle = 'OLED_画空心三角形';
ZhHantMsg.ke_oled_fill_triangle = 'OLED_画实心三角形';
ZhHantMsg.ke_oled_string1 = 'OLED_显示字符串或数字';
ZhHantMsg.ke_oled_weizhi = '显示的位置';
ZhHantMsg.ke_oled_print = '显示';
ZhHantMsg.ke_oled_clear = 'OLED_清屏';


ZhHantMsg.MIXLY_ke_LED1='食人魚LED';
ZhHantMsg.MIXLY_ke_LED2='紅色食人魚LED';
ZhHantMsg.MIXLY_ke_LED3='綠色食人魚LED';
ZhHantMsg.MIXLY_ke_LED4='黃色食人魚LED';
ZhHantMsg.MIXLY_ke_LED5='藍色食人魚LED';
ZhHantMsg.MIXLY_ke_LED01='草帽LED';
ZhHantMsg.MIXLY_ke_LED02='紅色草帽LED';
ZhHantMsg.MIXLY_ke_LED03='綠色草帽LED';
ZhHantMsg.MIXLY_ke_LED04='黃色草帽LED';
ZhHantMsg.MIXLY_ke_LED05='藍色草帽LED';
ZhHantMsg.MIXLY_ke_QCD='七彩led灯';
ZhHantMsg.MIXLY_ke_RGB_A='共阳RGB';
ZhHantMsg.MIXLY_ke_RGB_B='共阴RGB';

ZhHantMsg.MIXLY_ke_BUZZER1='有源蜂鳴器';
ZhHantMsg.MIXLY_ke_BUZZER2='無源蜂鳴器';
ZhHantMsg.MIXLY_ke_RELAY='繼電器';
ZhHantMsg.MIXLY_ke_v_motor='震动马达';
ZhHantMsg.MIXLY_ke_SPEAKER='扬声器';
ZhHantMsg.MIXLY_NOTONE_PIN = '结束声音 管脚#';
ZhHantMsg.MIXLY_ke_MOTOR='风扇';
ZhHantMsg.MIXLY_ke_MOTOR01='减速电机';
ZhHantMsg.MIXLY_ke_SERVO='舵機';
ZhHantMsg.MIXLY_ke_TB6612='TB6612电机驱动';
ZhHantMsg.MIXLY_H='正';
ZhHantMsg.MIXLY_L='反';


ZhHantMsg.MIXLY_ke_2812RGB='NeoPixel全彩LED';

ZhHantMsg.MIXLY_ke_IR_G='人體紅外熱傳感器';
ZhHantMsg.MIXLY_ke_FLAME='火焰傳感器';
ZhHantMsg.MIXLY_ke_HALL='霍爾傳感器';
ZhHantMsg.MIXLY_ke_CRASH='碰撞傳感器';
ZhHantMsg.MIXLY_ke_BUTTON='按鍵';
ZhHantMsg.MIXLY_ke_sl_BUTTON='自锁按键';
ZhHantMsg.MIXLY_ke_TUOCH='電容觸摸傳感器';
ZhHantMsg.MIXLY_ke_KNOCK='敲擊傳感器';
ZhHantMsg.MIXLY_ke_TILT='傾斜傳感器';
ZhHantMsg.MIXLY_ke_SHAKE='振動傳感器';
ZhHantMsg.MIXLY_ke_REED_S='幹簧管傳感器';
ZhHantMsg.MIXLY_ke_TRACK='循跡傳感器';
ZhHantMsg.MIXLY_ke_AVOID='避障傳感器';
ZhHantMsg.MIXLY_ke_LIGHT_B='光折斷傳感器';
ZhHantMsg.MIXLY_ke_ROT='旋转编码器';

ZhHantMsg.MIXLY_ke_ANALOG_T='模擬溫度傳感器';
ZhHantMsg.MIXLY_ke_SOUND='聲音傳感器';
ZhHantMsg.MIXLY_ke_LIGHT='光敏傳感器';
ZhHantMsg.MIXLY_ke_UV='紫外线传感器';
ZhHantMsg.MIXLY_ke_Piezo='陶瓷压电传感器';
ZhHantMsg.MIXLY_ke_WATER='水位傳感器';
ZhHantMsg.MIXLY_ke_SOIL='土壤傳感器';
ZhHantMsg.MIXLY_ke_POTENTIOMETER='旋转電位器';
ZhHantMsg.MIXLY_ke_LM35='LM35溫度傳感器';
ZhHantMsg.MIXLY_ke_SLIDE_POTENTIOMETER='滑動電位器';
ZhHantMsg.MIXLY_ke_TEMT6000='TEMT6000環境光傳感器';
ZhHantMsg.MIXLY_ke_STEAM='水蒸氣傳感器';
ZhHantMsg.MIXLY_ke_FILM_P='薄膜壓力傳感器';
ZhHantMsg.MIXLY_ke_JOYSTICK='遙桿傳感器';
ZhHantMsg.MIXLY_ke_JOYSTICK_btn='遥杆按钮';
ZhHantMsg.MIXLY_ke_SMOKE='煙霧傳感器';
ZhHantMsg.MIXLY_ke_ALCOHOL='酒精傳感器';
ZhHantMsg.MIXLY_ke_Voltage='电压传感器';
ZhHantMsg.MIXLY_ke_Current='电流传感器';


ZhHantMsg.MIXLY_ke_18B20='18B20溫度傳感器';
ZhHantMsg.MIXLY_ke_18B20_R='获取温度';
ZhHantMsg.MIXLY_ke_DHT11='溫濕度傳感器';
ZhHantMsg.MIXLY_DHT11_H='获取湿度';    /////////////
ZhHantMsg.MIXLY_DHT11_T='获取温度';     ////////////
ZhHantMsg.MIXLY_ke_BMP180='BMP180高度計傳感器';
ZhHantMsg.MIXLY_ke_BMP180_T='温度';
ZhHantMsg.MIXLY_ke_BMP180_A='大气压';
ZhHantMsg.MIXLY_ke_BMP180_H='海拔高度';

ZhHantMsg.MIXLY_ke_BMP280='BMP280高度計傳感器';
ZhHantMsg.MIXLY_ke_BMP280_T='温度';
ZhHantMsg.MIXLY_ke_BMP280_A='大气压';
ZhHantMsg.MIXLY_ke_BMP280_H='海拔高度';

ZhHantMsg.MIXLY_ke_SR04='SR04超聲波模塊';
ZhHantMsg.MIXLY_ke_3231='3231時鐘';

//RTC-DS3231/DS1307
ZhHantMsg.MIXLY_ke_DS3231='DS3231';
ZhHantMsg.MIXLY_ke_DS1307='DS1307';
ZhHantMsg.MIXLY_ke_DS3231_GET_TIME='獲取';
ZhHantMsg.MIXLY_ke_DS3231_SET_TIME='設置時間';
ZhHantMsg.MIXLY_ke_DS3231_SET_TIME2='編譯的日期與時間';
ZhHantMsg.MIXLY_ke_YEAR='年';
ZhHantMsg.MIXLY_ke_MONTH='月';
ZhHantMsg.MIXLY_ke_DAY='日';
ZhHantMsg.MIXLY_ke_HOUR='時';
ZhHantMsg.MIXLY_ke_MINUTE='分';
ZhHantMsg.MIXLY_ke_SECOND='秒';
ZhHantMsg.MIXLY_ke_DAYOFWEEK='星期';

ZhHantMsg.MIXLY_ke_ADXL345='加速度傳感器';
ZhHantMsg.MIXLY_ADXL345_X='X轴加速度'; ///
ZhHantMsg.MIXLY_ADXL345_Y='Y轴加速度'; ///
ZhHantMsg.MIXLY_ADXL345_Z='Z轴加速度'; ///
ZhHantMsg.MIXLY_ADXL345_XA='X轴角度';  ///
ZhHantMsg.MIXLY_ADXL345_YA='Y轴角度';  ///
ZhHantMsg.MLX90614_TYPE = '紅外測溫傳感器';
ZhHantMsg.MLX90614_TARGET_OBJECT_TEMP = '目標物體溫度';
ZhHantMsg.MLX90614_AMBIENT_TEMP = '周圍環境溫度';
ZhHantMsg.TCS34725_Get_RGB = 'TCS34725顏色感測器 獲取顏色';
ZhHantMsg.ke_Gesture_APDS='手势传感器获取手势';
ZhHantMsg.MIXLY_BMP388_init='BPM388氣壓感知器 初始化';
ZhHantMsg.MIXLY_BMP388_read='BPM388氣壓感知器 讀取值';

ZhHantMsg.MIXLY_ke_OLED='OLED_显示字符串或数字';
ZhHantMsg.MIXLY_ke_1602LCD='IIC1602LCD';
ZhHantMsg.MIXLY_SETUP='初始化';  ////////////////
ZhHantMsg.MIXLY_LCD_ADDRESS='设备地址'; /////////
ZhHantMsg.MIXLY_LCD_PRINT1='打印第一行';  /////////
ZhHantMsg.MIXLY_LCD_PRINT2='打印第二行'; ///////////
ZhHantMsg.MIXLY_LCD_ROW='在第'; /////
ZhHantMsg.MIXLY_LCD_COLUMN='行第'; /////////
ZhHantMsg.MIXLY_LCD_PRINT='列打印'; ////
ZhHantMsg.MIXLY_LCD_STAT_ON='开';  /////
ZhHantMsg.MIXLY_LCD_STAT_OFF='关';  /////
ZhHantMsg.MIXLY_LCD_STAT_CURSOR='有光标';  ////
ZhHantMsg.MIXLY_LCD_STAT_NOCURSOR='无光标';  ////
ZhHantMsg.MIXLY_LCD_STAT_BLINK='闪烁';  ////
ZhHantMsg.MIXLY_LCD_STAT_NOBLINK='不闪烁'; ///
ZhHantMsg.MIXLY_LCD_STAT_CLEAR='清屏';  ///
ZhHantMsg.MIXLY_LCD_NOBACKLIGHT='关闭背光'; ///
ZhHantMsg.MIXLY_LCD_BACKLIGHT='打开背光'; ///
ZhHantMsg.MIXLY_ke_2004LCD='IIC2004LCD';
ZhHantMsg.MIXLY_ke_print1='打印第一行';
ZhHantMsg.MIXLY_ke_print2='打印第二行';
ZhHantMsg.MIXLY_ke_print3='打印第三行';
ZhHantMsg.MIXLY_ke_print4='打印第四行';
ZhHantMsg.MIXLY_ke_MATRIX='8*8點陣';

ZhHantMsg.MIXLY_LCD128_SETUP='128X32 LCD 初始化';  ////////////////
ZhHantMsg.MIXLY_LCD128_CURSOR='128X32 LCD 设置位置';
ZhHantMsg.MIXLY_DISPLAY_STRING='128X32 LCD 显示字符';
ZhHantMsg.MIXLY_ke_LCD128_PIXLE='128X32 LCD 画点坐标';
ZhHantMsg.MIXLY_ke_LCD128_D='128X32 LCD 删除点坐标';
ZhHantMsg.MIXLY_LCD128_CLEAR='128X32 LCD 清屏';


ZhHantMsg.MIXLY_ke_TM1637='4位8段數碼管';
ZhHantMsg.MIXLY_ke_TM1637_C='位数';
ZhHantMsg.MIXLY_ke_TM1637_P='在第几位开始显示';
ZhHantMsg.MIXLY_ke_TM1637_Fill='是否填充0';
ZhHantMsg.MIXLY_ke_TM1637_light='亮度0~7';
ZhHantMsg.MIXLY_ke_TM1637_xy='显或隐';
ZhHantMsg.MIXLY_ke_TM1637_left='左边';
ZhHantMsg.MIXLY_ke_TM1637_maohao='冒号';
ZhHantMsg.MIXLY_ke_TM1637_right='右边';
ZhHantMsg.MIXLY_ke_value='数值';

//4 Display
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY='四位數碼管';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_DISPLAYSTRING='顯示字符串';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_DISPLAYNUMBER='顯示數字';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_NOMBER1='第';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_NOMBER2='個';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_DOT='小數點';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_BRIGHTNESS='亮度';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_BRIGHTNESS_RANGE='(1~8)';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_TIME_HOUR='時';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_TIME_MINUTE='分';
ZhHantMsg.MIXLY_ke_4DIGITDISPLAY_TIME_SECOND='秒';
//4 Display time
ZhHantMsg.MIXLY_ke_TIME_SEC_ON ='亮';
ZhHantMsg.MIXLY_ke_TIME_SEC_BLINK ='閃';
ZhHantMsg.MIXLY_ke_TIME_SEC_OFF='滅';

ZhHantMsg.MIXLY_ke_IR_E='紅外發射模塊';
ZhHantMsg.MIXLY_ke_IR_R='紅外接收模塊';
ZhHantMsg.MIXLY_ke_W5100='W5100以太網模塊';
ZhHantMsg.MIXLY_rc522_iic_init='RFID RC522_I2C 初始化';
ZhHantMsg.MIXLY_rc522_iic_read='RFID RC522_I2C 读取值';
ZhHantMsg.MIXLY_ke_BLUETOOTH='藍牙4.0模塊';
ZhHantMsg.MIXLY_ke_read='接收到信号';

ZhHantMsg.MIXLY_ke_Count='灯号';

ZhHantMsg.MIXLY_ke_YEAR = '年';
ZhHantMsg.MIXLY_ke_MONTH = '月';
ZhHantMsg.MIXLY_ke_DAY = '日';
ZhHantMsg.MIXLY_ke_HOUR = '时';
ZhHantMsg.MIXLY_ke_MINUTE = '分';
ZhHantMsg.MIXLY_ke_SECOND = '秒';
ZhHantMsg.MIXLY_ke_WEEK = '周';

ZhHantMsg.MIXLY_ke_angle = '角度';

ZhHantMsg.kids_Ode_to_joy = "圣诞歌";
ZhHantMsg.kids_birthday = "生日快乐";

ZhHantMsg.kids_tone = "音调";
ZhHantMsg.kids_beat = "节拍";
ZhHantMsg.kids_play_tone = "播放乐曲";
ZhHantMsg.kids_notone = "关闭蜂鸣器";

ZhHantMsg.kids_ADkey = "5位按键模块";

const ZhHantCatgories = {};

/***/ }),

/***/ "./src/media/12832.png":
/*!*****************************!*\
  !*** ./src/media/12832.png ***!
  \*****************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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AAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAAACgQ5AEAAAAAoECQBwAAAACAAkEeAAAAAAAKBHkAAAAA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";

/***/ }),

/***/ "./src/media/PAJ7620.png":
/*!*******************************!*\
  !*** ./src/media/PAJ7620.png ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_1307.png":
/*!*******************************!*\
  !*** ./src/media/ke_1307.png ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_18B20.png":
/*!********************************!*\
  !*** ./src/media/ke_18B20.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_345.png":
/*!******************************!*\
  !*** ./src/media/ke_345.png ***!
  \******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_34725.png":
/*!********************************!*\
  !*** ./src/media/ke_34725.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_90614.png":
/*!********************************!*\
  !*** ./src/media/ke_90614.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_ADKey.png":
/*!********************************!*\
  !*** ./src/media/ke_ADKey.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_Current.png":
/*!**********************************!*\
  !*** ./src/media/ke_Current.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_Gesture_APDS.png":
/*!***************************************!*\
  !*** ./src/media/ke_Gesture_APDS.png ***!
  \***************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_Piezo.png":
/*!********************************!*\
  !*** ./src/media/ke_Piezo.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_UV.png":
/*!*****************************!*\
  !*** ./src/media/ke_UV.png ***!
  \*****************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_Voltage.png":
/*!**********************************!*\
  !*** ./src/media/ke_Voltage.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAjCAYAAADBl8lGAAAACXBIWXMAAA7fAAAO3wFVDDfZAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABCBJREFUWIXNmV+IVVUUxr/VXEutoZqJoYhJwiEm+6dBif0hCYQsk0YyC0kiX4SgRKgesih6LQyCyh4iiQKNoEQshx6kVKyExDKscSYQM7JmGItKbZxfD2dfZs/23HP2Offcpg8u99y911rft89Ze5299zW1CMA1kvok3SipR9JsSdMlnZA0JmlA0gFJX0r6yMxGWqWlMgDTgDXA9xTDKWArsGiqx9AQwFJgoODA0rAdmFOVLms2AGCSXpC0PiXeL5L6Je2X9KuS1Gx3n05JcyTdLqkj8Dslaa2ZvdGsvqYAtAGbU57CbuBu4JzIGIuBT1PivORu4NQAeD0QNAo8XFYUsAz4LYj5StW6Y8U8GQgZAHoqiDsL+C6IvbYKzUVEzANOewIOA5dVGL8TOOjF/wdYUFX8PPJzgf0e+e9Abwt4eoARj2cQmFE1Txrx00H6rG4h170B1/pWcdUJ24Mi8AUpBQV4ANgCPBMRcwOwD1jXoP+TIFsurGIsjcSsDu7o4gZ2N7n+P4ELMuK1A38521sb2NwAjHucT1Q1njSyHR7REBnvOeCQs3sww2aVs/kxLRM8u70e764imnNfxB5Jm6RbvKatZjae4fKe+16RYfOQ+95kZmTYve9dz8/KitIAuoL07Muxn+1S62TavAEuYeJVc1VOrOsC7ui1ag3YF2l7XvD7myxjMxsE9kpaIGmppHcCk+WSpknaY2Y/5HAfljSuiYzbBIxGqaY8ctMEeMzZbkvp+8z1rYnUeaSMyGYGGLOQ7iDZ650GOrz2buCM6+uMHOBQS0RmYGaegdul9ytJxfu8rhVK0m2bmQ1H8k0vrFBSTZMrVBZmSrrH+32pkrmRh3clLVEyqLdcW716hvMyFUBN0sVe07dK9ozVAZjB5BduZhUN/EZJFsxdJGtMgGEgLFyNYswNMu+iWN3RKWpmf0s65jUtLOD3oZJs6ZO00nVtNrPYp3Czdz1iZnEVtCiAt727eCR2DgOLnM924Ct3Hb39AXZ6vB+UH0E+0V1Bqtwf6dcGHANOkFTUASJ3/UBvMDVW5nuVBFAj2dzW8TXJEi7G92XP77kCnFs8v+NAqWoaDeCR4Ck+Hul3NbDRfWZF+iwJuJ5qTn0caQ044JH+QXKKXTVPN/CTx3OIyKpbBfl8YMwjHwIurzB+F5PPZMaAO6qKHyvi2SB9jgLzKojbS3L+8t+mZooQA94MhJwEXqTE4RDJ/xrrmNjh17GRqTr8dYPcwNn4GXge6I6I0Q48yuTqXMerzQ6ukjsDrJL0mqTzU7oPSvpc0qCko5LOKFnX9kq6XtKdOnsh/f/4b8IHcCXwccpTKIpdwNypHk9DAAuBfpL9XhHsBpY3m5IhWjZ5gSskLZN0m6RrJXVpYsszLOm4pCFJOyXtMLPMI5Cy+Bd4fMZyJ0MEHwAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/media/ke_alcohol.png":
/*!**********************************!*\
  !*** ./src/media/ke_alcohol.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_bluetooth.png":
/*!************************************!*\
  !*** ./src/media/ke_bluetooth.png ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_bmp280.png":
/*!*********************************!*\
  !*** ./src/media/ke_bmp280.png ***!
  \*********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_button.png":
/*!*********************************!*\
  !*** ./src/media/ke_button.png ***!
  \*********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAABpCAYAAAA9d90HAAAACXBIWXMAACXQAAAl0AHaYF2kAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAADaVJREFUeJztnXm0X9MVx7/7iSkJiVlEzSSEtqhaWKqiLdVVy9SosTSqa7GExljVyTwUHZQKVUWNS00NVgQhoQvViimDoUkIQkyRiCDv0z/O79WT/Pa593fvub/3ey++a/3+uef+9t7n7Hvv2WfvffYxNQnA0pK+KmkLSYNrv3Ul9ZHUV1J/SdYseRoAkt6VNLf2my5psqQpkp6S9JiZfdIMQSodHGCgpP0kfUPSjgpK6WmYK2m8pHsl3WRmM6tilFxZwDKSvifpB5KGSloqNY8WxkJJ90n6q6SbzezjlMSTKQtYVkFBp0r6Qiq63RgzJF0oaZSZzU9BsLSyAJN0iKRzJK1ZWqKeh9cknSTpWjOjDKFSygK2kPRHhfnoc8TxkKQjzezZogQKKav2No2QdK6kZQuQmCFpqoJF9abCJP1+EVmahOUVrNZVJW0kaZCkDST1apDOAknHm9nFacVzAKwE3EpjmA1cDuwPrNEUQSsGsAKwO3A+8EKD43EL0L9qAdcBnsspUDswGtiTYCH2WAAG7ABcAXyYc3yeAaoxxIAhwMs5lXQT8OVKBGlxAAOBC4H5OcZqBrBZagGGED5lWXga+NzYkARsCPwjx5jNTqYwYD3glQyGC4HTCC6lz9EJwPeB9zLG72VgnbKMVgamZDB6HdglUd96JAhv2RMZ4zgJWKkoAwNuy2DwErBR4r71SAC9yf4s3klYFtWF2wCcqLCO8jBR0q5mNqtEHwoBaFPw3m+msOYZJGk9hbVQH0kdT+g7kubVftMV1nWTJU2S9LSZLWyy3L0kXSnp4Mhtx5nZhY0Q3Qr4OPIEPE+T10uEuXMEYY33dsYTmgfvEL4cI4ANmtiPpYC/R+T6CPhSXmJtwKMRYq83q3NAP2A48CBhSVAV2oHxwBFUvVgN/VoOeCgizyOEr0cmoaMiRBYC32xCZ1YDfkV4+puNucDvgLUr7uMawKsROX6URWAF4K0IgV9X3IFVgN+Tb0FZNT4ELgFWq7C/QwkvQD28AfSJ/fnkiPDPUNE6imB5HlITsNXwDnAMUEkQFfhThPdxne+1Tn/qLem/klavR1PSUDMbV4Gw60u6RtIOBf4+WdIzClbeFAXrr8OD30vSCpL6SRqoT63GrfSptdgIHpN0kJk9X+C/LoB+CtbpgDrNsyStv1jwEjg8ouGbUgrYiedeNDYvzQWuAQ4ECgU6CdbY1sDxhIm8EcwB9q9gHGJ2wg/r/WFC5A9bJRauDbiA/Bbeo8ChQPKEG2Bj4HTgzZyyAFxKWDOlkmFZfJfeg4vevFFk4EanEqrGaxngxpyDMh74Vkr+Ebn6AD8BZuaU7Q5g+YT8Rzp82um8VAJ+FhFqr4QC9QXG5BiImcCwVHwblLEPcC5hcZqFCRT15y3Od7UIz5M73zjOuWk2IWsphTDLAGNzDMAowqTbpQA2BR7LIe8jBOMsBc/bHR5jO27ojR/dvCKREG1kf/reBw5IwS8VgF6Exbm3FurAvSSIhgMHO/TnA8sL2CUiRBLLB7goo7PTSR0xTQhgGNnh+isT8FkrQn9nAcdGbiidBwjsm9HJyZQNvDUBwNeBdzP6MjwBHy/HZYQIZmg9lM7ZBjbI6OAkKnTnpAawDWGt5WEeIZeyDI/rHNoXtyns5qiHKSWZtkm6TsGDUA8zJe1mZm+W4dNMmNnjkvZWyP+rh96Srqfc/OWN++A2SWs5jWXdKj+WtK3TNk/S7mY2vSSPpsPMxkqKfe6GSDou0p6Fqc71gcJ3059VlBvBex7LhjqsKO1WAXEH7AcEn2cRurs6NF8RwWSuh1NKdGRUpCN/K0q3lUAIID4Z6WchfyqwvUNvjvDXEMcUZLY2sMCh+RawahG6rQiCQ/gTp6/twOYFaO7p0FvYJskLHxfdnnKCJG+CPcnMZhek23IwsyckXeY1SzqxAFlvGdMmR4sAIxrlAqxKMF/r4Qny5BV0MxA2anjLk4+B9RqkN8JTSOrBO1DBfK2HM82sPTG/LoeZvSPJ28LTS2E3aBKkVpaXDzdZ0m2JebUSLlKIUNfDwUQSNxtBMmURfHtbO81/6IlvVQfM7C1J1zvNG0raPgWflG+WF/f6SNKNCfm0Kq6OtO2RgkFKZe3sXL+r9uT1dDws6SWnbWgKBkmURQhQeq/67Sl4tDpqO/Hvdpq3JEFEOdWbta3CJul6GJeIR3fAfc71pVQs1e4zSKWsIc71aWY2LRGP7oBx8p0JpYOrqZTlhVmeSES/W6C25nrFaR5Uln4qZXmClIqJdVN4fS6trFSJius6173YTGUglCvYVdKKCiXm7m/yGm+KQhW4RVG6jEIqZXnR4NcS0c8F4FRJv5DUeQPFY8C+ZvZyk8TwHNUrlCWc6jPopTU3rcQPYT/T6fqsoqRQkPJumlc4xetz1yur5vfy9hF5/rIqEAuWDpHUrJxET1m9KJluneLNsgidpmywri0418u4LYl/Lgdie9hKlbArraza5O1l+yRL3M9AHj5JUpxzYGXnemycciHVnPWBc730d7obwjO25pYtDplKWW8415fE8queD7C0ZZxKWTOc6y2fFl0BvMVv6QznVMqa5lz/YiL63QK1NAmvz6W9OamU9bRzPen21m6AjeXP08+VJZ5KWf92rm8IeOnZPRFeWoMkPV6WeCplPakQvl8UpuCnW1LwXef6fEn/KUs8ibLMbJ6kR5zmJPkHrY6ad+I7TvNDZlbvYW4IKXMwxjjXdwdWScinVbGb/PkqSR2RlMq61bm+jKTkhT5aEAc51z9WopzJZMoys8nyI8Mjqaj2USsAGCxpT6d5jJm9nYJP6ozca5zr60vaJzGvVsLJ8sfyhlRMUivrKvkhgtPpgdWpaxsPvPDLDCVMcE2qLDN7T9KfneZNFLau9jRcLD8scm7KM7Sq2IJzoaQPnbYzqbhCZjMBHCjfXH9NoXhxMiRXVi3XwdsCs6Kky1LtquhKAKtL+m3klvPNzHtoC6GqzW1nS/Ly23dXud3sXY7a3HudwhFN9TBR/gNbGG0KEcx6KPz010zVEyK3nAUkSdbvIlwiyTsl4hNJw0vMVd64t7fJj/L6xXTz4SpJ9zttS0u6BfDSrlsWwPGSDo/c8pvaXuOi8DLF5rXJz0AqVTWzFsI+VJK3IOwvaQxQOlO1WQBGSjovcstzkspW6PZcVnPaJM1xGkv782rGxmHys3rWkvQABUoQNBOE6tjnSbpA/mdqtqQ9EhgV3ri/3yY/N2DjkkwlSWZ2h6QzIrcMkDSBJpVXbRSEwo9XKz4HL5C0t5m9mIDlJs71V9tUYSJ9J/xSUqyyTD9Jo4FTWqn8ArC1gr/Tc9JK4atxhJmNT8TW25EzKVZIFxLUG+wAocLy6AivDoylwbpHxIsqduDaBugtVXtw8tTJPanx0XD5DozwOTpW2AkS1zAnKOyuHAMwDzgJWC4n3WTKIigqT3XsdoLBkQz4ZVehVsmzL/4TlKRG7iICLQvckGMwIJRjHU7GpgLSKmtYDloLgNgZWIUAXOXwm0/Hgws87Nw0O2ugCgplwNk5BqUDrwI/x6lKTVplnZdBZxawU9oR+X91bq/s373Sp+6msQ6NVRTcQ0lhZpjZTyUNk/Rejr8MkHSapEmAZy2lQixl7CFJW5rZg5F7imIP+Wb7p/oBNo88SXdWIFhn3hsC/8zxZnTgnjo0Ur5ZyxFOauiM+cAJVBjtBu5x5G5nUYML/7TPdvIea1dc0DZCNbBYseAOLOYeI7012KcmzyjgDCDJmjPCb0v840XG1fuDWzqNik75qSPDQOBy4udNTqrzv1VzKMsLinY5iJ9aW/eUn374xyO1A19vovCDgatZvCLoQmCxPESCwfJ6hrJaMiwD7IT/Vr2Gt1uScDSRh8pOpot0ZEBNpscJT59XHyrr8Ju3acH68QQL0Cu6D7F1HKFqtFfgGCo+87EMCIvZeuuU2VRgaqcA8eXLLLIOpCG4WTwspEUdrh0AdiAcqXQpcDTgbRvtUgDfJn4gTfZRGYRX89kMjTftEOaeCMJpeLGT8CaQN0+F+KQH8AIJnbxLEoA1gRcjY7sAaGwTInBOhCDARJp8ZHt3R01REzPG9dgihHsRP1Ic4CW6UVi+K0E48WhqxnjeQdE0PcIi1TvlswNvAEvShrmGAexG9mmtzwL9yzIaQvwIdwjz2zk0rz5StwDBWDub7CN+ZxCquSVhuh3hQOcsTAK8fLolCoTjGSflGLM3gU1TM9+O+DFLnXEbsE1SAboJgK8Q9/V1xvTkiuokyKbAtJyCQDiTeF9yhue7KwjR733wwxz18BQwsGrBBgD3NSAUBAfxVYQcg2oFbBIIYZmDgL8QfI+N4EZgxUZ5FjITCUG4UxRSzIoE5GYqpMBNlTRLISvYSzZtBayokCm7mkKK3iaSimxd+lDSSDO7tIgQpbbeANsqJOkvaZVkiuABSUeZ2WLxuLwolVBpZo8qlDU9Uv4WnyUdr0g6wMyGllGUVPLN6gygr8IpoydI6hHzUklMVziqaZSZzU9BMPkORILlt7+kQyR9TdVt2GtFLFQo3nK1pFtS7ieWKlBWZxBW5fspbDzbUeX3fLUi5iikqI2RdLOZvV4Vo6bt7SWkBGwraQsFi2qQQvHIvgqWVv9mytMAkPSuglLmKnzeJitYs09J+peZfdIMQf4H4/EAPG/MuhgAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/media/ke_buzzer_w.png":
/*!***********************************!*\
  !*** ./src/media/ke_buzzer_w.png ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_buzzer_y.png":
/*!***********************************!*\
  !*** ./src/media/ke_buzzer_y.png ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_dht11.png":
/*!********************************!*\
  !*** ./src/media/ke_dht11.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_dianweiqi.png":
/*!************************************!*\
  !*** ./src/media/ke_dianweiqi.png ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAB6CAYAAAAhzXSHAAAACXBIWXMAACXQAAAl0AHaYF2kAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABLZJREFUeJztnE2IVWUcxp+/XnX6QDDNssmCyoaKNhWl0K6IsShyUS0MF9ImaFU7ddsiMGgVQaui2oQEEkEfuimIICJnUYaOEFoaWU6aMQ3NPC7OvTXeOefe9z33OXNHe34wm3Pe+/zf8zsf773vOWeAIUNyF3XMDnt7lg27A5cbFirGQsVYqJjWsDvQgzMA/uyxfhRL8IBYykL3RMTrVStJngRw/SL2J4klt4cvdSxUjIWKsVAxFirGQsVYqBgLFWOhYixUjIWKsVAxFirGQsVYqBgLFWOhYixUjIWKsVAxFirGQsVYqBgLFWOhYixUjIWKsVAxFirGQsVYqBgLFWOhYixUjIWKsVAxFirGQsVYqBgLFRPKMJIPAXg/82MjAK4oi+vzuaq+n8ms3+G2iPi95mf/Rf0m3QoAa0RZdXd23fqSg8unvBgLFWOhYhbrbeS/AfxVsW6k/adiqs/61QCWC+s1B8nxin+u8uaw+9aB5LcVfVyryPcpL8ZCxVioGAsVY6FiLFSMhYqxUDEtkm8I8zZWLN9K8hNhnUG4pWL5qySnBw0Pkv3mHU0GPuXFWKgYCxVjoWKq5kN/A7CjRt4ogEfqd2eovIdi3jaVtwEsnPKrmBs8oerl5QrJE2XifMqLsVAxFipGdpOO5HIADwN4AMWOOgTgo4jIudB3Z94E4CkAtwI4C+DTiDgg6OsIgPsBXAPgWERMDJo5P3zgQYnkGMmJkpxjJDfX7NdLJKdLMg+SvLZmZpB8keRUV+YEyS2ZWaWD0sBCSa6vCm/zB8mxzM4+1yOPJL9kcUZkQXJvj8xpkg9mZDUm9LU+G0+SH2TkjZA8nZC5PTWznXsfybk+mYeZuKPY4NembQltHiW5KjFvC8q+MC/k8cS8Ds+i/wNhYyiurbVRCN2Q0GYlgNTr3vrEdtcltuuwKbHd7Zm5F6EQeiqhzQyA04l5qZeb44ntOpwVtytFIXR/QpuPIyJ1NvwrpEndl5jX4WBCmxkAn2fmXkzFxTlnUNpA8mSPC/05kndm9mlbnwHkQ5JZD8iyGOx+6D0m8ZWMvGZG+Xb4XSS/K8k5zoyvIl2Zz3DhaD9H8i2SV9XM3ETySMU2v0NyRUZWqdCqe0o/RcSNmZ1tAXgMxS+lFoBvAOyPiKrHGFMyVwMYRzFQTAH4LCIO181rZ14JYCeKaca1AI4CeDcism4itg+60bIVAx+h/0eqjlBPjoixUDEWKsZCxVTNh64j2W/ecQ2AGwDMovjVcl7ZsS6uRvGYTwD4Gf1fTBiEVQBuRvFz+RcAv1a0W1e20I/iiPEpL8ZCxVioGAsV00K9CdWvUbziN58DAJ4fuEcL2Qfg7q5lkwC2NlBrL4AnupbNArgjNaAVEUdyq5KcK1l8vk5WQq2yedSZhmqdK1ueU8unvBgLFWOhYixUjIWKsVAxFirGQsVYqBgLFWOhYixUjIWKsVAxFirGQsVYqBgLFWOhYixUjIWKqSu07K5nU1xSteoKnSxZlvveUCpHF7HWYm7Xf5Dc3vVo+T8k722o1maSs131nm6o1kYWrwHNZ3cTtcqK7yQ5SfJ7kk82XGuc5CGSP5J8oeFa95D8guQpki+3325J5gKg0uqGJZ4EAAAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/media/ke_ds3231.png":
/*!*********************************!*\
  !*** ./src/media/ke_ds3231.png ***!
  \*********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_fire.png":
/*!*******************************!*\
  !*** ./src/media/ke_fire.png ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAACPCAYAAABd9U12AAAACXBIWXMAACXQAAAl0AHaYF2kAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAACTdJREFUeJztnXuMXVUVh791WqUtluJArS0tDBRFamILFA0WsBoRq5YYDab4AB8hoYmh+ETFiJUY0RCLEKyRh7FikKjEEBODNBgfqX8QRbE4VkXaQjW0EKAV6Yv5+ce+d3rn3nPuPY+9z2NmvmSSufuevdY+v7vOaz/WgQYiKZL0qKT3VN2WWiNpgRz7Jb2u6vbUFkkrdISHJL0ktM8otINADHf8vwz4aGiHTRXq5K7P10o6OqTDpgp1Utfn+cCVVTSk1ki6X708LelloXw2NaK6Dz2AIeBjZTektrTuoQ7ERJQkPS7ppSH8NjGiTgCSxFgIrCmxLfVF0nkJ0dTmTyH8NjGi4s5PnSyVtMK30yYKNZxim7W+nTZRqO57qDguljTPp9MmCjXo0AN3sg/+WFNrWt0rafhH1W2tDEnTJB1MKZQkvd6X76YdeguBLF0ql/hy3DSh0pyfOlkjaZoPx00TKs0Vr5NXAit9OG6aUFkjCuAiH46bJtRwjjoX+nA8GYQ6TdIpRR1PBqEALijquDFCSZqO62LJQ+HDrzFCAScC03PWfUNR500SKs8Vr80CSfOLOG+SUCsL1j+zSOUmCbW6YP2zilRuhFCSFgJF5xgsLVK5EULhoskK2sj6+DOOpgj1AQ828t5aAMV/peBIOhX4O8XbOgrMNLODeSo3IaIuxc8PGgELilSuLa2+pA95NPmKvBVrLRSui2TYo73cE87qLtRVnu1NPKEknQGc79ls3mfF+goFfDKAzYkVUZJehccRlA5G81aspVDAFwEvoyddPJW3Yu1uOCUtBv5GgfNJH4bNbEeeinWMqGsJIxLA03kr1iqiJC0D/kCYH3C/mc3MW7luEfVNwrXp30Uq10YoSRcBbw7o4pEilWshVGsm7zcCu2m+UMCngdMC+9hapHLlJ3NJi4ARIOhaFmCZmf05b+U6RNQGwot0GNhWxEClQklaDby3BFcjZra/iIHKhJJ0LLCxJHeFJ+lXGVE3UbDDPwO5z01tKhFK0jvw28U7iFRCSRqStEHSFkkbW1FfDZLmyK2CKpPjU7RroaTtXfU2tb+vIqJuwM3uLYtnzCxN98od9A6Sjo0ulyqUpAsof/Hh9kEbSDqP+MlmYxeB0oSSNAe4lfJvch9LsU3SeuTb2v+UGVEbKTj+n5O+Qsk9Gbw75qttwO/aH0oRStKlhOkDT8PuAd9fSXxH4R1mpvaH4ELJzci9ObSfPjyb9EXrdHB5wtc/7fwQVCi5Cap3AseE9DOA5/p893FgTkz5Y2b2aGdB6IhaD5wT2McgYoeo5HIkrEuo84vugmBCtS65V4eyn4GkfvJ1wNyE77Z0FwQRStIQ8EPCjM1l5bjuArlHk0/1qfNwd4F3oSQZ7i53kW/bOTk9puxLwMsTtj+AG1cMi6R1pTy9pecJSTM72rdK0ot9tn8obr+8DjRKWk74QYKsnAD8XNKtwBLgs/Q/kv4ZV+hNKEmzceelILlRCvKW1l8anowr9HmO+g7wao/2qmJPXKEXoSStBd7vw1YNiH3kKSyUpKW4ofCJgv+Ikru7vRuYUcROzXgmrrBoRN1C+BHesjkcV5hbKEkfwU2Wn2i8GFeYSyhJp1Nt10lIYntgMwslaQZwF+GHwasidr/yRNRNFFz7VnNiU1RmEkrSGpJ7BCcKs+MKUwsltwrz296aU19iM5mlEkpSBPyA5K6JiUTsava0EXU1nrLmNIB8Qkk6C/iy79bUmOG4wr6jtpJm4eZ9vyZAg+rKXuDYzjE9GBxRNzC5RAI3tNZz+CUKJWkVcEXIFtWYnn72WKFah9wt1GDWcEX0pCdJiqjrKJY0pun0ZAfqiRi5JaoPUo8xuap43MxO7CyIi6ivMrlFAlgkadxE3HFCSToHWFVqk+rLuFGb7ohaX2JD6s7bOj+MnaNanXGPMHmvdN08Ccxv33h2RtQVTInUyTw6clZFAK2x+TInyDeFscMv6iiYDF0oWXlr+5+2UO+qqCF15/z2TJhIbj7TOytuUF2ZAawAF1GnktBZNQUA54IT6uyKG1J3loMTqlB+yknAmFCLK25I3ZknaVGE39RoE5UlEVMn8jQsjkgYQp5iHIsjkmf2T3GEUyIS5gNNMY65EfBC1a1oAMdHFMjSNYkYioB/Vd2KBjBrSqh0RKGE+j1wGfDjALarYFoE/MWz0UPAxWa2yczeB3zes/0qOBwBv8XvLcIDZrar/cHMrqcjf0BD2RuZ2XPAHz0avT+m7Cpgp0cfZbOv3RV8n0ejv+kuMLPngRs9+iib3QYgaQkFswq2OAwcY2Y9N7Gt9Xw7gepSDeXnrgjAzP6Kh2RUuHwBsXf6ZrYP+JYHH1Wwo3MA9HoPBgdlT72RPpktaszImFBm9iPgnoIGY5eZdvh4FjfdsWls7Z6ksZYCOb9Jl1h9A/BEAR9l81+6hTKz3bhEWIqtMpiBcxfM7H/ANTntV8Gvzexgz0QyM7sXN38zDz1ZKxK4EzctuwlshuQ5nJ8h31UwVbpIMxvFHeZN6DRMFqqVBfUS4PmMRk+WdFSaDc3sQcpLWJqXETPbCn3mmZvZCNlfYDODbG9GvAbYNXCr6vhe+5++KxfM7DbcKvQsvCnthma2l+QcTlVzCLeiLB2SZkvaliFpTGwSmAE+NmWwXxbZezwknS3pQAYnr81of456s6pWyX5J4xYkpFqv1zrxfi7Dvmc6t7W6ei6jwJuAPPMVM0uTv7MXSSbp3pS/yMHuXySlj6+HCpEM3Ce34jU/ko6TtDOlw9tz2J8u6VeBBEjDdklpb5oH7sy5kg6lcHpI7mVdWe3PlbQjoBhJ7JNb7eoPSV9I6fz7Oe0vl/RCMEl6OSjp7V5Fau1IJOmXKRqwTy7zRh4fHwypTAejkj7sWaJxOzJP0n9SNCT1DWiMj68FlcjxCZ+6JO3ISkmHBzQk91s65K603w0k0Kgk3+8Y7bsz1w1o0BsL2p8m6SeeRTogqdwlLXLnq7sTGjQiKfd7Nzt8HCVpsyeR9kjy/RLW1DsyXdJ6SXs7GvSwJG+pAOSeObcUFGmzpNxvv/aGpKMlnSnpJLmlI77tz5J0Tw6BnpK0VkXvuJuE3An+ckm7Uwi0R+7KOVTUb2MXMsplbFwDrAbO4Mjs5l24aUcPAD8r+s6qNv8H8TaXr+vuOaIAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/media/ke_fs.png":
/*!*****************************!*\
  !*** ./src/media/ke_fs.png ***!
  \*****************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_gas.png":
/*!******************************!*\
  !*** ./src/media/ke_gas.png ***!
  \******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_ghg.png":
/*!******************************!*\
  !*** ./src/media/ke_ghg.png ***!
  \******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_guangmin.png":
/*!***********************************!*\
  !*** ./src/media/ke_guangmin.png ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_hall.png":
/*!*******************************!*\
  !*** ./src/media/ke_hall.png ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_hddwq.png":
/*!********************************!*\
  !*** ./src/media/ke_hddwq.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_hongwaibz.png":
/*!************************************!*\
  !*** ./src/media/ke_hongwaibz.png ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_irr.png":
/*!******************************!*\
  !*** ./src/media/ke_irr.png ***!
  \******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAABwCAYAAAA0cGOrAAAACXBIWXMAACXQAAAl0AHaYF2kAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAEC5JREFUeJztnXm0XtMZxp99k8iAmKNmKmoeqqbSIVRrCaWmBjG3KGKsGloUYXW1tbpoqooaQkkoRQ1VU00xV1XN8zyFEEkkErm//rHPrTS59+7n3HuG70vu84+15L3Pec8577fP3u8o9UBAf+A04FngE+BF4Cxgmbp160HNAMbSPiYC369bvx7UBKAv8GkHxtGG4+rWswc1AOgDfJYwDoDj69a1BzUAuM8wjlZgeN269qBiAHsbxgEwDdiwbn17UCGAFnP1AHgVWKxuncsEsDSwZahbkUYBsK6kRyT1NsTHhBB2L1mlUgEsKmmEpE0k9ZM0UFIfSctLWrhG1YoHsBCwP3A68D1gwS5wHGWuHgDblXEfVYB4Qns+dYN161kIgFWB12e7twnAEUCfnFx/NI3jLWCRsu6pTABbOzdYt56FAPh7J/d4P/CFHFwDgGdMA7mozPsqC8Ah84RxAIG0E+s1YM0cnBsBM0wDGVLi7ZUC4GjnxlrqVrQA9JKU2lgvJ+kW4IsOYQjhIUm/MK9/JtDLlG0U9HWEmt44QgifSfq3Ibq0ooEsaVKPlPSoIbeupH1NzkaBtQ9reuPI8AdTbmVJY5xfeghhhqSDJbUavKcBA00dmgZzi3FcLOk+U3ZzSSc7giGEByWNNkSXlHSsef0edBXAlsCuefdDwGBgkrmJnOluJIElgY8Mzsk5Plm1AjjZeUh16/l/ALYDpma6/RP4Ws6/35EYIGOW/3aE54D+Ju8RzsMEzuzanVeLpjMOYD/mDJ23AmcD8+XgOcV8kQCnm5x9iMaUwlRgua4/hWpAMxkH0W3d2S/9HmIswOFqoXOn2KyYDqxh8u5mcjb86kGzGAfxm+7gXqCfybkE8IbJe73JGYB/GXxTgMW791TKBaZx1H5aCSG8K+k/huhmks43OcdLGi5pZva/OvsVbAt8w+BE0onG5QcoHoF7UAQwff0ZhuXgPdHkfACw0heAcQbfe4DlhawDNMtnRZKA+YhlAQ4+AJY2eXsDD5q825qc25h8u3TvqZQHmsk4JAnYkJiG58DaJ2S8q/P58bjTTa/JF4DHDB1v6PrTKBc0m3FIEjFZx8VeOXjd463lVwH2MrhmAEt1/WmUB+owDmB+YAXASbXriMNNtpmAWZFGrGh72eB0Ty59iGkAKfykq8+hTFClcQBrAncQ3dIQ/QfjgGHkDGcD/YBHHeWBW/A3kjsZfK3AaibfSIPvyTz3XhWoyjiARYB3O7nGOGDlnJyrEEsRHexhcgaiSz6F35p8q5n6rZPn3qsAFRrH9sZ1JgKb5+QdZj781/FjJNuaulrJycAjBt9pee67ClChE2yyITNQ0k2Yx0VJCiFcIekKQ3RZSUeanDconcAzUJK72b3MkNnV5Jr7QNwjvO9YIrG9wVdzcC8OjDd4P8ZMIgb2NfiewtjLAIPwck2/7N5zFaCqlSOEME1+vmV/SX/FjFyGEN6XdIwhuqCkE0wdLpf0XkJmdcVin04RQnhP0h3GNXc0ZOZOAL2IkVMX92PWkxA3kncYnFOBJUzOXxl8VuohXp3tww5XVaBqPwewEv4JA+CkHNzrk07eAXACYwLWM7g+wtjoEqPKKd1mAoPc+y0b1OQEG4rX6wKiq9zyKWTcVxic7+KH9Z1YjhUfwQvl7+bea9kgz56DGPjaHbgEuBI4BxgODMhz0RDCTfL2CFKsnTgP04kl6TR1HnqXpEGS3IDXlYbMTibXLYbMd0yuxgGx/K+j9gPjgRE5XmAb57mOZWbYLwfv3wy+202u9Q2uDzH2RsSk6BSece+zbOB+VoATDLmbyRFEIm5Qr3MUIH4KFjJ5v23wfYaxMSWmEzrH5KTzjnicn5rgaQUaorUBOT4rjudyK0mPA1s5Fw8hzJS0h6THDfFBkn7q8Eq6TdJLCZleknZIEYUQWiXdbVxzG4NrmqSnU2KSmqorUIu8ZiWStLik64G9HeEQwiRJu0maZogfDixrcCLpEoNvZ0NGku40ZNzyiKcMmaYzDjtxRrHG8iLMUHQI4Sl5zqm+ko4wdbhE6Y3pELzN9D8MmfXwUv5SK4ckrWrIlIrsXrzyCeL+4DbnGzQb9szB/4LB9zFmMxS86Oo3DZ4WvCq5pMsf2MHgude5vzIALA/8nphmaaEl2x9sIy+INCvOAxwX80xJvzH4FlTMGHdwrSGzaUog23c4+6KvGDLPGTKDDZlCQXRTjJT0jKSDJFn1P7OTBODneJ7INryI4XQiZmK9U9QvC1jH4HKzukYZXGcZPAsbPAALOHoVAWJg8G5TrznQHuGuxOipC6uzL97xqRUjKEc05NTy+I6p136GXlayMLGgKYVKVg9gMfyM/nYxR1Q2hDBW0hClI5dtOB5vr+DkZgQZR+vs1PJQQmxJPP/JY4aM+0Idgyy9Go5YW3yNpC91h6fdkH3W9mhzeQayoKRkoVEI4WlJTk7l1w0ZSXrQkHHSE18wZJLH7AxvGzJVlEoeJf85dogO8zmyY+gOkj41eCzfh6SrDJmNTC6nJVPylxNC+FjSBwmx+fFSEd8yZEo1DuJn2c1t6RSdJvuEEO6TdIrBszFey2encGgwXizH+cW7ic2vGDLOS3VWDitU0A0cJGn+IoicTLAzJL2YkAnyfvGPKu3AGqDY3C2Fl5Tu12Ul/0h62ZBxjN9ZOaxk6K6AWC+0T1F8SePIGqc56fpJ4wghfCjvRSSDfFk8I/VLdRvYv2HIOEdQZ+Ww8k26iPVlPDsXbg7pGKV/8SuZXE7o2nXUpPYKrnF8ZMg4MShnA1/ayiEj7zUPLOPI+l2kAktW5bukCYaM21N8YuLfXSNL8Uhe7873DZkyjWPtIsnyZJ+nAktuf3HnV+o2s0+9VNcbWZRxjDdkyux2XOhJKI9xpH4V7osoagmX0htSt9Hcx4ZMUStHmcZRaDJRHuOYmvh3t5ONc8xyH2DKiNwVyMm0TnKFEKYo/ZzKNI7UtXMhj3GkGrC6xuHsJ9yVI/XCXONwXpirU+rTUmYfNmc/ZyOPoqksps9MHsc43F9Xist9oc5zcBKN+yt9QirTOJ4tksxSFNhY0ioJMed7K8UZYkUhdab/xORxnoOzfxmsgryTXYQTb7LhWvFBhkwyh5KY+7GWwZU8PWQR5VQV2STjWpLn0nZc+g7PFEOmqxhXJH/SOID1FBOFU3DiJmvL2wd8aMisaHC5q5lTqui0mnB8GO5qlhvZhviaovg6NQ5iMupopZfUVknXGddzPXjPGzLOWK5UTKgNTgym4Y0jw7lFEXVoHFkQZ7Qkp23RrSGE1ww5p2RgmtK1KZL3eSrSOBxHmbPfcHi6jBDCvZJuLIKrXePIVoyxMpJ4FH0EpyaFYmNZpwbkoSwpOYXNDJknDBlJcma/OcbveCidIF93cYwK8HnMYRzEIXl3yy8ivjLL+0hht/au1w7uTAlkm1HHONy+GKl6kunyXqozjOd1Q6ZbyBK1Di+UFNiTWD/iYjKwosHbB68PKEAy9E8c7ZmCkxogYCmDy/IfABcYXJXNYwHOMvTpEG0tGHoD5ypWk+UZ871/COEVQ25vxdNFCi/L+7U7o8LvMmQkb2PrJCFLUqrfyHR5OR+FIIRwuPyWXHOCWPV1dRcMK1nLkfH3Jta3OEjuXTLOJwyu3U0up8vA0SbXhASPM+K0cBBbbM4+zj0JAYfm/SPgWvyeXgeanDMwiqmBTQwuu80ScJPBN8TgWc7gudzRqQwQmwmfCrxp6AlE43jJFc4wFt8wFgDeNnnHmJyjDS53AkIL6V/7VLzeYLsbermtJkoDcSU/39DVckHPirMlDc/ySh2cKC8JqFWxrVOnIBZPOb6SPxsyUsx7TQXvxoUQnGOhUyfiTKQqFdkE7zcd2RZJVxtyH0naOYQwwvRBiDgay/pWS7oihOAUPO2nmJ3eGVol/cW87lBDxmojJSk1CgxJD5hcjQFgIB13w5sJXAaskJNzKfwN0ESMyUvE47DzCbw1h55OK4fk9EhgUT6fGNERnCr8SkCeVpPEvcGss8smAWOA3AmrxJkrDzsXzzDC5D3Y5LNaOhInWKc6ClinC7zhAE5HokqAaRy9JSmEMBnYR9IIxbaJt2d1IXkv2iLpUkkbmH/yiKRzDN4B8kr8JsiPSu6ldBjeaUcpeW0kx5lccyfwBtS0YSoxHcDhPc7kHGnyteB5bJPV9cR2EM4n1InfVAJqaG+9OX73YoAfmLxLkD5uQuwp4vo2hhp8VlwGz5XvpCBUBqocOpy9lDHycz/PCiFcYMqeIS/v9IJsioGDwwwZ95OyvSHjdDieOwGc4VhihtswBwQCW+C1oZoBWOWYwBoG53T82bVPGvp91+GqClQ8ANAZZwVxNIY7Iqsv8LTJ+6ccul5l8FlONOLM2hQmYY4ZqwpUPMve8SDeIGlo1rzWwalKRzmlWBJhRR6BDeQNxnFT7Zx2mzebHta5E8CZCSO8EDMek/Ftir+5taY5Zry3Gnwv4I3wasGbLdswozTaQMWflcG030nvTSDXADyiE+05R3liR0GrzQLwLZPzxybfFgbXZMzPaJWghqPsRsANxF/ebcAhQO4CH2KXXRcHmJwtwEMG3xR8Y7vM4Lsw7/1XAZp0lr17OoE4tdo6OhMN1cGvTb6lgE8NPrepfqWg2YyDGN952XyJMzByTTPepYlDdVKYjO9EO8Xge5acQ4yqAhWfVorAsfLyTCVpZNYr1cE58vpWjHKcaMRj6YEG34VZM90edAfEFDu3pfZd+E60XUzO9/CnRR1m8M0gx2SrqkGTrRw/lFdK+JqkXbJspk5B/ESMMq9/cgjBKd7uJ2/A4Y0hhMqyzMtCoxiHE+KfIGk7c+kPki6SV2T0lKTzDDkpfk6WMeSsjW2jo1GMI5XTOEHSViEEN7X/IHkpgEg6xFyJFpP0c4Pz7hDCvJ27USSA1eh4RMbjgNumuo3LGW0BcGkOXtf/snXXnkJ1oAmPsoOAk4BbgMey//6IfG73+fDyQiEeb632mMDaeO78h2nQ4+usaDrjKALAL03DAHNGXcZ7u8lpjVatG/OccRAz0VIZ4G1wSxcE7GhyurW5tWOeMg5isO5V8yW+izGxOuNdBL98sNvDb6qCaxyNclrpLo6X16VwpqQ9sl7uDn4nr6f7NSEEqwSzBxUCGIAXOwFwBxsL2Nvk/JSKhvoVBXflqFvPbgMYZr7Ei3NwroTfxOaMEm+vFAA/m1eMYz3gnsR9XkOcmOjw9TL42jAeKLQZfRUAjpwnjEP6X2HRMbSfYzGKfL6SY03DAHAHHzYUgAPmGeNoA7HsYBQxcjsWo+nKbH+/VgcG1h5upQkcXu0BM2Wybj0bBsTV5y7TMKbQQOWNeUH0JCfrberWs2EADDcNA8weYY0MYBngEqLfp1005bJYNIjZXS/Km6x4u2KE2Gpi0ywgNiZONcaZ9wDsb64Yb2DmmfZgLgFws2EY0wGna3IP5iYArxjGcWjdevagBpBuU3VS3Tr2oCYAu3ZgFDOAg+vWrwc1A9gZuJfY3XAisUvzunXrVSf+C0FyAiv4DrNGAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/media/ke_irs.png":
/*!******************************!*\
  !*** ./src/media/ke_irs.png ***!
  \******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAA0CAYAAABRsnBcAAAACXBIWXMAACXQAAAl0AHaYF2kAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAACyBJREFUeJztnXusXUUVxr+5fUBpS1seUgqUI0XKUypYBCQIGmgBgwiIEhBUoigqooKCIRrwgYloAAGxIKGFiAhimghUAZVnIZDSIo9KtRQKCgVqSx+0vff25x+zT9h3371n1uyzLwRyv+Qk954988135qw9e2bNWnOcMgAjJE2VNEXSKEmbqy9WSELVWC2pO3BdkjZKWhkpI0lvSFpnKBfTVMQoScMSyku+H4Zkf4+UNDz7e3TGNzp7jc393X6Ny+r3SFol6XVJr0iaL+kW59xdiVpqAzhc0kflv6PZzrlHLfVcVvl4STPkP9Ag3jrcKukzzrnYjVUbwCaSZkk6oXDpBklfcc6tDtV3wA6SnpG06cBIHEQEP3DOXThQ5MAMSV+suHyvpOnOuTeq6ndJOlaDxvF24rSBIs5Gj88Hihws6fdA5WO3S9I+TQsbRBImAmMHiHu4pKGRMh+XdH7VxS5JOzWpaBC18J6BIHXOrZL0pKHoeUDpQNElabNGVQ2iDrYYQO6rDWWGSboWGFK8MGgg737MkPSsodzekk4qvumARZJ2TmwU+aFrobyR7SFpciJHHq9LelrSWkk71NDTFNZJmie/qns5e2+kpF3kP99EZa6BhjE15JcANpP0Q0nT5ftotqTLnXMrLOTANElzDEWXSJrsnNuQr7yINNwB7FUiYndgFrAxgesp4BhgaIFrEnAusDxRWx30ADcDR+Nn/aGO3g44HZgD9DaoYUqgzSHA/SV1XgAOMnzpbZ6bjFpOK1ZMMZCLga6IkCOAlQauP+HvjBDXeODWBH0p2AhcD9SapAO7AdcC3Q1o2TPQzlGBemuBQ4x6twJeNmh5rFjRaiDXJnTeVGBNgOtRIsaR4+rCf5FNYglwsPXzRPTtC8zvUM+uAf4zInVfASYYtZ5g1HNAvpLFQBYQcKZUiDm1gmsNMDGRa4RRpwW307DfARgGXNGBpvcFuPc11L8hQetsA99V+QqWjv9IjU5zwAMlXBekcmV8nzPojOE6CvOdJgF8k7Q5WBvvDXA64JFI/V5gF6PGicDqCN9LtKcSxA1kfgcddmLJB9m2JtcY6nV+G7+lZJ3fNIDv1dDWinAeQHyuMyNB4/kGTR9qF44ZSO2NJGBL+n6pj9TlyvheNHywMjwEDI+30AyA3yTqaxk4z4pwvA6Y9tSATYH/RvjOkrwPI4bFlkbL4Jx7TX3jP5bU5crQU6POSkmf6rO2rwAwCvg6cFvWgcvxk8CHgUvxd7LFD3KmOui3MjjnLpF0XaDIaEmHGbnWSbosUmyqJNMIEtoNDAL//FyV47qlQ651Ea1l+LKR/5PAawa+ucD+Br6PJWhsGTWOIDwfucLCk3FtDqwIcC1qF4wZyI+tjZaI2LnA9Vi8ViXXfhGdZXiKiN8m4z6PtPlND/BtA+/fjHythH7YnmoHoilKLMd1eUDTRmALi4FYdgOrBPyopNEda3LNiPdzP5xs4D2vBm8b349wH2bkaSX2RZXmDUS8wQWeQyK6plmXucVwNUvju1DuUb0qXrsf11T8XZuC5UQmbcDJiZxF9AJHBvi7sE2sW4n9sVOAq9LpVsIzlPCS91yrgSwDzBtowATgyQquHgKdWsK1PbDUoLGI4DY3MI7wM9iKhQSWz4SH8TZa1v7I8T5fwTU9kefegK6rLasYSdpa0l9pr43DDe4v6WFJu1cUGSLpJuATBq4pkuZK2t6oM4+7I9dPkjSmBm8RkyUdFbh+bwNtlGFexfupffVE4Nokq4FIfhv+fuAaYB9yyz38UHoQ3uX7oEHkKEl/BG4A+hkSftS4WN7Q6hiHJD0UuX5ETd4yhJaX/2iwnTyer3h/dCLPksC1Calu56HyQbanSXoVeFHelzJR6Xejk7+LTwIWy8eW9EpqSdpTncVdbJC0NFJm7w74U7gWNdhOHssq3k81kFA/je1kX2Kr7NUEdlKzsbGvOud6I2WKiWGdYFTVBedcD9Ct9IStGKqchilPBcknn1VhTCrZOwUx45DSMvJiCCYfyY9oTaNqhE1NwlobutipgfxH3qVsSaeMYUXGtbwBLsuehCVO04rKxwg+7mVkg221URXovD6RJzSy9dQxkGcknS5pC+fcds65SZK2lLSfpJlK2y9ZK+nnkvZwzo1zzk1yzm0paVdJP1XEugPYirjDaEFN7jKEVkw7NNhOHlWT91cTeSofj5LWpIYc/izW8dkK51kD1xwCcRAZVwt4LEFfHsGEMHwMahNYDVRO0IHjDRytkNYK3scruKYl8oQi1hakjCDfcc6d45wLDmHOuXmSPqjw7H2WpKOcc8Fh3jm3RD49sM4ezocj1/8s6bkavEVc7pwLPWIPb6CNPgBGqdrP9GIiXehGetk6gsxKbFTAXsD6Eq65JAbuADsSj4IqIuYoS4nRrMJSoPJEBHxEepXHM49WYn8cV8HTTcJeTMb1z4CuKy0GshKolRqId6oVEfXGVnBdENFZRA+RjUF8CMHVibxtrCcSiolP6bCgldgXt1TwLEzkGU94F/trFgP5dUqjBQEHFrhqrxzwOSmpIYeXGHiHAjcm8q4HjjZw32PkayX0w2Sqww+vs/JkXN+N6DrUYiDHpDRaELAJfXdh/1CXK+N72tDZebyBMe8FOIW+wU1VWAwcaOA7NkFny6hxGPCXAM8XLDwZV1f2WarQC4yxGMge1kYrhOTzY67vkGtOvK/74XZsYYICtsE/yorzhl5gHvAlDM94fIB1Svxsy6hvZoBjI/4wIBPwN0QIC9oFYwZSmfVlEDGKvimKHe1sAndHtFbhGzXaGo/PSdmXwES0pF4XPpUzBS0D77ciHA8kaBxN3ICvbBeOGchx1oZLhBTjMlcBtbyK+All3aj2bqDJ3duQzotq6GtFOHenfEWYhyn2NuO70qDp+HbhmIHM7KCzZpXw1QqCpl5Mah5r8Cf9DRiAs2tqizkMY4/WZdhTWacTn+xvoO38w+ephtCNMWurIGQK5bPt56gxiuBTETrFOuBMjHOSBG3Dgcs60FUZrYdftcS+0LONOrfFlsB9V75SLIEGfG5uyGdfFDIGeCLAN5OELwn4qkFjCmYDjZzqg3cIPtqhnsqzVfDHTYQwH0M6KX5udKdRz1n5itYzOO4DtjYI2QZ40MB3qfGDnUEzRywUsQwfHV4rLgR/hskM0oOpy1DlNg95TcHn0FYmfhd4rDfZemCbfEXL2r+NZ/GbT/3ufrxb+bOkTSTvoWJTDe9eL5vDNI3l+InlB4iMaviVzan4s02aPECm34E8uTaHUn5GynwChlXgmIDtzBaA3+XrOmCtpBGWhnL4l6Q75MPVeiXtJh+4WycxG/n40bvlY0FGyocOTNObx16/VVguHwz8gvwRVJtKGi9pO/nt9dYAtTvFORcMP8Cf2XGQfCTcXEl3Wk9oBn4lybrKOdQ59/f2Pw7YoObD4QaRhj2dc7UT1ELAn6awWLYgqnucc4fk33i3hhy+01AnKd2Kc2Qzjm5J/RyKXfK/QjCItxcDYiDEj+LO48Kyx1yXpJcaVTWIOmgiDrcM75f/mZIYbpb0k7ILXZKealLRIJLxnHPufwPEbQlgvl/SKc65jWUXuyTd1qikQaTimoEids49Lin0o0ULJR2THShTii5JN8p24PsgmkW3pF/KR+8PJD6t/vHBayT9QtJ+2SlQlWj/4tTmko6UD4Rtyfszxsgb0Nis3Ljs/3YENyrPymr/nNhK+YSht2ISvFblw2lT7+cxVOXpjfmfLmtjuN5Mmmo/RpZJ+rek+5xzAzX36AN8uMKJmZ6lkuY459ZY6v4f/0CWHt6m7j4AAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/media/ke_jg.png":
/*!*****************************!*\
  !*** ./src/media/ke_jg.png ***!
  \*****************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_joys.png":
/*!*******************************!*\
  !*** ./src/media/ke_joys.png ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_lcd1602.png":
/*!**********************************!*\
  !*** ./src/media/ke_lcd1602.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_led_b.png":
/*!********************************!*\
  !*** ./src/media/ke_led_b.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB9CAYAAACGa8xfAAAACXBIWXMAACXQAAAl0AHaYF2kAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAACLpJREFUeJztnW2MVUcdxn8Htha7bKE0ltIXoUhbtdCq+BZMi02A+lYVX1JTialJtVprG/3QSkx9TYvGxFhtUz9ZLd2UoKU1uhqLtggoMYFogAqlLdhdUoGAjQiVAruPH85dXc7O3Hv27syZe5z5JROy554z/2fmYc6Ze+blQjRoMmg16DBoA2h2aEUJ5+irII1IfaEVVcWE0AIq5IrC328MoiIAMZlcLGs0ZY+moDGTTI6AZHIEJJMjIJkcAcnkCEgmR0AyOQKSyRGQTI6AZHIEJJMjIJkcAcnkCEgmR0AyOQKSyRGQTI6AZHIEJJNrg64ErQLdB5rmI8DU+s9T1mOFKbn7Qisqjz4OOjlC+wZQ5jLAbaDjjcx7Qac5zLxC9LOCyQOhFZVjlMHD6RJXAeaBhgqZP1JPo3VboRy9oRW1xmrwkfzu6ibIQkOAmhqtLtBdoD+DHgCdHVpRc6wGnwB90GWg00BbLEavqZ/RdUHXNcws1vlJ0PU+Ak4HPWUx+peg0z0EjZimBi9rJ8eSPTRNB54AXm/4sA/4MGQvtyPAH5oAzAQuAS4GJgNTgW7gKHCk8e8eYCewG7LjYbQOo+uAh4CuwgdDwA2QrfQtoAYtWm8GLQf9ptE5MWm1pROgTaC7QYvyZ3il2m0teAj06SqFdKDRuhB0J+jpMZraKu0DfQ9UXA3powzNDP6M//ijBXWI0ZoNugd0zLG5prQxb91eytHM4Jv9xCwnLKDRmga6HzRYgbnF1Ad6jcOyNDP4FldRxvFqLERnTMuA7wKvKnHyUWAz8HQjHeR/Ha4zG2kG8DryMlxOuXf5x4AVwN2QnRxjAUZg7WQB3A7Zd9rP2ylVtWh1g35coqX1g1aQv8x/xRhjTAMtBa0EHS0Raz3o/DbLY2vBAt3RXp5e8W20ZoK2t6jwtaDF5F+bXJSpB3QT6LkWcQ+A3jHGvJsZvNyNfi80NbqvfaN1GWhvk0r+I+htbstySvwu0CfJe9o2DS+Bri2ZXzODv+yvHM5wbbSuAP3Dkt8/QTe6a7kttUwl7+wVB2uG0wnQR1vk0czgO6sphxNcGa3ZoBcs+WwBzfFbDquu94MOWXQdB11jue4jmAcbBPp6tWVwgmaAdlgK9CgtBzV0FugZy/Wr27/1u0JzQM9a9B0GzTNc83fL+XdVr98ZTY3+RpPrssZ/BNN1P6zu9twKnQv6i0XnDtDkwvn9hvO+HUa7U6xGP9XkmuLA/nD6CW6nuzhA54B2WfQ+WDh3Gac+j78VRrMXjEZbZmRoFubvp7+i8sGCsugi0H6L0e8qnDsX9HnQlWG0ekXTQT8lHxX6Xf7MNZ73c0NF9dP5MziuxtypehY0KbS6DkKLDJU0CFoQWlk5tMLSmm8PrayD0DpDBd0XWlV5dDrmoc79oDNCq+sAtMBQOQfst/VORe+xtOZbQyvrANRrqJgvhVbVHtpoKMuuzvtmUCnqMfSoXwRNCa2sPfQ+S2v2+H6949EnDBVyb2hV7aMMtMdQpu+HVhYQrTJUyFtCqxof+qahTM+EVhUIZYx+p7s7tKrxo3mWW/arQykK+S74tcC5hWNPhBDimO3AfsPxhVULGSakyXMNx56sXIVzMgHrDB8YRqeqIXRLLrK1chV+2GY4dmnlKhqENPniwt9DwP9LB2WH4Zir9cRjJqTJxYGHfZAdC6LEPc8bjgUbaAlpck/h738FUeGHw4ZjxfJWRkiTC7MnOBJEhR9M/2EnEWg9d0iTixMBTgRR4QdbWaIzOVERyeQISCZHQDI5ApLJEZBMjoBkcgR06KT1GNBVwFuBiZ4CDAJbIHuyYbKuBt6EP9OPA+sh2+Ip/xZoIrAIWAKc39CzA3gEsl0B9NwK3FNRrOWAvmaZyeA6DYFuGBF8a+HzTZ4KuQD7TgWD5PtsOn6vrLMt8RpzsK2LAX2kAUAHKwy4eURFVGCyrqXcFlDbcLocp6XJGyqs8/4JwIvuCteSQ9WF0mygFyiznnku8LBfPafwBWBvBXEOAZ/tAj4HrAJ8r1gYACpaG6RzgHsZ2/DeYtCHIFvjSdQIss2gmcAF+OsHDQIDkA11QfY4+Z5cFzCufb1aBtwL2aCn/Gncbm8ClgLzaa8sD5Mvrf0RZBtdqhtNNgT0+40RHFfPZHWB7iBfeeHyWfYLUHGKUllNLZ7J0eDCZPWQ7xXmq9NyGPSBNnR1lMk1fuOlKcAm4L0eg/QAa8i3SKwtNTVZE8l7w5dZTngecLWv5wTgAWq8fKemJnMz8G7D8W3ANZDNAn7QRr5fwTwt+JXAStJvboyVdp/J6sG8Gcujpz7zdBbob2N4/q5qXDcF9FvLOSX3n+6sZ3JA2jb5FkPl/QnjJiyah32jtJHp96DuEdedCfqr4bznSmpMJue0bXKxlQ2B5jc5/0LsG8D9m/y3ogzbJuudlmsuL6Gxo0yu2VCjJgFXFQ7+ofnoVjYALAVdSv4cv4h8FGo70AfZQct168g3lit27pZQszVbNTOZ8xg9d/nxcpdmwzvYj4W1jDY52Drjdqlb77q4nhn8vho0rWk6z2M8L9TN5G7DsZc8xjtaUkNHUzeTE22QTI6AZHIEJJMjIJkcAcnkCEgmR0AyOQI66bXmJPJptM2YYTg2vcR17WL64c8zSsSb6kNMuwTch1lbCbhLXSC6IfP5hs6Ix5ashTT/Cdya7mk9LpaCykxLWg/ZAVdBPbZkrSPgpqE1Zwlka11lljpeEZBMjoBkcgT4/ArVSz753SWzgI8Vjj0G7HQcZ5g3AIWf42M3sNpTvGH2eM6/k9Fiw+S4Fj9OPa54nzLE+7W/eH5It+sISCZHQDI5ApLJEZBMjoBkcgQkkyMgmRwByeQISCZHQDI5ApLJEZBMjoBkcgQkkyMgmRwByeQIqJvJpq2UPW6vbMzb1XaOCTOakU9O/+9UnJOgOR7jzW/sEzYc72XQ2/3FSzTQ9aAB0AugGyuI90XQAdBOkGk/z47nP2LKgw6p2+4jAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/media/ke_led_double.png":
/*!*************************************!*\
  !*** ./src/media/ke_led_double.png ***!
  \*************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_led_g.png":
/*!********************************!*\
  !*** ./src/media/ke_led_g.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_led_red.png":
/*!**********************************!*\
  !*** ./src/media/ke_led_red.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_led_white.png":
/*!************************************!*\
  !*** ./src/media/ke_led_white.png ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB9CAYAAACGa8xfAAAACXBIWXMAACXQAAAl0AHaYF2kAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAACP1JREFUeJztnWusXUUZht85HKT2AqVESrnYggVUCqj1lhqoJKUg4qVegkFiaoKiiBj9ATYGbwkXY2JEIfpLxNq0qVJqtBqpllqQxoRGU4otBVrpabBtqMTaYm/nPP6YffB0ddba6+wzs2bvzDxJ0+y115rvnfXu2WfWXL4tJQIwEVgO7AMeA86LrSnjGeAbHMuq2Jqaoi+2gAa5tPD6rVFURCAlk4t1TabuyVQ0ZbLJCZBNToBscgJkkxMgm5wA2eQEyCYnQDY5AbLJCZBNToBscgJkkxMgm5wA2eQEyCYnQDY5AbLJCZBNToBsco8AXAYsA+4HpoQIMLnX1ykDKwtLcnfF1lQX4JPA0RHaHwOMzwBfAg63Cl8CnOit8AYBflkweSC2pjo4DB7mAl8BLgaGCoU/1ItGtz6sI1kSW1M7KgzeD0z2FWSuI0BPGg30A3cCfwUeAE6LramKCoOPAB/2GehEYEOJ0St6zeheAbiuZWaRo8D1IQJOBZ4uMfo3wEnegyZMG4Nv6KTMWj00YKqkNZLe7Hh7laSPGmMOdSIgFECfpOmSLpB0vqSJkiZLmiDpgKT9rf+3S9oiaZsx5nActRbgOkk/l9RfeGtI0kJjzOLQArq+RQNvBxYBv8d2TkbDEWA9cBcwDyje6NDay1rwEPDZJoV0ndHAOcAdwDOjNLUdu4DvA8XdkCHqUGXw50LHdwnqCqOB84B7gYOezXXxODAvUD2qDL45RMy6wqIZDUwBfgQM+veyLauAN3isS5XBt/iK0/HQGBE6Y9je5fckva7G6QckPSnpmda/l/T/DtfJrX/TJL1Jtg6XqN5Y/kFJd0u6yxhzdJRVeBXKO1mSdJsx5rudlu0VGmrRwATgpzVa2g7gbuxg/mtGGWMKsABYDByoEWsdcFaH9SlrwQC3d1JmUEIbDUwHNrW54auBK7GPTT7qNAm4CXi+Tdw9wHtGWXaVwYt86A9CG6NXdWo0cBGws+ImPwG8y3d9RsTvBz6N7WmX8QrwgZrlVRn8tVD18IZvo4FLgX+VlPdv4EY8tdwaWiZjO3vFyZphjgAfb1NGlcF3NFEPL/gyGvt49GJJORuAmaHrUqLrg8DeEl2HgatKrvsY7skGgG81XY8xA0wDNpdU6GHaTGoApwLPlly/vO4HJRTATOC5En37gIsd1/yz5Pw7Y9TBC22M/nbFdab1QXDxYxr6em4HcAbwtxKdm4GJhfN3OM77Tiz93qgw+umKa4oT+8M8iM/lLh4ATge2luj9WeHcGzj27/E9sXR7p8Ro54oMYAbu59Pf0vBkQV2Ac4HdJUZfXTh3FvBF4LJYeoOB7Yz9Ajsr9Efg1JLzfuW4UTvo/hUcV+DuVD0HjIutr2vATu0VGQTmxNZWB+wom4vbYmvrGoC1jht0f2xddQFOwj3VuRsYH1tfdIA5jpuzh5Kv9W4FuKakNd8aW1t0sGu5i3w1tq5OwM47F9lKlz0ZNAp2IqDYo34ZOCW2tk4Ari1pzcHG17se4FOOG3JfbF2dgh3M2e6o0w9i6oo9gnSN49iDjavwhDEG2YUARd7XtJauoPWpL47pbouta6xgtxa5eH0sTTFb8hslnVE4tiaGEM9skrTbcXxu00KGiWnyLMexRxtX4ZnWV/Zax1vHzU41ReyWXGRj4yrC8JTj2IWNq2gR0+TzC6+HJD0bQ0gANjuO+dlP3AExTS5OPOwyxhyMosQ/LziORZtoiWnypMLr/0RREYZ9jmPF+jZGTJMnFl7vj6IiDK4P7Dgi7eeOaXJxIcCRKCrCUFaX5EzONEQ2OQGyyQmQTU6AbHICZJMTIJucAF25aD0FgMslvVPSCYFCDEraYIx5tL8V8ApJb1M40w9LWmeM2RCo/EqAEyTNkzRf0lktPZslPWSM2RpBz62S7m0o1iIB3yxZyeCbIWDhiOAbC++vD1TJOZRnKhjE5tn0Oq4MnFYSb3zr/bLNgCEY6JPkLctMG0yDsSRJ2AwAayRdVHJKn6SFkp6g2e04LzUYiz5JLzcYcG9TgbBJ2JdIqrOfeZakpWEVHcOXJe1sIM5eSZ/vl/QFScskhd6xMCCpkb1BwOmS7tPopveuBD5ijFkRSNarGGOeBKZLOlvh+kGDkgaMMUP9xphHsDm5ztYY8nrVCLjTGDMYqHy1vm5vkrRA0mx1Vpel2K21PzHGPO5TXxFjzJCkHSFjRAdPHS9shp7bsTsvfPJroLhEqa6myo5X0/T0YAi2V7xS0j2yaY59cq2kDcCHPJfbOD1rMna/1HpJ7w8YZpKkFdgUiT1LT5qMHdxYqvJHoxck+crr2SfpAeAdnsprnJ40WdLNcu8vekrSVcaYGZJ+2EG5X5d7WfBrJS0m/+bG6Oi044Xd7upKxvLwyI4NNh/YP0bR0VrWuu4U4A8l59TKP02XdbyiMQaTb3HcvL/gSMKC3XxWlihtJH8CJoy47mTg747znq+pMZssjcnkYisbAmZXnH8O5Qng/ov9rajj0iYD7y255pIaGrvK5J6aasS21ssLh/9cNbtljBmQtAC4UPbv+Lmys1CbJK0yxjjHkY0xa7GJ5Yqdu/nqsT1bPWWypDN1/NrlR+pcaIwZzmA/GlbreJOj7TPulF7rXRf3M0thhwZde5rODBgvCL1m8gTHsVcCxjtQU0NX02smZzogm5wA2eQEyCYnQDY5AbLJCZBNToBscgJ007DmOOwy2iqmOY5NrXFdp7h++HN8jXi+lyKNiWh5mIGNipilLhITjDEhR+icBGvJwFxV/wRuT+a0HiMLgDrLktYZY/b4ChqsJQNrFTFpaI8z3xiz2ldhueOVANnkBMgmJ0DIR6glsovffTJD0icKx1ZK2uI5zjBvkXR14dg2ScsDxRtme+DyuxfsT9oXqfxx6jHG+4wj3u9CxQtF/rpOgGxyAmSTEyCbnADZ5ATIJidANjkBsskJkE1OgGxyAmSTEyCbnADZ5ATIJidANjkBsskJkE1OgF4z2ZVKOVh65ZKyfaVzzLgApgGHRizFOQrMDBhvNjZP2DCHgHeHipdpAVwPDAAvAjc2EO8rwB5gC+DK59n1/A8JLI46Xg6ZsAAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/media/ke_led_yellow.png":
/*!*************************************!*\
  !*** ./src/media/ke_led_yellow.png ***!
  \*************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_lm35.png":
/*!*******************************!*\
  !*** ./src/media/ke_lm35.png ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_matrix.png":
/*!*********************************!*\
  !*** ./src/media/ke_matrix.png ***!
  \*********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_mnwd.png":
/*!*******************************!*\
  !*** ./src/media/ke_mnwd.png ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAxCAYAAAAWXXEmAAAACXBIWXMAAA7fAAAO3wFVDDfZAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAACDtJREFUeJztnWuMXVUVgL89DNAHrX0oTYvFGBAsRSuWBix9UEULKIqJD9BqgxLUoiiJBCWGRkHRmFQMGo1YGiJN0P6wTWqUgEZKW2lLS6VA0/KwUPuMUOiL0sd8/tgzcGffc+eec2fuzISeL5kf+5y91tr7nH323Y+19gRK+gXqCcCFwGTgfcC5wEhgKDAM2AscALYDm4AngGXAmhDC0b4oc0kPok5V71X/Z2O8qi5QL1ZDX9enpCDqZ9S1Db78WvxbvcrYu5T0Z9Tz1GU93ABS1qoXFClX2ZX0EmoLcBNwG3BijWxHgZXAo8BTwPPAvva/wcAQ4D3AOcBUYBLQWkNXGzAPuCWEcKRnalHSLdSh6t+6+IIfUb+ovq2g3uHq19U1Xej+lzqmWXUryYl6qrXHAg+oE3vIzsfU1TXs/Ec9uyfslDSAOkLdmPFitqmXN8FeizpH3Zdhc3fZGPoA9WSzB4VL1RFNtj1OfTLD9hb1tCyZ3INF9STigscU4mBlFHHwUmuwcrwzDDgjuXYXcGMI4VizjavDgCXAtOTWKmBaCOFwUYWj1Hk2vuBRErmrh95xkXc3UH04oyzz0rw1ewR1MHAzcCNwShPL+1bnIHEaNzeE0FZUWD0RGA7saWQaaOwZVhB78Q7agMkhhFX1hN+tPtF7H8tbkiPq3db4Te7i2Q9UZ6mL1J2Jzp3t12epAwvoHKfuT3Sts2IFsqpHUKcAfwbenqHzWWAxcbNjG7ATeK1IRY8jjoQQ9ufNbNwnmA38CBibQ2QrcCtwbwjBHPqvB36VXL46hHB/Vub3qnsyWvcG9RM5ClfSAOoA9Q8N9jx/UgflsHGC1QtPG0w3qoxz3s0Zhn5huYnRNKw9zSzCMvXkHLZmZsjOSDPNz8h0Q9OeQAkAxi3klGPqQvUK9TR1kDrWuLP4YI3GcE9Oe48lcgsqb56rHk0y3Nm02pcANb/Q59Xz6shdafRDSJmZw+Y3EplX1NaOm4uTm0+9cbOkKahBfTx57lvV0TnlJ1o9E3jcOs4pxiFA+tFfiLHrSW9c2TPVLamFOinji76koI6vZuiYlEPu0UTmey3AJ4HKweCWEMLigvUqKc6nkvTKEMJDBXUsADbW0ZvFsiQ9vhWYnlxcUrAw/RrjjOcK4NS+LktC2usW/vhCCG3q/cAPKy6fn0P06SR9diswPrn4SNEC9XPuAb7c14XIQfpl52V9ks4zxnguSY9pAd6ZXNzeYIH6Kx/v6wLk5ECDcq8m6SE5ZF5J0kNbqN5QeqnBAvVX/tHXBcjJqAbl0h5gRw6Zg0l6UCtwhM4+BU11mugDvgQsJV+X2Zt8AXh/RXoqUL3uX58pSXpLDpnBSfog6ovJVOLTDRSmpCDqV5LnvlsttN2vnqLuSvTMyiE3NZHZ1gJsTvJ9qEhhShpmKbE37uAdwNyCOubSeTZ0qF1vPc5M0ttRb0taR6Oj15KCqL9Onn2b+rWcste156/kZzllf57I3Yc62Wqmdq+KJXkwugFmbfvPt0YsgjrG7A3C7eaMi1BXJbLfD8a16U3ECJoOlocQut0Y1NOBGcQp6UN5HCja5UYDlwAvA3/N6+KlnkUcPG0KIawoUM5JxAjkNSGEDQXkJgATgfUhhHV55RIdM4G/0Hl1F+AwcU1nLfE5jGi3NRU4Kcl7CLi4rutZtDcS2JXYm9Jxc1ZGC7u+eLU6GZxuZ//6ReaI1lU/mHwlD5jDH0L9rPp6hVyu3VP1B77ZxR5Vr8sp903jdrHt8jflkauh6xr1cMY7yMN+Nc+ycoetOYn8XqNf5BuBEeuSDIfVD3ejcisyCp0uZ2fJLc2Qq7sJpr6QIZe6k6cyw63ecNtrnZ1X9ST1YMbzyrOYU0vndGPgSxE2qx8oaCeNurovzTDF6lb5mnp1gxXLcn+v+7Wpz2TI3VxHZmCNB9VlNJF6fg250+vInVlDbkK9+tXRO9jYQ6VTwpSt6g3GWJMi+i/L0HUpVCwkhRCWGz2SflMhOwBYqH4UuDWE8N8CdrN+BlqaJFfrJ6eeXK37zbLXtdIQDgC3q3cQp/HTgDHEKeIuosPw34HH8o63OjD+vP44ufwM8CAkUUohhN8a4+O+U3kZuAa4Sv0jcXfynyGEdL06JSuaJ0+ET1aeekfDtAFS/YLq2at1v1lyuWiPhFre/tdTzAFSz6c7OqKuMlu2+l3gp1SPZCs5SGyltVrmaCD1vd8GvF6nwKOoXgLdQX23+bFUnzvwIl03ohbgXXR+DseAF+rYCu1ylT2AxOXdjudxAJgPzC/i1t4M1PHAaqDS23kjMKEjaKarSKfLgd8BhQI0Sqp4GfglcHsjkU7dRR1OjHQal9z6SAgh34ac0Xv2FrMdJUuKMd94akqvYRxEZ7nK353mzRUNbVyx+hzRrW0a8ci3kuIsBK4NIRxqtiFjT7CEuABVyZPABSGETlvRDZ2hpI4l/pYPa0T+OKGVGGKWrmWsBD5fcAZWCOOYYBHVPwe7gYtCCM82y3ZJBuoZ6o6MrnmPOtsePhfRGNb2LfVAhs29ah5/xpJmoJ5j9qqnRrfyuqutOe1cZvXqcAe7ykbQDzDuGHZ1uOZa9Vo1KwK9K70jjXsHXeneoKb+B1WU5yz2EuoA4CfExbpaz/0Ycb6/knjO4nNE59R9RN/SIcBZxEMvphF3I7ta6/k98O10YFjSDzCemby+iy+4J3jabmwYlvQSxt3e2WYfvdcdNhu3tGud7FrSHzEGws4whsC/1ODL32c8ZONSu3GORTlG6Cf45v9ruIj4vxrGE48vqvx/DfuJ3l6biWOIh4HVPXHW8v8Beei/W8f8zTMAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/media/ke_mpu6050.png":
/*!**********************************!*\
  !*** ./src/media/ke_mpu6050.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_pengzhuang.png":
/*!*************************************!*\
  !*** ./src/media/ke_pengzhuang.png ***!
  \*************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_photo.png":
/*!********************************!*\
  !*** ./src/media/ke_photo.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABqCAYAAABDA1ReAAAACXBIWXMAACXQAAAl0AHaYF2kAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAWxJREFUeJzt3MFJQ1EURdH3JaAVWIENWIJdOLEUx7ZiDY4ES7AKq7hOnAYM6F8R92rgnrDhjcJf64+Ymbc5zZPe/B0XesB/VwCsAFgBsAJgBcAKgBUAKwBWAKwAWAGwAmAFwAqAFQArAFYArABYAbACYAXACoAVADvMzIce8eVh27aXvY7NzN1a63mve8cc1lrXesSXq53vXa4z+O09QVgBsAJgBcAKgBUAKwBWAKwAWAGwAmAFwAqAFQArAFYArABYAbACYAXACoAVADvoASd4XWud8h+m91/a8aP+TIBt2x71ht/QE4QVACsAVgCsAFgBsAJgBcAKgBUAKwBWAKwAWAGwAmAFwAqAFQArAFYArABYAbACYAXACoAVACsAVgCsAFgBsAJgBcAKgBUAKwBWAKwAWAGwAmAFwAqAFQArAFYA7Jw+1nE/M7c73rvZ8dZR28yMHvGf9QRhBcAKgBUAKwBWAKwAWAGwAmCfLl5HtxLSjkUAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/media/ke_qiaoji.png":
/*!*********************************!*\
  !*** ./src/media/ke_qiaoji.png ***!
  \*********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_qingxie.png":
/*!**********************************!*\
  !*** ./src/media/ke_qingxie.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_relay.png":
/*!********************************!*\
  !*** ./src/media/ke_relay.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_rentihongwai.png":
/*!***************************************!*\
  !*** ./src/media/ke_rentihongwai.png ***!
  \***************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAB6CAYAAAC1K911AAAACXBIWXMAACXQAAAl0AHaYF2kAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAACxFJREFUeJztnXeQnVUVwH9nCWChiROkSRORqkgTpQrDUKJgAR1xHClDMaAU24AzDOJY6GWkFyuYiaKOjbGCQUo0OAIJDDCAoJgQimzCUkI2P/+4m7gsb3ff23e/7759u7+ZzCR57zvn3u+82885N5hgqDsABwN7AOsBGwBTgCeABcBs4BfA7RHRX6qcEx61R/2k+pDNs0A9SV2ldPknHOr26j9aMNZQHlH3K12PCYN6qPp8GwZbzlL1y6Xr0/Wox6jLMhhsMGeXrlfXou6pvpzZYMs5pnT9onQBcqOuA9wPrF2RiiXAThFxb0XyR6WnlOIKOYPqDAawCnBOhfInFurm6pKKusWh7Fuqnt3W0o4AVq5JV7GxravGNHUusE1N6p4HpkbESzXpW0HXtDR1E+ozGMBqpK2w2ukaowHvLKBzuwI6u8poGxTQ+dYCOrvKaG8ooPONBXR2ldFqnxAALxTQ2VVGWzBBdHaV0eZNEJ1dt057GNisJnUvktZpfTXpW0E3tTSAn9eo6/clDAbdZ7QfANak6/s16el+1Otr2CyerXbV0FIUdVP1hQoN1q8W2b7qatTDzO9qsJyvlK5f16KeVYHBbnCyW6wWk9/i0kwGu1Kt66xuYqN+rU1j9apHl67HYLptyt+IsS62XwGuAraIiGszlqdtxl3/rL4F2BiYSjqIXHPIV14CngWeAXqBO4A1mhC9FHiS//vy/yoinslU7Kx0tNHUDYH9gF2Bd5NOpnMewTwNbA2sBCyMiGUZZU8c1LXU6epdbY5FzfCC+hP1WHWt0nUfd6ibqN+x2oXxSLyoXqFuVPpddDzqauo3Bl5aJ/Cyep5a4iS881Hfoc4ta6NhecSCDqkdiSlIYnFhw4xGv3q6HbYLUqQw6tuBu4DVS+gfAzcAR5dwTG1E7UZTe4BbKOTo2QZ3AgdERG/pgpTYEfks489gkNaKN6mrlS5IrS1N3RS4h7STMV75EzCtZFdZW0sbGMyvY3wbDGAfYKY6pVQBamtp6gnAt+vSVwMXRsSpOQWajn42ATYH1gH6SA5ErxpHazFal3SLjfhURPxwrA+rWwHvAd5HGjO35LXxdb3AyRHx3bHqGUvBQv1DiUVWDSw2LV+afRcrqXuoF6qPtqBnmamnAmpoaepxwBVV6ynIHGC3iFjS6EP19cC+pNROh5C6vbGwBNglIu6u1Gimzde5jJ9F9FiZB8wkDQFLgDeTurqdgN3IF11zR0S8rzKjmWaLNwH7V6VjgrJHlVP+o5k0WBWcWElLM504z+W1rgCTtM+/qmppVzFpsKqYmt1o6lHAgbnlTrKCZ7N2j+r6pJnUpL9FdczM3dKuJI/BHgDOBJ7LIKub6AfOzbbpqX4K+EAGUY8Cu0fE0+oy4KwMMruF8yNiTpaWpq4HXJRDFnB8RDw98PfHM8nsBq4AToN8RzOXkydd34yI+N2gf++ZQeZ4p5eUPG36cmfatici6uHA9e3KARYDW0XEEwNyVwLmk9y/JyLPAdcA50bEwsEftDWmmfzqL2lHxiDOWm6wAfZgYhmsH7gb+DNwM+kcreHpeLsTkUtJm6Ptch9w8ZD/+3AGua3QO/CnLg/jfuDvwCySo9OtlTsNqR/LcSA1cFa0zxDZoT6WSX4zXKSuOqB7V/WWCnS8ot6pnq0epDYTyZPVYFPVhZkqc10D+Ttmkt0MC0zj59AyTFPvaUPuEvU29ZvqAZb24lJntv2qEvPV18w61TMzyW+GYf1WTNedHKY+3IScV9Q56rfUD6qds/dq+tXk4rBhdPw1o47R2LuJOr9OPVV9YNBzL6mzTAH5+9rJARvqzZleVsOUSOq6Jh/6Ophvg65xlPq/Td3G5EZQhJZmj+q65Fnw9gInDPPZQdTnj3ljq9dtRcTDVRWmWVp9OTuN4ZlGfGHImmwwB2WQ3yw/rlFXNlo1wMYZdP4OaJgtwHRXWV3XXvUBt9ekKyutGq3dQPJFwDERMVymuL1oLhNBDm6PiFdq0pWVVo32UJv6Ph8RI+3c13niPS5bGbRutFtJG7tjYdhucRA5zuOaZbgxteNpyWgR8TJjC6IYrVtE3QJo2sU6A9vXqKss6qqmPbRWOLIJuadkXH81y/fULet4b8VR11R/2+SLuaxJmaWCNPoHdE9XS9yiUR+mnfgT1WeGeRlL1TNMMdajyVrd6q6DbJX71EvVw9Ut7LDMBpDn5HoN4HCSC/gmwFPAP4Arm909UD8E/KzdslRELykTwxxSgMU8YN54XS5kQ72qYMsaC/PVOme6r6J40zd1P48DG5YuS4ssBQ6OiJvqVtwJRnsXqTsdjywEthnk8lcLnZBZdVrpArTBOkDtN813QkubxfhMBrOc54GNIuK/dSks2tLUNwHvLVmGDKwGfLROhaW7x/1p342vE/h4ncoavjDTudZepKj8LUm+jS+REjPfBfwoInJc+NYtcWx7q2tExKIi2tUj1CdGWae8rM6wCaeYEfT0qE9WtZAqQG3rthXdo+klXgt8B1h/lOdWIXUJN5u2fT5n64mbd2TsOTU6kX1G/0oeBo9pXweOGoOMrUgu3f9Wr1F3bPK5On1B6qC21LkBoO5ESkLZkjvZCPyNFP40IyJebPQFdTawSyZ9nYDAWyLiqaoVLW9pp5HPYAA7k9IEzjddrLPt4A/VqSTPrm4igPfXoajHtFY6uCL5awLHAveof1QPNaXHO5Dyy40qqKWLnEJyWat6rRSkgXofUqBg8TzAFVHLZGQKcEAdigax3sCfqllMCtD7M+kUYSFprbkx8BHgUPK39s3VjUbxOGsfdV7N65mqedzkOjBiQITJH//BCvSP6g/TLj10V4jsd4FtI+KyiHhhpC9GxDzSvueDmctQeRfZQ30evVXz1Yg4spWtpIH70Q4lXXCXi1qM9mjVSmrghog4cywPRsS95M38ur4pN3Fl9JBu8hvP9AGntCnjfFLgei4qbW09wAUkf4fxymVD82y0SkQ8BtyWqTxQtdEiYi4wnby/tLroA87LJOvGTHIgHdVUtnnQAxARVwO7A78h7aGNFy5vt5UN4kbaD+VaztqkO0wrYcWvISLujIhpA8pm0Pktrw84N5ewgcjUnOFPlXWRr2nCEXF3RHyCFMFyCdBwl74DaHssa0DOcN69Msp6FaN6Y6nrkMa8k+icjKl9wGa5jWZKBPAEeba3FgNrR0S5SZ66hnqS+p8Ktn5a5ZwK6zkrYzl3rqKMTf+iImJRRFwMbAocR7kEmjlnjI3I2UXunVFW+6grq59W7834y2yGKg2Gur75ks/8usqytoW6u/rLTBUdiT5Tjsmq65Ori1xkBZfjZVkARsRfIuKDpF3zn5FvvTOUyyPiyYpkDyZXF7k6sEMmWdViunT8alPSr1w8Z5rJ1lH+DUx5KHPwxTrKnA11PVO+w+FCfFvhMzWX/Y4MZdZOHtdGQn2Derx6/xgrPlr+kSrK/KVMRuu14KWvbWMKrj/QlBmhme5nmSlVbe2eW+rbMxlNtTv8O9Wt1cvVpxpUst+UR7hoXn7bS4c7mKzjWicEFa4EbAdsTYr1eoqUbKyOWeKIqF8Fzsgg6tcRUSywfkKhvitTS3sgZ7mKt7ROR30Y2KxNMb0RkW2zvRtds3Pz0wwy+jLIWMGk0UYnRyah2RlkTNIspmDLdo6j+s08C55saaMwcP1Vw3T0TdAHHB0RszIWaZJmUPdrsXUtUi8wXR09SQlMZ4eNNgGGskA93RTzN0lp1NNGMNZD6nHq60qXc5IhqCeb7pvpU/9pSstxiDXvjf4Pq+1QptWSHQQAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/media/ke_rgb2.png":
/*!*******************************!*\
  !*** ./src/media/ke_rgb2.png ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_rgb2812.png":
/*!**********************************!*\
  !*** ./src/media/ke_rgb2812.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_servo.png":
/*!********************************!*\
  !*** ./src/media/ke_servo.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_shumaguan.png":
/*!************************************!*\
  !*** ./src/media/ke_shumaguan.png ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_sl_button.png":
/*!************************************!*\
  !*** ./src/media/ke_sl_button.png ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAyCAYAAADMb4LpAAAACXBIWXMAAA7fAAAO3wFVDDfZAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABDRJREFUaIHVmt2LVVUYh593mlHM/Aoz1BJyFMVMTKkoQ4roSiYwzaIgzC6q/6G66a6bjKCC0iwj/CqlqBsjg0joykjNLCyKHEuTxEqb4zhPF3sN2jDnnL3XmZlTv8t91u99n73P2nut/b47KCl1BnAfcBdwIzAHmAp0lI1RR78DPwOHgU+B9yPiRBljNBugzgeeA+4HuoA+4BhwAugFzmchF5oAzAJmAvOAcUA/sAd4OiKOZkVVp6gvqTX1grpNXadObgG2Wb6H1J1qf8r5sjq1aqBu9bCF9qo3jQZwg/wL1R0p/7fqwrLGFepv6l/qA6PM2YzlEfW8elq9s9ng7gTeqy4bI8aGUm9Tf0kn0F1v0CT1oHpOvWWMGRtKXZ5mwhF1ynADXktzrK1TpZ7SFFLdOPSHm9WL6u42sZWSukftU2+4/OC29Ggqd1e3SekpdEHdOnhgejqb7W1mKyV1a+K9uoNiyR8HvNdmrrLaScHbg/pWOpNRWTlHWuoE9Q91S6gHgK6IWNxusLJSPwfGd1LsDg+MUNCFwGrgHmA2cA1wCjgOfAzszt5s/Vs/AfeSNl5bW4mkzk8bqgEba0DdXnelLJ/vebXWQbHNPddCoDUU/9xamm+xA1gHfKmuzs1JwdvV0ouE+jjF3T+xovUqYJf6WCv5s+HVlcArlHihaZD7VXVFLkMWvNoFvE4x5VrROGCT2pljzr3yG4D5md6hWgCszzHmwmclG+l4leHVa4Fbc5I10O0W1YlKyrnyizJ9zTgq72hzIGZmeMpodlVDDrwZnlGJmwPfm+Epo+NVDTnw3wADGb5GGkhxK6kyfET8CnxR1ddE+yPiVFVT7lNjS6avnt7MMeXCbwaOZHqH6iiZFyMLPiL6gSeAWo7/MvUBG1K8yspebCLiM+Ap8h+dA8CTEbE/l6GllTIiNgM9wNmK1j+BtRGxpZX8HRTF/CtzA0TEh8AyYAfN/wWBbcCSiGilOjcB6O+kuAotLfkRcQx4UH2GSy/g1wEzgJMUbZvBF/DvWsmVNAs4G+pXQGdELBqBoGMi9RNgWgdwEJhn1fZJm5Te4pYChzooOnBdwKp2QlXQSmAasA91Rqrd/C9qlRZNtpo6ffDArlSfX9JmtoZSr0+dm3cuP7g8VbM+aiNbU6lvpKJw99AfNqWS3Pr2oDWWuirNjo3D/TjYUKulgtJ/RuoC9Yz69bANtTRonkXL8KR6xxgzDit1sfqDRYt1brPBg03kv9VHx4ixHkuPejbxlCsLWjSTD6V7YK+6dJQ5h+afkzo2A+pRdUHVAJPVF9Pd3a++qz5cd861DjxRXaO+nXL2qS+ok+p5ynyy0k3xycoaisJojUufrByntU9WxlNssmYBcyl2izWKsvmzEfF9I3Pp8nRa0XqAu4HFXPpY6Ios7EIXgTPAj8AhYB/wQUScLmP+B2hWADV1+ALqAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/media/ke_sound.png":
/*!********************************!*\
  !*** ./src/media/ke_sound.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_speaker.png":
/*!**********************************!*\
  !*** ./src/media/ke_speaker.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_sr04.png":
/*!*******************************!*\
  !*** ./src/media/ke_sr04.png ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_steam.png":
/*!********************************!*\
  !*** ./src/media/ke_steam.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_temt6000.png":
/*!***********************************!*\
  !*** ./src/media/ke_temt6000.png ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_touch.png":
/*!********************************!*\
  !*** ./src/media/ke_touch.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_tptouch.png":
/*!**********************************!*\
  !*** ./src/media/ke_tptouch.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_v_motor.png":
/*!**********************************!*\
  !*** ./src/media/ke_v_motor.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAxCAYAAAB3aZEhAAAACXBIWXMAAA7fAAAO3wFVDDfZAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABHtJREFUaIHtmVuIVVUYx//fmdOETWYEM14Ku1liA5ExWQ1UVoqh0RV9kKILRVCUREQ99BAkXSSIQLOIBO3yoF1MiyBEpHoaI7q8hGEzOjk2U2A4M47GOL8e9t7HddacPXuf2dszh0N/mIe9vv/61vebtfbaa+9jqkJAq6SBavpk1F4zW5TWXDidldRaDQVTzNj/Pkl/5FGIo5WSnphMx6wwe81sX8YcZQKunmzfhlpmJRhgJrBsKoupVkA7sCq6LoaN0yR9JmkR8KSZbUyZ7ztg1Gs7V9Lx8M/VdEnHJJ1MyNmSZmBglqQvJc0FrjCzF6PAa5RrLWAVErRSW3XFgJwFdDm+AaAtCp4NbPcSbQGa6w0GKACfOp4TwGIpXGZmNgTcK+ldSQ+F/e6X1AosNzNiZvsZSf2SHpfU6bQfkPSygm12idN+WNJaSUdi8knScgVbfpxel3R3xCbpETPbU+YA5gO9DvFx4B7P48/MAuBDr+3H0LfRa98HzJmgyGiMp+NmBrjVy/l2pQTtQJ9jGgSWVPD5MDtiQN6qAHJ+EkgKmALwlRPvBy5wDR3A355hYcxAE90zP2UFSYIJ4+cBvzueHwh2Ywn42Bt8B96NnwImAtmQBSQNTOi5Cjjm+DZHgSbGr+/dwIyUMD8DbRVAuoELqwFJCxP6/ElY6gbXACed4C+467EyzH5gNrDea+8BLqoWJC0M8II33iag4Jue9UxfJ8B05gmSBib8pyeCzCBYMpEGgMsSYN7PEyQJBlgMjDnxbZVAmoFdjmkYuK7CQBPtZgeAi7OApIBp8ur8DZjuGozg6BJpFLgjZqA4mFxAkmDC+EzgsON5L4pFU9Tm+Hsk7api/B5JN5pZ9yRqr1pm1i9ptU6dvh8GVpcMBFurS7upUqIKM3MIuCTPYpNmJvRMI3iGuSujyTUso/zmejAFzM15gqSBITjSuM+Yf3GfMY7xHcc0DLQnwFw+BTBvOvEx4IEo5r42z5fk3vh9mvioXnMBz0l6yml6ycw2RxeF0DRP0m5Js8L2g5KWmllfrQpNqaKCd5hIt+Oe/YC5wEFn6nqJuanrZJmtBEYczyGgQwpmZlCS+1Fiv4KZqUuZ2TZJt0j6K2yaI2kPcFfBzI4oeA0dCYM3SXql9mVWpS5J3zrXLZLKTs2PebvEKj9DnSyzZmCrV8c6/K9JwEeO4SiwoJ5ggDMZ/xXp1ShedIznSLrS6TsoaSjvYier8D//hcq/9rxhZs9HF9HWfIakTyRFD8khSSvMrLdGtSYq/Ny1TtJRp/lR4LYyI+WvzaPAnZUSTvUyC+MdwJ+O5wThQbNA8FlzheNfY2af511kXjKz7yVdL+nXsKlJwS2hopkNANdK2inpGzPbUEXu9UDe99W8JIOZdQOdkrZL2mpmOyWptJ0BLZJGzGwsLgl19gMtUDSz0gO/tJuZ2fDprixvuSBS9p8Bt0j6J2MOXwsl3ZBzzvGqh91sIjXmb5qNoP9h6lVZd7NrgNm5VHJKl062Y1aYDzL2z1UNtcwaCuY/ZKU7Z07CKRsAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/media/ke_xunji.png":
/*!********************************!*\
  !*** ./src/media/ke_xunji.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/ke_zhengdong.png":
/*!************************************!*\
  !*** ./src/media/ke_zhengdong.png ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/media/rc522_iic.png":
/*!*********************************!*\
  !*** ./src/media/rc522_iic.png ***!
  \*********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "blockly/core":
/*!**************************!*\
  !*** external "Blockly" ***!
  \**************************/
/***/ ((module) => {

module.exports = Blockly;

/***/ }),

/***/ "profile":
/*!**************************!*\
  !*** external "profile" ***!
  \**************************/
/***/ ((module) => {

module.exports = profile;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly/core */ "blockly/core");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _language_zh_hans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language/zh-hans */ "./src/language/zh-hans.js");
/* harmony import */ var _language_zh_hant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language/zh-hant */ "./src/language/zh-hant.js");
/* harmony import */ var _language_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language/en */ "./src/language/en.js");
/* harmony import */ var _generators_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generators/generator */ "./src/generators/generator.js");
/* harmony import */ var _blocks_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/block */ "./src/blocks/block.js");







// 载入语言文件
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.ZhHans, _language_zh_hans__WEBPACK_IMPORTED_MODULE_1__.ZhHansMsg);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.ZhHant, _language_zh_hant__WEBPACK_IMPORTED_MODULE_2__.ZhHantMsg);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.En, _language_en__WEBPACK_IMPORTED_MODULE_3__.EnMsg);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.ZhHans.MSG, _language_zh_hans__WEBPACK_IMPORTED_MODULE_1__.ZhHansCatgories);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.ZhHant.MSG, _language_zh_hant__WEBPACK_IMPORTED_MODULE_2__.ZhHantCatgories);
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Lang.En.MSG, _language_en__WEBPACK_IMPORTED_MODULE_3__.EnCatgories);

// 载入图形化模块外观定义文件
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Blocks, _blocks_block__WEBPACK_IMPORTED_MODULE_5__);

// 载入图形化模块代码生成定义文件
Object.assign(blockly_core__WEBPACK_IMPORTED_MODULE_0__.Arduino.forBlock, _generators_generator__WEBPACK_IMPORTED_MODULE_4__);
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map