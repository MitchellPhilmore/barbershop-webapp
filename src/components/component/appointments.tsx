"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Appointment = {
  date: Date;
  time: string;
  description: string;
  clientName: string;
};

const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

function generateMockAppointments(
  count: number
): Array<{
  date: Date;
  time: string;
  description: string;
  clientName: string;
}> {
  const appointments = [];
  const currentDate = new Date();
  const descriptions = [
    "Haircut",
    "Shave",
    "Beard trim",
    "Hair coloring",
    "Styling",
    "Facial",
    "Hair treatment",
  ];
  const clientNames = [
    "John Doe",
    "Jane Smith",
    "Mike Johnson",
    "Emily Brown",
    "Chris Lee",
    "Sarah Wilson",
    "Alex Taylor",
    "Olivia Davis",
    "Tom Clark",
    "Emma White",
  ];

  for (let i = 0; i < count; i++) {
    const hour = 9 + Math.floor(i / 2); // Appointments from 9 AM to 6 PM
    const minute = i % 2 === 0 ? "00" : "30";
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour > 12 ? hour - 12 : hour;
    const time = `${hour12.toString().padStart(2, "0")}:${minute} ${ampm}`;
    const description =
      descriptions[Math.floor(Math.random() * descriptions.length)];
    const clientName =
      clientNames[Math.floor(Math.random() * clientNames.length)];

    appointments.push({ date: currentDate, time, description, clientName });
  }

  return appointments;
}

export function Appointments() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    setAppointments(generateMockAppointments(10));
  }, []);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const handlePreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const filteredAppointments = appointments.filter((appointment) =>
    isSameDay(appointment.date, selectedDate)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-background rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={handlePreviousMonth}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" onClick={handleNextMonth}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="text-center font-medium text-muted-foreground"
            >
              {day}
            </div>
          ))}
          {Array.from({ length: firstDayOfMonth }, (_, i) => i + 1).map(
            (day) => (
              <div
                key={`empty-${day}`}
                className="text-center text-muted-foreground"
              />
            )
          )}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
            <div
              key={day}
              className={`text-center cursor-pointer rounded-full transition-colors hover:bg-muted ${
                isSameDay(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    day
                  ),
                  selectedDate
                )
                  ? "bg-primary text-primary-foreground"
                  : ""
              }`}
              onClick={() =>
                handleDateClick(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    day
                  )
                )
              }
            >
              {day}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-background rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">
          Appointments for {selectedDate.toDateString()}
        </h2>
        <div className="grid gap-4">
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((appointment, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage
                        src={`https://api.dicebear.com/6.x/initials/svg?seed=${appointment.clientName}`}
                        alt={appointment.clientName}
                      />
                      <AvatarFallback>
                        {appointment.clientName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl font-bold">
                        {appointment.time}
                      </CardTitle>
                      <CardDescription>
                        <p className="text-lg font-semibold">
                          {appointment.clientName}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {appointment.description}
                        </p>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))
          ) : (
            <p>No appointments for this date.</p>
          )}
        </div>
      </div>
    </div>
  );
}
