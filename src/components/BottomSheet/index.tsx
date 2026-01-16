import { View, Text } from 'react-native';
import React from 'react';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import Button from '../Button';
import styles from './style';
import { verticalScale } from '../../helper/Scaling';
import { colors } from '../../utils/colors';

type SimpleBottomSheetProps = {
  height: number;
  ref: any;
  onClose: () => void;
  onLogout: () => void;
};

const SimpleBottomSheet = ({
  height,
  ref,
  onClose,
  onLogout,
}: SimpleBottomSheetProps) => {
  return (
    <BottomSheetModal
      ref={ref}
      handleIndicatorStyle={{
        backgroundColor: colors.primary,
        opacity: 0,
      }}
      handleStyle={{
        borderTopLeftRadius: 50,
        backgroundColor: colors.primary,
        borderTopRightRadius: 50,
      }}
      backgroundStyle={{
        borderRadius: 30,
      }}
    >
      <BottomSheetView
        style={[styles.contentContainer, { height: verticalScale(height) }]}
      >
        <Text style={styles.bottomSheetText}>
          Are you sure you want to log out?
        </Text>
        <View style={styles.buttonContainer}>
          <Button varient="lg" text="Cancel" onPress={onClose} select="" />
          <Button
            varient="lg"
            text="Yes, logout"
            onPress={onLogout}
            select="Yes, logout"
          />
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default SimpleBottomSheet;
