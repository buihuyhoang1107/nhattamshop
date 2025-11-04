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
  const [selectedPackage, setSelectedPackage] = useState("1");
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
    "/img/slide_img6.jpg",
    "/img/slide_img5.jpg",
    "/img/slide_img8.jpg",
    "/img/slide_img1.jpg",
    "/img/slide_img2.jpg",
    "/img/slide_img7.jpg",
    "/img/slide_img4.jpg",
  ];

  // Product data
  const product: Product = {
    id: "1",
    name: "Long Thành Phát Shampoo",
    title:
      "Minoxidil 5% ,Sản Phẩm Kích Thích Mọc Râu - Mọc Tóc - Mọc Lông Mày Và Lông Cơ Thể",
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
        "Tóc thưa, rụng từng mảng – hói dần vùng trán, đỉnh đầu khiến mất tự tin.",
      image: "/img/problems-grid1.png",
    },
    {
      id: "2",
      title: "Tóc mỏng",
      description:
        "Râu mọc lưa thưa, không đều – nhìn kém nam tính, khó tạo phong c",
      image: "/img/problems-grid2.png",
    },
    {
      id: "3",
      title: "Thử nhiều sản phẩm",
      description: "Lông mày thưa, nhạt màu – khuôn mặt thiếu thần thái.",
      image: "/img/problems-grid3.png",
    },
    {
      id: "4",
      title: "Tóc khô xơ",
      description:
        "Dù thử nhiều sản phẩm mọc tóc, mọc râu, mọc lông mày – nhưng vẫn không thấy hiệu quả rõ rệt.",
      image: "/img/problems-grid4.png",
    },
  ];

  // Product benefits data
  const productBenefits: ProductBenefit[] = [
    {
      id: "1",
      title: "",
      description:
        "Giúp Kích Thích Mọc Tóc . Giải Quyết Được Tình Trạng Rụng Tóc Hói Đầu. khiến Bạn Tự Tin Hơn",
      features: [
        "Cải Thiện Vấn Đề Lông Mày Thưa Thớt. Minoxidil 5% Sẽ Giúp Bạn Có 1 Bộ Lông Mày Đẹp Rậm Rạp Hơn. Minoxidil 5% Sẽ Giúp Bạn Có Được Bộ Râu Đẹp Như Ý Mà Bạn Hằng Mong Ước. Giúp Bạn Trông Nam Tính Và Tự Tin Hơn",
      ],
      images: ["/img/problems-grid1.png", "/img/problems-grid2.png"],
    },
  ];

  // Reviews data
  const reviews: Review[] = [
    {
      id: "1",
      userName: "Tr** N***g",
      userAvatar: "/img/khach0.jpg",
      rating: 5,
      itemDetail: "Combo 1",
      comment:
        "Lần đầu tiên thấy sản phẩm mọc tóc mà hiệu quả rõ rệt như vậy. Dùng đúng hướng dẫn là tóc mọc chắc khỏe, không bị rụng lại",
      images: ["/img/imgi_74_jpeg.jpg", "/img/imgi_75_jpeg.jpg"],
      date: "2024-01-15",
    },
    {
      id: "2",
      userName: "L* N***n",
      userAvatar: "/img/khach7.jpg",
      rating: 5,
      itemDetail: "Combo 2",
      comment:
        "Sản phẩm chính hãng, đóng gói cẩn thận. Mình dùng được 2 lọ rồi, tóc dày hơn trước nhiều. Quá đáng tiền!",
      images: ["/img/imgi_77_jpeg.jpg", "/img/imgi_78_jpeg.jpg"],
      date: "2024-01-14",
    },
    {
      id: "3",
      userName: "T***h T**g",
      userAvatar: "/img/khach2.jpg",
      rating: 5,
      itemDetail: "Combo 3",
      comment:
        "Mình dùng cho cả tóc và râu, hiệu quả thật sự. Chỉ cần kiên trì một chút là thấy kết quả rõ ràng. Rất đáng để thử!",
      images: ["/img/imgi_82_jpeg.jpg"],
      date: "2024-01-13",
    },
    {
      id: "4",
      userName: "M** T***n",
      userAvatar: "/img/khach3.jpg",
      rating: 5,
      itemDetail: "Combo 1",
      comment:
        "Lọ t4 . Là các bác phải biết hiệu quả ntn rồi đấy ạ. Có hiệu quả nên vẫn kiên trì dùng tiếp đấy ạ. Trước vùng này của e hói, hiện tại dùng lọ t4 là dk như này rồi đây ạ. Và có rất nhiều tóc con cũng đang mọc nữa",
      images: ["/img/imgi_85_jpeg.jpg", "/img/imgi_87_jpeg.jpg"],
      date: "2024-01-12",
    },
    {
      id: "5",
      userName: "H** L***n",
      userAvatar: "/img/khach4.jpg",
      rating: 5,
      itemDetail: "Combo 5",
      comment:
        "Hiện tại mình đã bắt đầu sự dụng đến chai thứ ba và cũng đã có kết quả khá là tốt khi dùng hết chai thứ hai tóc con thấy mọc ra khá là nhiều, nhất là khi sự dụng loại chai mới",
      images: ["/img/imgi_89_jpeg.jpg"],
      date: "2024-01-11",
    },
    {
      id: "6",
      userName: "N** T***m",
      userAvatar: "/img/khach7.jpg",
      rating: 5,
      itemDetail: "Combo 2",
      comment:
        "Sản phẩm rất tốt, tiền nào của nấy, kiêng trị thoa lên đầu ngày 2 lần, sau 1 thời gian sử dụng đã một tóc, giá cả hợp túi tiền, nên mua mua nha m.n,",
      images: ["/img/imgi_79_jpeg.jpg", "/img/imgi_80_jpeg.jpg"],
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
      id: "1",
      name: "1 lọ Minoxidil Lẻ 299k (Chưa Tính Phí Ship)",
      price: 299000,
      isHot: false,
      isSuperDeal: false,
      isFreeship: false,
      description: "1 lọ Minoxidil Lẻ 299k (Chưa Tính Phí Ship)",
    },
    {
      id: "2",
      name: "2 Lọ Minoxidil 5% 570k (Miễn Phí Ship)",
      price: 570000,
      isHot: true,
      isSuperDeal: false,
      isFreeship: true,
      description: "2 Lọ Minoxidil 5% 570k (Miễn Phí Ship)",
    },
    {
      id: "CB01",
      name: "CB01: COMBO MỌC RÂU -LÔNG MÀY CƠ BẢN .GỒM 1 LỌ MINOXIDIL 5% + 1 ỐNG BỘT TRỘN LCLT ( 398k - Miễn Phí Ship)",
      price: 398000,
      isHot: true,
      isSuperDeal: false,
      isFreeship: true,
      description:
        "CB01: COMBO MỌC RÂU -LÔNG MÀY CƠ BẢN .GỒM 1 LỌ MINOXIDIL 5% + 1 ỐNG BỘT TRỘN LCLT ( 398k - Miễn Phí Ship)",
    },
    {
      id: "CB02",
      name: "CB02 : COMBO MỌC TÓC CƠ BẢN.GỒM 1 LỌ MINOXIDIL 5% + 1 LĂN KIM (429K - Miễn Phí Ship)",
      price: 429000,
      isHot: true,
      isSuperDeal: true,
      isFreeship: true,
      description:
        "CB02 : COMBO MỌC TÓC CƠ BẢN.GỒM 1 LỌ MINOXIDIL 5% + 1 LĂN KIM (429K - Miễn Phí Ship)",
    },
    {
      id: "CB03",
      name: "CB03: COMBO MỌC RÂU -LÔNG MÀY NÂNG CAO .GỒM 1 LỌ MINOXIDIL 5% + 1 ỐNG BỘT TRỘN LCLT + 1 LĂN KIM ( 529K - Miễn Phí Ship)",
      price: 529000,
      isHot: false,
      isSuperDeal: false,
      isFreeship: true,
      description:
        "CB03: COMBO MỌC RÂU -LÔNG MÀY NÂNG CAO .GỒM 1 LỌ MINOXIDIL 5% + 1 ỐNG BỘT TRỘN LCLT + 1 LĂN KIM ( 529K - Miễn Phí Ship)",
    },
    {
      id: "CB04",
      name: "CB04: COMBO MỌC TÓC TRUNG BÌNH. GỒM 1 LỌ MINOXIDIL 5% + 1 LĂN KIM + 1 CHAI DẦU GỘI DHT -BLOCKER ORGANIC 300ML ( 569K -Miễn Phí Ship)",
      price: 569000,
      isHot: false,
      isSuperDeal: false,
      isFreeship: true,
      description:
        "CB04: COMBO MỌC TÓC TRUNG BÌNH. GỒM 1 LỌ MINOXIDIL 5% + 1 LĂN KIM + 1 CHAI DẦU GỘI DHT -BLOCKER ORGANIC 300ML ( 569K -Miễn Phí Ship)",
    },
    {
      id: "CB05",
      name: "CB05 : COMBO MỌC TÓC NÂNG CAO. GỒM 1 LỌ MINOXIDIL 5% + 1 ỐNG BỘT TRỘN LCLT + 1 LĂN KIM + 1 CHAI DẦU GỘI DHT -BLOCKER ORGANIC ( 639K - Miễn Phí Ship)",
      price: 639000,
      isHot: true,
      isSuperDeal: true,
      isFreeship: true,
      description:
        "CB05 : COMBO MỌC TÓC NÂNG CAO. GỒM 1 LỌ MINOXIDIL 5% + 1 ỐNG BỘT TRỘN LCLT + 1 LĂN KIM + 1 CHAI DẦU GỘI DHT -BLOCKER ORGANIC ( 639K - Miễn Phí Ship)",
    },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    scrollToSection(tabId);
  };

  const handleStoreClick = () => {
    window.open("https://s.shopee.vn/5VN491ePpK", "_blank");
  };
  const handleStoreClick2 = () => {
    window.open("https://s.shopee.vn/7pl8feminU", "_blank");
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
    // alert("Đặt hàng thành công!");
  };

  return (
    <>
      <Header
        tabs={tabs}
        activeTab={activeTab}
        onTabClick={handleTabClick}
        onOrderModalOpen={() => setIsOrderModalOpen(true)}
        onStoreClick={handleStoreClick}
      />
      <div className="App">
        <ProductSlide images={productImages} />

        <ProductInfo
          product={product}
          onOrderModalOpen={() => setIsOrderModalOpen(true)}
        />

        <Reviews reviews={reviews} overallRating={4.9} totalReviews={1628} />

        <CustomerFeedback />

        <Overview
          hairProblems={hairProblems}
          productBenefits={productBenefits}
        />
        <Description certifications={certifications} />
        <Suggestions
          packages={packages}
          onPackageSelect={handlePackageSelect}
          selectedPackage={selectedPackage}
          onSubmit={handleOrderSubmit}
        />
        <Footer
          onStoreClick={handleStoreClick2}
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
