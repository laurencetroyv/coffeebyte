import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from '../../components/custom-text';
import CustomTextInput from '../../components/inputs/text-input';
import { DiagnosisProps } from '../../types';
import DiagnosisComponent from '../../components/diagnosis_component';
import { formatDate, groupDiagnosesByDate } from '../../functions/helper';
import { useNavigation } from '@react-navigation/native';

export default function ListScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const diagnoses: DiagnosisProps[] = useMemo(
    () => [
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
    ],
    [],
  );

  // Group diagnoses by date
  const filteredAndGroupedDiagnoses = useMemo(() => {
    const filteredDiagnoses = diagnoses.filter(diagnosis =>
      diagnosis.name.toLowerCase().includes(search.toLowerCase()),
    );
    return groupDiagnosesByDate(filteredDiagnoses);
  }, [diagnoses, search]);

  return (
    <SafeAreaView className="flex-1">
      <View className="px-12 flex-1 justify-between">
        <View className="pt-12" />
        <CustomTextInput
          placeholder="Search"
          onChangeText={value => setSearch(value)}
          className="mb-4"
        />

        <CustomText className="text-primary font-bold text-3xl text-center mb-4">
          Recent Diagnosis
        </CustomText>

        <View className="flex-1 overflow-hidden gap-3">
          {Object.entries(filteredAndGroupedDiagnoses).map(
            ([date, diagnosisGroup]) => (
              <View key={date}>
                <CustomText className="font-bold text-gray-600 mt-2 mb-2">
                  {formatDate(date)}
                </CustomText>
                {diagnosisGroup.map((diagnosis, index) => (
                  <DiagnosisComponent diagnosis={diagnosis} key={index} />
                ))}
              </View>
            ),
          )}
        </View>

        <Button
          mode="contained"
          onPress={() => navigation.navigate('lists')}
          buttonColor="#3E735B"
          textColor="#fff"
          className="w-full mt-4">
          See More
        </Button>
      </View>
      <View className="pb-4" />
    </SafeAreaView>
  );
}
