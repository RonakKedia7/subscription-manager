import {
  formatCurrency,
  formatStatusLabel,
  formatSubscriptionDateTime,
} from "@/lib/utils";
import clsx from "clsx";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const SubscriptionCard = ({
  name,
  price,
  currency,
  icon,
  billing,
  color,
  category,
  plan,
  renewalDate,
  onPress,
  expanded,
  paymentMethod,
  startDate,
  status,
}: SubscriptionCardProps) => {
  const subtitle =
    category?.trim() ||
    plan?.trim() ||
    (renewalDate ? formatSubscriptionDateTime(renewalDate) : "");

  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#00000010" }}
      style={({ pressed }) => {
        const baseStyle = {
          borderRadius: 20,
          padding: 16,
        };

        const dynamicBackground =
          !expanded && color
            ? { backgroundColor: color }
            : { backgroundColor: "#1C1C1E" };

        const pressedStyle = pressed ? { opacity: 0.9 } : {};

        return [baseStyle, dynamicBackground, pressedStyle];
      }}
      className={clsx(expanded && "sub-card-expanded")}
    >
      <View className="sub-head">
        <View className="sub-main">
          <Image source={icon} className="sub-icon" />

          <View className="sub-copy">
            <Text numberOfLines={1} className="sub-title">
              {name}
            </Text>

            {!!subtitle && (
              <Text numberOfLines={1} className="sub-meta">
                {subtitle}
              </Text>
            )}
          </View>
        </View>

        <View className="sub-price-box">
          <Text className="sub-price">{formatCurrency(price, currency)}</Text>
          <Text className="sub-billing">{billing}</Text>
        </View>
      </View>

      {expanded && (
        <View className="sub-body">
          <DetailRow label="Payment" value={paymentMethod} />
          <DetailRow label="Category" value={category || plan} />
          <DetailRow
            label="Started"
            value={startDate ? formatSubscriptionDateTime(startDate) : ""}
          />
          <DetailRow
            label="Renewal"
            value={renewalDate ? formatSubscriptionDateTime(renewalDate) : ""}
          />
          <DetailRow
            label="Status"
            value={status ? formatStatusLabel(status) : ""}
          />
        </View>
      )}
    </Pressable>
  );
};

export default SubscriptionCard;

const DetailRow = ({ label, value }: { label: string; value?: string }) => {
  if (!value) return null;

  return (
    <View className="sub-row">
      <View className="sub-row-copy">
        <Text className="sub-label">{label}:</Text>
        <Text numberOfLines={1} className="sub-value">
          {value.trim()}
        </Text>
      </View>
    </View>
  );
};
