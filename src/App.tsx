import React, { useState } from "react";
import "./App.css";
import CustomerFeedback from "./components/CustomerFeedback/CustomerFeedback";
import Description from "./components/Description/Description";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import OrderModal from "./components/OrderModal/OrderModal";
import Overview from "./components/Overview/Overview";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import ProductSlide from "./components/ProductSlide/ProductSlide";
import Reviews from "./components/Reviews/Reviews";
import Suggestions from "./components/Suggestions/Suggestions";
import { useScrollToSection } from "./hooks/useScrollToSection";
import {
  Certification,
  CustomerInfo,
  HairProblem,
  Product,
  ProductBenefit,
  ProductPackage,
  Review,
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
    "/img/slide_img1.jpg",
    "/img/slide_img2.jpg",
    "/img/slide_img3.jpg",
    "/img/slide_img4.jpg",
    "/img/slide_img5.jpg",
    "/img/slide_img6.jpg",
    "/img/slide_img7.jpg",
  ];

  // Product data
  const product: Product = {
    id: "1",
    name: "Long Thành Phát Shampoo",
    title:
      "Long Thành Phát - Trùm về các sản phẩm mọc râu - mọc tóc tại Việt Nam",
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
      image: "/img/problems-grid1.png",
    },
    {
      id: "2",
      title: "Tóc mỏng",
      description:
        "Tóc mỏng lộ da đầu – mất tự tin, ngại giao tiếp, ngại cả nhìn chính mình trong gương.",
      image: "/img/problems-grid2.png",
    },
    {
      id: "3",
      title: "Thử nhiều sản phẩm",
      description:
        "Đã thử đủ loại dầu gội – nhưng tóc vẫn khô, rụng, chẳng thấy gì khá hơn.",
      image: "/img/problems-grid3.png",
    },
    {
      id: "4",
      title: "Tóc khô xơ",
      description:
        "Tóc khô xơ, chẻ ngọn, xù rối – nhìn già hơn tuổi thật, mất hẳn sức sống",
      image: "/img/problems-grid4.png",
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
      images: ["/img/imgi_57_gif.gif", "/img/imgi_58_gif.gif"],
    },
  ];

  // Reviews data
  const reviews: Review[] = [
    {
      id: "1",
      userName: "Tr** N***g",
      userAvatar: "/img/khach0.jpg",
      rating: 5,
      itemDetail: "1 cặp",
      comment:
        "Gội 2 tuần thì thấy tóc bắt đầu mọc lên nhiều, Mùi hoa thơm lâu, quạn trọng k bị gàu và k bết mãi đỉnh",
      images: [
        "/img/imgi_74_jpeg.jpg",
        "/img/imgi_75_jpeg.jpg",
        "/img/imgi_76_jpeg.jpg",
      ],
      date: "2024-01-15",
    },
    {
      id: "2",
      userName: "L* N***n",
      userAvatar: "/img/khach7.jpg",
      rating: 5,
      itemDetail: "2 cặp",
      comment:
        "Đúng như anh giới thiệu, quá nhiều tính năng, phục hồi, kích mọc, lại còn trị gàu, quá đỉnh nhaaaaa <3",
      images: [
        "/img/imgi_77_jpeg.jpg",
        "/img/imgi_78_jpeg.jpg",
        "/img/imgi_79_jpeg.jpg",
      ],
      date: "2024-01-14",
    },
    {
      id: "3",
      userName: "T***h T**g",
      userAvatar: "/img/khach2.jpg",
      rating: 5,
      itemDetail: "1 cặp",
      comment: "Sản phẩm rất tốt, tóc mọc nhiều hơn sau 1 tháng sử dụng",
      images: [
        "/img/imgi_82_jpeg.jpg",
        "/img/imgi_83_jpeg.jpg",
        "/img/imgi_84_jpeg.jpg",
      ],
      date: "2024-01-13",
    },
    {
      id: "4",
      userName: "M** T***n",
      userAvatar: "/img/khach3.jpg",
      rating: 5,
      itemDetail: "3 cặp",
      comment:
        "Đợt chồng mình lo làm việc nên tóc rụng muốn hói cả đầu. Mình mua ngay cho chồng 3 hộp để sài dần. Hôm nay thấy chồng nhìn trẻ ra hẳn. Đánh giá 5 sao cho sản phẩm",
      images: [
        "/img/imgi_85_jpeg.jpg",
        "/img/imgi_86_jpeg.jpg",
        "/img/imgi_87_jpeg.jpg",
      ],
      date: "2024-01-12",
    },
    {
      id: "5",
      userName: "H** L***n",
      userAvatar: "/img/khach4.jpg",
      rating: 5,
      itemDetail: "2 cặp",
      comment:
        "Eo ơi k nghĩ giá này mà được cặp gội xịn như vậy, cả gội cả hấp, bình thường hấp tại salon đã 500k rùi. Đỉnh nha",
      images: [
        "/img/imgi_88_jpeg.jpg",
        "/img/imgi_89_jpeg.jpg",
        "/img/imgi_90_png.png",
      ],
      date: "2024-01-11",
    },
    {
      id: "6",
      userName: "N** T***m",
      userAvatar: "/img/khach7.jpg",
      rating: 5,
      itemDetail: "1 cặp",
      comment:
        "Tóc mình trước đây rất yếu và hay rụng. Sau khi dùng Long Thành Phát được 3 tuần, tóc đã chắc khỏe hơn nhiều. Cảm ơn anh!",
      images: [
        "/img/imgi_78_jpeg.jpg",
        "/img/imgi_79_jpeg.jpg",
        "/img/imgi_80_jpeg.jpg",
      ],
      date: "2024-01-10",
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
      name: "CB1: 1 GỘI + 1 HẤP (620K)",
      price: 620000,
      isHot: false,
      isSuperDeal: false,
      isFreeship: false,
      description: "Gói cơ bản với 1 chai dầu gội và 1 chai dầu xả",
    },
    {
      id: "CB2",
      name: "CB2: 1 GỘI + 1 HẤP + 1 XỊT PHỤC HỒI (695K - FREESHIP) HOT",
      price: 695000,
      isHot: true,
      isSuperDeal: false,
      isFreeship: false,
      description: "Gói combo với dầu gội, dầu xả và xịt phục hồi",
    },
    {
      id: "CB3",
      name: "CB3: 2 GỘI + 1 HẤP TẶNG 1 XỊT PHỤC HỒI (895K - FREESHIP) HOT",
      price: 895000,
      isHot: true,
      isSuperDeal: false,
      isFreeship: false,
      description:
        "Gói tiết kiệm với 2 chai dầu gội, 1 chai dầu xả và tặng xịt phục hồi",
    },
    {
      id: "CB4",
      name: "CB4: 2 GỘI + 2 HẤP TẶNG 1 XỊT 275k (1240K - FREESHIP)",
      price: 1240000,
      isHot: true,
      isSuperDeal: true,
      isFreeship: true,
      description: "Gói siêu tiết kiệm với đầy đủ sản phẩm",
    },
    {
      id: "CB5",
      name: "KHÁCH QUEN MUA 5 CẶP TẶNG 1 CẶP + 3 XỊT PHỤC HỒI (3120K + FREE SHIP)",
      price: 3120000,
      isHot: false,
      isSuperDeal: false,
      isFreeship: true,
      description: "Gói siêu tiết kiệm với đầy đủ sản phẩm",
    },
    {
      id: "CB6",
      name: "XỊT SỐ 3 - TẶNG KIT DẦU GỘI (275K)",
      price: 275000,
      isHot: false,
      isSuperDeal: false,
      isFreeship: false,
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
      <Header
        tabs={tabs}
        activeTab={activeTab}
        onTabClick={handleTabClick}
        onOrderModalOpen={() => setIsOrderModalOpen(true)}
      />
      <div className="App">
        <ProductSlide images={productImages} />

        <ProductInfo
          product={product}
          onOrderModalOpen={() => setIsOrderModalOpen(true)}
        />

        <Overview
          hairProblems={hairProblems}
          productBenefits={productBenefits}
        />
        <Description certifications={certifications} />

        <Reviews reviews={reviews} overallRating={4.9} totalReviews={1628} />
        <CustomerFeedback />
        <Suggestions
          packages={packages}
          onPackageSelect={handlePackageSelect}
          selectedPackage={selectedPackage}
          onSubmit={handleOrderSubmit}
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
