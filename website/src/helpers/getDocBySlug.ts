/* eslint-disable @typescript-eslint/no-explicit-any */

const getDocBySlug = (DocsData: object, s: string | undefined) => {
  let doc = {};

  Object.keys(DocsData).forEach((version) => {
    Object.keys((DocsData as any)[version]).forEach((folder) => {
      Object.keys((DocsData as any)[version][folder]).forEach((docName) => {
        (DocsData as any)[version][folder][docName].slugs.map((slug: string) => {
          if ((slug.split('docs/').pop() == undefined && s == undefined) || Array.from(s || []).join(`/`) == slug.split('docs/').pop()) {
            doc = (DocsData as any)[version][folder][docName];
          }
        });
      });
    });
  });

  return doc;
};

export default getDocBySlug;
