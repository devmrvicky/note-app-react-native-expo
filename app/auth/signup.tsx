import Input from "@/components/Input";
import Logo from "@/components/Logo";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SignupScreen() {
  const { colors } = useTheme();
  return (
    <View style={{ ...styles.container, backgroundColor: colors.surface }}>
      {/* Logo */}
      <Logo />
      <View style={{ ...styles.formContainer, backgroundColor: colors.bg }}>
        <Text style={{ ...styles.title, color: colors.text }}>Signup</Text>
        {/* Email Signup */}
        <View style={styles.form}>
          <Input
            colors={colors}
            Icon={
              <Ionicons
                name="mail-outline"
                size={24}
                color={colors.textMuted}
              />
            }
            placeholder="Email"
            inputType="email"
            keybordType="email-address"
          />

          <Input
            colors={colors}
            Icon={
              <Ionicons
                name="lock-closed-outline"
                size={24}
                color={colors.textMuted}
              />
            }
            placeholder="Password"
            secureTextEntry
          />
          <Input
            colors={colors}
            Icon={
              <Ionicons
                name="lock-closed-outline"
                size={24}
                color={colors.textMuted}
              />
            }
            placeholder="Confirm password"
            secureTextEntry
          />

          <TouchableOpacity
            style={{ ...styles.signupBtn, backgroundColor: colors.primary }}
          >
            <Text style={{ ...styles.signupText }}>Sign up with Email</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={{ ...styles.line, backgroundColor: colors.textMuted }} />
          <Text style={{ ...styles.or, color: colors.textMuted }}>OR</Text>
          <View style={{ ...styles.line, backgroundColor: colors.textMuted }} />
        </View>

        {/* Google Signup */}
        <TouchableOpacity
          style={{ ...styles.googleBtn, borderColor: colors.border }}
          onPress={() => {}}
        >
          <Ionicons name="logo-google" size={20} color={colors.text} />
          <Text style={{ ...styles.googleText, color: colors.text }}>
            Sign up with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingHorizontal: 10,
    justifyContent: "center",
    gap: 24,
  },
  formContainer: {
    flex: 1,
    borderRadius: 10,
    padding: 20,
  },
  form: {
    gap: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 50,
    gap: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  signupBtn: {
    backgroundColor: "#000",
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  signupText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  or: {
    marginHorizontal: 12,
    color: "#666",
    fontWeight: "500",
  },
  googleBtn: {
    flexDirection: "row",
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  googleText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
