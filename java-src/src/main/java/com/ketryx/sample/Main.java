package com.ketryx.sample;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
        int result = SensorReading.readSensor(1, 2);
        System.out.println("1 + 2 = " + result);
    }
}
