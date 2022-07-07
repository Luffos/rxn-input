# rxn-keylistener
🎮‎ ‎ ⌨️‎ ‎ Cross Platform Key Listener for React and React Native.

Support:

| Android |   IOS   | Web | Expo |
|:-------:|:-------:|:---:|:----:|
|    ✅   |   🚧   | ✅  |  ❌ |

Inspired by [react-native-keyevent](https://github.com/kevinejohn/react-native-keyevent)

##  Install

Using NPM
```sh
npm install rxn-keylistener
```

Using Yarn
```sh
yarn add rxn-keylistener
```

## Setup

<table>
  <tr>
    <td align="center"><img width="46" src="https://cdn.vox-cdn.com/thumbor/kL-Z76ZSmU6AUOBanezRDqSQ7us=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19086219/Android_logo_stacked__RGB_.jpg"/><br/>Android</td>
     <td align="center"><img width="46" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfnunL1fJZICp_7tCdH7lqBZ6K8CXgBGFu4Q&usqp=CAU"/><br/>IOS</td>
  </tr>
  <tr>
    <td align="center"><a href="./docs/ANDROID_SETUP.md">See instructions here</a></td>
    <td align="center">Working on it...</td>
  </tr>
 </table>

🌐 Using this module for Web?<br/>Don't forget to setup [react-native-web](https://github.com/necolas/react-native-web)

## Usage

```typescript
import KeyListener from "rxn-keylistener";

const App = () => {
  const handleKeyDown = useCallback((e) => {
    // Your implementation here
  }, []);

  const handleKeyUp = useCallback((e) => {
    // Your implementation here
  }, []);

  useEffect(() => {
    const keyDownListener = KeyListener.addListener("keydown", handleKeyDown);
    const keyUpListener = KeyListener.addListener("keyup", handleKeyUp);

    return () => {
      KeyListener.removeListener(keyDownListener);
      KeyListener.removeListener(keyUpListener);
    };
  }, [handleKeyDown, handleKeyUp]);

  return <></>;
};
```

## Contributors

<a href = "https://github.com/Luffos/rxn-units/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=Luffos/rxn-keylistener"/>
</a>

##  License
MIT - This module was built with ❤️ by [Luffos](https://github.com/Luffos)<br/>Feel free for modify, edit, copy, fork and share
