import React, {useState} from 'react';
import Modal from '../Modal';

function Portfolio() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: '12Wishes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'RunBuddy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'myTask',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'test3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
  ]);

  const toggleModal = (project) => {
    setCurrentProject(project);
    setModalOpen(!isModalOpen);
  }

  return(
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentProject={currentProject} />}
      <div>
        {projects.map((project, i)=> (
          <div>
            <img
              // src={require(`../../assets/screenshots/${project.name}.jpg`)} 
              alt={project.name}
              onClick={() => toggleModal(project)}
              key={project.name}
            />
            <h1>{project.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio;