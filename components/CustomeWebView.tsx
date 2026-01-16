import useTheme from "@/hooks/useTheme";
import { Asset } from "expo-asset";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

export type QuillEditorRef = {
  setDelta: (delta: any) => void;
  enable: (value: boolean) => void;
};

type Props = {
  handleOnLoadEnd?: () => void;
  handleOnMessage?: (event: any) => void;
  webViewFor: "EDITOR" | "VIEWER";
  webViewRef: React.RefObject<WebView<{}> | null>;
};

const CustomeWebView = ({
  webViewFor,
  handleOnLoadEnd,
  handleOnMessage,
  webViewRef,
}: Props) => {
  const [uri, setUri] = useState<string | null>(null);
  const { colors } = useTheme();

  useEffect(() => {
    (async () => {
      let asset: Asset | undefined;
      if (webViewFor === "EDITOR") {
        asset = Asset.fromModule(require("../assets/quill/editor.html"));
        // await asset.downloadAsync();
      } else if (webViewFor === "VIEWER") {
        asset = Asset.fromModule(require("../assets/quill/viewer.html"));
      }
      if (asset === undefined) return;
      await asset.downloadAsync();

      setUri(asset.uri);
    })();
  }, []);

  if (!uri) return null; // or loading indicator

  return (
    <View style={{ flex: 1 }}>
      <WebView
        ref={webViewRef}
        originWhitelist={["*"]}
        source={{
          uri,
        }}
        javaScriptEnabled
        domStorageEnabled
        allowFileAccess
        allowUniversalAccessFromFileURLs
        onLoadEnd={handleOnLoadEnd}
        onMessage={handleOnMessage}
        style={{ backgroundColor: colors.surface }}
      />
    </View>
  );
};

export default CustomeWebView;
