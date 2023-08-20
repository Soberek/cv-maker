import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFieldArrayUpdate,
  UseFormRegister,
} from "react-hook-form";

import { InputsI } from "../types";

import PanelTitle from "../elements/PanelTitle";
import Input from "../elements/Input";
import Button from "../elements/Button";
import TextArea from "../elements/Textarea";

type ProjectsPanelProps = {
  register: UseFormRegister<InputsI>;
  fields: FieldArrayWithId<InputsI, "projects", "id">[];
  append: UseFieldArrayAppend<InputsI, "projects">;
  remove: UseFieldArrayRemove;
  update: UseFieldArrayUpdate<InputsI, "projects">;
};

const ProjectsPanel = ({ register, fields, append, remove, update }: ProjectsPanelProps) => {
  const NEW_PROJECT_VALUE = {
    name: "",
    tools: [{ name: "" }],
    source: "",
    demo: "",
    description: [""],
  };

  return (
    <>
      <PanelTitle>YOUR PROJECTS</PanelTitle>
      {fields.map((project, project_index) => (
        <div key={project_index} className="mt-4 border-t-4 border-cyan-500 pt-4">
          {/* Project info */}
          <div className="[&>*]:mb-2">
            <Input
              placeholder="CV Maker"
              label_title="Project name"
              inputProps={{ ...register(`projects.${project_index}.name`) }}
            />
            <Input
              inputProps={{ ...register(`projects.${project_index}.source`) }}
              placeholder="https://github.com/Soberek/cv-maker"
              label_title="Source Link"
            />

            <Input
              inputProps={{ ...register(`projects.${project_index}.demo`) }}
              placeholder="https://main--cvmakerproject.netlify.app/"
              label_title="Demo Link"
            />
          </div>

          {/* Description */}
          <div>
            <h1 className="mb-2 text-[1rem] text-gray-400">Description</h1>
            {project.description.map((_, description_index) => {
              return (
                <>
                  <div className="[&>*]:mb-2">
                    <TextArea
                      className="min-h-[30px]"
                      placeholder="Developed a CV maker project utilizing TypeScript and React,"
                      inputProps={{ ...register(`projects.${project_index}.description.${description_index}`) }}
                    />
                  </div>

                  {project.description.length - 1 === description_index && (
                    <div className="my-2 flex gap-2">
                      <Button
                        type="button"
                        onClick={() => {
                          console.log(`Adding: ${project.description.length}`);
                          update(project_index, { ...project, description: [...project.description, ""] });
                        }}
                      >
                        Add description
                      </Button>
                      <Button
                        type="button"
                        onClick={() => {
                          if (project.description.length === 1) return;
                          console.log(`Removing: ${project.description.length}`);
                          update(project_index, {
                            ...project,
                            description: project.description.slice(0, project.description.length - 1),
                          });
                        }}
                      >
                        Remove description
                      </Button>
                    </div>
                  )}
                </>
              );
            })}
          </div>

          {/*Tech stack */}
          <div>
            <h1 className="mb-2 text-[1rem] text-gray-400">Tech stack</h1>
            {project.tools.map((_, toolIndex) => (
              <>
                <div className="flex items-center gap-2 [&>*]:mb-1" key={`${project_index}${toolIndex}`}>
                  <Input
                    key={`${project.id}${toolIndex}`}
                    inputProps={{ ...register(`projects.${project_index}.tools.${toolIndex}.name`) }}
                    placeholder="React"
                  />
                  {project.tools.length - 1 === toolIndex && (
                    <div className="my-2 flex gap-2">
                      <Button
                        type="button"
                        onClick={() => {
                          update(project_index, { ...project, tools: [...project.tools, { name: "" }] });
                        }}
                      >
                        Add tech
                      </Button>
                      <Button
                        type="button"
                        onClick={() => {
                          if (project.tools.length === 1) return;
                          update(project_index, {
                            ...project,
                            tools: project.tools.slice(0, project.tools.length - 1),
                          });
                        }}
                      >
                        Remove tech
                      </Button>
                    </div>
                  )}
                </div>
              </>
            ))}
          </div>
        </div>
      ))}

      {/* Add/Remove Project Buttons */}
      <div className="[&>button:not(:first-child)]:ml-2">
        <Button type="button" onClick={() => append(NEW_PROJECT_VALUE)}>
          Add Project
        </Button>
        <Button type="button" onClick={() => remove(fields.length - 1)}>
          Remove Project
        </Button>
      </div>
    </>
  );
};

export default ProjectsPanel;
