/*  
 * 名称   : heat abstractor
 * 功能   : 模拟温度传感器控制四位数码管和电机模拟散热装置
 * 作者   : http://www.keyes-robot.com/ 
*/
#include "TM1650.h" //导入TM1650库文件

//两个端口分别为A4和A5, 可以更改为其他端口
#define DIO A4
#define CLK A5
TM1650 DigitalTube(CLK,DIO);

#define PIN_ANALOG_IN  A2 //模拟温度传感器(热敏电阻传感器)的引脚为A2

float Rt=0;      //NTC 热敏电阻
float R=10000;   //具有固定电阻值的10K电阻
float T2=273.15+25; //转换成开尔文温度
float B=3950;    //B值是热敏电阻的一个重要参数
float K=273.15;  //开氏度 (K°)
float VR=0;

void setup() {
  pinMode(PIN_ANALOG_IN, INPUT);  //设置PIN_ANALOG_IN为输入模式
  DigitalTube.setBrightness();  //设置亮度，0- 7，默认值:2
  DigitalTube.displayOnOFF();   //显示打开或关闭，0=显示关闭，1=显示打开，默认值:1
  for(char b=1;b<5;b++){
    DigitalTube.clearBit(b);    //数码管清除位显示
  }

  DigitalTube.displayBit(1,0);  //数码管显示(位,数字); 位=0~3  数字=0~9
  
  //电机的IN+连接到D2，IN-连接到D6
  pinMode(2, OUTPUT);
  pinMode(6, OUTPUT);
}

void loop() {
  int AnalogValue = analogRead(PIN_ANALOG_IN);  //读A2引脚的模拟值
  VR = (float)(AnalogValue / 1023.0 * 5.0);  //转换成电压值
  Rt = (5.0 - VR) / VR * 4700;    //计算NTC热敏电阻
  float temper = 1/(1/T2+log(Rt/R)/B)-K+0.5; //计算温度
  displayFloatNum(temper); //4位数码管显示温度值
  if (temper > 30) { //当温度超过30℃时，打开风扇
    digitalWrite(2, LOW);
    digitalWrite(6, HIGH);
  } else { //否则，请关闭风扇
    digitalWrite(2, LOW);
    digitalWrite(6, LOW);
  }
  delay(100);
}

void displayFloatNum(float temper){
  if(temper > 9999)
    return;
  int dat = temper*10;
   //DigitalTube.displayDot(2,true); //Bit0显示点  在displayBit()之前使用。
  if(dat/10000 != 0){
    DigitalTube.displayBit(0, dat%100000/10000);  
    DigitalTube.displayBit(1, dat%10000/1000);
    DigitalTube.displayBit(2, dat%1000/100);
    DigitalTube.displayBit(3, dat%100/10);
    return;
  }
  if(dat%10000/1000 != 0){
    DigitalTube.clearBit(0); 
    DigitalTube.displayBit(1, dat%10000/1000); 
    DigitalTube.displayBit(2, dat%1000/100);
    DigitalTube.displayBit(3, dat%100/10);
    return;
  }
  if(dat%1000/100 != 0){
  DigitalTube.clearBit(0); 
  DigitalTube.clearBit(1);
  DigitalTube.displayBit(2, dat%1000/100);
  DigitalTube.displayBit(3, dat%100/10);  
  return;
}
  DigitalTube.clearBit(0); 
  DigitalTube.clearBit(1);
  DigitalTube.clearBit(2);
  DigitalTube.displayBit(3, dat%100/10);
}