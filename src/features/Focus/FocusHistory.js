import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";

import { fontSize, Spacing, spacing } from "../../utils/Size";
import { RoundedButton } from "../../components/RoundedButton";
import { colors } from "../../utils/Color";

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.HistoryItem(item.status)}>{item.subject}</Text>;
};
export const FocusHistroy = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: "center" }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things we've focused on</Text>

            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: "center" }}
              data={focusHistory}
              renderItem={HistoryItem}
            />

            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => {
                  onClear();
                }}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  HistoryItem: (status) => ({
    color: status > 1 ? "red" : "green",
    fontSize: fontSize.md,
  }),
  title: {
    color: colors.white,
    fontSize: fontSize.lg,
  },
  clearContainer: {
    alignItems: "center",
    marginBottom: Spacing.md,
  },
});
