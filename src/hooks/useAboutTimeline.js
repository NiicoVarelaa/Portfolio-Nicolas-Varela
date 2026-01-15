export const useAboutTimeline = (t) => {
  return [
    {
      icon: "user",
      description: t.intro,
    },
    {
      icon: "graduation",
      title: t.educationTitle,
      description: t.educationText,
    },
    {
      icon: "certificate",
      title: t.certificationTitle,
      certificates: [
        {
          name: t.certificates[0],
          image:
            "https://certs.rollingcodeschool.com//bmlpY292YXJlbGFhQGdtYWlsLmNvbQ==-1689275429296-1.png",
        },
      ],
    },
  ];
};
