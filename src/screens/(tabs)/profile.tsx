import { useColorScheme } from 'nativewind';
import React, { useContext, useState } from 'react';
import { Image, View } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import { AuthContext } from '../../providers/auth-provider';
import CustomContainer from '../../components/screen-container';
import CustomText from '../../components/custom-text';
import ProfileInfoContainer from '../../components/profile-info-container';
import CustomTextInput from '../../components/inputs/text-input';

export default function ProfileScreen() {
  const [comment, setComment] = useState('');
  const [showModal, setShowModal] = useState(false);
  const context = useContext(AuthContext);
  const isDark = useColorScheme().colorScheme === 'dark' ? true : false;

  const dialogAction = async () => {
    console.log(comment);
    setShowModal(!showModal);
    setComment('');
  };

  return (
    <CustomContainer>
      <View className="flex-1 items-center justify-center gap-4 p-8">
        <Image
          source={{ uri: context.user?.avatar }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <CustomText className="text-4xl font-bold leading-none dark:text-[#81c7a7] text-[#3E735B]">
          {context.user?.firstName}
        </CustomText>
        <CustomText className="text-lg font-bold leading-none dark:text-[#81c7a7] text-[#3E735B]">
          {context.user?.email}
        </CustomText>
        <ProfileInfoContainer
          label="First Name"
          value={context.user!.firstName}
        />
        <ProfileInfoContainer
          label="Last Name"
          value={context.user!.lastName}
        />
        <ProfileInfoContainer label="Email" value={context.user!.email} />
        <ProfileInfoContainer label="Phone" value={context.user!.phoneNumber} />
        <ProfileInfoContainer
          label="Date of Birth"
          value={new Date(context.user!.dateOfBirth).toLocaleDateString(
            'en-US',
          )}
        />

        <View className="w-4/5 gap-4 mt-6">
          <Button
            mode="contained"
            buttonColor="#3E735B"
            textColor="#FFF"
            onPress={() => setShowModal(!showModal)}>
            Give Feedback
          </Button>
          <Button
            mode="outlined"
            textColor="#3E735B"
            style={{ borderColor: '#3E735B' }}
            onPress={() => context.logout()}>
            Logout
          </Button>
        </View>

        <Portal>
          <Dialog
            visible={showModal}
            dismissable={false}
            style={{
              backgroundColor: isDark ? '#1A202C' : '#F2F1EC',
            }}>
            <Dialog.Title
              style={{
                textAlign: 'center',
                color: isDark ? '#81c7a7' : '#3E735B',
              }}>
              Help us Improve
            </Dialog.Title>
            <Dialog.Content>
              <CustomText className="text-xl dark:text-[#81c7a7] text-[#3E735B] text-center">
                Share your experience to help us improve.
              </CustomText>
              <CustomTextInput
                className="mt-4"
                numberOfLines={4}
                multiline
                onChangeText={setComment}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                mode="contained"
                buttonColor="#3E735B"
                textColor="#FFF"
                onPress={dialogAction}
                style={{ width: '50%', alignSelf: 'center' }}>
                Submit Feedback
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </CustomContainer>
  );
}
