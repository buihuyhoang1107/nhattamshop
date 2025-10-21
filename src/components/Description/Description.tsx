import React from 'react';
import { Certification } from '../../types';
import './Description.css';

interface DescriptionProps {
  certifications: Certification[];
}

const Description: React.FC<DescriptionProps> = ({ certifications }) => {
  return (
    <div id="description" className="description">
      {/* Product Benefits */}
      <div className="benefits-section">
        <div className="benefit-item">
          <h3>Collagen</h3>
          <p>Tăng độ đàn hồi, giúp tóc dày khỏe, giảm gãy rụng rõ rệt.</p>
        </div>
        
        <div className="benefit-item">
          <h3>Keratin</h3>
          <p>Phục hồi thân tóc hư tổn, làm tóc suôn mượt, mềm mại và dễ chải.</p>
        </div>
        
        <div className="benefit-item">
          <span className="benefit-icon">👉</span>
          <p>Dành cho ai đã từng dùng nhiều loại dầu gội nhưng không cải thiện – đây là giải pháp giúp bạn lấy lại mái tóc chắc khỏe, dày đẹp và tự tin như trước.</p>
        </div>
      </div>

      {/* Emotional Story Section */}
      <div className="story-section">
        <h2 className="story-title">KHI MÁI TÓC KHÔNG CÒN CHỈ LÀ MÁI TÓC</h2>
        
        <div className="story-content">
          <p>
            Tôi từng nghĩ nghề của mình chỉ là "làm cho tóc đẹp hơn"... cho đến khi chứng kiến có những người phụ nữ bật khóc – không phải vì họ xấu, mà vì họ đang dần đánh mất chính mình... chỉ vì mái tóc.
          </p>
          
          <p>
            Tôi là Nhật Tâm – người đàn ông sống với nghề tóc hơn 10 năm.
          </p>
          
          <p>
            Trong ngần ấy năm, tôi chạm vào hàng ngàn mái đầu... nhưng có những lần chạm khiến tôi ám ảnh mãi.
          </p>
          
          <p>
            Một chị ngoài 30 tuổi – từng rất tự tin, thành đạt – hôm đó bước vào salon với chiếc mũ đội sâu kín đầu, ngồi cúi mặt. Khi tháo mũ ra, tóc chị rụng thành từng mảng, lộ rõ cả da đầu.
          </p>
          
          <p>
            Một cô sinh viên mới 21 tuổi hỏi tôi bằng ánh mắt như muốn khóc: "Anh Tâm... tóc em còn cứu được không ạ?"
          </p>
          
          <p>
            Tôi từng là người có tay nghề, có kỹ thuật. Nhưng lúc đó, tôi im lặng. Vì tôi biết: mọi thứ tôi từng học không đủ.
          </p>
          
          <p>
            Không đủ để cứu một mái tóc đã hư tổn quá nặng.
          </p>
          
          <p>
            Không đủ để giúp tóc mọc lại nơi những nang đã yếu, đã tắt.
          </p>
          
          <p>
            Không đủ... để ngăn người ta mất đi sự tự tin.
          </p>
          
          <p>
            Tôi biết rõ:
          </p>
          
          <p>
            Tóc rụng không giết người. Nhưng nó giết đi sự nữ tính.
          </p>
          
          <p>
            Tóc mỏng không làm bạn xấu xí. Nhưng nó khiến bạn nhìn mình trong gương và không còn muốn soi nữa.
          </p>
          
          <p>
            Rồi một ngày, tôi gội đầu cho mẹ.
          </p>
          
          <p>
            Tóc bà rụng nhẹ nhàng từng sợi. Từng sợi, như thời gian trôi qua trước mặt tôi.
          </p>
          
          <p>
            Tôi lặng đi. Và tôi biết:
          </p>
          
          <p>
            Nếu tiếp tục làm nghề mà không cứu được mái tóc thì tôi chỉ đang làm nghề... nửa vời.
          </p>
          
          <p>
            Và rồi MOC ra đời – không phải để nổi tiếng, mà để cứu những mái tóc đang mất dần sự sống.
          </p>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="certifications-section">
        <h2 className="certifications-title">GIẤY TỜ CÔNG BỐ KIỂM NGHIỆM ĐẦY ĐỦ</h2>
        
        {certifications.map((cert) => (
          <div key={cert.id} className="certification-item">
            <div className="cert-document">
              <img src={cert.document} alt={cert.title} className="cert-image" />
            </div>
            
            {cert.images && cert.images.length > 0 && (
              <div className="cert-gallery">
                {cert.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`Certification ${index + 1}`}
                    className="cert-thumbnail"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description;
