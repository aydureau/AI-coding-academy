import Link from "next/link";
import styles from "../lesson.module.css";
import infraStyles from "./infra.module.css";

const infraLayers = [
  { icon: "🌐", label: "Network", ai: "AI-driven routing, DDoS detection, traffic prediction" },
  { icon: "☁️", label: "Cloud / IaaS", ai: "Predictive auto-scaling, cost optimisation, right-sizing" },
  { icon: "📦", label: "Containers / K8s", ai: "Intelligent scheduling, anomaly-based HPA, config generation" },
  { icon: "⚙️", label: "Platform / PaaS", ai: "Self-service AI, intelligent developer portals, AI config gen" },
  { icon: "🔒", label: "Security", ai: "Behavioural threat detection, AI-assisted posture management" },
  { icon: "📊", label: "Observability", ai: "Log summarisation, predictive alerting, root-cause correlation" },
];

const sections = [
  {
    title: "Cloud & AI: compute, cost, and right-sizing",
    content: [
      "AI-powered right-sizing tools analyse CPU, memory, and network utilisation patterns to recommend smaller or larger instance types automatically.",
      "Cloud providers now embed ML models in their auto-scaling policies — scaling begins before traffic arrives, not after.",
      "FinOps platforms use AI to predict monthly spend, detect anomalous charges, and generate savings plans aligned to actual usage.",
      "Spot and preemptible instance selection is increasingly AI-driven, balancing interruption risk against cost savings.",
    ],
    resources: [
      { label: "AWS Compute Optimizer", url: "https://aws.amazon.com/compute-optimizer/" },
      { label: "Azure Advisor", url: "https://azure.microsoft.com/en-us/products/advisor" },
      { label: "Google Cloud Recommender", url: "https://cloud.google.com/recommender" },
      { label: "CloudZero FinOps AI", url: "https://www.cloudzero.com/" },
    ],
  },
  {
    title: "AI-native security & posture management",
    content: [
      "Cloud Security Posture Management (CSPM) tools now use LLMs to explain misconfigurations in plain language and generate remediation pull requests.",
      "Behavioural AI detects anomalous access patterns (unusual API calls, lateral movement) that rule-based SIEMs miss.",
      "AI assistants in security consoles let engineers query audit logs, IAM policies, and CVE databases in natural language.",
      "Code scanning tools use ML to flag AI-generated code for additional review, recognising patterns common in LLM output.",
    ],
    resources: [
      { label: "Wiz cloud security", url: "https://www.wiz.io/" },
      { label: "Snyk AI features", url: "https://snyk.io/platform/snyk-ai/" },
      { label: "GitHub Advanced Security", url: "https://github.com/features/security" },
      { label: "Microsoft Defender for Cloud AI", url: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/ai-threat-protection" },
    ],
  },
  {
    title: "Intelligent observability & AIOps",
    content: [
      "AIOps platforms ingest logs, metrics, and traces simultaneously and use ML to reduce alert noise by correlating related events.",
      "LLM-powered chat interfaces allow on-call engineers to ask 'why is latency spiking?' and receive a plain-language summary of root causes.",
      "Predictive alerting fires before SLO breaches occur, based on trend detection rather than threshold crossing.",
      "Automated runbooks trigger remediation workflows (restart pods, increase replicas, clear cache) when known incident patterns are matched.",
    ],
    resources: [
      { label: "Datadog AI & LLM Observability", url: "https://www.datadoghq.com/product/platform/ai/" },
      { label: "Dynatrace Davis AI", url: "https://www.dynatrace.com/platform/artificial-intelligence/" },
      { label: "PagerDuty AIOps", url: "https://www.pagerduty.com/platform/aiops/" },
      { label: "AWS DevOps Guru", url: "https://aws.amazon.com/devops-guru/" },
    ],
  },
  {
    title: "AI-assisted platform engineering & IaC",
    content: [
      "Platform engineers use AI to generate Terraform, Pulumi, and Helm configurations from natural-language descriptions of desired infrastructure.",
      "Internal developer portals are becoming AI-native: engineers describe what they need, the platform provisions it.",
      "Drift detection tools use ML to identify infrastructure state diverging from declared config, even across complex multi-cloud environments.",
      "AI documentation tools generate runbooks, architecture diagrams, and disaster recovery plans directly from IaC codebases.",
    ],
    resources: [
      { label: "HashiCorp AI features", url: "https://www.hashicorp.com/blog/announcing-hashicorp-ai" },
      { label: "Pulumi AI", url: "https://www.pulumi.com/ai/" },
      { label: "Backstage developer portal", url: "https://backstage.io/" },
      { label: "Infracost cloud cost AI", url: "https://www.infracost.io/" },
    ],
  },
];

export default function Lesson3Page() {
  return (
    <div className="container">
      <div className={styles.breadcrumb}>
        <Link href="/lessons">← All Lessons</Link>
      </div>
      <header className={styles.header}>
        <span className={styles.lessonNum}>Lesson 03</span>
        <h1>Impact of AI on infrastructure services</h1>
        <p>
          From cloud cost management to security posture and intelligent observability — AI is
          fundamentally changing how infrastructure is built, run, and secured.
        </p>
      </header>

      {/* ── Infrastructure stack diagram ── */}
      <section className={infraStyles.stackSection}>
        <h2>The AI-augmented infrastructure stack</h2>
        <p className={infraStyles.caption}>
          Every layer of the infrastructure stack now has an AI-native counterpart. Hover to see the AI impact.
        </p>
        <div className={infraStyles.stack}>
          {infraLayers.map((layer) => (
            <div key={layer.label} className={infraStyles.layer}>
              <span className={infraStyles.layerIcon}>{layer.icon}</span>
              <span className={infraStyles.layerLabel}>{layer.label}</span>
              <div className={infraStyles.layerTooltip}>{layer.ai}</div>
            </div>
          ))}
        </div>

        {/* Build vs Run AI flow */}
        <div className={infraStyles.flowDiagram}>
          <div className={infraStyles.flowBox}>
            <span className={infraStyles.flowIcon}>🧠</span>
            <strong>AI Model</strong>
            <span>(predict / detect / generate)</span>
          </div>
          <div className={infraStyles.flowArrows}>
            <div className={infraStyles.flowArrow}>
              <span>observed signals</span>
              <span className={infraStyles.arrowLine}>←←←</span>
            </div>
            <div className={infraStyles.flowArrow}>
              <span className={infraStyles.arrowLine}>→→→</span>
              <span>automated actions</span>
            </div>
          </div>
          <div className={infraStyles.flowBox}>
            <span className={infraStyles.flowIcon}>🏗️</span>
            <strong>Infrastructure</strong>
            <span>(cloud / k8s / network)</span>
          </div>
        </div>
      </section>

      {/* ── Content sections ── */}
      <div className={styles.body}>
        {sections.map((sec) => (
          <section key={sec.title} className={styles.section}>
            <div className={styles.sectionHead}>
              <h2>{sec.title}</h2>
            </div>
            <ul className={styles.contentList}>
              {sec.content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.resources}>
              <p className={styles.resourcesLabel}>Go deeper</p>
              <div className={styles.resourceLinks}>
                {sec.resources.map((r) => (
                  <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className={styles.resourceChip}>
                    {r.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className={styles.nav}>
        <Link href="/lessons/ai-and-sdlc" className={styles.prevBtn}>
          ← Lesson 02
        </Link>
        <Link href="/practice" className={styles.nextBtn}>
          Go to Practice Lab →
        </Link>
      </div>
    </div>
  );
}
