import React from "react"
import { Fade } from 'react-animation-components'

function App() {
  return (
    <div>
  <nav className="navbar main-nav fixed-top navbar-expand-lg large">
    <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="ti-menu text-white" />
      </button>
      <div className="collapse navbar-collapse mr-5" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link scrollTo" href="https://khafayaalfengan.webtekdigital.com/backend/public"> تسجيل الدخول</a>
          </li>
          <li className="nav-item">
            <a className="nav-link scrollTo" href="#about">تواصل معنا</a>
          </li>
          <li className="nav-item">
            <a className="nav-link scrollTo" href="#home">الصفحة الرئيسية</a>
          </li>
        </ul>
      </div>
      <a className="navbar-brand" href="homepage.html"><img src="images/logo.png" alt="logo" /></a>

    </div>
  </nav>
  {/*=====================================
=            Homepage Banner            =
======================================*/}
  <section className="banner bg-1" id="home">
    <div className="container">
      <div className="row">
        <div className="col-md-8 align-self-center">
          {/* Contents */}
          <Fade in delay={50}>
          <div className="content-block">
            <h1>تطبيق خفايا الفنجان</h1>
            <h5>قراءة فنجان .. قراءة الكف ومعرفة خفايا اليد ..قراءة خطوط الوجه ومعالمه .. قراءة التاروت .. استشارات عاطفية .. استشارات روحية  .. تفسير الاحلام .. الرقية الشرعية لعلاج السحر والعين خفايا الابراج</h5>
            <h3>لتحميل تطبيق خفايا الفنجان</h3>
            {/* App Badge */}
            <div className="app-badge">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#" className="btn btn-download"><i className="ti-android" />
                    <div>Get it on the<span>GOOGLE PLAY</span></div>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn btn-download"><i className="ti-apple" />
                    <div>Available on the<span>Apple store</span></div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </Fade>
        </div>
        <div className="col-md-4">
          {/* App Image */}
          <Fade in>
          <div className="image-block">
            <img className="img-fluid phone-thumb" src="images/app/Screenshot_1.png" alt="iphone-banner" />
          </div>
          </Fade>
        </div>
      </div>
    </div>
  </section>
  {/*====  End of Homepage Banner  ====*/}
  {/*===========================
=            About            =
============================*/}
  <section className="about section bg-2" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center text-center">
          {/* Image Content */}
        <Fade in delay={50}>
          <div className="image-block">
            <img className="phone-thumb-md" src="images/app/Screenshot_4.png" alt="iphone-feature" />
          </div>
          </Fade>
        </div>
        <div className="col-lg-6 col-md-10 m-md-auto align-self-center ml-auto">
        <Fade in delay={150}>
          <div className="about-block">
            {/* About 01 */}
            <div className="about-item">
              <div className="icon">
                <i className="ti-palette" />
              </div>
              <div className="content">
                <h5>الخطوة الأولى</h5>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;قم باختيار طريقة القراءة المفضلة لديك، بالإضافة إلى القارئ الذي تريد</p>
              </div>
            </div>
            {/* About 02 */}
            <div className="about-item active">
              <div className="icon">
                <i className="ti-panel" />
              </div>
              <div className="content">
                <h5>الخطوة الثانية</h5>
                <p>قم بإدخال المعلومات المطلوبة للقراءة التي اخترتها وأرسلها عبر التطبيق</p>
              </div>
            </div>
            {/* About 03 */}
            <div className="about-item">
              <div className="icon">
                <i className="ti-vector" />
              </div>
              <div className="content">
                <h5>الخطوة الثالثة</h5>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;خلال وقت قصير، تصلك القراءة على شكل رسالة صوتية</p>
              </div>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  </section>
  {/*====  End of About  ====*/}
  {/*==============================
=            Features            =
===============================*/}
  <section className="section feature" id="feature">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Fade in>
          <div className="section-title">
            <h2>ميزات التطبيق</h2>
            <p>الابراج الباطنية وعلاقة   الارقام والحروف بحياتك</p>
          </div>
          </Fade>
        </div>
      </div>
      <div className="row bg-elipse">
        <div className="col-lg-4 align-self-center text-center text-lg-center">
          {/* Feature Item */}
          <Fade in delay={1250}>
          <div className="feature-item">
            {/* Icon */}
            <div className="icon">
            <img className="img-fluid phone-thumb" src="/images/features/Read-the-palm.png" alt="iphone-banner" width="100" height="600" />
            </div>
            {/* Content */}
            <div className="content">
              <h5>قراءة الكفّ</h5>
              <p>كل ما عليك فعله هو تصوير كفّيك بشكل واضح، وإرسال الصورة بواسطة تطبيق خفايا الفنجان</p>
            </div>
          </div>
          </Fade>
          {/* Feature Item */}
          <Fade in delay={1275}>
          <div className="feature-item">
            {/* Icon */}
            <div className="icon">
            <img className="img-fluid phone-thumb" src="/images/features/Horoscope.png" alt="iphone-banner" width="100" height="600" />
            </div>
            {/* Content */}
            <div className="content">
              <h5>الأبراج</h5>
              <p>تواصل مع علماء الفلك المحترفين لمتابعة الأبراج اليومية وكشف خفايا حياتك العاطفية والمهنية والاجتماعية</p>
            </div>
          </div>
          </Fade>
        </div>
        <div className="col-lg-4 text-center">
          {/* Feature Item */}
          <Fade in delay={1200}>

          <div className="feature-item mb-0">
            {/* Icon */}
            <div className="icon">
              <img className="img-fluid phone-thumb" src="/images/features/reading-cup.png" alt="iphone-banner" width="100" height="600" />
            </div>
            {/* Content */}
            <div className="content">
              <h5>قراءة الفنجان</h5>
              <p>عند انتهائك من شرب القهوة، اقلب فنجانك لمدّة لا تقلّ عن خمسة دقائق، وهي المدّة الكفيلة بتشكّل الرموز وظهورها بشكل واضح في الفنجان </p>
            </div>
          </div>
          </Fade>
          <div className="app-screen">
            <img className="img-fluid" src="images/app/Screenshot_2.png" alt="app-screen" />
          </div>
          {/* Feature Item */}
          <Fade in delay={1225}>
          
          <div className="feature-item">
            {/* Icon */}
            <div className="icon">
            <img className="img-fluid phone-thumb" src="/images/features/deams.png" alt="iphone-banner" width="100" height="600" />
            </div>
            {/* Content */}
            <div className="content">
              <h5>تفسير الأحلام</h5>
              <p>تخلّص من التساؤلات الّتي تؤثّر سلبًا على مزاجك وحياتك اليومية. قم بتسجيل رسالة صوتية تشرح فيها تفاصيل أحلامك وأرسلها</p>
            </div>
          </div>
          </Fade>
        </div>
        <div className="col-lg-4 text-center text-lg-center align-self-center">
          {/* Feature Item */}
          <Fade in delay={1250}>

          <div className="feature-item">
            {/* Icon */}
            <div className="icon">
            <img className="img-fluid phone-thumb" src="/images/features/taroot.png" alt="iphone-banner" width="100" height="600" />
            </div>
            {/* Content */}
            <div className="content">
              <h5>فتح وقراءة ورق التاروت</h5>
              <p>إحصل على قراءة شاملة لحياتك العاطفية والمهنية والاجتماعية من أبرز علماء الفلك، عبر فتح ورق التاروت وفكّ رموزه</p>
            </div>
          </div>
          </Fade>
          {/* Feature Item */}
          <Fade in delay={1275}>
          <div className="feature-item">
            {/* Icon */}
            <div className="icon">
            <img className="img-fluid phone-thumb" src="/images/features/Read-face-and-ideas.png" alt="iphone-banner" width="100" height="600" />
            </div>
            {/* Content */}
            <div className="content">
              <h5>قراءة خطوط الوجه </h5>
              <p>نعرف ما الذي يجول في ذهنك، لذا يهمّنا تأكيد سرّيّة المعلومات والصور المرسلة عبر تطبيق خفايا الفنجان</p>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  </section>
  {/*====  End of Features  ====*/}

  {/*=============================================
=            Call to Action Download            =
==============================================*/}
  <section className="cta-download bg-3 overlay">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 text-center">
          <div className="image-block"><img className="p-5 phone-thumb img-fluid" src="images/app/Screenshot_1.png" alt="" /></div>
        </div>
        <div className="col-lg-7">
          <div className="content-block text-right">
            {/* Title */}
            <h2>حمل التطبيق الان</h2>
            {/* Desctcription */}
            <p>احصل على قراءة شخصية مفصّلة ومدعّمة بحسابات وأرقام خاصة بك</p>
            {/* App Badge */}
            <div className="app-badge">
              <ul className="list-inline position">
                <li className="list-inline-item">
                  <a href="#" className="btn btn-download"><i className="ti-android" />
                    <div>Get it on the<span>GOOGLE PLAY</span></div>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn btn-download"><i className="ti-apple" />
                    <div>Available on the<span>Apple store</span></div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*====  End of Call to Action Download  ====*/}

  {/*============================
=            Footer            =
=============================*/}
  <footer className="footer-main">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mr-auto">
          <div className="footer-logo">
            <img src="images/logo.png" alt="footer-logo" />
          </div>
          <div className="copyright">
            <p>@2022            جميع الحقوق محفوظة  <br />
            خفايا الفنجان
            </p>
          </div>
        </div>
        <div className="col-lg-6 text-lg-right">
          {/* Social Icons */}
          <ul className="social-icons list-inline position">
            <li className="list-inline-item">
              <a target="_blank" href="#"><i className="text-primary ti-facebook" /></a>
            </li>
            <li className="list-inline-item">
              <a target="_blank" href="#"><i className="text-primary ti-twitter-alt" /></a>
            </li>
            <li className="list-inline-item">
              <a target="_blank" href="#"><i className="text-primary ti-linkedin" /></a>
            </li>
            <li className="list-inline-item">
              <a target="_blank" href="#"><i className="text-primary ti-instagram" /></a>
            </li>
          </ul>
          {/* Footer Links */}
          <ul className="footer-links list-inline position">
            <li className="list-inline-item">
              <a className="scrollTo" href="https://khafayaalfengan.webtekdigital.com/backend/public"> تسجيل الدخول</a>
            </li>
            <li className="list-inline-item">
              <a className="scrollTo" href="#team">تواصل معنا</a>
            </li>
            <li className="list-inline-item">
              <a className="scrollTo" href="#about">الصفحة الرئيسية</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>

  );
}

export default App;
