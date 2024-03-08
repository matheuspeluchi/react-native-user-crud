import React, { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import styles from "./styles";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <SafeAreaProvider style={styles.container}>{children}</SafeAreaProvider>
  );
};

export default Container;
