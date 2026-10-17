import { Link, useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, Phone, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
})

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

  const { badge, title, subtitle, intro, points, accent, image } = service

  return (
    <div className="min-h-screen flex flex-col bg-hero">
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
