import React from 'react';
import { Image, View } from 'react-native';
import { DiagnosisProps } from '../types';
import CustomText from './custom-text';

export default function DiagnosisComponent({
  diagnosis,
}: {
  diagnosis: DiagnosisProps;
}) {
  return (
    <View className="flex-row items-center border-2 rounded-3xl border-gray-400 py-3 px-4 mb-2">
      <Image
        source={{ uri: diagnosis.image }}
        className="w-12 h-14 rounded-md mr-3"
      />
      <View className="pl-6">
        <CustomText className="font-bold text-primary text-xl">
          {diagnosis.name}
        </CustomText>
        <CustomText className="text-primary text-base">
          ID: {diagnosis.id}
        </CustomText>
      </View>
    </View>
  );
}
