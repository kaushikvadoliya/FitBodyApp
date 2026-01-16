import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import styles from './style';
import { colors } from '../../utils/colors';

type NotificationItemtype = {
  id: string;
  icon: ImageSourcePropType;
  time: string;
  title: string;
  unread: boolean;
};

type NotificationItemProps = {
  item: NotificationItemtype;
};

const NotificationItem = ({ item }: NotificationItemProps) => {
  const [unRead, setUnRead] = useState<boolean>(item.unread);
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => setUnRead(!unRead)}
    >
      <View
        style={[
          styles.iconContainer,

          { backgroundColor: unRead ? colors.secondary : colors.primary },
        ]}
      >
        <Image
          style={styles.icon}
          tintColor={unRead ? colors.black1 : colors.white}
          resizeMode="contain"
          source={item.icon}
        />
        {unRead && <View style={styles.dot} />}
      </View>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationItem;
