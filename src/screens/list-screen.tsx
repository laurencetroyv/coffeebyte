import React from 'react';
import { CustomContainer, CustomText, DiagnosisComponent } from '../components';
import { View } from 'react-native';
import { formatDate, groupDiagnosesByDate } from '../functions/helper';
import { DiagnosisProps } from '../types';

export default function ListsScreen() {
  const diagnoses: DiagnosisProps[] = [
    {
      createdAt: new Date(),
      id: '0',
      image: 'https://robohash.org/0?set=set4',
      name: 'Test 0',
    },
    {
      createdAt: new Date(),
      id: '01',
      image: 'https://robohash.org/01?set=set4',
      name: 'Test 1',
    },
    {
      createdAt: new Date(),
      id: '02',
      image: 'https://robohash.org/02?set=set4',
      name: 'Test 2',
    },
    {
      createdAt: new Date(2024, 10, 8),
      id: '03',
      image: 'https://robohash.org/03?set=set4',
      name: 'Test 3',
    },
    {
      createdAt: new Date(2024, 10, 8),
      id: '04',
      image: 'https://robohash.org/04?set=set4',
      name: 'Test 4',
    },
    {
      createdAt: new Date(2024, 10, 8),
      id: '05',
      image: 'https://robohash.org/05?set=set4',
      name: 'Test 5',
    },
    {
      createdAt: new Date(2024, 10, 7),
      id: '06',
      image: 'https://robohash.org/06?set=set4',
      name: 'Test 6',
    },
    {
      createdAt: new Date(2024, 10, 6),
      id: '07',
      image: 'https://robohash.org/07?set=set4',
      name: 'Test 7',
    },
    {
      createdAt: new Date(2024, 10, 5),
      id: '08',
      image: 'https://robohash.org/08?set=set4',
      name: 'Test 8',
    },
  ];

  const groupedDiagnoses = groupDiagnosesByDate(diagnoses);

  return (
    <CustomContainer>
      <View className="p-6">
        <CustomText className="text-primary font-bold text-3xl text-center">
          Recent Diagnosis
        </CustomText>

        {Object.entries(groupedDiagnoses).map(([date, diagnosisGroup]) => (
          <View key={date}>
            <CustomText className="font-bold text-gray-600 mt-4 mb-4">
              {formatDate(date)}
            </CustomText>
            {diagnosisGroup.map((diagnosis, index) => (
              <DiagnosisComponent diagnosis={diagnosis} key={index} />
            ))}
          </View>
        ))}
      </View>
    </CustomContainer>
  );
}
