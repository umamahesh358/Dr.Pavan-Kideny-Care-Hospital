import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, CheckCircle2, Phone, ArrowRight, ChevronDown } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

/* ── Service content data ─────────────────────────────────────────── */
const SERVICES = {
  ckd: {
    badge: 'CKD Management',
    title: 'Chronic Kidney Disease Care',
    subtitle: 'Careful, systematic management to slow progression and protect quality of life.',
    intro: `Chronic Kidney Disease (CKD) develops gradually, and its early stages often go unnoticed. At Dr. Pavan's Kidney Care Clinic, we place a strong emphasis on early detection and proactive management — helping patients from across Andhra Pradesh, including those from smaller towns and peripheral districts, access the nephrology care they need before the disease advances.

Dr. Pavan Kumar's approach to CKD is methodical and patient-centred. Each consultation is used to understand not just the clinical picture, but the patient's daily life, dietary habits, and concerns — because sustainable management of CKD requires a plan that fits the person, not just the diagnosis.`,
    points: [
      { title: 'Early Detection & Staging', detail: 'Accurate staging of CKD (Stages 1–5) using eGFR, urine albumin, and imaging to guide the right level of intervention.' },
      { title: 'Medication Management', detail: 'Careful selection and adjustment of medications to protect kidney function, control blood pressure, and manage anaemia.' },
      { title: 'Dietary Guidance', detail: 'Practical, culturally appropriate dietary advice — including fluid, protein, potassium, and phosphate management.' },
      { title: 'Progression Monitoring', detail: 'Regular follow-up schedules with clear targets to track kidney function and intervene before deterioration.' },
      { title: 'Preparation for Dialysis or Transplant', detail: 'When needed, timely education and planning for renal replacement therapy — so patients are not caught off guard.' },
      { title: 'Complication Management', detail: 'Treatment of CKD-related complications including anaemia, bone disease, and cardiovascular risk.' },
    ],
    accent: '#710908',
    image: '/images/Chronic%20Kidney%20Disease.png',
  },
  dialysis: {
    badge: 'Dialysis Support',
    title: 'Dialysis Care',
    subtitle: 'Haemodialysis and peritoneal dialysis managed with precision and consistency.',
    intro: `When the kidneys can no longer adequately filter waste and fluid from the blood, dialysis becomes a life-sustaining treatment. At Dr. Pavan's Kidney Care Clinic, dialysis is not a last resort — it is a carefully managed, ongoing service provided with the same attention and professionalism as any other aspect of our care.

We support patients with both haemodialysis and peritoneal dialysis, and work with each patient to determine the most appropriate modality based on their clinical situation, lifestyle, and preferences. Patients travelling from peripheral regions of Andhra Pradesh are given particular consideration in scheduling and access planning.`,
    points: [
      { title: 'Haemodialysis', detail: 'Regular sessions managed with close monitoring of dialysis adequacy, fluid balance, and haemodynamic stability.' },
      { title: 'Peritoneal Dialysis', detail: 'Support for both CAPD and APD, with training for patients and caregivers to manage dialysis at home.' },
      { title: 'Vascular Access Planning', detail: 'Timely creation and monitoring of AV fistulas and grafts for long-term haemodialysis access.' },
      { title: 'Dialysis Adequacy Monitoring', detail: 'Regular Kt/V assessments to ensure dialysis is providing sufficient clearance.' },
      { title: 'Nutritional Support', detail: 'Dialysis-specific dietary guidance to manage fluid, potassium, phosphate, and protein intake.' },
      { title: 'Complication Management', detail: 'Active monitoring and management of dialysis-related complications including cramps, hypotension, and infections.' },
    ],
    accent: '#FB6603',
    image: '/images/Dialysis%20Support.png',
  },
  'kidney-stones': {
    badge: 'Kidney Stone Treatment',
    title: 'Kidney Stone Treatment',
    subtitle: 'Accurate diagnosis, targeted treatment, and long-term prevention — tailored to each patient.',
    intro: `Kidney stones can cause sudden and severe pain, and without the right evaluation, they are likely to recur. At Dr. Pavan's Kidney Care Clinic, we go beyond treating the immediate stone — we investigate the underlying cause and put a prevention plan in place.

Dr. Pavan Kumar evaluates each patient's metabolic profile, dietary habits, fluid intake, and stone composition to understand why the stone formed. From this, a personalised management plan is developed — one that addresses both the current problem and reduces the risk of recurrence.`,
    points: [
      { title: 'Diagnostic Evaluation', detail: 'Urine analysis, blood tests, imaging (ultrasound, CT KUB), and stone composition analysis to understand the type and cause.' },
      { title: 'Medical Management', detail: 'Use of appropriate medications (alpha-blockers, citrate, thiazides) based on stone type and metabolic findings.' },
      { title: 'Referral for Interventional Procedures', detail: 'Where surgical or urological procedures are required, timely referral with full clinical context provided.' },
      { title: 'Metabolic Stone Work-Up', detail: '24-hour urine studies and serum evaluation to identify the metabolic factors driving stone formation.' },
      { title: 'Dietary & Fluid Guidance', detail: 'Clear, practical advice on fluid intake, dietary oxalate, sodium, protein, and calcium — specific to the stone type.' },
      { title: 'Long-Term Recurrence Prevention', detail: 'Regular monitoring and medication adjustments to prevent new stone formation.' },
    ],
    accent: '#A35E5D',
    image: '/images/Kidney%20Stones.png',
  },
  aki: {
    badge: 'AKI Management',
    title: 'Acute Kidney Injury Management',
    subtitle: 'Rapid identification, cause-directed treatment, and careful recovery support.',
    intro: `Acute Kidney Injury (AKI) is a sudden and potentially serious decline in kidney function that requires prompt medical attention. At Dr. Pavan's Kidney Care Clinic, AKI is treated as a clinical emergency — with rapid assessment, identification of the underlying cause, and immediate intervention to restore kidney function where possible.

Dr. Pavan Kumar works closely with patients and their families during this often frightening period, explaining what is happening in clear language and outlining each step of the treatment plan. Recovery from AKI requires careful follow-up, as a significant proportion of patients are at increased risk of developing chronic kidney disease.`,
    points: [
      { title: 'Rapid Cause Identification', detail: 'Systematic evaluation of pre-renal, intrinsic renal, and post-renal causes to direct targeted treatment.' },
      { title: 'Fluid & Electrolyte Management', detail: 'Careful correction of fluid status and electrolyte imbalances — particularly hyperkalaemia and acidosis.' },
      { title: 'Nephrotoxin Avoidance', detail: 'Review and adjustment of all medications to prevent further kidney injury during the recovery period.' },
      { title: 'Renal Replacement Therapy', detail: 'Timely initiation of dialysis when indicated — with clear explanation of the process to patients and families.' },
      { title: 'Post-AKI Follow-Up', detail: 'Structured monitoring after recovery to assess residual kidney function and detect the early onset of CKD.' },
      { title: 'Patient & Carer Education', detail: 'Clear guidance on warning signs, safe medications, and follow-up schedule after discharge.' },
    ],
    accent: '#710908',
    image: '/images/Chronic%20Kidney%20Disease.png',
  },
  hypertension: {
    badge: 'Renal Hypertension',
    title: 'Hypertension & Renal Blood Pressure Control',
    subtitle: 'Precise blood pressure management to protect the kidneys and the heart.',
    intro: `Hypertension and kidney disease are deeply interconnected — each worsening the other if not properly managed. At Dr. Pavan's Kidney Care Clinic, blood pressure management is treated as a core component of nephrology care, not an afterthought.

Dr. Pavan Kumar evaluates both primary hypertension and secondary causes — including renovascular hypertension and hypertension driven by CKD — and develops a treatment plan that is both effective and safe for kidney function. For patients on multiple medications, careful rationalisation is an important part of every consultation.`,
    points: [
      { title: 'Cause Identification', detail: 'Evaluation for secondary causes of hypertension including renal artery stenosis, primary aldosteronism, and CKD-related hypertension.' },
      { title: 'Kidney-Safe Medication Selection', detail: 'Choice of antihypertensives that protect kidney function — including ACE inhibitors and ARBs where appropriate.' },
      { title: 'Home Blood Pressure Monitoring', detail: 'Guidance on accurate home monitoring with interpretation of readings in clinical context.' },
      { title: 'Lifestyle Modification', detail: 'Dietary sodium reduction, physical activity guidance, and alcohol and tobacco cessation advice.' },
      { title: 'Target Organ Assessment', detail: 'Evaluation of hypertension\'s impact on the kidneys, heart, and retina.' },
      { title: 'Medication Review & Rationalisation', detail: 'Simplification of complex antihypertensive regimens to improve adherence and reduce side effects.' },
    ],
    accent: '#FB6603',
    image: '/images/Dialysis%20Support.png',
  },
  transplant: {
    badge: 'Transplant Follow-Up',
    title: 'Transplant Follow-Up Care',
    subtitle: 'Long-term support to protect the transplanted kidney and the patient\'s overall health.',
    intro: `A successful kidney transplant is the beginning of a long-term commitment — to immunosuppression, monitoring, and vigilant follow-up. At Dr. Pavan's Kidney Care Clinic, we provide structured post-transplant care for patients who have received a kidney from a living or deceased donor, and who need continued nephrology oversight in Andhra Pradesh.

Dr. Pavan Kumar works with transplant recipients to ensure their immunosuppression is optimised, their kidney function is closely monitored, and any complications are caught early. For patients who have received their transplant at a major centre and returned home to a smaller town, our clinic serves as a reliable point of ongoing specialist care.`,
    points: [
      { title: 'Immunosuppression Management', detail: 'Regular monitoring of tacrolimus, cyclosporine, and mycophenolate levels — with adjustments based on function and tolerance.' },
      { title: 'Rejection Surveillance', detail: 'Early detection of acute and chronic rejection through regular kidney function tests and, where indicated, biopsy.' },
      { title: 'Infection Monitoring', detail: 'Surveillance for opportunistic infections — CMV, BK virus, fungal infections — in the context of long-term immunosuppression.' },
      { title: 'Cardiovascular Risk Reduction', detail: 'Management of post-transplant hypertension, dyslipidaemia, and diabetes — common complications that affect graft survival.' },
      { title: 'Malignancy Screening', detail: 'Guidance on appropriate cancer screening in the context of long-term immunosuppression.' },
      { title: 'Long-Term Graft Monitoring', detail: 'Regular tracking of creatinine, eGFR, and urine protein to detect early signs of chronic allograft nephropathy.' },
    ],
    accent: '#A35E5D',
    image: '/images/Kidney%20Stones.png',
  },

  /* ── NEW: Diagnostic Services ─────────────────────────────────────── */
  'ct-scan': {
    badge: 'Advanced Diagnostic Imaging',
    title: 'CT Scan: Detailed Cross-Sectional Imaging for Informed Clinical Decisions',
    subtitle: 'CT imaging provides detailed cross-sectional views of internal organs and structures, supporting accurate assessment of kidney-related and abdominal conditions. At Dr. Pavan\'s Kidney Care Clinic, CT scans are recommended only when clinically appropriate and interpreted in the context of your complete medical history.',
    seoTitle: 'CT Scan Services in Vijayawada & Poranki',
    metaDescription: 'CT imaging at Dr. Pavan\'s Kidney Care Clinic supports detailed evaluation of kidneys, abdomen, and related structures through cross-sectional imaging guided by clinical need.',
    intro: `A CT, or Computed Tomography, scan is an advanced imaging examination that uses X-ray technology and computer processing to create detailed cross-sectional images of the body. Unlike a standard X-ray, which produces a single flat image, a CT scan captures multiple image "slices" that allow doctors to examine organs, blood vessels, bones, and soft tissues from different angles.

In kidney care, CT imaging may be used to assess structural abnormalities, kidney stones, blockages, cysts, masses, infections, trauma-related concerns, and certain vascular conditions. It can also support the evaluation of abdominal organs and urinary-tract structures when clinical symptoms or initial investigations require a more detailed view. CT is particularly useful because it can identify disease or injury across multiple regions of the body with greater anatomical detail than conventional X-ray imaging.

A CT scan may be advised when a patient presents with persistent or unexplained abdominal or flank pain, suspected kidney stones, urinary obstruction, recurrent infections, unexplained blood in urine, suspected masses or cysts, or when an initial ultrasound or X-ray does not provide sufficient diagnostic clarity. The decision to perform a CT scan is always based on the patient's symptoms, medical history, prior reports, and the specific clinical question that needs to be answered.

One of the key advantages of CT imaging is speed and diagnostic detail. The examination is non-invasive and painless, and the resulting images can help doctors identify the location, size, and nature of an abnormality more precisely. This supports treatment planning, follow-up assessment, and timely clinical decision-making.

Because CT uses ionising radiation, it is recommended only when the expected clinical benefit outweighs the exposure. At Dr. Pavan's Kidney Care Clinic, imaging decisions are made responsibly, with attention to appropriate indications, patient safety, and the need to avoid unnecessary repeat scans. Depending on the examination, contrast may be used to improve visibility of certain structures; this will be explained before the scan, along with any preparation requirements and safety considerations.`,
    points: [
      { title: 'Kidney & Urinary Tract Assessment', detail: 'Detailed evaluation of kidney stones, blockages, cysts, masses, and structural abnormalities across the urinary system.' },
      { title: 'Abdominal Cross-Sectional Imaging', detail: 'Multi-slice imaging of abdominal organs with greater anatomical detail than conventional X-ray.' },
      { title: 'Contrast-Enhanced Imaging', detail: 'When clinically indicated, contrast may be used to improve visibility — with kidney function and suitability assessed beforehand.' },
      { title: 'Rapid & Non-Invasive', detail: 'Quick, painless examination that supports timely clinical decisions without surgical intervention.' },
      { title: 'Responsible Radiation Use', detail: 'CT is recommended only when the diagnostic benefit outweighs the exposure, with attention to patient safety.' },
      { title: 'Integrated Clinical Interpretation', detail: 'All CT findings are interpreted alongside your symptoms, medical history, and prior reports for a complete clinical picture.' },
    ],
    faqs: [
      { question: 'Is a CT scan painful?', answer: 'No. A CT scan is non-invasive and painless. Some patients may need to remain still for a short period, and contrast-based scans may involve an injection.' },
      { question: 'Does a CT scan use radiation?', answer: 'Yes. CT uses X-ray radiation, which is why it is recommended only when clinically justified and when the diagnostic benefit outweighs the exposure.' },
      { question: 'Can CT detect kidney stones?', answer: 'CT imaging can help assess kidney stones, urinary obstruction, and related structural concerns, depending on the clinical situation.' },
      { question: 'Do I need preparation before a CT scan?', answer: 'Preparation depends on the type of scan and whether contrast is required. Our team will provide clear instructions before your appointment.' },
    ],
    accent: '#710908',
    image: '/images/a_clean_high_resolution_product_style_rendering_o.png',
  },
  ultrasonography: {
    badge: 'Safe Diagnostic Imaging',
    title: 'Ultrasound Imaging: Clear Answers Without Radiation',
    subtitle: 'Ultrasonography uses sound waves to create real-time images of internal organs and tissues. It is a safe, non-invasive imaging method commonly used to assess the kidneys, urinary tract, abdomen, and related structures.',
    seoTitle: 'USG / Ultrasound Scan Services in Vijayawada & Poranki',
    metaDescription: 'Ultrasound imaging for kidney, urinary tract, abdominal, and soft-tissue evaluation at Dr. Pavan\'s Kidney Care Clinic, Vijayawada.',
    intro: `Ultrasonography, commonly known as USG or ultrasound scanning, is a non-invasive imaging technique that uses high-frequency sound waves to produce real-time images of organs, tissues, and fluid-filled structures. A small handheld device called a transducer sends sound waves into the body; the returning echoes are processed to create images on a monitor. Because it does not use ionising radiation, ultrasound is widely used for repeated assessments and for patients who require a radiation-free imaging option.

In nephrology and kidney care, ultrasound is frequently used to evaluate kidney size, shape, and position; identify cysts, stones, swelling, or structural abnormalities; assess urinary-tract obstruction; and monitor known kidney conditions over time. It can also support evaluation of the bladder, prostate-related concerns in appropriate cases, abdominal organs, and fluid collections when clinically relevant.

An ultrasound scan may be recommended for symptoms such as flank or abdominal pain, recurrent urinary infections, blood in urine, reduced urine output, swelling, suspected kidney stones, abnormal kidney-function reports, or known kidney disease requiring periodic monitoring. It is also useful as a first-line imaging test because it provides immediate visual information without exposing the patient to radiation.

The main advantages of ultrasound are safety, accessibility, real-time imaging, and patient comfort. The procedure is generally painless, does not require ionising radiation, and can often be completed quickly. For many kidney and abdominal concerns, ultrasound provides valuable initial information that helps the nephrologist decide whether further imaging, laboratory testing, or specialist intervention is required.

At Dr. Pavan's Kidney Care Clinic, ultrasound findings are interpreted alongside your symptoms, medical history, blood tests, urine reports, and prior imaging. This integrated approach helps ensure that imaging is not viewed in isolation, but becomes part of a clear, clinically meaningful diagnosis and treatment plan. Depending on the area being examined, you may be asked to follow simple preparation instructions, such as maintaining a full bladder for certain urinary-tract assessments.`,
    points: [
      { title: 'Kidney Assessment', detail: 'Evaluate kidney size, shape, position, cysts, stones, swelling, and structural abnormalities in real time.' },
      { title: 'Urinary Tract Evaluation', detail: 'Assess obstruction, bladder concerns, and prostate-related issues where clinically relevant.' },
      { title: 'Radiation-Free Imaging', detail: 'Safe, non-invasive imaging that uses sound waves — suitable for repeated assessments without radiation exposure.' },
      { title: 'Abdominal & Soft-Tissue Imaging', detail: 'Evaluate abdominal organs, fluid collections, and soft-tissue structures when symptoms require investigation.' },
      { title: 'Real-Time Visualisation', detail: 'Immediate visual information that supports first-line clinical decisions and monitoring.' },
      { title: 'Integrated Clinical Interpretation', detail: 'All findings interpreted alongside symptoms, lab results, and prior imaging for a complete diagnostic picture.' },
    ],
    faqs: [
      { question: 'Is ultrasound safe?', answer: 'Yes. Ultrasound uses sound waves rather than ionising radiation and is considered a safe, non-invasive imaging method.' },
      { question: 'How long does an ultrasound take?', answer: 'Most ultrasound examinations are completed within a short time, although the duration depends on the area being scanned and the clinical requirement.' },
      { question: 'Do I need to prepare for a kidney ultrasound?', answer: 'Preparation may vary. For some urinary-tract or pelvic assessments, a full bladder may be required. Our team will guide you before the scan.' },
      { question: 'Can ultrasound detect kidney stones?', answer: 'Ultrasound can identify many kidney stones and signs of urinary obstruction, though CT may be advised in certain situations when more detailed imaging is required.' },
    ],
    accent: '#FB6603',
    image: '/images/a_clean_studio_style_product_medical_equipment_re.png',
  },
  'digital-x-ray': {
    badge: 'Digital Radiography',
    title: 'Digital X-ray: Fast, Reliable Imaging for Essential Diagnosis',
    subtitle: 'Digital X-ray imaging provides quick visual assessment of bones, chest structures, and selected abdominal or urinary-tract concerns. It remains an essential first-line diagnostic tool when a rapid, accessible evaluation is required.',
    seoTitle: 'Digital X-ray Services in Vijayawada & Poranki',
    metaDescription: 'Digital X-ray imaging for quick assessment of bones, chest, abdomen, and urinary-tract-related concerns at Dr. Pavan\'s Kidney Care Clinic.',
    intro: `Digital X-ray, or digital radiography, is an imaging technique that uses a controlled amount of X-ray radiation to create images of the internal structures of the body. It is commonly used to assess bones, joints, the chest, and selected abdominal or urinary-tract-related concerns. Unlike conventional film-based radiography, digital systems capture images electronically, allowing efficient review, storage, and sharing of reports.

In a kidney-care setting, an X-ray may be used as part of the initial assessment for certain urinary-tract concerns, abdominal symptoms, or musculoskeletal complaints. It can help identify structural abnormalities, foreign objects, and certain forms of damage or anatomical variation. However, X-ray findings are always interpreted alongside clinical symptoms and, where necessary, followed by ultrasound, CT, or laboratory investigations for a more complete assessment.

A digital X-ray may be advised for persistent back or flank pain, suspected bone or joint injury, chest-related symptoms, certain abdominal concerns, or as part of a broader diagnostic work-up. Because it is quick, widely available, and non-invasive, it is often used when a fast initial image is needed to guide the next step in care.

The primary advantages of digital X-ray are speed, convenience, and diagnostic usefulness. The examination is painless, typically completed quickly, and produces digital images that can be reviewed by the treating doctor and retained for future comparison.

At Dr. Pavan's Kidney Care Clinic, X-ray imaging is recommended judiciously, with attention to clinical indication and radiation safety. Our team explains the purpose of the scan, any preparation required, and how the findings will contribute to your overall diagnosis and treatment plan. Digital imaging also makes it easier to maintain a record of your reports for continuity of care.`,
    points: [
      { title: 'Quick Initial Assessment', detail: 'Fast, non-invasive imaging when a rapid first-line evaluation is needed for bones, chest, or abdominal concerns.' },
      { title: 'Digital Image Capture', detail: 'Electronic capture allows efficient review, storage, and sharing — replacing conventional film-based systems.' },
      { title: 'Bone & Joint Evaluation', detail: 'Assessment of suspected fractures, joint injuries, and musculoskeletal complaints with clear imaging.' },
      { title: 'Chest & Abdominal Imaging', detail: 'Support for chest-related symptoms, certain abdominal concerns, and selected urinary-tract evaluations.' },
      { title: 'Judicious Radiation Use', detail: 'Recommended only when clinically appropriate, with modern digital systems designed for reasonable radiation doses.' },
      { title: 'Continuity of Records', detail: 'Digital reports retained for future comparison, supporting long-term monitoring and follow-up care.' },
    ],
    faqs: [
      { question: 'Is a digital X-ray safe?', answer: 'Digital X-ray uses a controlled amount of ionising radiation. It is recommended when clinically appropriate, and modern digital systems are designed to produce diagnostic-quality images at reasonable radiation doses.' },
      { question: 'Is an X-ray painful?', answer: 'No. The procedure is painless and non-invasive. You may be asked to hold a specific position briefly while the image is captured.' },
      { question: 'Can an X-ray detect kidney stones?', answer: 'Some kidney stones are visible on X-ray, but many are not. Ultrasound or CT may be recommended depending on the clinical situation.' },
      { question: 'How soon will I receive my report?', answer: 'Digital images are available quickly for review. Report timing depends on the examination and the treating doctor\'s assessment requirements.' },
    ],
    accent: '#A35E5D',
    image: '/images/a_clean_isolated_product_medical_equipment_render.png',
  },
  'advanced-hormone-assays': {
    badge: 'Precision Laboratory Diagnostics',
    title: 'Advanced Hormone Assays for Clearer Clinical Answers',
    subtitle: 'Hormones influence metabolism, blood pressure, fluid balance, energy levels, and kidney health. Advanced hormone assays provide precise laboratory insights that support accurate diagnosis, monitoring, and personalised treatment planning.',
    seoTitle: 'Advanced Hormone Assays in Vijayawada & Poranki',
    metaDescription: 'Advanced hormone testing for thyroid, metabolic, adrenal, and kidney-related endocrine evaluation at Dr. Pavan\'s Kidney Care Clinic, Vijayawada.',
    intro: `Hormones are chemical messengers produced by glands such as the thyroid, adrenal glands, pancreas, and kidneys. They regulate essential functions including metabolism, blood pressure, fluid and electrolyte balance, growth, energy levels, and the body's response to stress. When hormone levels become too high or too low, symptoms may be subtle at first but can significantly affect overall health and disease progression.

Advanced hormone assays are specialised laboratory tests that measure the levels of specific hormones or related markers in blood, urine, or other samples. In kidney and metabolic care, hormone testing may be used to evaluate thyroid function, adrenal disorders, electrolyte and blood-pressure abnormalities, diabetes-related metabolic concerns, and certain kidney-related endocrine imbalances. Accurate hormone assessment helps clinicians understand not only whether a hormone is abnormal, but also how it may be contributing to a patient's broader clinical picture.

These tests may be recommended for symptoms such as unexplained fatigue, weight changes, palpitations, heat or cold intolerance, abnormal blood pressure, electrolyte disturbances, recurrent weakness, menstrual or fertility-related concerns, or abnormal kidney-function findings. They are also valuable for monitoring known thyroid, adrenal, metabolic, or kidney-related endocrine conditions over time.

The advantage of advanced hormone assays lies in their ability to provide objective, measurable information. Rather than relying only on symptoms, clinicians can use laboratory values to confirm or rule out suspected conditions, assess severity, guide medication decisions, and monitor treatment response. When interpreted alongside kidney-function tests, imaging, and clinical examination, hormone assays help create a more complete and personalised care plan.

At Dr. Pavan's Kidney Care Clinic, hormone testing is recommended based on individual clinical need — not as a routine, one-size-fits-all panel. Your doctor will explain which tests are relevant, why they are being advised, and how the results will influence your treatment or follow-up plan. Because hormone levels can vary with time of day, medication use, stress, illness, and other factors, appropriate test timing and clinical interpretation are essential for reliable results.`,
    points: [
      { title: 'Thyroid Function Testing', detail: 'Evaluation of thyroid hormones to assess hypo- or hyperthyroidism and their impact on metabolism and kidney health.' },
      { title: 'Adrenal & Cortisol Assessment', detail: 'Testing for adrenal disorders that can affect blood pressure, electrolyte balance, and overall kidney function.' },
      { title: 'Metabolic & Diabetes Evaluation', detail: 'Hormone assays supporting the assessment of diabetes-related metabolic concerns and insulin-related markers.' },
      { title: 'Kidney-Related Endocrine Testing', detail: 'Evaluation of hormones directly linked to kidney function — including parathyroid hormone and erythropoietin-related markers.' },
      { title: 'Individualised Test Selection', detail: 'Tests recommended based on your specific clinical picture — not routine panels — ensuring relevance and accuracy.' },
      { title: 'Clinical Interpretation', detail: 'Results interpreted alongside kidney-function tests, imaging, and examination for a complete, personalised care plan.' },
    ],
    faqs: [
      { question: 'What are hormone assays?', answer: 'Hormone assays are laboratory tests that measure specific hormones or related markers to help diagnose, monitor, and manage endocrine or metabolic conditions.' },
      { question: 'Why would a kidney patient need hormone testing?', answer: 'Hormones can affect blood pressure, fluid balance, metabolism, and kidney function. Testing may be advised when symptoms or reports suggest a thyroid, adrenal, metabolic, or kidney-related endocrine concern.' },
      { question: 'Do hormone tests require fasting?', answer: 'It depends on the specific test. Some hormone assays require fasting or timing at a particular point in the day, while others do not. Our team will provide clear instructions before sample collection.' },
      { question: 'How are abnormal hormone results treated?', answer: 'Treatment depends on the underlying cause, the specific hormone involved, symptom severity, and overall health status. Results are interpreted clinically and may lead to medication, lifestyle guidance, further testing, or specialist follow-up.' },
    ],
    accent: '#710908',
    image: '/images/Mindray%20BS-3000%20Analyzer%20Workstation.png',
  },
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
})

