import React, {useState} from 'react';
import Modal from '../Modal';

function Portfolio() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: '12Wishes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      github: 'https://github.com/chriswein12/wish-list',
      deployment: 'https://twelve-wishes.herokuapp.com/'
    },
    {
      name: 'RunBuddy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      github: '',
      deployment: ''
    },
    {
      name: 'myTask',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      github: '',
      deployment: ''
    },
    {
      name: 'test3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      github: '',
      deployment: ''
    }
  ]);

  const toggleModal = (project) => {
    setCurrentProject(project);
    setModalOpen(!isModalOpen);
  }

  return(
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentProject={currentProject}/>}
      <div className="card-grid">
        {projects.map((project, i)=> (
          <div key={project.name} className="card">
            <img
              // src={require(`../../assets/screenshots/${project.name}.jpg`)} 
              alt={project.name}
            />
            <div className="card-content">
              <h3 className="card-title">{project.name}</h3>
              <p className="card-body">{project.description}</p>
              <button className="button" onClick={() => toggleModal(project)}>Learn More</button>
            </div> 
          </div>
        ))}
      </div>
    </div>
  )
} 

export default Portfolio;