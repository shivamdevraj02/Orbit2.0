import WingDetailPage from '../../components/wings/WingDetailPage';

const config = {
  wingCode: 'WING 01 // AI_CORE',
  heroTitle: ['DECODING', 'INTELLIGENT SYSTEMS.'],
  heroLead: 'We explore machine learning, deep learning, and applied AI — from research papers to production-ready models.',
  terminalLines: [
    '$ pip install torch transformers',
    '> training model...',
    '> accuracy: 96.4%',
  ],
  stackItems: [
    { name: 'Python', category: 'Language' },
    { name: 'PyTorch', category: 'Framework' },
    { name: 'TensorFlow', category: 'Framework' },
    { name: 'Scikit-learn', category: 'ML' },
    { name: 'Hugging Face', category: 'NLP' },
    { name: 'OpenCV', category: 'CV' },
  ],
  roadmapSteps: [
    { title: 'Python & Math Foundations', desc: 'Linear algebra, statistics, Python for data science' },
    { title: 'Classical ML', desc: 'Regression, classification, clustering algorithms' },
    { title: 'Deep Learning', desc: 'Neural networks, CNNs, RNNs, Transformers' },
    { title: 'Deployment', desc: 'Model serving, MLOps, real-world integration' },
  ],
  projects: [
    { title: 'Sentiment Analyzer', desc: 'NLP-based review classifier', link: '#' },
    { title: 'Image Classifier', desc: 'CNN-based defect detection system', link: '#' },
  ],
  ctaHeading: 'WANT TO BUILD SMARTER SYSTEMS?',
  ctaText: 'Join weekly paper discussions, model-building sprints, and research projects.',
};

export default function AIWing() {
  return <WingDetailPage config={config} />;
}