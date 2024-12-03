import React, { useEffect } from 'react';
import { ViewStyle, TextStyle, Pressable, StyleSheet } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { icons } from '@/constants/icons';

type TabBarButtonProps = {
  isFocused: boolean;
  label: string;
  routeName: keyof typeof icons; 
  color: string;
} & React.ComponentProps<typeof Pressable>;

const TabBarButton: React.FC<TabBarButtonProps> = (props) => {
  const { isFocused, label, routeName, color, ...pressableProps } = props;

  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, { damping: 10 });
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);
    const top = interpolate(scale.value, [0, 1], [0, 8]);

    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      opacity,
    };
  });

  return (
    <Pressable {...pressableProps} style={styles.container}>
      <Animated.View style={animatedIconStyle}>
        {icons[routeName]({ color })}
      </Animated.View>
      <Animated.Text style={[{ color, fontSize: 11 }, animatedTextStyle]}>
        {label}
      </Animated.Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
});

export default TabBarButton;
