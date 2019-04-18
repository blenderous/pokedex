import React from 'react';

export class Pokemon extends React.Component {
    render() {
        return (
            <div>
                {/* display modal */}
                <div className={"modal fade bs-example-modal-sm" + this.props.id} tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div className="modal-dialog modal-sm" role="document">
                        <div className="modal-content">
                            <h4>{this.props.name}</h4>
                            <p>Type: {this.props.type.toString()}</p>
                            <p>Attack: {this.props.attack}</p>
                            <p>Defense: {this.props.defense}</p>
                        </div>
                    </div>
                </div>
                {/* edit modal */}
                <div className={"modal fade bs-example-modal-sm-edit" + this.props.id} tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div className="modal-dialog modal-sm" role="document">
                        <div className="modal-content">
                            <h4>Edit {this.props.name}</h4>
                            <form action="#">
                                <div className="form-group">
                                    <label>Type&nbsp;
                                        <input id="type" type="text" value={this.props.type.toString()}/>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label>Attack&nbsp;
                                        <input type="text" value={this.props.attack}/>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label>Defense&nbsp;
                                        <input type="text" value={this.props.defense}/>
                                    </label>
                                </div>
                                <div>
                                    <button className="btn btn-primary" type="submit">Save</button>
                                </div>                                
                            </form>
                        </div>
                    </div>
                </div>
                <div className="pokemon-container">
                    <p className="pokemon-name">
                        {this.props.name}
                    </p>
                    {/* know more button */}
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target={".bs-example-modal-sm" + this.props.id}>Know more</button>
                    {/* edit button */}
                    <button type="button" className="btn" data-toggle="modal" data-target={".bs-example-modal-sm-edit" + this.props.id}>Edit</button>
                </div>
            </div>
        )
    }
}