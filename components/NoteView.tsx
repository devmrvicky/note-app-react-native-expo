import React, { useRef } from "react";
import { WebView } from "react-native-webview";
import CustomeWebView from "./CustomeWebView";

export default function NoteView({ delta }: { delta: any }) {
  const webViewRef = useRef<WebView>(null);

  return (
    <CustomeWebView
      webViewFor="VIEWER"
      webViewRef={webViewRef}
      handleOnLoadEnd={() => {
        webViewRef.current?.postMessage(
          JSON.stringify({ type: "SET_DELTA", value: delta })
        );
      }}
    />
  );
}