/* ── FAQ Accordion Item ─────────────────────────────────────────── */
function FaqItem({ question, answer, accent }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: open ? `1px solid ${accent}30` : '1px solid rgba(219,171,157,0.30)',
        boxShadow: open ? `0 12px 40px ${accent}10` : '0 4px 16px rgba(113,9,8,0.04)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
      >
        <span className="font-semibold text-sm sm:text-base text-[#1a0a0a] leading-snug">{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0"
        >
          <ChevronDown size={18} style={{ color: accent }} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 text-sm text-[#4a0605]/65 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ServicePage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const service = SERVICES[slug]

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 px-5">
          <h1 className="font-display text-3xl font-bold text-[#710908]">Service Not Found</h1>
          <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
        <Footer />
      </div>
    )
  }

  const { badge, title, subtitle, intro, points, accent, image, faqs, seoTitle, metaDescription } = service

  return (
    <div className="min-h-screen flex flex-col bg-hero">
      {seoTitle && (
        <SEO
          title={seoTitle}
          description={metaDescription}
          path={`/services/${slug}`}
        />
      )}
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 px-5 sm:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
          style={{ background: `radial-gradient(circle, ${accent}18, transparent 70%)`, filter: 'blur(60px)' }} />

        <div className="max-w-6xl mx-auto">
          {/* Back */}
          <motion.button
            {...fadeUp(0)}
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#710908]/70 hover:text-[#710908] mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <motion.div {...fadeUp(0.05)}>
                <span className="inline-flex px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-4"
                  style={{ background: `${accent}14`, color: accent }}>
                  {badge}
                </span>
              </motion.div>
              <motion.h1 {...fadeUp(0.1)} className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 text-[#1a0a0a]">
                {title}
              </motion.h1>
              <motion.p {...fadeUp(0.15)} className="text-[#4a0605]/65 text-base sm:text-lg leading-relaxed mb-8">
                {subtitle}
              </motion.p>
              <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-3">
                <a href="/#contact" className="btn-primary"><Phone size={14} /> Book a Consultation</a>
                <Link to="/#services" className="btn-ghost">All Services</Link>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[32px] pointer-events-none"
                style={{ background: `radial-gradient(circle, ${accent}20 0%, transparent 72%)`, filter: 'blur(20px)' }} />
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl"
                style={{
                  background: 'rgba(255,255,255,0.55)',
                  backdropFilter: 'blur(20px)',
                  border: '1.5px solid rgba(255,255,255,0.85)',
                  padding: 12,
                }}>
                <img src={image} alt={title} className="w-full h-full object-cover rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-16 sm:py-20 px-5 sm:px-6" style={{ background: '#FFFDFB' }}>
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp(0)} className="section-label mb-3">Overview</motion.div>
          <motion.div {...fadeUp(0.05)}>
            {intro.split('\n\n').map((para, i) => (
              <p key={i} className="text-[#4a0605]/65 text-base leading-relaxed mb-5">{para}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Key Points ── */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 bg-section-alt">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <div className="section-label justify-center mb-3">What We Cover</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1a0a0a]">
              Our Approach to <span className="gradient-text">{title}</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {points.map(({ title: pt, detail }, i) => (
              <motion.div key={pt} {...fadeUp(i * 0.07)}
                className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `linear-gradient(135deg, ${accent}18, ${accent}28)` }}>
                  <CheckCircle2 size={17} style={{ color: accent }} />
                </div>
                <div>
                  <div className="font-semibold text-[#1a0a0a] text-sm mb-1">{pt}</div>
                  <div className="text-xs text-[#4a0605]/60 leading-relaxed">{detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs (optional) ── */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 sm:py-20 px-5 sm:px-6" style={{ background: '#FFFDFB' }}>
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp(0)} className="text-center mb-12">
              <div className="section-label justify-center mb-3">Common Questions</div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1a0a0a]">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </motion.div>
            <div className="flex flex-col gap-3">
              {faqs.map(({ question, answer }, i) => (
                <motion.div key={question} {...fadeUp(i * 0.08)}>
                  <FaqItem question={question} answer={answer} accent={accent} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 bg-hero">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 {...fadeUp(0)} className="font-display text-3xl sm:text-4xl font-bold text-[#1a0a0a] mb-4">
            Ready to Speak with Dr. Pavan Kumar?
          </motion.h2>
          <motion.p {...fadeUp(0.08)} className="text-[#4a0605]/60 text-base leading-relaxed mb-8">
            Book a consultation and receive a clear, honest assessment of your kidney health — without the wait or the distance.
          </motion.p>
          <motion.div {...fadeUp(0.14)} className="flex flex-wrap gap-3 justify-center">
            <a href="/#contact" className="btn-primary"><Phone size={14} /> Book a Consultation</a>
            <Link to="/" className="btn-ghost">Back to Home <ArrowRight size={14} /></Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
