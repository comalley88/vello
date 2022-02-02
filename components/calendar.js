import React, {useState, Fragment, useCallback} from 'react';
import {StyleSheet, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { startDate } from '../features/date';
import {endDate } from '../features/endDate'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment';


const CalendarStartDate = () => {

const dispatch = useDispatch();

const reducerDate  = useSelector((state) => state.startDate.value)

const today = new Date().toISOString().split('T')[0];

const start = reducerDate || today

const [selected, setSelected] = useState(start);

const onDayPress = (day) => {
    setSelected(day.dateString);
    dispatch(startDate(day.dateString))
  };

    return (
        <Calendar
          enableSwipeMonths
          current={today}
          onDayPress={onDayPress}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: '#004282',
              selectedTextColor: 'white'
            }
          }}
        />
    );
 
  };

  const CalendarEndDate = () => {

    const dispatch = useDispatch();

    const reducerDate  = useSelector((state) => state.startDate.value)

    const [selected, setSelected] = useState('');

    const periodDates = []

    let startDate = new Date(reducerDate)
    let range = new Date(selected).getTime() - new Date(reducerDate).getTime()
    let rangeinDays = (range /(1000*3600*24))

    for (let i = 0; i <= rangeinDays; i++) {
        var rawDate = new Date().setDate(startDate.getDate() + i)
        var formattedDate = new Date(rawDate).toISOString().split('T')[0]
        periodDates.push(formattedDate)
    }

    let newDaysObject = {};

    if(periodDates.length<1){
      newDaysObject = {[reducerDate] : {startingDay: true, color: '#004282', textColor: 'white'}}
    }
    periodDates.forEach((day) => {
      if(day===reducerDate){
        newDaysObject[day] = {startingDay: true, color: '#004282', textColor: 'white'};
      }else if(day===selected){
        newDaysObject[day] = {selected: true, endingDay: true, color: '#004282', textColor: 'white'}
      } else {
        newDaysObject[day] = {
          color: '#004282',
          textColor: 'white'
      };
      }
    });

    const onDayPress = (day) => {
        setSelected(day.dateString);
        dispatch(endDate(day.dateString))
      };
    
        return (
            <Calendar
              enableSwipeMonths
              current={reducerDate}
              markingType={'period'}
              onDayPress={onDayPress}
              markedDates={newDaysObject}
            />
        );
     
      };

export {CalendarStartDate, CalendarEndDate}