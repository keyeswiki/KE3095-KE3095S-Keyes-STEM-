/*  
 * 名称   : Pressure_alarm
 * 功能   : 薄膜压力传感器控制蜂鸣器
 * 作者   : http://www.keyes-robot.com/ 
*/
int item = 0;  //设置item为0
int PIN_ANALOG_IN = A2;   //薄膜压力传感器的引脚定义为A2
int buzzer = 3;   //蜂鸣器的引脚定义为D3

void setup() {
  Serial.begin(9600); //设置串口波特率为9600
  pinMode(PIN_ANALOG_IN, INPUT);    //将传感器的引脚设置为输入模式
  pinMode(buzzer, OUTPUT);  // 设置蜂鸣器引脚为输出模式.
}

void loop() {
  item = analogRead(PIN_ANALOG_IN);    //读取传感器的模拟信号
  Serial.println(item);  //串口打印薄膜压力传感器输出的模拟信号
  delay(100);  //延时
  if (item < 400) {  //压力强度的模拟值小于400
    digitalWrite(buzzer, HIGH);  //打开蜂鸣器
  } else {  //模拟值大于等于400
    digitalWrite(buzzer, LOW);  //关闭蜂鸣器
  }
}