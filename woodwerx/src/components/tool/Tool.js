import React, { Component } from 'react'
import ToolCard from './ToolCard'
import './tool.css'

export default class Tool extends Component {
    render() {
        return (
            <div>
                <section className="tools">
                    {this.props.tools
                        .map(tool => (
                            <div key={tool.id} className="tool-card">
                                <ToolCard tool={tool} {...this.props} />
                            </div>
                        ))}
                </section>
            </div>
        )
    }
}
