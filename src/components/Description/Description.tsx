import React, { useState } from "react";
import { Certification } from "../../types";
import "./Description.css";

interface DescriptionProps {
  certifications: Certification[];
}

const Description: React.FC<DescriptionProps> = ({ certifications }) => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  // Certification images array (imgi_63_png to imgi_68_png)
  const certImages = [
    "/img/imgi_63_png.png",
    "/img/imgi_64_png.png",
    "/img/imgi_65_png.png",
    "/img/imgi_66_png.png",
    "/img/imgi_67_png.png",
    "/img/imgi_68_png.png",
  ];

  const nextCert = () => {
    setCurrentCertIndex((prevIndex) =>
      prevIndex === certImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCert = () => {
    setCurrentCertIndex((prevIndex) =>
      prevIndex === 0 ? certImages.length - 1 : prevIndex - 1
    );
  };

  const goToCert = (index: number) => {
    setCurrentCertIndex(index);
  };

  return (
    <div id="description" className="description">
      {/* Certifications Section */}
      {/* <div className="certifications-section">
        <h2 className="certifications-title">
          GIẤY TỜ CÔNG BỐ KIỂM NGHIỆM ĐẦY ĐỦ
        </h2>

        <div className="certification-gallery">
          <div className="cert-slide-container">
            <button
              className="cert-slide-arrow cert-slide-arrow-left"
              onClick={prevCert}
            >
              ‹
            </button>

            <div className="cert-slide-wrapper">
              <div
                className="cert-slide-track"
                style={{ transform: `translateX(-${currentCertIndex * 100}%)` }}
              >
                {certImages.map((image, index) => (
                  <div key={index} className="cert-slide-item">
                    <img src={image} alt={`Certification ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            <button
              className="cert-slide-arrow cert-slide-arrow-right"
              onClick={nextCert}
            >
              ›
            </button>
          </div>

          <div className="cert-slide-thumbnails">
            {certImages.map((image, index) => (
              <div
                key={index}
                className={`cert-thumbnail ${
                  index === currentCertIndex ? "active" : ""
                }`}
                onClick={() => goToCert(index)}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* Product Benefits */}
      <div className="benefits-section">
        <h2 className="product-intro-title">Giới thiệu về sản phẩm này</h2>
        {/* <h3 className="product-details-title">Chi tiết</h3> */}

        <div className="product-description">
          <ul className="ingredients-list">
            <li className="ingredient-item">
              SẢN PHẨM HỖ TRỢ GIÚP PHÁT TRIỂN MỌC RÂU-TÓC-LÔNG MÀY VÀ LÔNG CƠ
              THỂ.
            </li>
            <li className="ingredient-item">
              SẢN PHẨM DẠNG LỎNG .DUNG TÍCH 60ml . DÙNG ĐƯỢC TỪ 1 ĐẾN 3 THÁNG
              TUỲ THEO DIỆN TÍCH BÔI VÀ CÁCH SỬ DỤNG.
            </li>
            <li className="ingredient-item">
              SẢN PHẨM CÓ THỂ GÂY KÍCH ỨNG VỚI NHỮNG NGƯỜI DA NHẠY CẢM. CÁC HIỆN
              TƯỢNG KÍCH ỨNG NHƯ NỔI MẨN ĐỎ.BONG VẢY GÀU.NGỨA NGÁY CHÂM CHÍCH
              KHÓ CHỊU.CÁC HIỆN TƯỢNG SẼ CÓ XU HƯỚNG GIẢM DẦN THEO THỜI GIAN.
            </li>
            <li className="ingredient-item ">
              CẦN KIÊN TRÌ SỬ DỤNG TRONG MỘT KHOẢNG THỜI GIAN NHẤT ĐỊNH. KẾT QUẢ
              SẼ KHÁC NHAU PHỤ THUỘC THEO CƠ ĐỊA .VÀ ĐỘ TUỔI.
            </li>
            <li className="ingredient-item highlight">
              LUÔN CỐ GẮNG HỖ TRỢ GIẢI ĐÁP THẮC MẮC KHI KHÁCH HÀNG CẦN.
            </li>
          </ul>
          {/* <ul className="ingredients-list">
            <li className="ingredient-item">
              <strong>Biotin:</strong> Kích thích nang tóc phát triển, giúp mọc
              tóc mới tại những vùng tóc mỏng - thưa.
            </li>
            <li className="ingredient-item highlight">
              <strong>Collagen:</strong> Tăng độ đàn hồi, giúp tóc dày khỏe,
              giảm gãy rụng rõ rệt.
            </li>
            <li className="ingredient-item">
              <strong>Keratin:</strong> Phục hồi thân tóc hư tổn, làm tóc suôn
              mượt, mềm mại và dễ chải.
            </li>
          </ul> */}

          {/* <div className="target-audience">
            <FontAwesomeIcon className="benefit-icon" icon={faHandPointRight} />
            <p>
              Dành cho ai đã từng dùng nhiều loại dầu gội nhưng không cải thiện
              – đây là giải pháp giúp bạn lấy lại mái tóc chắc khỏe, dày đẹp và
              tự tin như trước.
            </p>
          </div> */}
        </div>
      </div>

      {/* Emotional Story Section */}
      {/* <div className="story-section">
        <h2 className="story-title">KHI MÁI TÓC KHÔNG CÒN CHỈ LÀ MÁI TÓC</h2>

        <div className="story-content">
          <div className="story-paragraph">
            <FontAwesomeIcon className="story-icon heart-icon" icon={faHeart} />
            <p>
              Tôi từng nghĩ nghề của mình chỉ là "làm cho tóc đẹp hơn"… cho đến
              khi chứng kiến có những người phụ nữ bật khóc – không phải vì họ
              xấu, mà vì họ đang dần đánh mất chính mình… chỉ vì mái tóc.
            </p>
          </div>

          <div className="story-paragraph">
            <FontAwesomeIcon className="story-icon user-icon" icon={faUser} />
            <p>
              Người đàn ông sống với nghề tóc hơn 10 năm. Trong ngần ấy năm, tôi
              chạm vào hàng ngàn mái đầu… nhưng có những lần chạm khiến tôi ám
              ảnh mãi.
            </p>
          </div>

          <div className="story-paragraph highlight">
            <FontAwesomeIcon className="story-icon eye-icon" icon={faEye} />
            <p>
              Một chị ngoài 30 tuổi – từng rất tự tin, thành đạt – hôm đó bước
              vào salon với chiếc mũ đội sâu kín đầu, ngồi cúi mặt. Khi tháo mũ
              ra, tóc chị rụng thành từng mảng, lộ rõ cả da đầu.
            </p>
          </div>

          <div className="story-paragraph highlight">
            <FontAwesomeIcon className="story-icon heart-icon" icon={faHeart} />
            <p>
              Một cô sinh viên mới 21 tuổi hỏi tôi bằng ánh mắt như muốn khóc:
              "Anh ơi, tóc em còn cứu được không ạ?"
            </p>
          </div>

          <div className="story-paragraph">
            <FontAwesomeIcon className="story-icon clock-icon" icon={faClock} />
            <p>
              Tôi từng là người có tay nghề, có kỹ thuật. Nhưng lúc đó, tôi im
              lặng. Vì tôi biết: mọi thứ tôi từng học – không đủ. Không đủ để
              cứu một mái tóc đã hư tổn quá nặng. Không đủ để giúp tóc mọc lại
              nơi những nang đã yếu, đã tắt. Không đủ… để ngăn người ta mất đi
              sự tự tin.
            </p>
          </div>

          <div className="story-paragraph insight">
            <FontAwesomeIcon
              className="story-icon hand-icon"
              icon={faHandPointRight}
            />
            <p>
              Tôi biết rõ: Tóc rụng không giết người. Nhưng nó giết đi sự nữ
              tính. Tóc mỏng không làm bạn xấu xí. Nhưng nó khiến bạn nhìn mình
              trong gương và không còn muốn soi nữa.
            </p>
          </div>

          <div className="story-paragraph">
            <FontAwesomeIcon className="story-icon heart-icon" icon={faHeart} />
            <p>
              Rồi một ngày, tôi gội đầu cho mẹ. Tóc bà rụng nhẹ nhàng từng sợi.
              Từng sợi, như thời gian trôi qua trước mặt tôi.
            </p>
          </div>

          <div className="story-paragraph">
            <FontAwesomeIcon className="story-icon clock-icon" icon={faClock} />
            <p>
              Tôi lặng đi. Và tôi biết: Nếu tiếp tục làm nghề mà không cứu được
              mái tóc – thì tôi chỉ đang làm nghề… nửa vời.
            </p>
          </div>

          <div className="story-paragraph breakthrough">
            <FontAwesomeIcon className="story-icon fire-icon" icon={faFire} />
            <p>
              Và rồi Long Thành Phát ra đời – không phải để nổi tiếng, không
              phải để chạy quảng cáo. Long Thành Phát ra đời để phục hồi những
              mái tóc đang gãy nát, đang giòn như rơm vì hóa chất, stress, sau
              sinh… Long Thành Phát ra đời để giúp tóc con mọc lại tại vùng
              thưa, vùng hói – nơi bạn từng nghĩ là hết hy vọng. Long Thành Phát
              ra đời… để bạn nhìn lại mái tóc của mình và nghĩ: "May mà mình
              chưa bỏ cuộc."
            </p>
          </div>

          <div className="story-paragraph success">
            <FontAwesomeIcon
              className="story-icon check-icon"
              icon={faCheckCircle}
            />
            <p>
              Hơn 1.000.000 khách hàng đã tin dùng Long Thành Phát – không phải
              vì lời quảng cáo. Mà vì họ cảm nhận được sự thật lòng trong từng
              giọt dầu gội:
            </p>
          </div>

          <div className="story-paragraph results">
            <FontAwesomeIcon
              className="story-icon check-icon"
              icon={faCheckCircle}
            />
            <p>
              Tóc mềm hơn ngay lần đầu gội. Tóc con bắt đầu mọc lên sau vài
              tuần. Tóc yếu, khô xơ – phục hồi dần từng ngày. Long Thành Phát
              không làm phép. Long Thành Phát không hứa sau 1 đêm. Nhưng Long
              Thành Phát được tạo ra bằng nỗi đau thật, trái tim thật và sự thấu
              hiểu từ bên trong nghề.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Description;
