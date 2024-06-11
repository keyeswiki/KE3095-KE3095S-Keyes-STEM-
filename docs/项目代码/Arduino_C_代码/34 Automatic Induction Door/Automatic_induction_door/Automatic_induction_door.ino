/*  
 * 名称   : Automatic induction door
 * 功能   : 避障传感器控制舵机模拟自动感应门
 * 作者   : http://www.keyes-robot.com/ 
*/
#include <Servo.h>   //导入舵机库文件

int servoPin = 6;    // 定义舵机引脚D6
Servo myservo;        //定义舵机类的实例

int avoidPin = 2;  //定义避障传感器的引脚D2

int item = 0;

void setup() {
  Serial.begin(9600);//启动串口监视器，设置波特率为9600
  pinMode(avoidPin, INPUT);  //设置避障传感器的引脚为输入模式
  myservo.attach(servoPin);  //选择舵机引脚D5
  myservo.write(0);  //关上门
  delay(1000); //给舵机转向的时间
}

void loop() {
  item = digitalRead(avoidPin); //读取避障传感器输出的电平值
  Serial.println(item);  //打印变量item的值
  if (item == 0) {//检测到障碍物
    myservo.write(110);  //打开门
    delay(500); //给舵机转向的时间
  } else { //未检测到障碍物
    delay(2000); //延时
    myservo.write(0);  //关上门
    delay(500); //给舵机转向的时间
  }
  delay(100);//延迟100ms
}