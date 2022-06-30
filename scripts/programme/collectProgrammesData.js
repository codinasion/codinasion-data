import fetch from "node-fetch";

import fs from "fs";

import matter from "gray-matter";

import formatSlug from "../formatSlug";
import formatTag from "../formatTag";

export default async function collectProgrammesData(
  owner,
  token,
  programmeRepo,
  programmeBranch
) {
  const res = await formatTag("py");
  await console.log("format py => ", res);

  // const programmeList = [];
  // const pathsData = await fetch(
  //   `https://api.github.com/repos/${owner}/${programmeRepo}/git/trees/${programmeBranch}?recursive=1`,
  //   {
  //     method: "GET",
  //     headers: {
  //       Authorization: `token ${token}`,
  //     },
  //   }
  // )
  //   .then((res) => res.json())
  //   .then((res) => res.tree)
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // pathsData &&
  //   (await Promise.all(
  //     await pathsData.map(async (data) => {
  //       if (
  //         data.path.startsWith("programme") &&
  //         data.path.endsWith("README.md") &&
  //         data.path !== "programme/README.md"
  //       ) {
  //         const source = await fetch(
  //           `https://raw.githubusercontent.com/${owner}/${programmeRepo}/${programmeBranch}/${data.path}`,
  //           {
  //             method: "GET",
  //             headers: {
  //               Authorization: `token ${token}`,
  //             },
  //           }
  //         )
  //           .then((res) => res.text())
  //           .catch((error) => console.log(error));

  //         try {
  //           const content = await matter(source);
  //           await programmeList.push({
  //             title: content.data.title ? content.data.title : "Codinasion",
  //             tags: content.data.tags ? content.data.tags : [],
  //             slug: formatSlug(data.path),
  //           });
  //         } catch (error) {
  //           await console.log("error occured !!! for ", data.path);
  //           await console.log(error);
  //         }
  //       }
  //     })
  //   ));

  // await console.log("\n=> Total programmeList data : ", programmeList.length);

  // // write prorgamme list data to file
  // const programmeListJson = await JSON.stringify(
  //   programmeList.sort(function (a, b) {
  //     if (a.slug < b.slug) {
  //       return -1;
  //     }
  //     if (a.slug > b.slug) {
  //       return 1;
  //     }
  //     return 0;
  //   })
  // );
  // const programmeFileDir = "data/programme";
  // await fs.promises.mkdir(programmeFileDir, { recursive: true });
  // const programmeFilePath = programmeFileDir + "/programmeList.json";
  // await fs.writeFile(programmeFilePath, programmeListJson, (err) => {
  //   if (err) throw err;
  //   console.log(`=> ${programmeFilePath} succesfully saved !!!`);
  // });
}
