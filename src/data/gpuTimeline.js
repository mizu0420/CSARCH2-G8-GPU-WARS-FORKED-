// Subject to change
const gpuTimeline = [
  {
    id: 1,
    year: 1996,
    title: "3DFX Voodoo Graphics",
    description: "One of the first widely successful consumer 3D accelerators. It handled graphics rendering tasks that were previously done by the CPU, significantly improving gaming performance. This marked an early shift toward dedicated hardware for visual computing."
  },
  {
    id: 2,
    year: 1999,
    title: "GeForce 256",
    description: "Recognized as the first true GPU. It introduced hardware transform and lighting (T&L), moving complex geometric calculations from the CPU to the graphics card. This established the foundation for modern programmable graphics pipelines."
  },
  {
    id: 3,
    year: 2007,
    title: "CUDA",
    description: "Introduced a programming model that allowed developers to use GPUs for general-purpose computation. Instead of being limited to graphics workloads, GPUs could now execute massively parallel algorithms. This marked the beginning of the GPGPU era."
  },
  {
    id: 4,
    year: 2018,
    title: "RTX 20 Series",
    description: "Brought real-time ray tracing to consumer GPUs using dedicated RT cores. It also introduced Tensor cores for AI-accelerated graphics techniques like denoising and upscaling. Together, these changes significantly improved realism and performance in modern rendering."
  },
  {
    id: 5,
    year: "2022-Present",
    title: "AI Supercomputing Era",
    description: "GPUs have become central to large-scale artificial intelligence and scientific computing. They are widely used for training deep learning models, running inference at scale, and powering data centers. Modern GPU architectures are now designed primarily around AI and parallel throughput."
  }
];

export default gpuTimeline;