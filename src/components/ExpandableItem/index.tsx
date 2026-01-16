import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import { colors } from '../../utils/colors';

type ExpandableItemProps = {
  title: string;
  description: string;
};

const ExpandableItem = ({ title, description }: ExpandableItemProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <TouchableOpacity
      onPress={() => setOpen(!open)}
      style={styles.mainContainer}
    >
      <View style={styles.line} />
      <View style={styles.container}>
        <Text
          style={[styles.text, { color: open ? colors.white : colors.primary }]}
        >
          {title}
        </Text>
        {open ? (
          <Image
            style={styles.icon}
            tintColor={colors.secondary}
            source={require('../../assets/icons/upArrow.png')}
            resizeMode="contain"
          />
        ) : (
          <Image
            style={styles.icon}
            tintColor={colors.secondary}
            source={require('../../assets/icons/downArrow.png')}
            resizeMode="contain"
          />
        )}
      </View>
      {open && (
        <View>
          <View style={styles.line} />
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ExpandableItem;
