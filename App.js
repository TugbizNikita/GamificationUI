import React, { useEffect, useMemo, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack, MainStack, MyTabs } from "./src/Utils";
import { View, StatusBar } from "react-native";
import { AuthContext } from "./src/Context/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import Toast from "react-native-tiny-toast";
import { Init } from "./src/store/actions";
import { ActivityIndicator } from "react-native-paper";
import { store } from "./src/store";

import { Provider, useDispatch, useSelector } from "react-redux";

const RootNavigation = () => {
  const userToken = useSelector((state) => state.Reducers.authToken);
  console.log("New==>", userToken);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar />
      {userToken === null ? <AuthStack /> : <MainStack />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
