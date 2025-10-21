import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductSlide from "./components/ProductSlide/ProductSlide";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import Overview from "./components/Overview/Overview";
import Reviews from "./components/Reviews/Reviews";
import Description from "./components/Description/Description";
import Suggestions from "./components/Suggestions/Suggestions";
import Footer from "./components/Footer/Footer";
import OrderModal from "./components/OrderModal/OrderModal";
import { useScrollToSection } from "./hooks/useScrollToSection";
import {
  Product,
  Review,
  HairProblem,
  ProductBenefit,
  Certification,
  ProductPackage,
  CustomerInfo,
} from "./types";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("CB1");
  const { scrollToSection } = useScrollToSection();

  // Navigation tabs
  const tabs = [
    { id: "overview", label: "Tổng quan", isActive: activeTab === "overview" },
    { id: "reviews", label: "Đánh giá", isActive: activeTab === "reviews" },
    {
      id: "description",
      label: "Mô tả",
      isActive: activeTab === "description",
    },
    {
      id: "suggestions",
      label: "Đề xuất",
      isActive: activeTab === "suggestions",
    },
  ];

  // Product images for slide
  const productImages = [
    "/img/slide_1.jpg",
    "/img/slide_2.jpg", 
    "/img/slide_3.jpg"
  ];

  // Product data
  const product: Product = {
    id: "1",
    name: "MQG Shampoo",
    title: "MQG - Bí quyết phục hồi và mọc tóc chuyên sâu",
    rating: 4.9,
    reviewCount: 62.3,
    soldCount: "368.2K",
    price: 620000,
    originalPrice: 1000000,
    discount: 40,
    isMall: true,
    isTopProduct: true,
    features: [
      "Thanh toán bảo mật",
      "Đổi trả dễ dàng",
      "Đội ngũ hỗ trợ TikTok",
    ],
  };

  // Hair problems data
  const hairProblems: HairProblem[] = [
    {
      id: "1",
      title: "Rụng tóc",
      description:
        "Rụng tóc từng nắm mỗi lần gội – chạm nhẹ cũng rụng, chải nhẹ cũng đau lòng.",
      image: "/img/slide_1.jpg",
    },
    {
      id: "2",
      title: "Tóc mỏng",
      description:
        "Tóc mỏng lộ da đầu – mất tự tin, ngại giao tiếp, ngại cả nhìn chính mình trong gương.",
      image: "/img/slide_1.jpg",
    },
    {
      id: "3",
      title: "Thử nhiều sản phẩm",
      description:
        "Đã thử đủ loại dầu gội – nhưng tóc vẫn khô, rụng, chẳng thấy gì khá hơn.",
      image: "/img/slide_1.jpg",
    },
    {
      id: "4",
      title: "Tóc khô xơ",
      description:
        "Tóc khô xơ, chẻ ngọn, xù rối – nhìn già hơn tuổi thật, mất hẳn sức sống",
      image: "/img/slide_1.jpg",
    },
  ];

  // Product benefits data
  const productBenefits: ProductBenefit[] = [
    {
      id: "1",
      title: "DƯỠNG TÓC TỪ GỐC",
      description:
        "Chiết xuất Biotin – Collagen – Keratin đi sâu vào chân tóc, nuôi dưỡng nang tóc chắc khỏe, giúp sợi tóc không còn gãy rụng từng nằm.",
      features: [
        "Khác biệt lớn: Kể cả khi bạn ngưng dùng sản phẩm, tóc vẫn giữ độ chắc khỏe – không bị rụng lại như ban đầu.",
      ],
      images: ["/img/imgi_3_photo-1663835452025-1d140874c4e2.jpg"],
    },
  ];

  // Reviews data
  const reviews: Review[] = [
    {
      id: "1",
      userName: "Tr** N***g",
      userAvatar: "/img/slide_2.jpg",
      rating: 5,
      itemDetail: "1 cặp",
      comment:
        "Gội 2 tuần thì thấy tóc bắt đầu mọc lên nhiều, Mùi hoa thơm lâu, quạn trọng k bị gàu và k bết Nhật Tâm mãi đỉnh",
      images: [
        "/img/slide_3.jpg",
        "/img/slide_3.jpg",
        "/img/slide_3.jpg",
      ],
      date: "2024-01-15",
    },
    {
      id: "2",
      userName: "L* N***n",
      userAvatar: "/img/slide_2.jpg",
      rating: 5,
      itemDetail: "2 cặp",
      comment:
        "Đúng như anh Tâm giới thiệu, quá nhiều tính năng, phục hồi, kích mọc, lại còn trị gàu, quá đỉnh nhaaaaa <3",
      images: [
        "/img/slide_3.jpg",
        "/img/slide_3.jpg",
        "/img/slide_3.jpg",
      ],
      date: "2024-01-14",
    },
    {
      id: "3",
      userName: "T***h T**g",
      userAvatar: "/img/slide_2.jpg",
      rating: 5,
      itemDetail: "1 cặp",
      comment: "Sản phẩm rất tốt, tóc mọc nhiều hơn sau 1 tháng sử dụng",
      images: ["/img/imgi_3_photo-1663835452025-1d140874c4e2.jpg"],
      date: "2024-01-13",
    },
  ];

  // Certifications data
  const certifications: Certification[] = [
    {
      id: "1",
      title: "Giấy tờ công bố kiểm nghiệm",
      document: "/img/imgi_3_photo-1663835452025-1d140874c4e2.jpg",
      images: [
        "/img/slide_3.jpg",
        "/img/slide_3.jpg",
        "/img/slide_3.jpg",
        "/img/slide_3.jpg",
        "/img/slide_3.jpg",
      ],
    },
  ];

  // Product packages data
  const packages: ProductPackage[] = [
    {
      id: "CB1",
      name: "1 GỘI + 1 HẤP (620K)",
      price: 620000,
      isHot: false,
      isSuperDeal: false,
      isFreeship: false,
      description: "Gói cơ bản với 1 chai dầu gội và 1 chai dầu xả",
    },
    {
      id: "CB2",
      name: "1 GỘI + 1 HẤP + 1 XỊT PHỤC HỒI (695K - FREESHIP) HOT",
      price: 695000,
      isHot: true,
      isSuperDeal: false,
      isFreeship: true,
      description: "Gói combo với dầu gội, dầu xả và xịt phục hồi",
    },
    {
      id: "CB3",
      name: "2 GỘI + 1 HẤP TẶNG 1 XỊT PHỤC HỒI (895K - FREESHIP) HOT",
      price: 895000,
      isHot: true,
      isSuperDeal: false,
      isFreeship: true,
      description:
        "Gói tiết kiệm với 2 chai dầu gội, 1 chai dầu xả và tặng xịt phục hồi",
    },
    {
      id: "CB4",
      name: "2 GỘI + 2 HẤP TẶNG 1 XỊT PHỤC HỒI (1240K - FREESHIP) HOT SIÊU HỜI",
      price: 1240000,
      isHot: true,
      isSuperDeal: true,
      isFreeship: true,
      description: "Gói siêu tiết kiệm với đầy đủ sản phẩm",
    },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    scrollToSection(tabId);
  };

  const handleStoreClick = () => {
    alert("Chuyển đến cửa hàng");
  };

  const handleChatClick = () => {
    alert("Mở chat");
  };

  const handleAddToCart = () => {
    setIsOrderModalOpen(true);
  };

  const handleBuyNow = () => {
    setIsOrderModalOpen(true);
  };

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
  };

  const handleOrderSubmit = (
    customerInfo: CustomerInfo,
    selectedPackageId: string
  ) => {
    console.log("Order submitted:", { customerInfo, selectedPackageId });
    alert("Đặt hàng thành công!");
  };

  return (
    <>
      <Header tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
      <div className="App">
        <ProductSlide images={productImages} />

        <ProductInfo product={product} />

        <Overview
          hairProblems={hairProblems}
          productBenefits={productBenefits}
        />

        <Reviews reviews={reviews} overallRating={4.9} totalReviews={1628} />

        <Description certifications={certifications} />

        <Suggestions
          packages={packages}
          onPackageSelect={handlePackageSelect}
          selectedPackage={selectedPackage}
        />

        <Footer
          onStoreClick={handleStoreClick}
          onChatClick={handleChatClick}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />

        <OrderModal
          isOpen={isOrderModalOpen}
          onClose={() => setIsOrderModalOpen(false)}
          packages={packages}
          onSubmit={handleOrderSubmit}
        />
      </div>
    </>
  );
};

export default App;
