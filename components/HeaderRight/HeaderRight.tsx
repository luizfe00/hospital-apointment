import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SignOut } from "@clerk/types/dist/clerk";
import colors from "../../constants/colors";

type HeaderRightProps = {
  signOut: SignOut;
};

const HeaderRight = ({ signOut }: HeaderRightProps) => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setShowMenu((prev) => !prev)}>
        <FontAwesome name="user" size={24} color="rgba(0, 0, 0, .7)" />
      </TouchableOpacity>
      {showMenu && <HeaderRightMenu signOut={signOut} />}
    </View>
  );
};

const HeaderRightMenu = ({ signOut }: HeaderRightProps) => {
  const data = [
    {
      label: "Settings",
      onPress: () => signOut(),
    },
    {
      label: "Sign Out",
      onPress: () => signOut(),
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: colors.border, height: 1 }} />
        )}
        keyExtractor={(item, index) => item.label + index}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.option} onPress={item.onPress}>
            <Text style={styles.optionText} numberOfLines={2}>
              {item.label}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    right: -10,
    backgroundColor: colors.lightBackground,
    minWidth: 120,
    borderRadius: 12,
    top: 36,
    position: "absolute",
  },
  option: {
    padding: 12,
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
  },
});
