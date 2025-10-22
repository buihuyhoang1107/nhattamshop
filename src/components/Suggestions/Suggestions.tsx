import React from "react";
import { ProductPackage, CustomerInfo } from "../../types";
import OrderForm from "../OrderForm/OrderForm";
import "./Suggestions.css";

interface SuggestionsProps {
  packages: ProductPackage[];
  onPackageSelect: (packageId: string) => void;
  selectedPackage: string;
  onSubmit: (customerInfo: CustomerInfo, selectedPackage: string) => void;
}

const Suggestions: React.FC<SuggestionsProps> = ({
  packages,
  onPackageSelect,
  selectedPackage,
  onSubmit,
}) => {
  return (
    <div id="suggestions" className="suggestions">
      <div className="suggestions-header">
        <h2>Gợi ý sản phẩm</h2>
        <p>Chọn gói sản phẩm phù hợp với nhu cầu của bạn</p>
      </div>

      <OrderForm
        packages={packages}
        selectedPackage={selectedPackage}
        onPackageSelect={onPackageSelect}
        onSubmit={onSubmit}
        showHeader={true}
        showCountdown={true}
      />
    </div>
  );
};

export default Suggestions;
