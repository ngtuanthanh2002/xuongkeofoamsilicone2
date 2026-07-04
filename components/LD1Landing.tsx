export default function LD1Landing() {
  return (
    <div className="ld1-page">
      {/* 1 - Hero */}
      <section className="ld1-hero">
        <h1 className="ld1-title">AM2</h1>
        <p className="ld1-subtitle">Chuyên dụng cho cửa và dán tấm ốp tường</p>
        <img
          src="/images/LD1/1.jpg"
          alt="AM2 KEO BỌT NỞ PU FOAM"
          className="ld1-img"
        />
      </section>

      {/* Video thực tế */}
      <section className="ld1-video">
        <div className="ld1-video-heading">
          <span className="ld1-line" />
          <h2>Video thực tế</h2>
          <span className="ld1-line" />
        </div>
        <p className="ld1-video-desc">Keo dán gỗ</p>
        <p className="ld1-video-desc">Dán tấm ốp tường</p>
        <p className="ld1-video-desc">Lấp đầy khe hở, chống thấm nước</p>
        <video controls playsInline preload="metadata" className="ld1-video-player">
          <source src="/images/video/hdsd.mp4" type="video/mp4" />
        </video>
      </section>

      {/* 2 - Đặc điểm sản phẩm */}
      <section className="ld1-section">
        <h2 className="ld1-section-title">Đặc điểm sản phẩm</h2>
        <img
          src="/images/LD1/2.jpg"
          alt="Đặc điểm sản phẩm"
          className="ld1-img"
        />
      </section>

      {/* 3 - Lỗ bọt đều */}
      <section className="ld1-section">
        <div className="ld1-banner">
          Lỗ bọt đều - Chống nước tốt - Cách nhiệt hiệu quả
        </div>
        <img
          src="/images/LD1/3.jpg"
          alt="Lỗ bọt đều - Chống nước tốt - Cách nhiệt hiệu quả"
          className="ld1-img"
        />
      </section>

      {/* 4 - Độ bám dính cao */}
      <section className="ld1-section">
        <img
          src="/images/LD1/4.jpg"
          alt="Độ bám dính cao - Đảm bảo cửa vững chắc"
          className="ld1-img"
        />
      </section>

      {/* 5 - Test độ cứng */}
      <section className="ld1-section">
        <h2 className="ld1-section-title">Test độ cứng</h2>
        <img
          src="/images/LD1/5.jpg"
          alt="Test độ cứng"
          className="ld1-img"
        />
      </section>

      {/* 6 - Chứng nhận quốc tế */}
      <section className="ld1-section ld1-section-last">
        <h2 className="ld1-section-title">Chứng nhận quốc tế</h2>
        <img
          src="/images/LD1/6.jpg"
          alt="Chứng nhận quốc tế"
          className="ld1-img"
        />
      </section>
    </div>
  );
}
