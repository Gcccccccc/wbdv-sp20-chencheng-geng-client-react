// import React from "react";
// import './CourseEditor.css'
//
// class ModuleItemComponent extends React.Component{
//     state = {
//         editing: false,
//         module: this.props.module
//     }
//
//     toggle = () => {
//         this.setState((prevState) => {
//             if (prevState.editing === true) {
//                 return {
//                     editing: false
//                 }
//             } else {
//                 return {
//                     editing: true
//                 }
//             }
//         })
//     }
//     render(){
//         return(
//         <div>
//             {
//                 !(this.props.cur === this.state.module._id) &&
//                 <div>
//                     <div className="wbdv-module-item container-fluid" onClick={() => {
//                         this.props.setCurHi(this.state.module._id)
//                     }}>
//                         <a className="btn">
//                             <span className="wbdv-module-item-title">{this.state.module.title}</span>
//                         </a>
//                         <a className="wbdv-module-item-delete-btn btn">
//                             <i className="fas fa-pencil-alt wbdv-edit-module"/>
//                         </a>
//                     </div>
//                 </div>
//             }
//             {
//                 (this.props.cur === this.state.module._id) &&
//                 <div className="wbdv-module-item-highlighted container-fluid">
//                     {
//                         !this.state.editing &&
//                         <div>
//                             <a className="wbdv-module-item-title btn">
//                                 {this.state.module.title}
//                             </a>
//                             <a className="wbdv-module-item-delete-btn btn" onClick={() => {this.toggle()}}>
//                                 <i className="fas fa-pencil-alt wbdv-edit-module"/>
//                             </a>
//                         </div>
//                     }
//                     {
//                         this.state.editing &&
//                         <div>
//                             <input onChange={(e)=>this.setState({
//                             module: {
//                                 ...this.state.module,
//                                 title: e.target.value
//                             }
//                         })}
//                             value={this.state.module.title}/>
//                             <div className="delete-and-save-btn">
//                                 <i className="fas fa-times btn" onClick={() => {
//                                      this.setState({editing: false})
//                                      this.props.deleteModule(this.state.module._id)
//                                 }}>
//                                 </i>
//                                 <i className="fas fa-check btn" onClick={
//                                     ()=>{
//                                         this.props.updateModule(this.state.module._id,this.state.module)
//                                             .then(status=>{})
//                                         this.setState({editing: false})
//                                     }
//                                 }
//                                 ></i>
//                             </div>
//                         </div>
//                     }
//                 </div>
//             }
//         </div>
//     )}
//
// }
//
// export default ModuleItemComponent