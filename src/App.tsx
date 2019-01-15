import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, Root } from 'native-base';
import { observer } from "mobx-react";
import UIStore from './UIStore';

type Props = {};

@observer
export default class App extends React.Component<Props> {
  render() {
    return (
      <Root>
        <View style={styles.container}>
          <View style={styles.welcome}>
            <Button
              rounded
              onPress={UIStore.showToast}>
              <Text>Click Me!</Text>
            </Button>
          </View>
        </View>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    width: '100%',
    fontSize: 20,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
