import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { WebView } from "react-native-webview";
import CustomeWebView from "./CustomeWebView";

export type QuillEditorRef = {
  setDelta: (delta: any) => void;
  enable: (value: boolean) => void;
};

type Props = {
  defaultDelta?: any;
  readOnly?: boolean;
  onDeltaChange?: (delta: any) => void;
};

const QuillEditor = forwardRef<QuillEditorRef, Props>(
  ({ defaultDelta, readOnly = false, onDeltaChange }, ref) => {
    const webViewRef = useRef<WebView>(null);

    // const [uri, setUri] = useState<string | null>(null);

    // useEffect(() => {
    //   (async () => {
    //     const asset = Asset.fromModule(require());
    //     await asset.downloadAsync();

    //     // setUri(asset.uri);
    //   })();
    // }, []);

    useImperativeHandle(ref, () => ({
      setDelta(delta) {
        webViewRef.current?.postMessage(
          JSON.stringify({ type: "SET_DELTA", value: delta })
        );
      },
      enable(value) {
        webViewRef.current?.postMessage(
          JSON.stringify({ type: "ENABLE", value })
        );
      },
    }));

    return (
      <CustomeWebView
        webViewFor="EDITOR"
        webViewRef={webViewRef}
        handleOnLoadEnd={() => {
          if (defaultDelta) {
            webViewRef.current?.postMessage(
              JSON.stringify({ type: "SET_DELTA", value: defaultDelta })
            );
          }
          webViewRef.current?.postMessage(
            JSON.stringify({ type: "ENABLE", value: !readOnly })
          );
        }}
        handleOnMessage={(event) => {
          const data = JSON.parse(event.nativeEvent.data);
          if (data.type === "DELTA_CHANGE") {
            onDeltaChange?.(data.value);
          }
        }}
      />
    );
  }
);

export default QuillEditor;
